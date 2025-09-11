<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    
    let formData = {
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    };
    
    let isSubmitting = false;
    let submitMessage = '';
    
    async function handleSubmit(event: Event) {
        event.preventDefault();
        isSubmitting = true;
        
        try {
            // Here you would typically send the form data to your backend
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            submitMessage = 'Thank you for your message! We\'ll get back to you within 24 hours.';
            
            // Reset form
            formData = {
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            };
        } catch (error) {
            submitMessage = 'Sorry, there was an error sending your message. Please try again.';
        } finally {
            isSubmitting = false;
        }
    }
</script>

<svelte:head>
    <title>Contact Us - AlphaBits</title>
    <meta name="description" content="Get in touch with AlphaBits for AI workflow automation, fractional CTO services, and digital transformation solutions." />
</svelte:head>

<Hero 
    title="Contact Us" 
    subtitle="Ready to transform your business? Let's discuss how we can help you achieve your goals."
    variant="contact"
/>

<!-- Contact Form & Info -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {#if submitMessage}
                    <div class="mb-6 p-4 rounded-lg {submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        {submitMessage}
                    </div>
                {/if}
                
                <form on:submit={handleSubmit} class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                bind:value={formData.name}
                                required
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your full name"
                            />
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                bind:value={formData.email}
                                required
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="your.email@company.com"
                            />
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                bind:value={formData.company}
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your company name"
                            />
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                bind:value={formData.phone}
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                            Service of Interest
                        </label>
                        <select
                            id="service"
                            bind:value={formData.service}
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">Select a service...</option>
                            <option value="ai-workflow-automation">AI Workflow Automation</option>
                            <option value="fractional-cto">Fractional CTO & Tech Leadership</option>
                            <option value="data-ai-solutions">Data & AI Solutions</option>
                            <option value="digital-transformation">Digital Transformation & Integration</option>
                            <option value="iot-infrastructure">IoT Infrastructure</option>
                            <option value="consultation">General Consultation</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            bind:value={formData.message}
                            required
                            rows="5"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tell us about your project, challenges, or questions..."
                        ></textarea>
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            
            <!-- Contact Information -->
            <div class="space-y-8">
                <div>
                    <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
                    <p class="text-lg text-gray-600 mb-8">
                        We're here to help you transform your business with cutting-edge technology solutions. Reach out to us through any of the channels below.
                    </p>
                </div>
                
                <!-- Contact Methods -->
                <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-1">Email</h3>
                            <p class="text-gray-600">hello@alphabits.com</p>
                            <p class="text-sm text-gray-500">We typically respond within 24 hours</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-1">Phone</h3>
                            <p class="text-gray-600">+84 868 000 317</p>
                            <p class="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM GMT+7</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l-.5 8.5A2 2 0 0013.5 21h-3A2 2 0 018.5 15.5L8 7z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-1">Schedule a Consultation</h3>
                            <p class="text-gray-600">Book a free 30-minute discovery call</p>
                            <a href="https://cal.com/alphabits/mini" target="_blank" class="text-blue-600 hover:underline text-sm">Schedule Now →</a>
                        </div>
                    </div>
                </div>
                
                <!-- Response Time -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold mb-3">What to Expect</h3>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Initial response within 24 hours</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Free consultation to understand your needs</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Customized proposal within 3-5 business days</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>No obligation - we're here to help</span>
                        </li>
                    </ul>
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