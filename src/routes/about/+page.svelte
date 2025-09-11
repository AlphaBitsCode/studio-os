<script>
    import CTA from '$lib/components/CTA.svelte';
    import ImageSlideshow from '$lib/components/ImageSlideshow.svelte';
    import SEOHead from '$lib/components/SEOHead.svelte';
    import { onMount } from 'svelte';
    
    let mounted = false;
    
    // Office and teamwork images
    const officeImages = [
        '/office/office_1.jpg',
        '/office/office_2.jpg',
        '/office/office_3.jpg',
        '/office/office_4.jpg',
        '/office/teamwork_1.jpg',
        '/office/teamwork_2.jpg',
        '/office/teamwork_3.jpg',
        '/office/teamwork_4.jpg'
    ];
    
    // Kent's profile images - randomized order
    const kentProfileImages = [
        '/profile/profile1.jpg',
        '/profile/profile2.jpg',
        '/profile/profile3.jpg',
        '/profile/profile4.jpg',
        '/profile/profile5.jpg',
        '/profile/profile6.jpg',
        '/profile/profile7.jpg',
        '/profile/profile8.jpg',
        '/profile/profile9.jpg',
        '/profile/profile10.jpg'
    ].sort(() => Math.random() - 0.5);
    
    let currentImageIndex = 0;
    let imageElement;
    
    // Ken Burns effect slideshow
     onMount(() => {
         mounted = true;
         
         const interval = setInterval(() => {
             currentImageIndex = (currentImageIndex + 1) % kentProfileImages.length;
         }, 5000);
         
         return () => clearInterval(interval);
     });
     
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "AlphaBits",
            "url": "https://alphabits.team",
            "logo": "https://alphabits.team/logos/logo_square.png",
            "description": "AI Workflow Automation & Digital Transformation Solutions",
            "foundingDate": "2020",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://alphabits.team/contact"
            },
            "sameAs": [
                "https://www.linkedin.com/company/alphabits-team"
            ],
            "knowsAbout": [
                "AI Workflow Automation",
                "Digital Transformation",
                "IoT Infrastructure",
                "Data Analytics",
                "Fractional CTO Services"
            ]
        }
    };
</script>

<SEOHead 
    title="About Us - AlphaBits | AI Automation & Digital Transformation Experts"
    description="Learn about AlphaBits' mission to transform businesses through AI workflow automation, digital transformation, and expert technical leadership. Discover our team, values, and approach to business innovation."
    keywords="about AlphaBits, AI automation company, digital transformation experts, technology consulting team, business automation specialists, fractional CTO services"
    canonicalUrl="https://alphabits.team/about"
    ogImage="https://alphabits.team/office/office_front.jpg"
    ogType="website"
    {structuredData}
/>

<!-- Animated SVG Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-200 min-h-[600px] flex items-center justify-center">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
        <svg class="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
            <!-- Floating Geometric Shapes -->
            <g class="{mounted ? 'animate-float-slow' : ''}">
                <circle cx="100" cy="100" r="30" fill="rgba(255,255,255,0.3)" />
                <rect x="1000" y="80" width="40" height="40" fill="rgba(255,255,255,0.08)" rx="8" />
                <polygon points="200,500 230,450 260,500" fill="rgba(255,255,255,0.06)" />
            </g>
            
            <!-- Pulsing Dots -->
            <g class="{mounted ? 'animate-pulse-gentle' : ''}">
                <circle cx="300" cy="150" r="8" fill="rgba(255,255,255,0.3)" />
                <circle cx="900" cy="200" r="6" fill="rgba(255,255,255,0.25)" />
                <circle cx="150" cy="400" r="10" fill="rgba(255,255,255,0.2)" />
                <circle cx="1050" cy="450" r="7" fill="rgba(255,255,255,0.28)" />
            </g>
            
            <!-- Flowing Lines -->
            <g class="{mounted ? 'animate-flow' : ''}" stroke="rgba(255,255,255,0.3)" stroke-width="4" fill="none">
                <path d="M0,300 Q300,250 600,300 T1200,300" />
                <path d="M0,350 Q400,300 800,350 T1200,350" />
            </g>
            
            <!-- Tech-inspired Grid Pattern -->
            <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            <!-- Glowing Orbs -->
            <defs>
                <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:rgba(255,255,255,0.5);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:0" />
                </radialGradient>
                <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:rgba(99,102,241,0.4);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgba(99,102,241,0);stop-opacity:0" />
                </radialGradient>
            </defs>
            
            <circle cx="800" cy="120" r="80" fill="url(#glow1)" class="{mounted ? 'animate-glow' : ''}" />
            <circle cx="400" cy="480" r="60" fill="url(#glow2)" class="{mounted ? 'animate-glow-delayed' : ''}" />
        </svg>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-black/90 mb-6 {mounted ? 'animate-fade-in-up' : 'opacity-0'}">
            About AlphaBits
        </h1>
        <p class="text-xl md:text-2xl text-black/80 leading-relaxed {mounted ? 'animate-fade-in-up-delayed' : 'opacity-0'}">
            We're passionate about helping businesses harness the transformative power of AI and modern technology.
        </p>
        
        <!-- Floating Action Elements -->
        <div class="mt-8 flex justify-center space-x-4 {mounted ? 'animate-fade-in-up-more-delayed' : 'opacity-0'}">
            <div class="w-3 h-3 bg-white/40 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
            <div class="w-3 h-3 bg-white/40 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
            <div class="w-3 h-3 bg-white/40 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
        </div>
    </div>
    
    <!-- Bottom Gradient Fade -->
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>

