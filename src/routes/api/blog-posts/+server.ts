import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { readFileSync } from 'fs';
import { join } from 'path';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  readTime: number;
  publishedAt: string;
  thumbnail: string;
  featured: boolean;
  layout: string;
  seo: {
    metaDescription: string;
    keywords: string[];
  };
}

interface BlogData {
  posts: BlogPost[];
}

export const GET: RequestHandler = async ({ url }) => {
  try {
    // Read the blog posts JSON file
    const blogDataPath = join(process.cwd(), 'static', 'data', 'blog-posts.json');
    const blogDataRaw = readFileSync(blogDataPath, 'utf-8');
    const blogData: BlogData = JSON.parse(blogDataRaw);
    
    // Get query parameters
    const category = url.searchParams.get('category');
    const limit = url.searchParams.get('limit');
    const featured = url.searchParams.get('featured');
    const slug = url.searchParams.get('slug');
    
    // If slug is provided, return single post
    if (slug) {
      const post = blogData.posts.find(p => p.slug === slug);
      if (!post) {
        return json(
          { error: 'Blog post not found' },
          { status: 404 }
        );
      }
      return json({ post });
    }
    
    let filteredPosts = [...blogData.posts];
    
    // Filter by category if specified
    if (category) {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by featured if specified
    if (featured === 'true') {
      filteredPosts = filteredPosts.filter(post => post.featured);
    }
    
    // Sort by published date (newest first)
    filteredPosts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    // Apply limit if specified
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredPosts = filteredPosts.slice(0, limitNum);
      }
    }
    
    return json({
      posts: filteredPosts,
      total: blogData.posts.length,
      filtered: filteredPosts.length
    });
    
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return json(
      { error: 'Failed to load blog posts' },
      { status: 500 }
    );
  }
};

// Helper endpoint to get posts by category with specific limits
export const POST: RequestHandler = async ({ request }) => {
  try {
    const { categories } = await request.json();
    
    if (!Array.isArray(categories)) {
      return json(
        { error: 'Categories must be an array' },
        { status: 400 }
      );
    }
    
    const blogDataPath = join(process.cwd(), 'static', 'data', 'blog-posts.json');
    const blogDataRaw = readFileSync(blogDataPath, 'utf-8');
    const blogData: BlogData = JSON.parse(blogDataRaw);
    
    const result: { [key: string]: BlogPost[] } = {};
    
    // Get latest 2 posts from each requested category
    categories.forEach(category => {
      const categoryPosts = blogData.posts
        .filter(post => post.category.toLowerCase() === category.toLowerCase())
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 2);
      
      result[category] = categoryPosts;
    });
    
    return json(result);
    
  } catch (error) {
    console.error('Error loading categorized blog posts:', error);
    return json(
      { error: 'Failed to load categorized blog posts' },
      { status: 500 }
    );
  }
};