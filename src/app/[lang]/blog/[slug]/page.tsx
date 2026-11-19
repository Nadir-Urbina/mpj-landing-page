import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import LikeButton from "@/app/components/LikeButton";
import { portableComponents } from "../portableComponents";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import {
  postBySlugQuery,
  postSlugsQuery,
  type Post,
} from "@/sanity/lib/queries";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const revalidate = 60;

type Props = { params: Promise<{ lang: Locale; slug: string }> };

const formatDate = (iso: string, dateLocale: string) =>
  new Date(iso).toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Every post is pre-rendered under both languages: a Spanish-browser visitor
// following a link to an English post lands on /es/blog/<slug> (Spanish site
// chrome, a note that the article is in English, canonical to the original).
export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(postSlugsQuery, {}, []);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = await sanityFetch<Post | null>(postBySlugQuery, { slug }, null);
  if (!post) return { title: getDictionary(lang).blog.notFound };

  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    // Absolute: post titles are long enough that the site-name template would
    // push them past Google's ~60-character display limit.
    title: { absolute: post.title },
    description: post.excerpt,
    // Canonical is always the post's own language, so the copy shown under the
    // other language's chrome isn't indexed as a duplicate.
    alternates: { canonical: localePath(post.language, `/blog/${slug}`) },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { lang, slug } = await params;
  const t = getDictionary(lang).blog;
  const post = await sanityFetch<Post | null>(postBySlugQuery, { slug }, null);

  if (!post) notFound();
  const otherLanguage = post.language !== lang;

  // `fit("max")` scales down without cropping, so the whole cover is always
  // visible whatever aspect ratio was uploaded. Fall back to 2:1 for older
  // posts whose asset metadata isn't available.
  const cover = post.coverImage
    ? urlForImage(post.coverImage).width(1440).fit("max").url()
    : null;
  const coverWidth = post.coverDimensions?.width ?? 1280;
  const coverHeight = post.coverDimensions?.height ?? 640;

  return (
    <div className="mpj">
      <Header locale={lang} />

      <section className="page-hero">
        <div className="mpj-container">
          <Link href={localePath(lang, "/blog")} className="back-link">
            {t.back}
          </Link>
          {post.category && (
            <div className="eyebrow on-dark">{t.categories[post.category] ?? post.category}</div>
          )}
          <h1 className="post-title" lang={otherLanguage ? post.language : undefined}>
            {post.title}
          </h1>
          <div className="post-meta">
            {post.author && <span>{post.author}</span>}
            {post.author && <span aria-hidden="true">·</span>}
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, t.dateLocale)}</time>
          </div>
        </div>
      </section>

      <section className="article-wrap section-pad">
        <div className="mpj-container">
          <article className="article" lang={otherLanguage ? post.language : undefined}>
            {otherLanguage && t.otherLanguageNote && (
              <p className="post-lang-note" lang={lang}>{t.otherLanguageNote}</p>
            )}
            {cover && (
              <div className="article-cover">
                <Image
                  src={cover}
                  alt={post.coverImage?.alt || post.title}
                  width={coverWidth}
                  height={coverHeight}
                  sizes="(max-width: 760px) 100vw, 720px"
                  priority
                />
              </div>
            )}
            {post.excerpt && <p className="article-lead">{post.excerpt}</p>}
            {post.body && (
              <PortableText value={post.body} components={portableComponents} />
            )}
            <LikeButton slug={slug} locale={lang} />
          </article>
        </div>
      </section>

      <Footer locale={lang} />
      <ScrollReveal />
    </div>
  );
}
