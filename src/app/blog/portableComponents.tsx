import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";

import { urlForImage } from "@/sanity/lib/image";

export const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1280).fit("max").url();
      return (
        <figure className="article-img">
          <Image
            src={url}
            alt={value.alt || ""}
            width={1280}
            height={720}
            sizes="(max-width: 760px) 100vw, 720px"
          />
          {value.alt && <figcaption>{value.alt}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
};
