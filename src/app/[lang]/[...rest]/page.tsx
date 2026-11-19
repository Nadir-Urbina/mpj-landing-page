import { notFound } from "next/navigation";

/**
 * Unknown URLs land here (the middleware maps /anything to /en/anything), so
 * they get the localized not-found page inside the site layout.
 */
export default function CatchAll() {
  notFound();
}
