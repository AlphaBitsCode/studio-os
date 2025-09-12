<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    let mounted = false;
    let blogPostsByCategory: { [key: string]: any[] } = {};
    let loading = true;
    let error = '';
    
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
    
    // Fetch blog posts from API
    async function fetchBlogPosts() {
        try {
            loading = true;
            const categories = ['Software', 'IoT News', 'Data & Analytics', 'AI Workflow', 'Digital Transformation'];
            
            const response = await fetch('/api/blog-posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ categories })
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch blog posts');
            }
            
            blogPostsByCategory = await response.json();
            error = '';
        } catch (err) {
            console.error('Error fetching blog posts:', err);
            error = 'Failed to load blog posts. Please try again later.';
            // Fallback to empty data
            blogPostsByCategory = {};
        } finally {
            loading = false;
        }
    }
    
    const categories = [
        {
            name: "Software",
            description: "Dive into the world of coding, frameworks, and innovative applications.",
            icon: "software",
            color: "blue"
        },
        {
            name: "IoT News",
            description: "Stay updated with the latest in Internet of Things and connected devices.",
            icon: "iot",
            color: "green"
        },
        {
            name: "Data & Analytics",
            description: "Explore data science, analytics, and business intelligence insights.",
            icon: "data",
            color: "purple"
        },
        {
            name: "AI Workflow",
            description: "Discover artificial intelligence and automated workflow solutions.",
            icon: "ai",
            color: "red"
        },
        {
            name: "Digital Transformation",
            description: "Learn about modernizing businesses through digital innovation.",
            icon: "dx",
            color: "orange"
        }
    ];
    
    onMount(() => {
        mounted = true;
        fetchBlogPosts();
    });
    
    // Helper function to get category icon
    function getCategoryIcon(category: string) {
        const iconMap: { [key: string]: string } = {
            'Software': '/icons/icon_software.png',
            'IoT News': '/icons/icon_iot.png',
            'Data & Analytics': '/icons/icon_data.png',
            'AI Workflow': '/icons/icon_ai.png',
            'Digital Transformation': '/icons/icon_dx.png'
        };
        return iconMap[category] || '/icons/icon_software.png';
    }
    
    // Helper function to format date
    function formatDate(dateString: string) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
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
            <!-- Tech Hotpot Logo -->
            <div class="relative">
                <svg class="w-16 h-16 text-orange-500 animate-pulse" viewBox="0 0 64 64" fill="currentColor">
                    <!-- Pot base -->
                    <path d="M12 32 L52 32 L50 52 C50 54 48 56 46 56 L18 56 C16 56 14 54 14 52 Z" />
                    <!-- Pot handles -->
                    <path d="M8 28 C8 26 10 24 12 24 L12 32 L8 32 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                    <path d="M56 28 C56 26 54 24 52 24 L52 32 L56 32 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                    <!-- Steam/Circuit lines -->
                    <path d="M20 24 Q22 20 20 16 Q18 12 20 8" fill="none" stroke="currentColor" stroke-width="2" class="animate-bounce"/>
                    <path d="M32 24 Q34 20 32 16 Q30 12 32 8" fill="none" stroke="currentColor" stroke-width="2" class="animate-bounce" style="animation-delay: 0.5s"/>
                    <path d="M44 24 Q46 20 44 16 Q42 12 44 8" fill="none" stroke="currentColor" stroke-width="2" class="animate-bounce" style="animation-delay: 1s"/>
                </svg>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                TECH HOTPOT
            </h1>
        </div>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Some code, some insights, and some ideas.
        </p>
    </div>
</header>

