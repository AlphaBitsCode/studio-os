<script>
    import SEOHead from '$lib/components/SEOHead.svelte';
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "AlphaBits Blog & Insights",
        "description": "Latest insights, tutorials, and thought leadership articles on AI automation, digital transformation, and emerging technologies",
        "url": "https://alphabits.team/resources/blog",
        "publisher": {
            "@type": "Organization",
            "name": "AlphaBits",
            "logo": {
                "@type": "ImageObject",
                "url": "https://alphabits.team/logos/logo_square.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://alphabits.team/resources/blog"
        }
    };
</script>

<SEOHead 
    title="Blog & Insights - AlphaBits Resources | AI Automation & Digital Transformation Articles"
    description="Latest insights, tutorials, and thought leadership articles on AI automation, digital transformation, and emerging technologies from AlphaBits experts. Learn from real-world implementations."
    keywords="AI automation blog, digital transformation insights, Node-RED tutorials, IoT articles, business automation guides, technology thought leadership, AI implementation tips"
    canonicalUrl="https://alphabits.team/resources/blog"
    ogImage="https://alphabits.team/alphabits_cover.png"
    ogType="website"
    {structuredData}
/>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 via-pink-600 to-red-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
                Blog & Insights
            </h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Latest insights, tutorials, and thought leadership on AI automation, digital transformation, and emerging technologies.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#featured" class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                    Featured Articles
                </a>
                <a href="#subscribe" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Subscribe to Updates
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Featured Article -->
<section id="featured" class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden shadow-lg mb-16">
            <div class="grid lg:grid-cols-2 gap-0">
                <div class="p-8 lg:p-12">
                    <div class="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Featured Article
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        The Future of AI Workflow Automation: 2024 Trends and Predictions
                    </h2>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Explore the latest trends in AI workflow automation and discover how emerging technologies are reshaping business operations across industries.
                    </p>
                    
                    <div class="flex items-center space-x-4 mb-6">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                <span class="text-white text-sm font-bold">AB</span>
                            </div>
                            <span class="text-sm text-gray-600 dark:text-gray-300">AlphaBits Team</span>
                        </div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">•</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">March 15, 2024</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">•</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">8 min read</span>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">AI Trends</span>
                        <span class="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">Automation</span>
                        <span class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">Future Tech</span>
                    </div>
                    
                    <button class="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Read Full Article
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="bg-gradient-to-br from-purple-600 to-pink-600 p-8 lg:p-12 flex items-center justify-center">
                    <div class="text-center text-white">
                        <div class="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Trending Insights</h3>
                        <p class="text-purple-100">Stay ahead with the latest AI and automation trends</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Article Categories -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Article Categories</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive collection of articles organized by topic.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- AI Workflow Best Practices -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-3">AI Workflow Best Practices</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Expert guidance on implementing and optimizing AI-powered automation workflows.
                </p>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">12 articles</div>
                <button class="text-purple-600 dark:text-purple-400 font-medium hover:underline text-sm">
                    Browse Articles →
                </button>
            </div>
            
            <!-- IoT Implementation Strategies -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-3">IoT Implementation Strategies</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Practical guides for deploying and managing IoT infrastructure in business environments.
                </p>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">8 articles</div>
                <button class="text-teal-600 dark:text-teal-400 font-medium hover:underline text-sm">
                    Browse Articles →
                </button>
            </div>
            
            <!-- Digital Transformation Trends -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-3">Digital Transformation Trends</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Insights on the latest trends and technologies shaping digital transformation.
                </p>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">15 articles</div>
                <button class="text-orange-600 dark:text-orange-400 font-medium hover:underline text-sm">
                    Browse Articles →
                </button>
            </div>
            
            <!-- Technology Leadership Insights -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-3">Technology Leadership Insights</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Strategic perspectives on technology leadership and organizational transformation.
                </p>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">10 articles</div>
                <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                    Browse Articles →
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Recent Articles -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Recent Articles</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay up-to-date with our latest insights and tutorials.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Article 1 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-3">
                        <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-medium">AI Automation</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">March 10, 2024</span>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">Building Intelligent Customer Support Workflows</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Learn how to create AI-powered customer support systems that automatically route tickets, generate responses, and escalate complex issues.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500 dark:text-gray-400">6 min read</span>
                        <button class="text-purple-600 dark:text-purple-400 font-medium hover:underline text-sm">
                            Read More →
                        </button>
                    </div>
                </div>
            </article>
            
            <!-- Article 2 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-teal-500 to-blue-500 h-48 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-3">
                        <span class="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs font-medium">IoT</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">March 8, 2024</span>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">IoT Security Best Practices for Enterprise Deployments</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Essential security considerations and implementation strategies for large-scale IoT infrastructure deployments.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500 dark:text-gray-400">8 min read</span>
                        <button class="text-teal-600 dark:text-teal-400 font-medium hover:underline text-sm">
                            Read More →
                        </button>
                    </div>
                </div>
            </article>
            
            <!-- Article 3 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-orange-500 to-red-500 h-48 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-3">
                        <span class="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs font-medium">Data Analytics</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">March 5, 2024</span>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">Optimizing InfluxDB Performance for Time-Series Data</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Advanced techniques for optimizing InfluxDB performance, including schema design, query optimization, and resource management.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500 dark:text-gray-400">10 min read</span>
                        <button class="text-orange-600 dark:text-orange-400 font-medium hover:underline text-sm">
                            Read More →
                        </button>
                    </div>
                </div>
            </article>
            
            <!-- Article 4 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-blue-500 to-indigo-500 h-48 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-3">
                        <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">Leadership</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">March 3, 2024</span>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">The Fractional CTO Model: When and Why It Works</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Exploring the benefits and challenges of the fractional CTO model for growing companies and established enterprises.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500 dark:text-gray-400">7 min read</span>
                        <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                            Read More →
                        </button>
                    </div>
                </div>
            </article>
            
            <!-- Article 5 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-green-500 to-teal-500 h-48 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-3">
                        <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">Node-RED</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">March 1, 2024</span>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">Advanced Node-RED Patterns for Enterprise Workflows</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Discover advanced Node-RED patterns and best practices for building robust, scalable enterprise automation workflows.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500 dark:text-gray-400">12 min read</span>
                        <button class="text-green-600 dark:text-green-400 font-medium hover:underline text-sm">
                            Read More →
                        </button>
                    </div>
                </div>
            </article>
            
            <!-- Article 6 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-48 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-3">
                        <span class="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-xs font-medium">Digital Transformation</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">February 28, 2024</span>
                    </div>
                    <h3 class="text-lg font-semibold mb-3">Legacy System Migration: A Step-by-Step Guide</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Comprehensive guide to planning and executing legacy system migrations with minimal business disruption.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500 dark:text-gray-400">15 min read</span>
                        <button class="text-pink-600 dark:text-pink-400 font-medium hover:underline text-sm">
                            Read More →
                        </button>
                    </div>
                </div>
            </article>
        </div>
        
        <div class="text-center mt-12">
            <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Load More Articles
            </button>
        </div>
    </div>
</section>

<!-- Newsletter Signup -->
<section id="subscribe" class="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Our Latest Insights
        </h2>
        <p class="text-xl mb-8">
            Subscribe to our newsletter and never miss the latest articles, tutorials, and industry insights.
        </p>
        <div class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                </button>
            </div>
            <p class="text-sm text-purple-100 mt-3">
                Weekly insights • No spam • Unsubscribe anytime
            </p>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Implement These Insights?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let our experts help you apply these concepts to transform your business operations.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Schedule Consultation
            </a>
            <a href="/services" class="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                Explore Our Services
            </a>
        </div>
    </div>
</section>