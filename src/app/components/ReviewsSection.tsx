import { sanityFetch } from "@/sanity/lib/fetch";
import { testimonialsQuery, type Testimonial } from "@/sanity/lib/queries";
import ReviewsMarquee from "./ReviewsMarquee";

/** Shown until testimonials are added in Sanity. */
const FALLBACK: Testimonial[] = [
  {
    _id: "f1",
    quote: "Finally something to help keep track of dreams, visions, and prophetic words",
    name: "Jtmoneyclipz",
    source: "App Store",
    rating: 5,
  },
  {
    _id: "f2",
    quote: "I never thought technology could be a bridge deeper into God's heart",
    name: "wandering.wildflower",
    source: "App Store",
    rating: 5,
  },
  {
    _id: "f3",
    quote:
      "I used to just have random notes in my phone by date — the features of categorizing and analyzing to show patterns is next level",
    name: "azecp",
    source: "App Store",
    rating: 5,
  },
];

const ReviewsSection = async () => {
  const fetched = await sanityFetch<Testimonial[]>(testimonialsQuery, {}, []);
  const reviews = fetched.length > 0 ? fetched : FALLBACK;

  return (
    <section className="reviews section-pad">
      <div className="mpj-container">
        <div className="section-head reveal">
          <div className="eyebrow">From the people using it</div>
          <h2>What believers are saying.</h2>
        </div>
      </div>

      <ReviewsMarquee reviews={reviews} />
    </section>
  );
};

export default ReviewsSection;
