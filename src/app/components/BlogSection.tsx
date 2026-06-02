import Link from "next/link";

import BlogCard from "./BlogCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsQuery, type PostCard } from "@/sanity/lib/queries";

/** Shown before any posts exist in Sanity (keeps the section from looking empty). */
const PLACEHOLDERS = [
  {
    cat: "Dreams",
    warm: false,
    delay: "",
    title: "How to remember a dream before it fades",
    desc: "Five simple habits that help you hold onto what you saw in the night.",
  },
  {
    cat: "Discernment",
    warm: true,
    delay: "d1",
    title: "Testing a prophetic word with wisdom",
    desc: "A grounded, biblical way to weigh what you've heard without fear.",
  },
  {
    cat: "Prophetic Growth",
    warm: false,
    delay: "d2",
    title: "Why writing it down changes everything",
    desc: "What happens in your faith when you finally keep a record of God's voice.",
  },
];

const BlogSection = async () => {
  const posts = await sanityFetch<PostCard[]>(latestPostsQuery, { limit: 3 }, []);

  return (
    <section className="blog section-pad" id="blog">
      <div className="mpj-container">
        <div className="section-head reveal">
          <div className="eyebrow">From the journal</div>
          <h2>Grow in your gifting.</h2>
          <p>Practical encouragement for believers who take God&apos;s voice seriously.</p>
        </div>

        <div className="blog-grid">
          {posts.length > 0
            ? posts.map((post, i) => <BlogCard key={post._id} post={post} index={i} />)
            : PLACEHOLDERS.map((post) => (
                <Link key={post.title} href="/blog" className={`blog-card reveal ${post.delay}`.trim()}>
                  <div className={`blog-thumb${post.warm ? " warm" : ""}`}>
                    <span className="blog-cat">{post.cat}</span>
                    <span className="ph-label">article-image.jpg</span>
                  </div>
                  <div className="blog-body">
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <span className="read-more">Read More →</span>
                  </div>
                </Link>
              ))}
        </div>

        {posts.length > 0 && (
          <div className="blog-all reveal">
            <Link href="/blog" className="read-more">
              View all articles →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
