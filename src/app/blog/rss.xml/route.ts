import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsQuery, type PostCard } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { SITE_URL } from "@/app/lib/links";

// Re-generate at most every 10 minutes; Mailchimp polls the feed on its own
// (typically daily), so this is plenty fresh.
export const revalidate = 600;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cdata(value: string): string {
  // Guard against an accidental "]]>" inside the content.
  return `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

function itemXml(post: PostCard): string {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).fit("crop").url()
    : null;

  const parts = [
    `      <title>${escapeXml(post.title)}</title>`,
    `      <link>${escapeXml(url)}</link>`,
    `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
    `      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
  ];
  if (post.author) parts.push(`      <dc:creator>${cdata(post.author)}</dc:creator>`);
  if (post.category) parts.push(`      <category>${escapeXml(post.category)}</category>`);
  if (post.excerpt) {
    parts.push(`      <description>${cdata(post.excerpt)}</description>`);
    parts.push(`      <content:encoded>${cdata(`<p>${post.excerpt}</p>`)}</content:encoded>`);
  }
  if (imageUrl) {
    parts.push(`      <media:content url="${escapeXml(imageUrl)}" medium="image" />`);
    parts.push(`      <media:thumbnail url="${escapeXml(imageUrl)}" />`);
    parts.push(`      <enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" length="0" />`);
  }

  return `    <item>\n${parts.join("\n")}\n    </item>`;
}

export async function GET() {
  const posts = await sanityFetch<PostCard[]>(allPostsQuery, {}, []);

  const feedUrl = `${SITE_URL}/blog/rss.xml`;
  const items = posts.map(itemXml).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>My Prophetic Journal — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical encouragement for believers who take God's voice seriously — on dreams, discernment, and growing in your prophetic gifting.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
