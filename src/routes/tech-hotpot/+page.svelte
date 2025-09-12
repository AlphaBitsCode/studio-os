<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    // Helper functions moved to client-side
    function formatDate(dateString: string | null | undefined): string {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
    
    function getCategoryIcon(categoryTitle: string): string {
        const iconMap: Record<string, string> = {
            'Software': 'software',
            'Software Dev': 'software',
            'IoT News': 'iot',
            'Data & Analytics': 'data',
            'AI Workflow': 'ai',
            'Digital Transformation': 'dx',
            'AI in Education': 'education',
            'AI in Agriculture': 'agriculture',
            'AI in F&B': 'fb',
            'AI in Manufacturing': 'manufacturing',
            'Workflow Automation': 'ai'
        };
        return iconMap[categoryTitle] || 'software';
    }
    
    function calculateReadTime(content: string | null | undefined): number {
        if (!content) return 1;
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    }
    
    function getImageUrl(imageId: string | null | undefined): string {
        if (!imageId) return '/placeholder-image.jpg';
        // Use the public Directus URL for client-side image loading
        const directusUrl = 'https://kore.alphabits.team';
        return `${directusUrl}/assets/${imageId}?width=600&height=400&fit=cover&quality=80`;
    }
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    let mounted = false;
    
    // Use server-side data
    $: ({ categories, blogPostsByCategory, loading, error } = data);
    
    // Tech words for random display
    const techWords = ['Bits', 'Bytes', 'API', 'SaaS', 'A.I', 'Data', 'Code', 'IoT', 'DX', 'React', 'GCP', 'Docker', 'NodeRED', 'DB', 'SQL', 'GraphQL', 'Rust'];
    
    function getRandomWords(arr: string[], count: number) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    $: randomTechWords = getRandomWords(techWords, 5).join(', ');
    
    interface BlogPost {
        id: number;
        title: string;
        excerpt: string;
        category: string;
        tags: string[];
        author: string;
        readTime: number;
        publishedAt: string;
        thumbnail: string;
        featured: boolean;
    }
    
    import { onMount } from 'svelte';
    
    onMount(() => {
        mounted = true;
    });
    
    // Helper function to get category icon path
    function getCategoryIconPath(categoryTitle: string): string {
        const iconType = getCategoryIcon(categoryTitle);
        const iconMap: { [key: string]: string } = {
            'software': '/icons/icon_software.png',
            'iot': '/icons/icon_iot.png',
            'data': '/icons/icon_data.png',
            'ai': '/icons/icon_ai.png',
            'dx': '/icons/icon_dx.png',
            'education': '/icons/icon_ai.png',
            'agriculture': '/icons/icon_ai.png',
            'fb': '/icons/icon_ai.png',
            'manufacturing': '/icons/icon_ai.png'
        };
        return iconMap[iconType] || '/icons/icon_software.png';
    }
</script>

<svelte:head>
    <title>Tech Hotpot - AlphaBits Technology Hub</title>
    <meta name="description" content="Explore the latest in technology, AI, IoT, and digital transformation with AlphaBits Tech Hotpot." />
</svelte:head>

<!-- Animated Background -->
<div class="fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
    <!-- Floating particles -->
    <div class="absolute inset-0">
        {#each Array(20) as _, i}
            <div 
                class="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
                style="
                    left: {Math.random() * 100}%;
                    top: {Math.random() * 100}%;
                    animation-delay: {Math.random() * 5}s;
                    animation-duration: {3 + Math.random() * 4}s;
                "
            ></div>
        {/each}
    </div>
</div>

<!-- Header -->
<header class="relative z-10 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center space-x-4 mb-4">
            <!-- Tech Hotpot Logo - Intricate Design -->
            <div class="relative">
                <svg class="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Gradient Definitions -->
                    <defs>
                        <linearGradient id="potGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#f7931e;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#ff4500;stop-opacity:1" />
                        </linearGradient>
                        <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.8" />
                            <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.6" />
                            <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:0.4" />
                        </linearGradient>
                        <radialGradient id="circuitGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8" />
                            <stop offset="100%" style="stop-color:#059669;stop-opacity:0.3" />
                        </radialGradient>
                    </defs>
                    
                    <!-- Pot Shadow -->
                    <ellipse cx="50" cy="85" rx="25" ry="4" fill="#000000" opacity="0.2"/>
                    
                    <!-- Main Pot Body -->
                    <path d="M20 45 L80 45 L78 75 C78 78 75 80 72 80 L28 80 C25 80 22 78 22 75 Z" 
                          fill="url(#potGradient)" stroke="#d97706" stroke-width="1.5"/>
                    
                    <!-- Pot Rim -->
                    <ellipse cx="50" cy="45" rx="30" ry="3" fill="#ea580c" stroke="#9a3412" stroke-width="1"/>
                    
                    <!-- Left Handle -->
                    <path d="M15 40 C12 40 10 42 10 45 C10 48 12 50 15 50 L20 50 L20 45 L20 40 Z" 
                          fill="#92400e" stroke="#451a03" stroke-width="1.5"/>
                    
                    <!-- Right Handle -->
                    <path d="M85 40 C88 40 90 42 90 45 C90 48 88 50 85 50 L80 50 L80 45 L80 40 Z" 
                          fill="#92400e" stroke="#451a03" stroke-width="1.5"/>
                    
                    <!-- Tech Circuit Pattern Inside Pot -->
                    <g opacity="0.6">
                        <!-- Circuit Board Lines -->
                        <path d="M30 55 L35 55 L35 60 L40 60" stroke="url(#circuitGlow)" stroke-width="2" fill="none"/>
                        <path d="M60 55 L65 55 L65 60 L70 60" stroke="url(#circuitGlow)" stroke-width="2" fill="none"/>
                        <path d="M45 65 L55 65" stroke="url(#circuitGlow)" stroke-width="2" fill="none"/>
                        
                        <!-- Circuit Nodes -->
                        <circle cx="35" cy="55" r="2" fill="#10b981"/>
                        <circle cx="40" cy="60" r="2" fill="#10b981"/>
                        <circle cx="65" cy="55" r="2" fill="#10b981"/>
                        <circle cx="70" cy="60" r="2" fill="#10b981"/>
                        <circle cx="50" cy="65" r="2" fill="#10b981"/>
                        
                        <!-- Microchip Symbol -->
                        <rect x="47" y="57" width="6" height="6" fill="#374151" stroke="#10b981" stroke-width="1"/>
                        <rect x="48.5" y="58.5" width="3" height="3" fill="#10b981"/>
                    </g>
                    
                    <!-- Steam/Data Streams -->
                    <g class="animate-pulse">
                        <!-- Left Steam -->
                        <path d="M35 40 Q37 35 35 30 Q33 25 35 20 Q37 15 35 10" 
                              stroke="url(#steamGradient)" stroke-width="2.5" fill="none" 
                              class="animate-bounce" style="animation-delay: 0s"/>
                        
                        <!-- Center Steam -->
                        <path d="M50 40 Q52 35 50 30 Q48 25 50 20 Q52 15 50 10" 
                              stroke="url(#steamGradient)" stroke-width="3" fill="none" 
                              class="animate-bounce" style="animation-delay: 0.3s"/>
                        
                        <!-- Right Steam -->
                        <path d="M65 40 Q67 35 65 30 Q63 25 65 20 Q67 15 65 10" 
                              stroke="url(#steamGradient)" stroke-width="2.5" fill="none" 
                              class="animate-bounce" style="animation-delay: 0.6s"/>
                    </g>
                    
                    <!-- Digital Particles -->
                    <g class="animate-ping" style="animation-delay: 1s">
                        <circle cx="42" cy="25" r="1" fill="#3b82f6" opacity="0.8"/>
                        <circle cx="58" cy="18" r="1" fill="#10b981" opacity="0.8"/>
                        <circle cx="48" cy="12" r="1" fill="#f59e0b" opacity="0.8"/>
                    </g>
                    
                    <!-- Binary Code Floating -->
                    <g class="animate-pulse" style="animation-delay: 0.5s">
                        <text x="25" y="15" font-family="monospace" font-size="4" fill="#6b7280" opacity="0.7">101</text>
                        <text x="70" y="25" font-family="monospace" font-size="4" fill="#6b7280" opacity="0.7">010</text>
                        <text x="55" y="8" font-family="monospace" font-size="4" fill="#6b7280" opacity="0.7">110</text>
                    </g>
                    
                    <!-- Pot Lid (Optional Tech Element) -->
                    <ellipse cx="50" cy="42" rx="28" ry="2" fill="#dc2626" opacity="0.3"/>
                </svg>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-orange-600">
                TECH HOTPOT
            </h1>
        </div>

        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {randomTechWords}
        </p>
    </div>
</header>

<!-- Sticky Category Navigation -->
<nav class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center py-3">
            <div class="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
                {#each categories as category, index}
                    <a 
                        href="/tech-hotpot/all?category={encodeURIComponent(category.slug)}"
                        class="group flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105"
                        in:fly={{ y: -20, delay: index * 50, duration: 400 }}
                    >
                        <!-- Compact Category Icon -->
                        <div class="w-8 h-8 sm:w-10 sm:h-10 mb-1">
                            {#if getCategoryIcon(category.title) === 'software'}
                                <svg class="w-full h-full text-blue-500 group-hover:text-blue-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <rect x="8" y="12" width="48" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M16 20 L20 24 L16 28" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <line x1="24" y1="28" x2="32" y2="28" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'iot'}
                                <svg class="w-full h-full text-green-500 group-hover:text-green-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <circle cx="32" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="16" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="48" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="32" cy="52" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M32 26 L32 32 M26 20 L20 36 M38 20 L44 36 M32 32 L16 40 M32 32 L48 40 M32 32 L32 48" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'data'}
                                <svg class="w-full h-full text-purple-500 group-hover:text-purple-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <rect x="8" y="32" width="8" height="24" rx="2"/>
                                    <rect x="20" y="24" width="8" height="32" rx="2"/>
                                    <rect x="32" y="16" width="8" height="40" rx="2"/>
                                    <rect x="44" y="28" width="8" height="28" rx="2"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'ai'}
                                <svg class="w-full h-full text-red-500 group-hover:text-red-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="24" cy="24" r="3"/>
                                    <circle cx="40" cy="24" r="3"/>
                                    <circle cx="20" cy="36" r="2"/>
                                    <circle cx="44" cy="36" r="2"/>
                                    <circle cx="32" cy="44" r="2"/>
                                    <path d="M24 24 L20 36 M40 24 L44 36 M24 24 L32 44 M40 24 L32 44 M20 36 L32 44 M44 36 L32 44" stroke="currentColor" stroke-width="1"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'dx'}
                                <svg class="w-full h-full text-orange-500 group-hover:text-orange-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <circle cx="20" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M14 26 L26 38 M26 26 L14 38" stroke="currentColor" stroke-width="2"/>
                                    <rect x="40" y="20" width="16" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="44" cy="28" r="1"/>
                                    <circle cx="52" cy="28" r="1"/>
                                    <path d="M44 36 Q48 32 52 36" fill="none" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'education'}
                                <svg class="w-full h-full text-blue-500 group-hover:text-blue-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M32 8 L56 20 L32 32 L8 20 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M8 20 L8 44 L32 56 L56 44 L56 20" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M16 24 L16 40 L32 48 L48 40 L48 24" fill="none" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'agriculture'}
                                <svg class="w-full h-full text-green-500 group-hover:text-green-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M32 8 Q24 16 24 24 Q24 32 32 32 Q40 32 40 24 Q40 16 32 8" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <line x1="32" y1="32" x2="32" y2="56" stroke="currentColor" stroke-width="2"/>
                                    <path d="M20 40 Q26 36 32 40 Q38 36 44 40" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="16" cy="48" r="2"/>
                                    <circle cx="48" cy="48" r="2"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'fb'}
                                <svg class="w-full h-full text-orange-500 group-hover:text-orange-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <path d="M16 24 L48 24 L46 48 C46 50 44 52 42 52 L22 52 C20 52 18 50 18 48 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M12 20 C12 18 14 16 16 16 L16 24 L12 24 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M52 20 C52 18 50 16 48 16 L48 24 L52 24 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M24 20 Q26 16 24 12" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M32 20 Q34 16 32 12" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M40 20 Q42 16 40 12" fill="none" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {:else if getCategoryIcon(category.title) === 'manufacturing'}
                                <svg class="w-full h-full text-purple-500 group-hover:text-purple-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <rect x="8" y="32" width="48" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="20" cy="44" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="44" cy="44" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M32 8 L32 32" stroke="currentColor" stroke-width="2"/>
                                    <path d="M24 16 L40 16" stroke="currentColor" stroke-width="2"/>
                                    <path d="M28 12 L36 12" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {/if}
                        </div>
                        
                        <!-- Compact Category Name -->
                        <span class="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-center leading-tight">
                            {category.title.replace(' & ', '\n&\n').replace(' ', '\n')}
                        </span>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</nav>

