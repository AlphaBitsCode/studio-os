<script>
    import CTA from '$lib/components/CTA.svelte';
    import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
    <title>About Us - AlphaBits</title>
    <meta name="description" content="Learn about AlphaBits' mission to transform businesses through AI workflow automation, digital transformation, and expert technical leadership." />
</svelte:head>

<Hero 
    title="About AlphaBits" 
    subtitle="We're passionate about helping businesses harness the transformative power of AI and modern technology."
    variant="about"
/>

<!-- Mission & Vision -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p class="text-lg text-gray-600 mb-6">
                    To democratize access to cutting-edge AI and automation technologies, making them accessible and practical for businesses of all sizes. We believe that every organization should have the opportunity to leverage intelligent workflows and modern infrastructure to achieve their goals.
                </p>
                <p class="text-lg text-gray-600">
                    Through our comprehensive services—from AI workflow automation to fractional CTO leadership—we bridge the gap between complex technology and real-world business solutions.
                </p>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
                <p class="text-gray-600 mb-4">
                    A world where businesses operate with seamless efficiency through intelligent automation, where data drives decisions, and where technology serves as a catalyst for growth rather than a barrier.
                </p>
                <p class="text-gray-600">
                    We envision organizations that are agile, data-driven, and equipped with the tools they need to thrive in an increasingly digital landscape.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Our Approach -->
<section class="py-16 bg-gray-50">
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
                <p class="text-gray-600 dark:text-gray-300">
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
                <p class="text-gray-600 dark:text-gray-300">
                    We measure success by the tangible impact our solutions have on your business operations, efficiency, and growth.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Our Expertise -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Years of experience across diverse industries and technologies.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 class="text-lg font-semibold mb-2">AI & Machine Learning</h3>
                <p class="text-sm text-gray-600">Advanced AI agents, LLM integration, and intelligent automation systems</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 class="text-lg font-semibold mb-2">IoT & Automation</h3>
                <p class="text-sm text-gray-600">Node-RED workflows, sensor integration, and real-time monitoring</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 class="text-lg font-semibold mb-2">Data Engineering</h3>
                <p class="text-sm text-gray-600">BigQuery, ClickHouse, InfluxDB, and comprehensive data pipelines</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 class="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
                <p class="text-sm text-gray-600">Modern cloud architectures, network configuration, and scalable systems</p>
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