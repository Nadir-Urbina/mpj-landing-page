import type { Metadata } from "next";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import BlogCard from "../components/BlogCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsQuery, type PostCard } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical encouragement for believers who take God's voice seriously — on dreams, discernment, and growing in your prophetic gifting.",
};

export default async function BlogIndexPage() {
  const posts = await sanityFetch<PostCard[]>(allPostsQuery, {}, []);

  return (
    <div className="mpj">
      <Header />

      <section className="page-hero">
        <div className="mpj-container">
          <div className="eyebrow on-dark">From the journal</div>
          <h1>Grow in your gifting.</h1>
          <p>Practical encouragement for believers who take God&apos;s voice seriously.</p>
        </div>
      </section>

      <section className="blog section-pad">
        <div className="mpj-container">
          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map((post, i) => (
                <BlogCard key={post._id} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <h2>No posts yet</h2>
              <p>
                We&apos;re writing the first articles now — check back soon for encouragement on
                dreams, discernment, and prophetic growth.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollReveal />
    </div>
  );
}