<!-- Hero Section -->
<section class="relative py-8">
</section>

<!-- Latest Blog Posts Section -->
<section class="pb-16 bg-white/50 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {#if loading}
            <div class="flex justify-center items-center py-16">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span class="ml-3 text-gray-600">Loading blog posts...</span>
            </div>
        {:else if error}
            <div class="text-center py-16">
                <div class="text-red-500 mb-4">
                    <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                </div>
                <p class="text-gray-600">{error}</p>
                <a 
                    href="/tech-hotpot"
                    class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors inline-block"
                >
                    Refresh Page
                </a>
            </div>
        {:else}
            <!-- Blog Posts Grid by Category - 5 Columns Layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {#each categories as category, categoryIndex}
                    {@const categoryPosts = blogPostsByCategory[category.title] || []}
                    {#if categoryPosts.length > 0}
                        <div class="category-column" in:fly={{ x: -50, delay: categoryIndex * 100, duration: 600 }}>
                            <!-- Category Header -->
                            <div class="flex items-center mb-4">
                                <div class="w-8 h-8 mr-2">
                                    <img src="{getCategoryIconPath(category.title)}" alt="{category.title}" class="w-full h-full opacity-70" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-800">{category.title}</h3>
                                </div>
                            </div>
                            
                            <!-- Posts in Column (2 posts per category) -->
                            <div class="space-y-4">
                                {#each categoryPosts.slice(0, 2) as post, postIndex}
                                      <a 
                                          href="/tech-hotpot/{post.slug}"
                                          class="block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer"
                                          in:fly={{ y: 20, delay: (categoryIndex * 100) + (postIndex * 50), duration: 400 }}
                                      >
                                         <!-- Post Thumbnail -->
                                         <div class="h-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                             <img 
                                                 src="{getImageUrl(post.image)}" 
                                                 alt="{post.title}" 
                                                 class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                 loading="lazy"
                                             />
                                         </div>
                                        
                                        <!-- Post Content -->
                                         <div class="p-4">
                                             <!-- Meta Information -->
                                             <div class="flex items-center justify-between mb-2">
                                                 <span class="text-xs text-gray-500">
                                                     {calculateReadTime(post.content)} min read
                                                 </span>
                                                 <span class="text-xs text-gray-500">
                                                     {formatDate(post.date_published || post.date_created)}
                                                 </span>
                                             </div>
                                             
                                             <!-- Post Title -->
                                               <h4 class="text-sm font-semibold mb-2 line-clamp-2 text-gray-800">
                                                   {post.title}
                                               </h4>
                                             
                                             <!-- Post Excerpt -->
                                             <p class="text-gray-600 text-xs mb-3 line-clamp-2">
                                                 {post.summary || ''}
                                             </p>
                                            
                                            <!-- Author -->
                                              <div class="flex items-center justify-between">
                                                  <div class="flex items-center space-x-1">
                                                      <div class="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                          <span class="text-white text-xs font-semibold">
                                                               AB
                                                           </span>
                                                      </div>
                                                      <span class="text-xs text-gray-600">Alpha Bits</span>
                                                  </div>
                                                 
                                                 <span class="text-blue-600 font-medium text-xs flex items-center space-x-1">
                                                       <span>Read</span>
                                                       <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                                       </svg>
                                                   </span>
                                             </div>
                                        </div>
                                    </a>
                                {/each}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
            
            <div class="text-center mt-12">
                <a 
                    href="/tech-hotpot/all"
                    class="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span>View All Posts</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        {/if}
    </div>
</section>

<style>
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(120deg); }
        66% { transform: translateY(5px) rotate(240deg); }
    }
    
    .animate-float {
        animation: float 6s ease-in-out infinite;
    }
</style>