<style>
    @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
    }
    
    @keyframes pulse-gentle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
    }
    
    @keyframes flow {
        0% { transform: translateX(-100px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(100px); opacity: 0; }
    }
    
    @keyframes glow {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.05); }
    }
    
    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-float-slow {
        animation: float-slow 6s ease-in-out infinite;
    }
    
    .animate-pulse-gentle {
        animation: pulse-gentle 3s ease-in-out infinite;
    }
    
    .animate-flow {
        animation: flow 8s linear infinite;
    }
    
    .animate-glow {
        animation: glow 4s ease-in-out infinite;
    }
    
    .animate-glow-delayed {
        animation: glow 4s ease-in-out infinite;
        animation-delay: 2s;
    }
    
    .animate-fade-in-up {
        animation: fade-in-up 1s ease-out forwards;
    }
    
    .animate-fade-in-up-delayed {
        animation: fade-in-up 1s ease-out 0.3s forwards;
    }
    
    .animate-fade-in-up-more-delayed {
        animation: fade-in-up 1s ease-out 0.6s forwards;
    }
    
    /* Ken Burns Effect */
    @keyframes kenBurns {
        0% {
            transform: scale(1) translate(0, 0);
        }
        100% {
            transform: scale(1.1) translate(-2%, -2%);
        }
    }
    
    .ken-burns-effect {
        animation: kenBurns 5s ease-in-out infinite alternate;
        transition: opacity 1s ease-in-out;
    }
    
    .profile-slideshow {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 1rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .profile-slideshow img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    
    .profile-slideshow img.active {
        opacity: 1;
    }
</style>

<!-- Mission & Vision -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p class="text-lg text-gray-600 mb-6">
                    To democratize access to cutting-edge AI and automation technologies, making them practical for businesses of all sizes.
                </p>
                <p class="text-lg text-gray-600">
                    We bridge the gap between complex technology and real-world business solutions.
                </p>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
                <p class="text-gray-600">
                    A world where businesses operate with seamless efficiency through intelligent automation, where data drives decisions, and technology serves as a catalyst for growth.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Founder Profile -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Meet Our Founder</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Leading innovation with over two decades of entrepreneurial and technical expertise.
            </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Profile Image Slideshow -->
            <div class="flex justify-center">
                <div class="profile-slideshow max-w-md">
                    {#each kentProfileImages as image, index}
                        <img 
                            src={image} 
                            alt="Kent Nguyen - Founder of AlphaBits"
                            class="ken-burns-effect {index === currentImageIndex ? 'active' : ''}"
                            loading="lazy"
                        />
                    {/each}
                </div>
            </div>
            
            <!-- Bio Content -->
            <div>
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                        <a href="https://www.kentnguyen.com/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors">
                            Kent Nguyen
                        </a>
                    </h3>
                    <p class="text-lg text-blue-600 font-semibold mb-4">Serial Tech Entrepreneur & Inventor of Alterno Sand Battery</p>
                </div>
                
                <div class="prose prose-lg text-gray-600 mb-6">
                    <p class="mb-4">
                        Kent Nguyen is a seasoned tech entrepreneur and inventor with over 20 years of experience building startups, systems, and innovative solutions. As a Fractional CTO, he specializes in crafting technology strategies and leading software development teams across multiple countries.
                    </p>
                    <p class="mb-4">
                        Based in Vietnam, Kent has a proven track record of creating complex software systems and driving energy-efficient breakthroughs, including pioneering work on thermal energy storage like the Sand Battery.
                    </p>
                    <p>
                        His collaborative approach, strategic mindset, and ability to build trust with partners make him a respected leader in the tech industry.
                    </p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://www.kentnguyen.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Learn More About Kent
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                    <a 
                        href="/contact" 
                        class="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                        Connect with Kent
                    </a>
                </div>
                
                <!-- Key Achievements -->
                <div class="mt-8 grid grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-white rounded-lg">
                        <div class="text-2xl font-bold text-blue-600 mb-1">20+</div>
                        <div class="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div class="text-center p-4 bg-white rounded-lg">
                        <div class="text-2xl font-bold text-green-600 mb-1">15+</div>
                        <div class="text-sm text-gray-600">Startups Founded</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Our Approach -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine deep technical expertise with practical business acumen to deliver solutions that work.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Innovation-First</h3>
                <p class="text-gray-600">
                    We stay at the forefront of technology trends, constantly exploring new tools and methodologies to deliver cutting-edge solutions.
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Client-Centric</h3>
                <p class="text-gray-600">
                    Every solution is tailored to your specific needs, challenges, and goals. We don't believe in one-size-fits-all approaches.
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Results-Driven</h3>
                <p class="text-gray-600">
                    We measure success by the tangible impact our solutions have on your business operations, efficiency, and growth.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Our Expertise -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Years of experience across diverse industries and technologies.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-lg text-center">
                <h3 class="text-lg font-semibold mb-2">AI & Machine Learning</h3>
                <p class="text-sm text-gray-600">Advanced AI agents, LLM integration, and intelligent automation systems</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg text-center">
                <h3 class="text-lg font-semibold mb-2">IoT & Automation</h3>
                <p class="text-sm text-gray-600">Node-RED workflows, sensor integration, and real-time monitoring</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg text-center">
                <h3 class="text-lg font-semibold mb-2">Data Engineering</h3>
                <p class="text-sm text-gray-600">BigQuery, ClickHouse, InfluxDB, and comprehensive data pipelines</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg text-center">
                <h3 class="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
                <p class="text-sm text-gray-600">Modern cloud architectures, network configuration, and scalable systems</p>
            </div>
        </div>
    </div>
</section>

<!-- Office Gallery -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Workspace</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a look inside our collaborative environment where innovation happens every day.
            </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
            <ImageSlideshow 
                images={officeImages}
                size="large"
                interval={4000}
                alt="AlphaBits office and teamwork"
            />
        </div>
    </div>
</section>

<!-- Contact Information -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid md:grid-cols-2 gap-12">
            <!-- Company Details -->
            <div class="bg-white p-8 rounded-lg">
                <h3 class="text-2xl font-semibold mb-6 text-gray-800">Company Details</h3>
                
                <div class="space-y-6">
                    <!-- Company Name -->
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-1 text-gray-800">Legal Name</h4>
                            <p class="text-gray-600 font-medium">ALPHA BITS TECHNOLOGY INNOVATION CONSULTING COMPANY LIMITED</p>
                        </div>
                    </div>
                    
                    <!-- Address -->
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-1 text-gray-800">Address</h4>
                            <p class="text-gray-600">Lầu 2, 68 Nguyễn Huệ</p>
                            <p class="text-gray-600">Phường Bến Nghé, Quận 1</p>
                            <p class="text-gray-600">Thành phố Hồ Chí Minh, Việt Nam</p>
                        </div>
                    </div>
                    
                    <!-- Tax ID -->
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-1 text-gray-800">Tax ID</h4>
                            <a 
                                href="https://masothue.com/0317647935-cong-ty-tnhh-tu-van-cong-nghe-sang-tao-alpha-bits" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="text-purple-600 hover:text-purple-700 hover:underline transition-colors"
                            >
                                0317647935
                            </a>
                            <p class="text-sm text-gray-500 mt-1">Click to verify registration</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Methods -->
            <div class="bg-white p-8 rounded-lg">
                <h3 class="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h3>
                
                <div class="space-y-6">
                    <!-- Phone -->
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-1 text-gray-800">Phone</h4>
                            <p class="text-gray-600 font-medium">+84 868 000 317</p>
                            <p class="text-sm text-gray-500">Available on WhatsApp & Telegram</p>
                        </div>
                    </div>
                    
                    <!-- Email -->
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-1 text-gray-800">Email</h4>
                            <p class="text-gray-600">contact@alphabits.com</p>
                            <p class="text-sm text-gray-500">We typically respond within 24 hours</p>
                        </div>
                    </div>
                    
                    <!-- Bank Account -->
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-1 text-gray-800">Bank Account</h4>
                            <p class="text-gray-600">BIDV Account: <span class="font-mono">1471388638</span></p>
                            <p class="text-sm text-gray-500">For business transactions</p>
                        </div>
                    </div>
                    
                    <!-- Business Hours -->
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-1 text-gray-800">Business Hours</h4>
                            <p class="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                            <p class="text-sm text-gray-500">GMT+7 (Ho Chi Minh City Time)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<CTA 
    description="Let's discuss how our expertise can help you achieve your technology and business goals."
    primaryButton={{
        text: 'Get in Touch',
        href: '/contact',
        variant: 'custom',
        class: 'bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
    }}
    secondaryButton={{
        text: 'Explore Our Services',
        href: '/services',
        variant: 'custom',
        class: 'border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
    }}
/>