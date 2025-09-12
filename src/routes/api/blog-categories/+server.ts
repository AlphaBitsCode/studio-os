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

interface CategoryInfo {
  name: string;
  description: string;
  icon: string;
  color: string;
  postCount: number;
}

// Helper function to get category icon based on category name
function getCategoryIcon(category: string): string {
  const iconMap: { [key: string]: string } = {
    'AI Workflow': 'ai',
    'AI in Education': 'education',
    'AI in Agriculture': 'agriculture', 
    'AI in F&B': 'fb',
    'AI in Manufacturing': 'manufacturing',
    'Software': 'software',
    'IoT News': 'iot',
    'Data & Analytics': 'data',
    'Digital Transformation': 'dx'
  };
  return iconMap[category] || 'software';
}

// Helper function to get category color
function getCategoryColor(category: string): string {
  const colorMap: { [key: string]: string } = {
    'AI Workflow': 'red',
    'AI in Education': 'blue',
    'AI in Agriculture': 'green',
    'AI in F&B': 'orange',
    'AI in Manufacturing': 'purple',
    'Software': 'blue',
    'IoT News': 'green',
    'Data & Analytics': 'purple',
    'Digital Transformation': 'orange'
  };
  return colorMap[category] || 'blue';
}

// Helper function to get category description
function getCategoryDescription(category: string): string {
  const descriptionMap: { [key: string]: string } = {
    'AI Workflow': 'Discover artificial intelligence and automated workflow solutions.',
    'AI in Education': 'Explore AI applications in educational technology and learning.',
    'AI in Agriculture': 'Learn about AI innovations in farming and agricultural technology.',
    'AI in F&B': 'Discover AI solutions for food and beverage industry operations.',
    'AI in Manufacturing': 'Explore AI applications in manufacturing and industrial processes.',
    'Software': 'Dive into the world of coding, frameworks, and innovative applications.',
    'IoT News': 'Stay updated with the latest in Internet of Things and connected devices.',
    'Data & Analytics': 'Explore data science, analytics, and business intelligence insights.',
    'Digital Transformation': 'Learn about modernizing businesses through digital innovation.'
  };
  return descriptionMap[category] || 'Explore the latest technology insights and innovations.';
}

// GET endpoint to fetch unique categories with metadata
export const GET: RequestHandler = async () => {
  try {
    const blogDataPath = join(process.cwd(), 'static', 'data', 'blog-posts.json');
    const blogDataRaw = readFileSync(blogDataPath, 'utf-8');
    const blogData: BlogData = JSON.parse(blogDataRaw);
    
    // Get unique categories and count posts for each
    const categoryCount: { [key: string]: number } = {};
    
    blogData.posts.forEach(post => {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
    });
    
    // Create category info objects
    const categories: CategoryInfo[] = Object.keys(categoryCount).map(categoryName => ({
      name: categoryName,
      description: getCategoryDescription(categoryName),
      icon: getCategoryIcon(categoryName),
      color: getCategoryColor(categoryName),
      postCount: categoryCount[categoryName]
    }));
    
    // Sort categories by post count (descending) then by name
    categories.sort((a, b) => {
      if (b.postCount !== a.postCount) {
        return b.postCount - a.postCount;
      }
      return a.name.localeCompare(b.name);
    });
    
    return json(categories);
    
  } catch (error) {
    console.error('Error loading blog categories:', error);
    return json(
      { error: 'Failed to load blog categories' },
      { status: 500 }
    );
  }
};