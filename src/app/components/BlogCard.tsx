import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";
import type { PostCard } from "@/sanity/lib/queries";

const DELAYS = ["", "d1", "d2"];

const BlogCard = ({ post, index = 0 }: { post: PostCard; index?: number }) => {
  const warm = index % 3 === 1;
  const delay = DELAYS[index % 3];
  const img = post.coverImage
    ? urlForImage(post.coverImage).width(760).height(440).fit("crop").url()
    : null;

  return (
    <Link href={`/blog/${post.slug}`} className={`blog-card reveal ${delay}`.trim()}>
      <div className={`blog-thumb${warm ? " warm" : ""}`}>
        {img ? (
          <Image
            src={img}
            alt={post.coverImage?.alt || post.title}
            fill
            sizes="(max-width: 920px) 100vw, 380px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <span className="ph-label">article-image.jpg</span>
        )}
        {post.category && <span className="blog-cat">{post.category}</span>}
      </div>
      <div className="blog-body">
        <h3>{post.title}</h3>
        {post.excerpt && <p>{post.excerpt}</p>}
        <span className="read-more">Read More →</span>
      </div>
    </Link>
  );
};

export default BlogCard;
