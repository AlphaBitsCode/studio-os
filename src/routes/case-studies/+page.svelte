<script>
    import SEOHead from '$lib/components/SEOHead.svelte';
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "AlphaBits Case Studies",
        "description": "Real-world examples of successful AI workflow automation and digital transformation projects",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Article",
                    "name": "Coffee Chain Digital Transformation",
                    "url": "https://alphabits.team/case-studies/coffee-chain-transformation",
                    "description": "Major Vietnamese coffee chain's digital transformation - consolidating 5 POS systems into unified BigQuery data warehouse"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Article",
                    "name": "SENCAR Smoke Detection AIoT Prototype",
                    "url": "https://alphabits.team/case-studies/sencar-smoke-detection",
                    "description": "AI-powered smoke and odor detection prototype for rental car fleet with 15-30 seconds accuracy"
                }
            }
        ]
    };
</script>

<SEOHead 
    title="Case Studies - AlphaBits | Real-World AI Automation & Digital Transformation Success Stories"
    description="Explore real-world examples of how AlphaBits has helped businesses transform through AI workflow automation and digital solutions. See measurable results and ROI from our implementations."
    keywords="case studies, AI automation success stories, digital transformation examples, business automation results, IoT implementation, data analytics case studies"
    canonicalUrl="https://alphabits.team/case-studies"
    ogImage="https://alphabits.team/case-studies/coffee-background.jpg"
    ogType="website"
    {structuredData}
/>

<!-- Hero Section with SVG Animation -->
<section class="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
    <div class="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-full mb-6">
                <span class="text-sm font-semibold text-slate-700 uppercase tracking-wide">Success Stories</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Case Studies
            </h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Real-world examples of how we've helped businesses transform through AI automation and digital solutions.
            </p>
        </div>
        
        <!-- Technology Animation SVG -->
        <div class="flex justify-center mb-8">
            <svg width="400" height="200" viewBox="0 0 400 200" class="animate-pulse">
                <!-- Data Flow Animation -->
                <defs>
                    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100" y2="0%">
                        <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:1" />
                    </linearGradient>
                </defs>
                
                <!-- Data Sources -->
                <circle cx="50" cy="50" r="20" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <text x="50" y="85" text-anchor="middle" class="text-xs fill-slate-600">POS Systems</text>
                
                <circle cx="50" cy="150" r="20" fill="#10B981" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <text x="50" y="185" text-anchor="middle" class="text-xs fill-slate-600">IoT Sensors</text>
                
                <!-- Data Processing -->
                <rect x="175" y="75" width="50" height="50" rx="10" fill="url(#dataGradient)" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite"/>
                </rect>
                <text x="200" y="140" text-anchor="middle" class="text-xs fill-slate-600">AI Processing</text>
                
                <!-- Results -->
                <circle cx="350" cy="100" r="25" fill="#F59E0B" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                </circle>
                <text x="350" y="140" text-anchor="middle" class="text-xs fill-slate-600">Insights</text>
                
                <!-- Connecting Lines with Animation -->
                <line x1="70" y1="50" x2="175" y2="90" stroke="#3B82F6" stroke-width="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="70" y1="150" x2="175" y2="110" stroke="#10B981" stroke-width="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                </line>
                <line x1="225" y1="100" x2="325" y2="100" stroke="#8B5CF6" stroke-width="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
                </line>
            </svg>
        </div>
    </div>
</section>

