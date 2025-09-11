<script>
    import CTA from '$lib/components/CTA.svelte';
    import SEOHead from '$lib/components/SEOHead.svelte';
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "AlphaBits Services",
        "description": "Comprehensive technology services including AI workflow automation, fractional CTO services, data solutions, digital transformation, and IoT infrastructure.",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Service",
                    "name": "AI Workflow Automation",
                    "url": "https://alphabits.team/services/ai-workflow-automation",
                    "description": "Intelligent AI agents and IoT workflow automation across all departments"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Service",
                    "name": "Fractional CTO Services",
                    "url": "https://alphabits.team/services/fractional-cto",
                    "description": "Expert technical leadership and strategic guidance"
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Service",
                    "name": "Data & AI Solutions",
                    "url": "https://alphabits.team/services/data-ai-solutions",
                    "description": "Big data analytics, AI infrastructure, and intelligent agents"
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "Service",
                    "name": "IoT Infrastructure",
                    "url": "https://alphabits.team/services/iot-infrastructure",
                    "description": "Smart sensor networks and IoT monitoring systems"
                }
            },
            {
                "@type": "ListItem",
                "position": 5,
                "item": {
                    "@type": "Service",
                    "name": "Digital Transformation",
                    "url": "https://alphabits.team/services/digital-transformation",
                    "description": "ERP integration and legacy system modernization"
                }
            }
        ]
    };
</script>

<SEOHead 
    title="Our Services - AlphaBits | AI Automation, CTO Services & Digital Transformation"
    description="Comprehensive AI workflow automation, fractional CTO services, data solutions, digital transformation, and IoT infrastructure services. Transform your business with expert technology solutions."
    keywords="AI services, fractional CTO, digital transformation services, IoT infrastructure, data analytics, business automation, technology consulting, AI implementation"
    canonicalUrl="https://alphabits.team/services"
    ogImage="https://alphabits.team/alphabits_cover.png"
    ogType="website"
    {structuredData}
/>

