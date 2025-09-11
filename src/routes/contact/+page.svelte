<script lang="ts">
    import SEOHead from '$lib/components/SEOHead.svelte';
    
    let isVideoPlaying = false;
    let videoElement: HTMLVideoElement;

    function playVideo() {
        isVideoPlaying = true;
        setTimeout(() => {
            if (videoElement) {
                videoElement.play();
            }
        }, 100);
    }

    function stopVideo() {
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        isVideoPlaying = false;
    }
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "AlphaBits",
            "url": "https://alphabits.team",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://alphabits.team/contact",
                "availableLanguage": ["English", "Vietnamese"]
            },
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN"
            }
        }
    };
</script>

<SEOHead 
    title="Contact Us - AlphaBits | Get Started with AI Automation & Digital Transformation"
    description="Get in touch with AlphaBits for AI workflow automation, fractional CTO services, and digital transformation solutions. Schedule a consultation to discuss your business automation needs."
    keywords="contact AlphaBits, AI automation consultation, digital transformation inquiry, fractional CTO services, business automation contact, technology consulting"
    canonicalUrl="https://alphabits.team/contact"
    ogImage="https://alphabits.team/alphabits_cover.png"
    ogType="website"
    {structuredData}
/>

<!-- Office Lobby Photos -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Lab Office</h1>
            <p class="text-lg text-gray-600">
                Welcome to AlphaBits - where the future is now.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="rounded-lg overflow-hidden shadow-lg relative group">
                {#if !isVideoPlaying}
                    <img 
                        src="/office/lobby_1.jpg" 
                        alt="AlphaBits Office Lobby - Modern workspace with comfortable seating" 
                        class="w-full h-96 object-cover"
                    />
                    <!-- Play Button Overlay -->
                    <button 
                        on:click={playVideo}
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
                        aria-label="Play office tour video"
                    >
                        <div class="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-100">
                            <svg class="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </button>
                {:else}
                    <div class="relative">
                        <video 
                            bind:this={videoElement}
                            class="w-full h-96 object-cover"
                            controls
                            preload="metadata"
                            on:ended={stopVideo}
                        >
                            <source src="/office/office_lakeview_052025.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <button 
                            on:click={stopVideo}
                            class="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            aria-label="Stop video and return to image"
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                {/if}
                <div class="p-6 bg-white">
                    <h3 class="text-xl font-semibold mb-2">Office Tour</h3>
                    <p class="text-gray-600 text-sm">{isVideoPlaying ? 'A walk through our office, July 2025' : 'Click to take a step into our office'}</p>
                </div>
            </div>
            
            <div class="rounded-lg overflow-hidden shadow-lg">
                <img 
                    src="/office/lobby_2.jpg" 
                    alt="AlphaBits Office Lobby - Collaborative meeting space" 
                    class="w-full h-96 object-cover"
                />
                <div class="p-6 bg-white">
                    <h3 class="text-xl font-semibold mb-2">Collaboration Space</h3>
                </div>
            </div>
        </div>
    </div>
</section>



<!-- Contact Information -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for consultations, partnerships, or any inquiries about our services.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12">
            <!-- Company Details -->
            <div class="bg-white p-8 rounded-lg border border-gray-200">
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
            <div class="bg-white p-8 rounded-lg border border-gray-200">
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

<!-- FAQ Section -->
<section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p class="text-lg text-gray-600">
                Quick answers to common questions about our services and process.
            </p>
        </div>
        
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">How quickly can you start a project?</h3>
                <p class="text-gray-600">
                    We can typically begin discovery and planning within 1-2 weeks of project approval. Implementation timelines vary based on project scope and complexity.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">Do you work with small businesses or just enterprises?</h3>
                <p class="text-gray-600">
                    We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit your budget and requirements.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">What's included in a fractional CTO engagement?</h3>
                <p class="text-gray-600">
                    Our fractional CTO services include strategic technology planning, team leadership, architecture reviews, vendor management, and ongoing technical guidance tailored to your needs.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">Do you provide ongoing support after implementation?</h3>
                <p class="text-gray-600">
                    Yes, we offer various support packages including monitoring, maintenance, updates, and additional feature development to ensure your systems continue to perform optimally.
                </p>
            </div>
        </div>
    </div>
</section>