<!-- Case Studies Grid -->
<section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Success Stories</h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover how our clients have achieved measurable results through innovative technology solutions.
            </p>
        </div>
        
        <!-- Featured Case Study -->
        <div class="mb-16">
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg overflow-hidden shadow-xl border border-slate-200">
                <div class="grid lg:grid-cols-2 gap-0">
                    <div class="p-8 lg:p-12">
                        <div class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            Featured Case Study
                        </div>
                        <h3 class="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                            Coffee Chain Digital Transformation
                        </h3>
                        <p class="text-lg text-slate-600 mb-6">
                            A comprehensive digital transformation project that integrated AI workflow automation, IoT infrastructure, and modern web applications to create a complete business ecosystem.
                        </p>
                        
                        <div class="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <div class="text-2xl font-bold text-blue-600">85%</div>
                                <div class="text-sm text-slate-600">Process Efficiency Gain</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-green-600">60%</div>
                                <div class="text-sm text-slate-600">Cost Reduction</div>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AI Automation</span>
                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">IoT Integration</span>
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Web Development</span>
                            <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Data Analytics</span>
                        </div>
                        
                        <a href="/case-studies/coffee-chain-transformation" class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                            Read Full Case Study
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
                        <div class="text-center text-white">
                            <div class="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h4 class="text-xl font-bold mb-2">Complete Digital Ecosystem</h4>
                            <p class="text-blue-100">End-to-end solution integrating multiple technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Coming Soon Section with Technology SVG -->
        <div class="text-center">
            <h3 class="text-2xl font-bold mb-4 text-slate-900">More Case Studies Coming Soon</h3>
            <p class="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We're currently working on documenting additional success stories from our recent projects. Check back soon for more detailed case studies.
            </p>
            
            <!-- Technology Stack Visualization -->
            <div class="flex justify-center mb-12">
                <svg width="500" height="150" viewBox="0 0 500 150" class="">
                    <defs>
                        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
                            <stop offset="33%" style="stop-color:#10B981;stop-opacity:1" />
                            <stop offset="66%" style="stop-color:#8B5CF6;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    
                    <!-- AI Automation -->
                    <g>
                        <circle cx="100" cy="75" r="30" fill="#3B82F6" opacity="0.8">
                            <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <text x="100" y="80" text-anchor="middle" class="text-sm fill-white font-semibold">AI</text>
                        <text x="100" y="120" text-anchor="middle" class="text-xs fill-slate-600">Automation</text>
                    </g>
                    
                    <!-- Data Analytics -->
                    <g>
                        <rect x="175" y="45" width="60" height="60" rx="15" fill="#10B981" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                        </rect>
                        <text x="205" y="80" text-anchor="middle" class="text-sm fill-white font-semibold">Data</text>
                        <text x="205" y="120" text-anchor="middle" class="text-xs fill-slate-600">Analytics</text>
                    </g>
                    
                    <!-- IoT Infrastructure -->
                    <g>
                        <polygon points="300,45 330,60 330,90 300,105 270,90 270,60" fill="#8B5CF6" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
                        </polygon>
                        <text x="300" y="80" text-anchor="middle" class="text-sm fill-white font-semibold">IoT</text>
                        <text x="300" y="120" text-anchor="middle" class="text-xs fill-slate-600">Infrastructure</text>
                    </g>
                    
                    <!-- Results -->
                    <g>
                        <ellipse cx="400" cy="75" rx="35" ry="25" fill="#F59E0B" opacity="0.8">
                            <animate attributeName="rx" values="35;40;35" dur="4s" repeatCount="indefinite"/>
                        </ellipse>
                        <text x="400" y="80" text-anchor="middle" class="text-sm fill-white font-semibold">Results</text>
                        <text x="400" y="120" text-anchor="middle" class="text-xs fill-slate-600">Success</text>
                    </g>
                    
                    <!-- Connecting arrows -->
                    <path d="M 135 75 L 165 75" stroke="url(#techGradient)" stroke-width="3" marker-end="url(#arrowhead)">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 240 75 L 265 75" stroke="url(#techGradient)" stroke-width="3" marker-end="url(#arrowhead)">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 335 75 L 360 75" stroke="url(#techGradient)" stroke-width="3" marker-end="url(#arrowhead)">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
                    </path>
                    
                    <!-- Arrow marker -->
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="url(#techGradient)" />
                        </marker>
                    </defs>
                </svg>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    <h4 class="text-lg font-semibold mb-2 text-slate-900">AI Workflow Automation</h4>
                    <p class="text-slate-600 text-sm mb-4">
                        Manufacturing company streamlines operations with intelligent automation
                    </p>
                    <div class="text-sm text-slate-500">Coming Q2 2024</div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-dashed border-slate-300 hover:border-green-400 transition-colors">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <h4 class="text-lg font-semibold mb-2 text-slate-900">Data Analytics Platform</h4>
                    <p class="text-slate-600 text-sm mb-4">
                        E-commerce business gains insights with comprehensive analytics solution
                    </p>
                    <div class="text-sm text-slate-500">Coming Q2 2024</div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-dashed border-slate-300 hover:border-purple-400 transition-colors">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                        </svg>
                    </div>
                    <h4 class="text-lg font-semibold mb-2 text-slate-900">IoT Infrastructure</h4>
                    <p class="text-slate-600 text-sm mb-4">
                        Smart building implementation with real-time monitoring and control
                    </p>
                    <div class="text-sm text-slate-500">Coming Q3 2024</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Results Overview -->
<section class="py-16 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Results That Matter</h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                Our clients consistently see significant improvements in efficiency, cost savings, and operational capabilities.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <div class="text-lg font-semibold mb-1 text-slate-900">Average Efficiency Gain</div>
                <div class="text-sm text-slate-600">Process automation improvements</div>
            </div>
            
            <div class="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="text-4xl font-bold text-green-600 mb-2">60%</div>
                <div class="text-lg font-semibold mb-1 text-slate-900">Cost Reduction</div>
                <div class="text-sm text-slate-600">Operational expense savings</div>
            </div>
            
            <div class="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="text-4xl font-bold text-purple-600 mb-2">3x</div>
                <div class="text-lg font-semibold mb-1 text-slate-900">Faster Processing</div>
                <div class="text-sm text-slate-600">Data processing speed improvements</div>
            </div>
            
            <div class="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div class="text-lg font-semibold mb-1 text-slate-900">Automated Monitoring</div>
                <div class="text-sm text-slate-600">Continuous system oversight</div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Ready to Create Your Success Story?
        </h2>
        <p class="text-xl text-slate-600 mb-8">
            Let's discuss how we can help you achieve similar results with our proven methodologies and cutting-edge solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Start Your Project
            </a>
            <a href="/services" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Explore Our Services
            </a>
        </div>
    </div>
</section>