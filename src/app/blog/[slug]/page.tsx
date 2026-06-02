import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import { portableComponents } from "../portableComponents";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import {
  postBySlugQuery,
  postSlugsQuery,
  type Post,
} from "@/sanity/lib/queries";

export const revalidate = 60;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(postSlugsQuery, {}, []);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>(postBySlugQuery, { slug }, null);
  if (!post) return { title: "Post not found — My Prophetic Journal" };

  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title: `${post.title} — My Prophetic Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>(postBySlugQuery, { slug }, null);

  if (!post) notFound();

  const cover = post.coverImage
    ? urlForImage(post.coverImage).width(1280).height(640).fit("crop").url()
    : null;

  return (
    <div className="mpj">
      <Header />

      <section className="page-hero">
        <div className="mpj-container">
          <Link href="/blog" className="back-link">
            ← Back to the journal
          </Link>
          {post.category && <div className="eyebrow on-dark">{post.category}</div>}
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            {post.author && <span>{post.author}</span>}
            {post.author && <span aria-hidden="true">·</span>}
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
        </div>
      </section>

      <section className="article-wrap section-pad">
        <div className="mpj-container">
          <article className="article">
            {cover && (
              <div className="article-cover">
                <Image
                  src={cover}
                  alt={post.coverImage?.alt || post.title}
                  width={1280}
                  height={640}
                  sizes="(max-width: 760px) 100vw, 720px"
                  priority
                />
              </div>
            )}
            {post.excerpt && <p className="article-lead">{post.excerpt}</p>}
            {post.body && (
              <PortableText value={post.body} components={portableComponents} />
            )}
          </article>
        </div>
      </section>

      <Footer />
      <ScrollReveal />
    </div>
  );
}
