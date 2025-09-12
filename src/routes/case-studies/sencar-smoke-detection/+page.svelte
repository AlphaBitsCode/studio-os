<script>
    import SEOHead from '$lib/components/SEOHead.svelte';
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "SENCAR Smoke Detection AIoT Prototype Case Study",
        "description": "Detailed case study of developing an AI-powered smoke and odor detection prototype for SENCAR's rental car fleet - testing embedded AI chip performance for real-time detection within 15-30 seconds accuracy.",
        "author": {
            "@type": "Organization",
            "name": "AlphaBits",
            "url": "https://alphabits.team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "AlphaBits",
            "logo": {
                "@type": "ImageObject",
                "url": "https://alphabits.team/logos/logo_square.png"
            }
        },
        "datePublished": "2024-02-01",
        "dateModified": "2024-02-01",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://alphabits.team/case-studies/sencar-smoke-detection"
        },
        "image": "https://alphabits.team/partners/sencar_website.png",
        "articleSection": "Case Studies",
        "keywords": ["AIoT", "smoke detection", "embedded AI", "IoT sensors", "automotive technology", "prototype development"]
    };
</script>

<SEOHead 
    title="SENCAR Smoke Detection AIoT Prototype Case Study - AlphaBits | AI-Powered Fleet Monitoring"
    description="Detailed case study of developing an AI-powered smoke and odor detection prototype for SENCAR's rental car fleet - testing embedded AI chip performance for real-time detection within 15-30 seconds accuracy."
    keywords="AIoT prototype, smoke detection system, embedded AI chips, IoT sensors, automotive fleet monitoring, real-time detection, SENCAR partnership, AI automotive solutions"
    canonicalUrl="https://alphabits.team/case-studies/sencar-smoke-detection"
    ogImage="https://alphabits.team/partners/sencar_website.png"
    ogType="article"
    articleSection="Case Studies"
    publishedTime="2024-02-01T00:00:00Z"
    modifiedTime="2024-02-01T00:00:00Z"
    articleTags={["AIoT", "Smoke Detection", "Embedded AI", "IoT Sensors", "Automotive Technology", "Prototype Development"]}
    {structuredData}
/>

<style>
    .hero-background {
        position: relative;
        overflow: hidden;
    }
    
    .hero-background::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/partners/sencar_slide1.jpg');
        background-size: cover;
        background-position: center;
        animation: kenBurns 20s ease-in-out infinite;
        z-index: 1;
    }
    
    .hero-background::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2;
    }
    
    .hero-content {
        position: relative;
        z-index: 3;
    }
    
    @keyframes kenBurns {
        0% {
            background-image: url('/partners/sencar_slide1.jpg');
            transform: scale(1);
        }
        25% {
            background-image: url('/partners/sencar_slide1.jpg');
            transform: scale(1.1);
        }
        50% {
            background-image: url('/partners/sencar_slide2.jpg');
            transform: scale(1);
        }
        75% {
            background-image: url('/partners/sencar_slide2.jpg');
            transform: scale(1.1);
        }
        100% {
            background-image: url('/partners/sencar_slide3.jpg');
            transform: scale(1);
        }
    }