<!-- Sticky Category Navigation -->
<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center py-3">
            <div class="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
                {#each categories as category, index}
                    <a 
                        href="/tech-hotpot/all?category={encodeURIComponent(category.name)}"
                        class="group flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105"
                        in:fly={{ y: -20, delay: index * 50, duration: 400 }}
                    >
                        <!-- Compact Category Icon -->
                        <div class="w-8 h-8 sm:w-10 sm:h-10 mb-1">
                            {#if category.icon === 'software'}
                                <svg class="w-full h-full text-blue-500 group-hover:text-blue-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <rect x="8" y="12" width="48" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M16 20 L20 24 L16 28" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <line x1="24" y1="28" x2="32" y2="28" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {:else if category.icon === 'iot'}
                                <svg class="w-full h-full text-green-500 group-hover:text-green-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <circle cx="32" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="16" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="48" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="32" cy="52" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M32 26 L32 32 M26 20 L20 36 M38 20 L44 36 M32 32 L16 40 M32 32 L48 40 M32 32 L32 48" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {:else if category.icon === 'data'}
                                <svg class="w-full h-full text-purple-500 group-hover:text-purple-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <rect x="8" y="32" width="8" height="24" rx="2"/>
                                    <rect x="20" y="24" width="8" height="32" rx="2"/>
                                    <rect x="32" y="16" width="8" height="40" rx="2"/>
                                    <rect x="44" y="28" width="8" height="28" rx="2"/>
                                </svg>
                            {:else if category.icon === 'ai'}
                                <svg class="w-full h-full text-red-500 group-hover:text-red-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="24" cy="24" r="3"/>
                                    <circle cx="40" cy="24" r="3"/>
                                    <circle cx="20" cy="36" r="2"/>
                                    <circle cx="44" cy="36" r="2"/>
                                    <circle cx="32" cy="44" r="2"/>
                                    <path d="M24 24 L20 36 M40 24 L44 36 M24 24 L32 44 M40 24 L32 44 M20 36 L32 44 M44 36 L32 44" stroke="currentColor" stroke-width="1"/>
                                </svg>
                            {:else if category.icon === 'dx'}
                                <svg class="w-full h-full text-orange-500 group-hover:text-orange-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                    <circle cx="20" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <path d="M14 26 L26 38 M26 26 L14 38" stroke="currentColor" stroke-width="2"/>
                                    <rect x="40" y="20" width="16" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <circle cx="44" cy="28" r="1"/>
                                    <circle cx="52" cy="28" r="1"/>
                                    <path d="M44 36 Q48 32 52 36" fill="none" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            {/if}
                        </div>
                        
                        <!-- Compact Category Name -->
                        <span class="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-center leading-tight">
                            {category.name.replace(' & ', '\n&\n').replace(' ', '\n')}
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
        <div class="text-center mb-12">
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
                <button 
                    class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                    on:click={fetchBlogPosts}
                >
                    Try Again
                </button>
            </div>
        {:else}
            <!-- Blog Posts Grid by Category -->
            <div class="space-y-12">
                {#each categories as category, categoryIndex}
                    {@const categoryPosts = blogPostsByCategory[category.name] || []}
                    {#if categoryPosts.length > 0}
                        <div class="category-section" in:fly={{ y: 50, delay: categoryIndex * 200, duration: 600 }}>
                            <!-- Category Header -->
                            <div class="flex items-center mb-6">
                                <div class="w-12 h-12 mr-4">
                                    <img src="{getCategoryIcon(category.name)}" alt="{category.name}" class="w-full h-full opacity-70" />
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800">{category.name}</h3>
                                    <p class="text-gray-600 text-sm">{category.description}</p>
                                </div>
                            </div>
                            
                            <!-- Posts Grid (2 posts per category) -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {#each categoryPosts as post, postIndex}
                                    <article 
                                        class="bg-white rounded-xl border border-gray-200 overflow-hidden hover: transition-shadow duration-300"
                                        in:fly={{ x: postIndex % 2 === 0 ? -50 : 50, delay: (categoryIndex * 200) + (postIndex * 100), duration: 600 }}
                                    >
                                        <!-- Post Thumbnail -->
                                        <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                            <img 
                                                src="{post.thumbnail}" 
                                                alt="{post.title}" 
                                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        
                                        <!-- Post Content -->
                                        <div class="p-6">
                                            <!-- Meta Information -->
                                            <div class="flex items-center justify-between mb-3">
                                                <div class="flex items-center space-x-2">
                                                    <span class="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                                        {post.category}
                                                    </span>
                                                    <span class="text-xs text-gray-500">
                                                        {post.readTime} min read
                                                    </span>
                                                </div>
                                                <span class="text-sm text-gray-500">
                                                    {formatDate(post.publishedAt)}
                                                </span>
                                            </div>
                                            
                                            <!-- Post Title -->
                                             <h4 class="text-xl font-semibold mb-3 line-clamp-2">
                                                 <a 
                                                     href="/tech-hotpot/{post.slug}"
                                                     class="text-gray-800 hover:text-blue-600 transition-colors"
                                                 >
                                                     {post.title}
                                                 </a>
                                             </h4>
                                            
                                            <!-- Post Excerpt -->
                                            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            
                                            <!-- Author and Tags -->
                                             <div class="flex items-center justify-between">
                                                 <div class="flex items-center space-x-2">
                                                     {#if post.author === 'Alpha Bits Engineering'}
                                                          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-400">
                                                              <img 
                                                                  src="/logos/logo_black.png" 
                                                                  alt="Alpha Bits Engineering" 
                                                                  class="w-5 h-5 object-contain"
                                                              />
                                                          </div>
                                                      {:else if post.author === 'Kent Nguyen'}
                                                          <div class="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-400">
                                                              <img 
                                                                  src="/profile/avatar1.jpg" 
                                                                  alt="Kent Nguyen" 
                                                                  class="w-full h-full object-cover"
                                                              />
                                                          </div>
                                                      {:else}
                                                          <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                              <span class="text-white text-xs font-semibold">
                                                                   {post.author.split(' ').map((n: string) => n[0]).join('')}
                                                               </span>
                                                          </div>
                                                      {/if}
                                                     <span class="text-sm text-gray-600">{post.author}</span>
                                                 </div>
                                                
                                                <a 
                                                     href="/tech-hotpot/{post.slug}"
                                                     class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors group"
                                                 >
                                                     <span>Read More</span>
                                                     <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                                     </svg>
                                                 </a>
                                            </div>
                                            
                                            <!-- Tags -->
                                            {#if post.tags && post.tags.length > 0}
                                                <div class="flex flex-wrap gap-2 mt-4">
                                                    {#each post.tags.slice(0, 3) as tag}
                                                        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                            #{tag}
                                                        </span>
                                                    {/each}
                                                </div>
                                            {/if}
                                        </div>
                                    </article>
                                {/each}
                            </div>
                        </div>
                    {/if}
                {/each}
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