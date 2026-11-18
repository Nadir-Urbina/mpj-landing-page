import Link from "next/link";

import BlogCard from "./BlogCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsQuery, type PostCard } from "@/sanity/lib/queries";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const DELAYS = ["", "d1", "d2"];

const BlogSection = async ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).blog;
  const posts = await sanityFetch<PostCard[]>(latestPostsQuery, { limit: 3, lang: locale }, []);
  const blogHref = localePath(locale, "/blog");

  return (
    <section className="blog section-pad" id="blog">
      <div className="mpj-container">
        <div className="section-head reveal">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.title}</h2>
          <p>{t.sub}</p>
        </div>

        <div className="blog-grid">
          {posts.length > 0
            ? posts.map((post, i) => <BlogCard key={post._id} post={post} index={i} locale={locale} />)
            : /* Shown before any posts exist in Sanity (keeps the section from looking empty). */
              t.placeholders.map((post, i) => (
                <Link key={post.title} href={blogHref} className={`blog-card reveal ${DELAYS[i]}`.trim()}>
                  <div className={`blog-thumb${i === 1 ? " warm" : ""}`}>
                    <span className="blog-cat">{t.categories[post.cat] ?? post.cat}</span>
                    <span className="ph-label">article-image.jpg</span>
                  </div>
                  <div className="blog-body">
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <span className="read-more">{t.readMore}</span>
                  </div>
                </Link>
              ))}
        </div>

        {posts.length > 0 && (
          <div className="blog-all reveal">
            <Link href={blogHref} className="read-more">
              {t.viewAll}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
