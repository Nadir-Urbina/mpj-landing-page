"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Like button for a blog post. The count is fetched on mount rather than
 * server-rendered, because post pages are ISR-cached and a baked-in count
 * would be stale.
 */
const LikeButton = ({ slug }: { slug: string }) => {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/likes/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        setCount(data.count ?? 0);
        setLiked(Boolean(data.liked));
        setEnabled(data.enabled !== false);
      })
      .catch(() => active && setEnabled(false));
    return () => {
      active = false;
    };
  }, [slug]);

  const like = useCallback(async () => {
    if (liked || pending) return;
    setPending(true);
    // Optimistic: reflect the click immediately, reconcile with the server after.
    setLiked(true);
    setCount((c) => (c ?? 0) + 1);
    try {
      const res = await fetch(`/api/likes/${slug}`, { method: "POST" });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setCount(data.count);
      setLiked(Boolean(data.liked));
    } catch {
      setLiked(false);
      setCount((c) => (c === null ? null : Math.max(0, c - 1)));
    } finally {
      setPending(false);
    }
  }, [liked, pending, slug]);

  if (!enabled) return null;

  return (
    <div className="like-row">
      <button
        type="button"
        className={`like-btn${liked ? " liked" : ""}`}
        onClick={like}
        disabled={liked || pending}
        aria-pressed={liked}
        aria-label={liked ? "You found this encouraging" : "Mark this as encouraging"}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 20.3s-6.7-4.2-9-8.2C1.2 8.9 2.6 5.4 5.8 4.5c2-.6 3.9.2 5 1.7l1.2 1.6 1.2-1.6c1.1-1.5 3-2.3 5-1.7 3.2.9 4.6 4.4 2.8 7.6-2.3 4-9 8.2-9 8.2Z"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
        <span>{liked ? "Encouraged" : "Encouraging"}</span>
      </button>
      <span className="like-count">
        {count === null ? " " : `${count} ${count === 1 ? "person" : "people"} found this encouraging`}
      </span>
    </div>
  );
};

export default LikeButton;
