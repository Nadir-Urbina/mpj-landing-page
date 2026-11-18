import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";
import type { PostCard } from "@/sanity/lib/queries";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const DELAYS = ["", "d1", "d2"];

const BlogCard = ({ post, index = 0, locale }: { post: PostCard; index?: number; locale: Locale }) => {
  const t = getDictionary(locale).blog;
  const warm = index % 3 === 1;
  const delay = DELAYS[index % 3];
  const img = post.coverImage
    ? urlForImage(post.coverImage).width(760).height(440).fit("crop").url()
    : null;
  const otherLanguage = post.language !== locale;

  return (
    <Link href={localePath(locale, `/blog/${post.slug}`)} className={`blog-card reveal ${delay}`.trim()}>
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
        {post.category && <span className="blog-cat">{t.categories[post.category] ?? post.category}</span>}
      </div>
      <div className="blog-body">
        {otherLanguage && t.otherLanguageTag && (
          <span className="blog-lang-tag" lang={post.language}>{t.otherLanguageTag}</span>
        )}
        <h3 lang={otherLanguage ? post.language : undefined}>{post.title}</h3>
        {post.excerpt && <p lang={otherLanguage ? post.language : undefined}>{post.excerpt}</p>}
        <span className="read-more">{t.readMore}</span>
      </div>
    </Link>
  );
};

export default BlogCard;
