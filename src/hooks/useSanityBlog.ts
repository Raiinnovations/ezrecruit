import { useQuery } from '@tanstack/react-query';
import { sanityClient, blogPostsQuery, blogPostBySlugQuery, SanityBlogPost, urlFor } from '@/lib/sanity';
import { blogPosts as staticBlogPosts, BlogPost } from '@/data/blogPosts';

// Transform Sanity post to match existing BlogPost interface
function transformSanityPost(post: SanityBlogPost): BlogPost {
  return {
    id: post.slug.current,
    title: post.title,
    excerpt: post.excerpt || '',
    content: portableTextToHtml(post.content),
    author: post.author || 'EzRecruit Team',
    date: post.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
    readTime: post.readTime || '5 min read',
    category: post.category || 'General',
    image: post.image ? urlFor(post.image).width(800).height(400).url() : '',
  };
}

// Simple Portable Text to HTML converter
function portableTextToHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  
  return blocks.map(block => {
    if (block._type !== 'block') return '';
    
    const style = block.style || 'normal';
    const children = block.children?.map((child: any) => {
      let text = child.text || '';
      if (child.marks?.includes('strong')) text = `<strong>${text}</strong>`;
      if (child.marks?.includes('em')) text = `<em>${text}</em>`;
      return text;
    }).join('') || '';
    
    switch (style) {
      case 'h1': return `<h1>${children}</h1>`;
      case 'h2': return `<h2>${children}</h2>`;
      case 'h3': return `<h3>${children}</h3>`;
      case 'h4': return `<h4>${children}</h4>`;
      case 'blockquote': return `<blockquote>${children}</blockquote>`;
      default: return `<p>${children}</p>`;
    }
  }).join('\n');
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async (): Promise<BlogPost[]> => {
      try {
        const posts = await sanityClient.fetch<SanityBlogPost[]>(blogPostsQuery);
        if (posts && posts.length > 0) {
          return posts.map(transformSanityPost);
        }
        // Fallback to static posts if Sanity returns empty
        return staticBlogPosts;
      } catch (error) {
        console.error('Error fetching from Sanity, using static posts:', error);
        return staticBlogPosts;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async (): Promise<BlogPost | null> => {
      try {
        const post = await sanityClient.fetch<SanityBlogPost>(blogPostBySlugQuery, { slug });
        if (post) {
          return transformSanityPost(post);
        }
        // Fallback to static post
        const staticPost = staticBlogPosts.find(p => p.id === slug);
        return staticPost || null;
      } catch (error) {
        console.error('Error fetching from Sanity, using static post:', error);
        const staticPost = staticBlogPosts.find(p => p.id === slug);
        return staticPost || null;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
