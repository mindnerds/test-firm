import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "9iuld21r",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const POST_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  author,
  categories,
  content
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  author,
  categories,
  content
}`;
