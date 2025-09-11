<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    let mounted = false;
    let currentBlogIndex = 0;
    let blogCarousel: HTMLElement;
    let autoScrollInterval: NodeJS.Timeout;
    
    // Mock blog posts data - replace with actual data from your CMS
    const blogPosts = [
        {
            id: 1,
            title: "New Python Framework's ML Capabilities",
            excerpt: "Exploring the latest machine learning features in modern Python frameworks...",
            date: "2024-01-15",
            category: "Software",
            image: "/icons/icon_software.png"
        },
        {
            id: 2,
            title: "Smart Home Security Trends",
            excerpt: "Latest developments in IoT security for connected homes...",
            date: "2024-01-12",
            category: "IoT News",
            image: "/icons/icon_iot.png"
        },
        {
            id: 3,
            title: "Cloud Computing Triads",
            excerpt: "Understanding the three pillars of modern cloud architecture...",
            date: "2024-01-10",
            category: "Data & Analytics",
            image: "/icons/icon_data.png"
        },
        {
            id: 4,
            title: "AI Workflow Automation",
            excerpt: "Streamlining business processes with intelligent automation...",
            date: "2024-01-08",
            category: "AI Workflow",
            image: "/icons/icon_ai.png"
        },
        {
            id: 5,
            title: "Digital Transformation Guide",
            excerpt: "A comprehensive approach to modernizing your business...",
            date: "2024-01-05",
            category: "Digital Transformation",
            image: "/icons/icon_dx.png"
        }
    ];
    
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
        startAutoScroll();
        return () => {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
            }
        };
    });
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (blogCarousel) {
                const cardWidth = 320; // Width of each blog card + gap
                const maxScroll = (blogPosts.length - 1) * cardWidth;
                const currentScroll = blogCarousel.scrollLeft;
                
                if (currentScroll >= maxScroll) {
                    blogCarousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    blogCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 4000);
    }
    
    function scrollBlog(direction: 'left' | 'right') {
        if (blogCarousel) {
            const cardWidth = 320;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            blogCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
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

<!-- Hero Section -->
<section class="relative py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                OUR FOCUS AREAS
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the five key technology domains we're passionate about. Each area represents cutting-edge innovations that are shaping the future of business and technology.
            </p>
        </div>
        
        <!-- Category Icons Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {#each categories as category, index}
                <div 
                    class="group relative flex flex-col items-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                    in:fly={{ y: 50, delay: index * 100, duration: 600 }}
                >
                    <!-- Category Icon -->
                    <div class="w-20 h-20 mb-4 relative">
                        {#if category.icon === 'software'}
                            <svg class="w-full h-full text-blue-500 group-hover:text-blue-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                <rect x="8" y="12" width="48" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                <path d="M16 20 L20 24 L16 28" fill="none" stroke="currentColor" stroke-width="2"/>
                                <line x1="24" y1="28" x2="32" y2="28" stroke="currentColor" stroke-width="2"/>
                                <circle cx="32" cy="52" r="3" class="animate-pulse"/>
                            </svg>
                        {:else if category.icon === 'iot'}
                            <svg class="w-full h-full text-green-500 group-hover:text-green-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                <circle cx="32" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="16" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="48" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="32" cy="52" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                                <path d="M32 26 L32 32 M26 20 L20 36 M38 20 L44 36 M32 32 L16 40 M32 32 L48 40 M32 32 L32 48" stroke="currentColor" stroke-width="2" class="animate-pulse"/>
                            </svg>
                        {:else if category.icon === 'data'}
                            <svg class="w-full h-full text-purple-500 group-hover:text-purple-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                <rect x="8" y="32" width="8" height="24" rx="2" class="animate-bounce" style="animation-delay: 0s"/>
                                <rect x="20" y="24" width="8" height="32" rx="2" class="animate-bounce" style="animation-delay: 0.2s"/>
                                <rect x="32" y="16" width="8" height="40" rx="2" class="animate-bounce" style="animation-delay: 0.4s"/>
                                <rect x="44" y="28" width="8" height="28" rx="2" class="animate-bounce" style="animation-delay: 0.6s"/>
                                <circle cx="32" cy="8" r="3" class="animate-ping"/>
                            </svg>
                        {:else if category.icon === 'ai'}
                            <svg class="w-full h-full text-red-500 group-hover:text-red-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="24" cy="24" r="3"/>
                                <circle cx="40" cy="24" r="3"/>
                                <circle cx="20" cy="36" r="2"/>
                                <circle cx="44" cy="36" r="2"/>
                                <circle cx="32" cy="44" r="2"/>
                                <path d="M24 24 L20 36 M40 24 L44 36 M24 24 L32 44 M40 24 L32 44 M20 36 L32 44 M44 36 L32 44" stroke="currentColor" stroke-width="1" class="animate-pulse"/>
                            </svg>
                        {:else if category.icon === 'dx'}
                            <svg class="w-full h-full text-orange-500 group-hover:text-orange-600 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                                <circle cx="20" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="2"/>
                                <path d="M14 26 L26 38 M26 26 L14 38" stroke="currentColor" stroke-width="2"/>
                                <rect x="40" y="20" width="16" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2" class="animate-pulse"/>
                                <circle cx="44" cy="28" r="1"/>
                                <circle cx="52" cy="28" r="1"/>
                                <path d="M44 36 Q48 32 52 36" fill="none" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        {/if}
                    </div>
                    
                    <!-- Category Name -->
                    <h3 class="text-lg font-semibold text-gray-800 mb-2 text-center">
                        {category.name}
                    </h3>
                    
                    <!-- Hover Tooltip -->
                    <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 p-4 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
                        <h4 class="font-semibold text-gray-800 mb-2">{category.name}</h4>
                        <p class="text-sm text-gray-600 mb-3">{category.description}</p>
                        <button class="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-colors">
                            Explore Category
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Latest Blog Posts Section -->
<section class="py-16 bg-white/50 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Latest Blog Posts
            </h2>
            <p class="text-lg text-gray-600">
                Stay updated with our latest insights and discoveries in technology
            </p>
        </div>
        
        <!-- Blog Posts Carousel -->
        <div class="relative">
            <!-- Navigation Arrows -->
            <button 
                class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                on:click={() => scrollBlog('left')}
            >
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            
            <button 
                class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                on:click={() => scrollBlog('right')}
            >
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
            
            <!-- Blog Cards Container -->
            <div 
                bind:this={blogCarousel}
                class="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
                style="scrollbar-width: none; -ms-overflow-style: none;"
            >
                {#each blogPosts as post, index}
                    <div 
                        class="flex-none w-80 bg-white rounded-xl transition-shadow duration-300 overflow-hidden"
                        in:fly={{ x: 100, delay: index * 100, duration: 600 }}
                    >
                        <!-- Post Image -->
                        <div class="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                            <img src="{post.image}" alt="{post.category}" class="w-16 h-16 opacity-60" />
                        </div>
                        
                        <!-- Post Content -->
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                    {post.category}
                                </span>
                                <span class="text-sm text-gray-500">
                                    {new Date(post.date).toLocaleDateString()}
                                </span>
                            </div>
                            
                            <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                {post.title}
                            </h3>
                            
                            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            
                            <button class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                                <span>Read More</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    
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