import type { Metadata } from "next";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import BlogCard from "@/app/components/BlogCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsQuery, type PostCard } from "@/sanity/lib/queries";
import { pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const revalidate = 60;

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang).blog;
  return {
    title: t.metaTitle,
    alternates: pageAlternates(lang, "/blog"),
    description: t.metaDescription,
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang).blog;
  const posts = await sanityFetch<PostCard[]>(allPostsQuery, { lang }, []);

  return (
    <div className="mpj">
      <Header locale={lang} />

      <section className="page-hero">
        <div className="mpj-container">
          <div className="eyebrow on-dark">{t.eyebrow}</div>
          <h1>{t.title}</h1>
          <p>{t.sub}</p>
        </div>
      </section>

      <section className="blog section-pad">
        <div className="mpj-container">
          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map((post, i) => (
                <BlogCard key={post._id} post={post} index={i} locale={lang} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <h2>{t.emptyTitle}</h2>
              <p>{t.emptyBody}</p>
            </div>
          )}
        </div>
      </section>

      <Footer locale={lang} />
      <ScrollReveal />
    </div>
  );
}
