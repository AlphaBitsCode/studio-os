<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    import Card from '$lib/components/ui/card.svelte';
    import Button from '$lib/components/ui/button.svelte';
    import Badge from '$lib/components/ui/badge.svelte';
    import Separator from '$lib/components/ui/separator.svelte';
    import HeroWorkFlow from '$lib/components/HeroWorkFlow.svelte';
    import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
    <title>AlphaBits - AI Workflow Automation & Digital Transformation</title>
    <meta name="description" content="Transform your business with AI workflow automation, fractional CTO services, and comprehensive digital transformation solutions." />
</svelte:head>

<!-- Hero Section -->
<HeroWorkFlow />

<!-- Services Overview -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                From AI automation to digital transformation, we provide comprehensive solutions for modern businesses.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card class="p-6 hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-light-mint/20 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-medium-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-2 mb-3">
                    <h3 class="text-xl font-semibold">AI Workflow Automation</h3>
                    <Badge variant="secondary">Popular</Badge>
                </div>
                <p class="text-gray-600 mb-4">
                    Streamline your operations with intelligent AI agents and IoT workflow automation across all departments.
                </p>
                <Button href="/services/ai-workflow-automation" variant="link" class="p-0 h-auto font-medium">
                    Learn More →
                </Button>
            </Card>
            
            <Card class="p-6 hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-light-mint/20 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-dark-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-2 mb-3">
                    <h3 class="text-xl font-semibold">Fractional CTO & Tech Leadership</h3>
                    <Badge variant="outline">Expert</Badge>
                </div>
                <p class="text-gray-600 mb-4">
                    Get expert technical leadership with deep-dive assessments, infrastructure modernization, and strategic guidance.
                </p>
                <Button href="/services/fractional-cto" variant="link" class="p-0 h-auto font-medium">
                    Learn More →
                </Button>
            </Card>
            
            <Card class="p-6 hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-cyan-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-dark-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <div class="flex items-center gap-2 mb-3">
                    <h3 class="text-xl font-semibold">Data & AI Solutions</h3>
                    <Badge>New</Badge>
                </div>
                <p class="text-gray-600 mb-4">
                    Harness the power of big data with analytics, AI infrastructure, and intelligent agent building platforms.
                </p>
                <Button href="/services/data-ai-solutions" variant="link" class="p-0 h-auto font-medium">
                    Learn More →
                </Button>
            </Card>
        </div>
    </div>
</section>

<Separator class="my-8" />

<!-- Why Choose AlphaBits -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose AlphaBits?</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine deep technical expertise with practical business solutions to deliver measurable results.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="w-16 h-16 bg-light-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-medium-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Rapid Implementation</h3>
                <p class="text-gray-600">Get up and running quickly with our proven methodologies and frameworks.</p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-light-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-dark-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Enterprise Security</h3>
                <p class="text-gray-600">Built with security-first principles and enterprise-grade infrastructure.</p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-cyan-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-dark-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Scalable Solutions</h3>
                <p class="text-gray-600">Solutions that grow with your business, from startup to enterprise scale.</p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-light-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-medium-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">24/7 Support</h3>
                <p class="text-gray-600">Continuous monitoring and support to keep your systems running smoothly.</p>
            </div>
        </div>
    </div>
</section>

<Separator class="my-8" />

<CTA 
    variant="gradient-teal"
    description="Let's discuss how AI workflow automation and digital transformation can accelerate your growth."
    primaryButton={{
        text: 'Schedule a Consultation',
        href: '/quick-assessment',
        variant: 'custom',
        class: 'bg-white text-medium-teal hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors'
    }}
    secondaryButton={{
        text: 'View Case Studies',
        href: '/case-studies',
        variant: 'custom',
        class: 'border-2 border-white text-white hover:bg-white hover:text-medium-teal px-8 py-3 rounded-lg font-semibold transition-colors'
    }}
/>