<!-- Hero Section with Large Vector Animation -->
<section class="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
    <div class="absolute inset-0 bg-white/30"></div>
    
    <!-- Main Hero Animation -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-6xl mx-auto">
            <!-- Large Vector Animation -->
            <div class="mb-8 flex justify-center">
                <svg width="800" height="500" viewBox="0 0 800 500" class="w-full max-w-4xl h-auto">
                    <!-- Background gradient -->
                    <defs>
                        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#dbeafe;stop-opacity:0.4" />
                            <stop offset="100%" style="stop-color:#e0e7ff;stop-opacity:0.2" />
                        </linearGradient>
                        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#2563eb" />
                            <stop offset="100%" style="stop-color:#7c3aed" />
                        </linearGradient>
                        <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
                            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.1" />
                        </radialGradient>
                    </defs>
                    
                    <!-- Background circles -->
                    <circle cx="400" cy="250" r="220" fill="url(#heroGradient)">
                        <animate attributeName="r" values="220;230;220" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="400" cy="250" r="180" fill="#dbeafe" opacity="0.3">
                        <animate attributeName="r" values="180;190;180" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    <!-- Central Hub -->
                    <g transform="translate(400,250)">
                        <!-- Main hub -->
                        <circle cx="0" cy="0" r="40" fill="url(#centerGradient)">
                            <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="30" fill="#ffffff" opacity="0.9"/>
                        <text x="0" y="8" text-anchor="middle" font-size="16" fill="#2563eb" font-weight="bold">AB</text>
                        
                        <!-- Pulse rings -->
                        <circle cx="0" cy="0" r="60" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.4">
                            <animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="70" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.3">
                            <animate attributeName="r" values="70;90;70" dur="4s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.3;0.05;0.3" dur="4s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                    
                    <!-- Service Icons -->
                    <!-- AI Workflow Automation -->
                    <g transform="translate(200,150)">
                        <circle cx="0" cy="0" r="25" fill="#3b82f6">
                            <animate attributeName="fill" values="#3b82f6;#2563eb;#3b82f6" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="18" fill="#dbeafe"/>
                        <!-- AI brain icon -->
                        <path d="M -8,-8 Q 0,-12 8,-8 Q 12,0 8,8 Q 0,12 -8,8 Q -12,0 -8,-8" fill="#2563eb"/>
                        <circle cx="-4" cy="-4" r="2" fill="#ffffff"/>
                        <circle cx="4" cy="-4" r="2" fill="#ffffff"/>
                        <circle cx="0" cy="4" r="2" fill="#ffffff"/>
                        <text x="0" y="-35" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">AI Workflow</text>
                        <text x="0" y="-25" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">Automation</text>
                        <!-- Data flow -->
                        <circle cx="30" cy="15" r="3" fill="#3b82f6">
                            <animateTransform attributeName="transform" type="translate" values="0,0;100,50;200,100" dur="4s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                    
                    <!-- Fractional CTO -->
                    <g transform="translate(600,150)">
                        <circle cx="0" cy="0" r="25" fill="#10b981">
                            <animate attributeName="fill" values="#10b981;#059669;#10b981" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="18" fill="#d1fae5"/>
                        <!-- CTO icon -->
                        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#10b981"/>
                        <circle cx="0" cy="-3" r="3" fill="#ffffff"/>
                        <rect x="-4" y="2" width="8" height="6" rx="1" fill="#ffffff"/>
                        <text x="0" y="-35" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">Fractional</text>
                        <text x="0" y="-25" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">CTO</text>
                        <!-- Data flow -->
                        <circle cx="-30" cy="15" r="3" fill="#10b981">
                            <animateTransform attributeName="transform" type="translate" values="0,0;-100,50;-200,100" dur="4s" repeatCount="indefinite" begin="1s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="1s"/>
                        </circle>
                    </g>
                    
                    <!-- Digital Transformation -->
                    <g transform="translate(200,350)">
                        <circle cx="0" cy="0" r="25" fill="#f59e0b">
                            <animate attributeName="fill" values="#f59e0b;#d97706;#f59e0b" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="18" fill="#fef3c7"/>
                        <!-- Digital transformation icon -->
                        <rect x="-10" y="-6" width="20" height="12" rx="2" fill="#f59e0b"/>
                        <rect x="-8" y="-4" width="6" height="2" fill="#ffffff"/>
                        <rect x="-8" y="-1" width="8" height="2" fill="#ffffff"/>
                        <rect x="-8" y="2" width="4" height="2" fill="#ffffff"/>
                        <circle cx="6" cy="0" r="4" fill="#ffffff"/>
                        <path d="M 4,-2 L 8,0 L 4,2" fill="#f59e0b"/>
                        <text x="0" y="40" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">Digital</text>
                        <text x="0" y="50" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">Transformation</text>
                        <!-- Data flow -->
                        <circle cx="30" cy="-15" r="3" fill="#f59e0b">
                            <animateTransform attributeName="transform" type="translate" values="0,0;100,-50;200,-100" dur="4s" repeatCount="indefinite" begin="2s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="2s"/>
                        </circle>
                    </g>
                    
                    <!-- IoT Infrastructure -->
                    <g transform="translate(600,350)">
                        <circle cx="0" cy="0" r="25" fill="#14b8a6">
                            <animate attributeName="fill" values="#14b8a6;#0d9488;#14b8a6" dur="2.8s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="18" fill="#ccfbf1"/>
                        <!-- IoT icon -->
                        <circle cx="0" cy="0" r="6" fill="#14b8a6"/>
                        <circle cx="-8" cy="-8" r="3" fill="#14b8a6"/>
                        <circle cx="8" cy="-8" r="3" fill="#14b8a6"/>
                        <circle cx="-8" cy="8" r="3" fill="#14b8a6"/>
                        <circle cx="8" cy="8" r="3" fill="#14b8a6"/>
                        <line x1="-6" y1="-6" x2="-3" y2="-3" stroke="#14b8a6" stroke-width="1"/>
                        <line x1="6" y1="-6" x2="3" y2="-3" stroke="#14b8a6" stroke-width="1"/>
                        <line x1="-6" y1="6" x2="-3" y2="3" stroke="#14b8a6" stroke-width="1"/>
                        <line x1="6" y1="6" x2="3" y2="3" stroke="#14b8a6" stroke-width="1"/>
                        <text x="0" y="40" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">IoT</text>
                        <text x="0" y="50" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">Infrastructure</text>
                        <!-- Data flow -->
                        <circle cx="-30" cy="-15" r="3" fill="#14b8a6">
                            <animateTransform attributeName="transform" type="translate" values="0,0;-100,-50;-200,-100" dur="4s" repeatCount="indefinite" begin="3s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="3s"/>
                        </circle>
                    </g>
                    
                    <!-- Data & AI Solutions -->
                    <g transform="translate(400,100)">
                        <circle cx="0" cy="0" r="25" fill="#8b5cf6">
                            <animate attributeName="fill" values="#8b5cf6;#7c3aed;#8b5cf6" dur="2.2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="18" fill="#ede9fe"/>
                        <!-- Data & AI icon -->
                        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#8b5cf6"/>
                        <rect x="-6" y="-6" width="4" height="2" fill="#ffffff"/>
                        <rect x="-6" y="-3" width="6" height="2" fill="#ffffff"/>
                        <rect x="-6" y="0" width="3" height="2" fill="#ffffff"/>
                        <rect x="-6" y="3" width="5" height="2" fill="#ffffff"/>
                        <circle cx="4" cy="-2" r="3" fill="#ffffff"/>
                        <circle cx="4" cy="-2" r="1" fill="#8b5cf6"/>
                        <text x="0" y="-35" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">Data & AI</text>
                        <text x="0" y="-25" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">Solutions</text>
                        <!-- Data flow -->
                        <circle cx="0" cy="25" r="3" fill="#8b5cf6">
                            <animateTransform attributeName="transform" type="translate" values="0,0;0,75;0,150" dur="4s" repeatCount="indefinite" begin="0.5s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="0.5s"/>
                        </circle>
                    </g>
                    
                    <!-- Connection lines -->
                    <g stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.3">
                        <line x1="225" y1="175" x2="375" y2="225"/>
                        <line x1="575" y1="175" x2="425" y2="225"/>
                        <line x1="225" y1="325" x2="375" y2="275"/>
                        <line x1="575" y1="325" x2="425" y2="275"/>
                        <line x1="400" y1="125" x2="400" y2="210"/>
                    </g>
                    
                    <!-- Floating particles -->
                    <g>
                        <circle cx="150" cy="100" r="4" fill="#3b82f6" opacity="0.6">
                            <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="650" cy="120" r="3" fill="#10b981" opacity="0.5">
                            <animate attributeName="cy" values="120;100;120" dur="4s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="100" cy="400" r="5" fill="#f59e0b" opacity="0.4">
                            <animate attributeName="cy" values="400;380;400" dur="2.5s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="700" cy="380" r="3" fill="#14b8a6" opacity="0.7">
                            <animate attributeName="cy" values="380;360;380" dur="3.5s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="450" cy="50" r="4" fill="#8b5cf6" opacity="0.5">
                            <animate attributeName="cy" values="50;30;50" dur="4s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                    
                    <!-- Service integration indicators -->
                    <g>
                        <circle cx="300" cy="200" r="2" fill="#3b82f6" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="500" cy="200" r="2" fill="#10b981" opacity="0.8">
                            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="300" cy="300" r="2" fill="#f59e0b" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="500" cy="300" r="2" fill="#14b8a6" opacity="0.8">
                            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="400" cy="150" r="2" fill="#8b5cf6" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                </svg>
            </div>
            
            <!-- Hero Text -->
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-blue-700">
                    Expert Technology Solutions
                </span>
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                From AI workflow automation to fractional CTO services, we deliver comprehensive technology solutions that drive real business results.
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="http://cal.com/alphabits/mini" class="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book Tech Assessment
                </a>
                <a href="/services" class="border-2 border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-all duration-300">
                    Learn more
                </a>
            </div>
        </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