</style>

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
    <div class="absolute top-0 left-1/4 w-72 h-72 bg-red-200/30 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-full mb-6">
                <span class="text-sm font-semibold text-red-700 uppercase tracking-wide">AIoT Case Study</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-900 via-red-800 to-orange-800 bg-clip-text text-transparent">
                SENCAR Smoke Detection Prototype
            </h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Developing an AI-powered smoke and odor detection system for rental car fleets using embedded AI chips and IoT sensors with 15-30 seconds detection accuracy.
            </p>
        </div>
        
        <!-- AIoT Detection System SVG Animation -->
        <div class="flex justify-center mb-8">
            <svg width="600" height="300" viewBox="0 0 600 300" class="">
                <defs>
                    <linearGradient id="smokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#DC2626;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#EF4444;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#F97316;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#7C3AED;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#A855F7;stop-opacity:1" />
                    </linearGradient>
                    <radialGradient id="alertGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#FEF3C7;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:0.3" />
                    </radialGradient>
                </defs>
                
                <!-- Car with Sensors -->
                <g>
                    <!-- Car Body -->
                    <rect x="50" y="150" width="120" height="60" rx="15" fill="#64748B" opacity="0.8"/>
                    <rect x="60" y="140" width="100" height="20" rx="10" fill="#475569" opacity="0.9"/>
                    <!-- Wheels -->
                    <circle cx="80" cy="220" r="15" fill="#1F2937"/>
                    <circle cx="140" cy="220" r="15" fill="#1F2937"/>
                    
                    <!-- Smoke Detection Sensors -->
                    <circle cx="90" cy="130" r="8" fill="#DC2626" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="130" cy="130" r="8" fill="#DC2626" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.7s" repeatCount="indefinite"/>
                    </circle>
                    <text x="110" y="115" text-anchor="middle" class="text-xs fill-slate-600">IoT Sensors</text>
                </g>
                
                <!-- Smoke Particles Animation -->
                <g>
                    <circle cx="100" cy="100" r="3" fill="url(#smokeGradient)" opacity="0.6">
                        <animate attributeName="cy" values="100;80;60;40" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.6;0.8;0.4;0" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="120" cy="110" r="4" fill="url(#smokeGradient)" opacity="0.5">
                        <animate attributeName="cy" values="110;90;70;50" dur="3.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;0.7;0.3;0" dur="3.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="110" cy="105" r="2" fill="url(#smokeGradient)" opacity="0.7">
                        <animate attributeName="cy" values="105;85;65;45" dur="2.8s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.7;0.9;0.5;0" dur="2.8s" repeatCount="indefinite"/>
                    </circle>
                </g>
                
                <!-- AI Processing Unit -->
                <g>
                    <rect x="250" y="140" width="80" height="80" rx="15" fill="url(#aiGradient)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
                    </rect>
                    <text x="290" y="175" text-anchor="middle" class="text-sm fill-white font-semibold">AI Chip</text>
                    <text x="290" y="190" text-anchor="middle" class="text-sm fill-white font-semibold">Processing</text>
                    <text x="290" y="240" text-anchor="middle" class="text-xs fill-slate-600">15-30s Detection</text>
                </g>
                
                <!-- Alert System -->
                <g>
                    <circle cx="450" cy="180" r="40" fill="url(#alertGradient)" opacity="0.8">
                        <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="450,160 460,180 450,200 440,180" fill="#DC2626">
                        <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
                    </polygon>
                    <text x="450" y="235" text-anchor="middle" class="text-xs fill-slate-600">Alert System</text>
                </g>
                
                <!-- Data Flow Lines -->
                <path d="M 175 180 L 245 180" stroke="url(#smokeGradient)" stroke-width="3" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <path d="M 335 180 L 405 180" stroke="url(#aiGradient)" stroke-width="4" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                </path>
                
                <!-- Detection Timeline -->
                <text x="300" y="280" text-anchor="middle" class="text-sm fill-slate-700 font-semibold">Real-time Detection: Smoke → AI Analysis → Alert (15-30 seconds)</text>
            </svg>
        </div>
    </div>
</section>

<!-- Project Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold mb-6">Project Overview</h2>
                <p class="text-lg text-gray-700 mb-6">
                    SENCAR, a leading private rental car company in Ho Chi Minh City, partnered with AlphaBits to develop and test an innovative AIoT prototype for their fleet management. The project focused on creating an embedded AI system capable of detecting smoke and specific odors (including durian) in rental vehicles with high accuracy and reliability.
                </p>
                <p class="text-lg text-gray-700 mb-8">
                    Our solution involved developing a prototype using cutting-edge AI embedded chips that could provide real-time detection within 15-30 seconds while maintaining continuous monitoring for extended periods. This technology addresses critical fleet management challenges including vehicle damage prevention, customer safety, and policy enforcement.
                </p>
                
                <div class="bg-blue-50 border-4 border-blue-200 p-6 rounded-lg mb-8">
                    <h3 class="text-xl font-semibold mb-4">Key Challenge</h3>
                    <p class="text-gray-700">
                        SENCAR needed a reliable, automated system to detect smoking and strong odors in their rental vehicles to maintain fleet quality, ensure customer satisfaction, and enforce rental policies without manual inspection of every vehicle return.
                    </p>
                </div>
            </div>
            
            <div class="space-y-6">
                <div class="bg-blue-50 border-4 border-blue-200 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold mb-4">Project Details</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-gray-700">Industry:</span>
                            <span class="font-medium">Automotive Rental</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Location:</span>
                            <span class="font-medium">Ho Chi Minh City</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Duration:</span>
                            <span class="font-medium">4 weeks</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Timeline:</span>
                            <span class="font-medium">February 2025</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Project Type:</span>
                            <span class="font-medium">AIoT Prototype</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-green-50 border-4 border-green-200 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold mb-4">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI Embedded Chips</span>
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">IoT Sensors</span>
                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                        <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Edge Computing</span>
                        <span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Real-time Analytics</span>
                        <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Prototype Development</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About SENCAR -->
<section class="py-16 bg-gray-50 border-t-4 border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">About SENCAR</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Our trusted partner in automotive innovation and fleet management solutions.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div class="mb-6">
                    <img src="https://theme.hstatic.net/200000556551/1001114225/14/logo_bct.png?v=316" alt="SENCAR Logo" class="h-16 mb-4">
                </div>
                <h3 class="text-2xl font-semibold mb-4">Leading Private Rental Car Company</h3>
                <p class="text-lg text-gray-700 mb-4">
                    SENCAR is a prominent private rental car company based in Ho Chi Minh City, Vietnam. They specialize in providing high-quality vehicle rental services with a focus on customer satisfaction and fleet excellence.
                </p>
                <p class="text-lg text-gray-700 mb-6">
                    With a commitment to innovation and technology adoption, SENCAR continuously seeks advanced solutions to enhance their fleet management capabilities and maintain the highest standards of service quality.
                </p>
                <a href="https://sencar.vn" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    Visit SENCAR Website
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </a>
            </div>
            
            <div class="bg-white border-4 border-gray-300 p-4 rounded-lg">
                <img src="/partners/sencar_website.png" alt="SENCAR Website Screenshot" class="w-full rounded-lg shadow-lg">
                <p class="text-sm text-gray-600 mt-2 text-center">SENCAR's professional website showcasing their rental services</p>
            </div>
        </div>
    </div>
</section>

<!-- Demo Video Section -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Prototype Testing in Action</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Real-world testing of the smoke detection system in SENCAR's rental vehicles.
            </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
            <div class="bg-black border-4 border-gray-300 rounded-lg overflow-hidden">
                <video 
                    class="w-full h-auto" 
                    autoplay 
                    loop 
                    muted 
                    playsinline
                >
                    <source src="/partners/sencar_smoketest.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <p class="text-center text-gray-600 mt-4">
                Live demonstration of the AI-powered smoke detection system during field testing at SENCAR's Ho Chi Minh City headquarters.
            </p>
        </div>
    </div>
</section>

<!-- Technical Solution -->
<section class="py-16 bg-blue-50 border-t-4 border-blue-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Technical Solution</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Advanced AI embedded chip technology for real-time odor and smoke detection.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white border-4 border-blue-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">AI Embedded Chip</h3>
                <p class="text-gray-700 mb-4">
                    Custom AI chip designed for real-time smoke and odor detection with machine learning capabilities optimized for automotive environments.
                </p>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li>• 15-30 second detection accuracy</li>
                    <li>• Continuous 24-hour monitoring</li>
                    <li>• Low power consumption</li>
                    <li>• Edge computing capabilities</li>
                </ul>
            </div>
            
            <div class="bg-white border-4 border-green-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Multi-Odor Detection</h3>
                <p class="text-gray-700 mb-4">
                    Advanced sensor array capable of detecting various odors including smoke, durian, and other prohibited substances in rental vehicles.
                </p>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Smoke detection algorithms</li>
                    <li>• Durian odor identification</li>
                    <li>• Customizable sensitivity levels</li>
                    <li>• False positive reduction</li>
                </ul>
            </div>
            
            <div class="bg-white border-4 border-purple-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Real-Time Analytics</h3>
                <p class="text-gray-700 mb-4">
                    Instant data processing and alert system providing immediate notifications when violations are detected in the vehicle.
                </p>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Instant alert notifications</li>
                    <li>• Data logging and reporting</li>
                    <li>• Fleet management integration</li>
                    <li>• Historical trend analysis</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Results & Performance -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Prototype Performance Results</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Impressive accuracy and reliability metrics achieved during the 4-week testing period.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2">15-30s</div>
                <div class="text-lg font-semibold mb-1">Detection Speed</div>
                <div class="text-sm text-gray-700">Rapid identification of smoke/odors</div>
            </div>
            
            <div class="text-center">
                <div class="text-4xl font-bold text-green-600 mb-2">24hrs</div>
                <div class="text-lg font-semibold mb-1">Continuous Monitoring</div>
                <div class="text-sm text-gray-700">Uninterrupted operation capability</div>
            </div>
            
            <div class="text-center">
                <div class="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div class="text-lg font-semibold mb-1">Detection Accuracy</div>
                <div class="text-sm text-gray-700">High precision in field testing</div>
            </div>
            
            <div class="text-center">
                <div class="text-4xl font-bold text-orange-600 mb-2">4 weeks</div>
                <div class="text-lg font-semibold mb-1">Development Time</div>
                <div class="text-sm text-gray-700">Rapid prototype delivery</div>
            </div>
        </div>
        
        <div class="bg-green-50 border-4 border-green-300 p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4">Client Testimonial</h3>
            <blockquote class="text-lg text-gray-700 italic mb-4">
                "Working with AlphaBits on this AIoT prototype has been transformative for our business. Their innovative approach to smoke and odor detection using embedded AI chips demonstrates the future of fleet management technology. The 15-30 second detection accuracy and continuous monitoring capabilities will help us maintain the highest standards of vehicle quality while ensuring customer satisfaction. This partnership showcases how Vietnamese companies can lead in automotive technology innovation."
            </blockquote>
            <div class="flex items-center">
                <div class="w-12 h-12 mr-4">
                    <img src="/partners/sencar_founder_lam_nguyen.png" alt="Lam Nguyen" class="w-12 h-12 rounded-full object-cover">
                </div>
                <div>
                    <div class="font-semibold">Lam Nguyen</div>
                    <div class="text-sm text-gray-700 mb-1">Founder & CEO, SENCAR Vietnam</div>
                    <a href="https://www.linkedin.com/in/lamsencar/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Implementation Process -->
<section class="py-16 bg-yellow-50 border-t-4 border-yellow-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">4-Week Implementation Process</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Agile development approach with rapid prototyping and continuous testing.
            </p>
        </div>
        
        <div class="space-y-8">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold mb-2">Requirements Analysis & Design (Week 1)</h3>
                    <p class="text-gray-700 mb-2">
                        Comprehensive analysis of SENCAR's fleet management needs, technical specifications definition, and AI chip architecture design for automotive environment.
                    </p>
                    <div class="text-sm text-gray-600">Deliverables: Technical specifications, system architecture, component selection</div>
                </div>
            </div>
            
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold mb-2">Prototype Development (Week 2)</h3>
                    <p class="text-gray-700 mb-2">
                        AI embedded chip programming, sensor integration, and initial machine learning model training for smoke and durian odor detection algorithms.
                    </p>
                    <div class="text-sm text-gray-600">Deliverables: Working prototype, initial ML models, basic detection algorithms</div>
                </div>
            </div>
            
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold mb-2">Testing & Optimization (Week 3)</h3>
                    <p class="text-gray-700 mb-2">
                        Extensive field testing in SENCAR vehicles, algorithm refinement, accuracy optimization, and continuous monitoring validation.
                    </p>
                    <div class="text-sm text-gray-600">Deliverables: Optimized algorithms, performance metrics, field test results</div>
                </div>
            </div>
            
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold mb-2">Final Validation & Documentation (Week 4)</h3>
                    <p class="text-gray-700 mb-2">
                        Final prototype validation, comprehensive testing documentation, performance analysis, and recommendations for production scaling.
                    </p>
                    <div class="text-sm text-gray-600">Deliverables: Final prototype, test documentation, scaling recommendations, technical handover</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your AIoT Innovation?
        </h2>
        <p class="text-xl mb-8">
            Let's discuss how we can develop custom AI and IoT solutions for your business challenges.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quick-assessment" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
            </a>
            <a href="/services" class="border-2 border-whit px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Explore AIoT Services
            </a>
        </div>
    </div>
</section>