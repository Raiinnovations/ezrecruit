import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '8lre8jts',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Sanity types
export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any[]; // Portable Text
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: any;
}

// Query to fetch all blog posts
export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  content,
  author,
  publishedAt,
  readTime,
  category,
  image
}`;

// Query to fetch a single blog post by slug
export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  author,
  publishedAt,
  readTime,
  category,
  image
}`;