</section>

<!-- Services Section with Creative Overlapping Layout -->
<section class="py-20 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">We deliver end-to-end technology solutions that transform how your business operates, scales, and succeeds in the digital age.</p>
        </div>
        
        <!-- AI Workflow Automation - Left Aligned with Animation -->
        <div class="relative mb-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1">
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">AI Workflow Automation</h3>
                        </div>
                        <p class="text-gray-700 mb-6 text-lg leading-relaxed">
                            Transform your business operations with intelligent AI agents that automate complex workflows across all departments. From customer support to financial processes, our AI solutions reduce manual work by up to 80% while improving accuracy and response times.
                        </p>
                        <div class="grid md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-blue-600 mb-2">Smart Automation</h4>
                                <p class="text-sm text-gray-600">AI agents handle repetitive tasks, freeing your team for strategic work</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-blue-600 mb-2">Cross-Department Integration</h4>
                                <p class="text-sm text-gray-600">Seamless workflows connecting Sales, HR, Finance, and Support</p>
                            </div>
                        </div>
                        <a href="/services/ai-workflow-automation" class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Explore AI Solutions
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="order-1 lg:order-2 relative">
                    <div class="relative z-10">
                        <img src="/animations/ai-workflow-animation.svg?v=1" alt="AI Workflow Automation" class="w-full h-auto max-w-md mx-auto" />
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                    <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full opacity-15 animate-pulse" style="animation-delay: 1s;"></div>
                </div>
            </div>
        </div>

        <!-- Fractional CTO & Tech Leadership - Right Aligned with Photo -->
        <div class="relative mb-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img src="/office/profile2.jpg" alt="Expert Technical Leadership" class="w-full h-80 object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <p class="text-sm font-medium">Expert Technical Leadership</p>
                        </div>
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute -top-6 -left-6 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                    <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-15 animate-pulse" style="animation-delay: 1.5s;"></div>
                </div>
                <div>
                    <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Fractional CTO & Tech Leadership</h3>
                        </div>
                        <p class="text-gray-700 mb-6 text-lg leading-relaxed">
                            Get C-level technical expertise without the full-time cost. Our fractional CTO services provide strategic technology leadership, comprehensive system assessments, and actionable roadmaps that align technology investments with business goals.
                        </p>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-start">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-green-700">Strategic Technology Planning</h4>
                                    <p class="text-sm text-gray-600">Align your tech stack with business objectives and growth plans</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-green-700">Infrastructure Modernization</h4>
                                    <p class="text-sm text-gray-600">Upgrade legacy systems and implement scalable solutions</p>
                                </div>
                            </div>
                        </div>
                        <a href="/services/fractional-cto" class="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Schedule CTO Consultation
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data & AI Solutions - Left Aligned with Animation -->
        <div class="relative mb-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1">
                    <div class="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Data & AI Solutions</h3>
                        </div>
                        <p class="text-gray-700 mb-6 text-lg leading-relaxed">
                            Unlock the power of your data with comprehensive analytics, AI infrastructure, and intelligent agents. From data collection to actionable insights, we build scalable solutions that turn information into competitive advantage.
                        </p>
                        <div class="grid md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-purple-600 mb-2">Big Data Infrastructure</h4>
                                <p class="text-sm text-gray-600">Scalable data warehouses with BigQuery, ClickHouse, and modern ETL pipelines</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-purple-600 mb-2">AI Agent Development</h4>
                                <p class="text-sm text-gray-600">Custom AI agents using MindStudio, Dify.ai, and local LLM deployments</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-purple-600 mb-2">Business Intelligence</h4>
                                <p class="text-sm text-gray-600">Interactive dashboards and real-time analytics for data-driven decisions</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-purple-600 mb-2">Machine Learning</h4>
                                <p class="text-sm text-gray-600">Predictive models and automated insights tailored to your business needs</p>
                            </div>
                        </div>
                        <a href="/services/data-ai-solutions" class="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                            Explore Data Solutions
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="order-1 lg:order-2 relative">
                    <div class="relative z-10">
                        <img src="/animations/data-ai-animation.svg?v=1" alt="Data & AI Solutions" class="w-full h-auto max-w-md mx-auto" />
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
                    <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-violet-200 rounded-full opacity-15 animate-pulse" style="animation-delay: 2s;"></div>
                </div>
            </div>
        </div>

        <!-- Digital Transformation - Right Aligned with Office Photo -->
        <div class="relative mb-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img src="/office/office_7.jpg" alt="Digital Infrastructure Solutions" class="w-full h-80 object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <p class="text-sm font-medium">Turn-key Digital Infrastructure</p>
                        </div>
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute -top-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
                    <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-15 animate-pulse" style="animation-delay: 2.5s;"></div>
                </div>
                <div>
                    <div class="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Digital Transformation & Integration</h3>
                        </div>
                        <p class="text-gray-700 mb-6 text-lg leading-relaxed">
                            Modernize your entire digital ecosystem with comprehensive transformation services. We handle everything from legacy system migration to cutting-edge ERP implementations, ensuring seamless integration and minimal business disruption.
                        </p>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-start">
                                <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-orange-700">ERP & CRM Integration</h4>
                                    <p class="text-sm text-gray-600">Seamless integration of enterprise systems for unified operations</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-orange-700">Legacy System Migration</h4>
                                    <p class="text-sm text-gray-600">Safe, secure migration from outdated systems to modern platforms</p>
                                </div>
                            </div>
                        </div>
                        <a href="/services/digital-transformation" class="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                            Start Transformation
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- IoT Infrastructure - Left Aligned with GIF -->
        <div class="relative mb-16">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1">
                    <div class="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">IoT Infrastructure</h3>
                        </div>
                        <p class="text-gray-700 mb-6 text-lg leading-relaxed">
                            Build comprehensive IoT ecosystems that connect, monitor, and control your physical assets. From sensor networks to real-time dashboards, we create intelligent infrastructure that drives operational efficiency and data-driven insights.
                        </p>
                        <div class="grid md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-teal-600 mb-2">Workflow Automation</h4>
                                <p class="text-sm text-gray-600">Node-RED based automation for complex IoT workflows and integrations</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-teal-600 mb-2">Real-time Monitoring</h4>
                                <p class="text-sm text-gray-600">Grafana dashboards with live data visualization and alerting</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-teal-600 mb-2">Message Queuing</h4>
                                <p class="text-sm text-gray-600">Reliable MQTT messaging with Mosquitto for device communication</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <h4 class="font-semibold text-teal-600 mb-2">Data Storage</h4>
                                <p class="text-sm text-gray-600">Time-series databases with InfluxDB for IoT data management</p>
                            </div>
                        </div>
                        <a href="/services/iot-infrastructure" class="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                            Explore IoT Solutions
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="order-1 lg:order-2 relative">
                    <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img src="/case-studies/iot_security_station.gif" alt="IoT Infrastructure in Action" class="w-full h-80 object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <p class="text-sm font-medium">IoT Security Station Demo</p>
                        </div>
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
                    <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-200 rounded-full opacity-15 animate-pulse" style="animation-delay: 3s;"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<CTA 
    title="Ready to Get Started?"
    description="Let's discuss which services align best with your business goals and technical requirements."
    primaryButton={{
        text: 'Book CTO Assessment (30 min)',
        href: 'http://cal.com/alphabits/mini',
        variant: 'custom',
        class: 'bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center'
    }}
    secondaryButton={{
        text: 'General Consultation',
        href: '/contact'
    }}
    variant="default"
/>
