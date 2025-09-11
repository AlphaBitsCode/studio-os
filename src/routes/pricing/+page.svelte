<script>
    import { onMount } from 'svelte';
    import CTA from '$lib/components/CTA.svelte';
    import SEOHead from '$lib/components/SEOHead.svelte';
    
    let mounted = false;
    
    onMount(() => {
        mounted = true;
    });
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "name": "AlphaBits Pricing & Engagement Models",
        "description": "Flexible engagement models and transparent pricing for fractional CTO services, strategic advisory, project-based work, and offshore development teams",
        "priceCurrency": "USD",
        "seller": {
            "@type": "Organization",
            "name": "AlphaBits",
            "url": "https://alphabits.team"
        }
    };
</script>

<SEOHead 
    title="Pricing & Engagement Models - AlphaBits | Flexible CTO Services & Development Teams"
    description="Flexible engagement models and transparent pricing for fractional CTO services, strategic advisory, project-based work, and offshore development teams. Choose the model that fits your business needs."
    keywords="AlphaBits pricing, fractional CTO rates, engagement models, offshore development pricing, strategic advisory costs, project-based pricing, technology consulting rates"
    canonicalUrl="https://alphabits.team/pricing"
    ogImage="https://alphabits.team/alphabits_cover.png"
    ogType="website"
    {structuredData}
/>

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Transparent Pricing &
            <span class="text-blue-600">Flexible Models</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the engagement model that best fits your needs, timeline, and budget. From strategic advisory to dedicated offshore teams.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
            </a>
            <a href="#models" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                View Models
            </a>
        </div>
    </div>
</section>

<!-- Engagement Models -->
<section id="models" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Engagement Models</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer four distinct engagement models, each designed to address different business needs and growth stages.
            </p>
        </div>
        
        <!-- Project-based Model -->
        <div class="mb-20">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900">Project-based</h3>
                            <p class="text-green-600 font-semibold">$15K - $150K per project</p>
                        </div>
                    </div>
                    <p class="text-lg text-gray-600 mb-6">
                        Fixed-scope projects with defined deliverables, timelines, and outcomes. Perfect for specific initiatives with clear objectives.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h4 class="font-semibold mb-2">What's Included:</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Technology assessments</li>
                                <li>• Infrastructure modernization</li>
                                <li>• Team training & workshops</li>
                                <li>• Architecture reviews</li>
                                <li>• Security audits</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-2">Best For:</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Specific technical challenges</li>
                                <li>• One-time assessments</li>
                                <li>• Infrastructure upgrades</li>
                                <li>• Team capability building</li>
                                <li>• Compliance requirements</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <p class="text-sm text-green-800">
                            <strong>Timeline:</strong> 2-12 weeks depending on scope<br>
                            <strong>Payment:</strong> 50% upfront, 50% on completion
                        </p>
                    </div>
                </div>
                
                <!-- Animated SVG for Project-based -->
                <div class="flex justify-center">
                    <svg width="400" height="300" viewBox="0 0 400 300" class="w-full max-w-md">
                        <!-- Background -->
                        <rect width="400" height="300" fill="#f8fafc" rx="20"/>
                        
                        <!-- Project Timeline -->
                        <line x1="50" y1="150" x2="350" y2="150" stroke="#e2e8f0" stroke-width="4"/>
                        
                        <!-- Milestones -->
                        <circle cx="80" cy="150" r="8" fill="#10b981">
                            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="160" cy="150" r="8" fill="#3b82f6">
                            <animate attributeName="r" values="8;12;8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="240" cy="150" r="8" fill="#8b5cf6">
                            <animate attributeName="r" values="8;12;8" dur="2s" begin="1s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="320" cy="150" r="8" fill="#f59e0b">
                            <animate attributeName="r" values="8;12;8" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                        </circle>
                        
                        <!-- Labels -->
                        <text x="80" y="180" text-anchor="middle" class="text-xs fill-gray-600">Start</text>
                        <text x="160" y="180" text-anchor="middle" class="text-xs fill-gray-600">Phase 1</text>
                        <text x="240" y="180" text-anchor="middle" class="text-xs fill-gray-600">Phase 2</text>
                        <text x="320" y="180" text-anchor="middle" class="text-xs fill-gray-600">Complete</text>
                        
                        <!-- Progress Bar -->
                        <rect x="50" y="140" width="0" height="20" fill="#10b981" rx="10">
                            <animate attributeName="width" values="0;300;0" dur="4s" repeatCount="indefinite"/>
                        </rect>
                        
                        <!-- Floating Elements -->
                        <g>
                            <rect x="100" y="80" width="40" height="30" fill="#dbeafe" rx="5">
                                <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="3s" repeatCount="indefinite"/>
                            </rect>
                            <text x="120" y="100" text-anchor="middle" class="text-xs fill-blue-600">Task</text>
                        </g>
                        
                        <g>
                            <rect x="260" y="200" width="40" height="30" fill="#fef3c7" rx="5">
                                <animateTransform attributeName="transform" type="translate" values="0,0;0,10;0,0" dur="2.5s" repeatCount="indefinite"/>
                            </rect>
                            <text x="280" y="220" text-anchor="middle" class="text-xs fill-yellow-600">Goal</text>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        
        <!-- Strategic Advisory Model -->
        <div class="mb-20 bg-gray-50 -mx-4 px-4 py-16 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Animated SVG for Strategic Advisory -->
                    <div class="flex justify-center lg:order-1">
                        <svg width="400" height="300" viewBox="0 0 400 300" class="w-full max-w-md">
                            <!-- Background -->
                            <rect width="400" height="300" fill="#ffffff" rx="20"/>
                            
                            <!-- Central Brain/Strategy Icon -->
                            <circle cx="200" cy="150" r="40" fill="#dbeafe" opacity="0.8">
                                <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            
                            <!-- Strategy Lines -->
                            <g stroke="#3b82f6" stroke-width="2" fill="none">
                                <path d="M200,150 L120,100">
                                    <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2s" repeatCount="indefinite"/>
                                </path>
                                <path d="M200,150 L280,100">
                                    <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                                </path>
                                <path d="M200,150 L120,200">
                                    <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2s" begin="1s" repeatCount="indefinite"/>
                                </path>
                                <path d="M200,150 L280,200">
                                    <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                                </path>
                            </g>
                            
                            <!-- Strategy Nodes -->
                            <circle cx="120" cy="100" r="12" fill="#10b981">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="280" cy="100" r="12" fill="#8b5cf6">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="120" cy="200" r="12" fill="#f59e0b">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="280" cy="200" r="12" fill="#ef4444">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                            </circle>
                            
                            <!-- Central Icon -->
                            <path d="M185,135 L195,145 L215,125" stroke="#3b82f6" stroke-width="3" fill="none" stroke-linecap="round"/>
                            <circle cx="200" cy="160" r="3" fill="#3b82f6"/>
                            
                            <!-- Labels -->
                            <text x="120" y="85" text-anchor="middle" class="text-xs fill-gray-600">Tech</text>
                            <text x="280" y="85" text-anchor="middle" class="text-xs fill-gray-600">Team</text>
                            <text x="120" y="225" text-anchor="middle" class="text-xs fill-gray-600">Process</text>
                            <text x="280" y="225" text-anchor="middle" class="text-xs fill-gray-600">Growth</text>
                        </svg>
                    </div>
                    
                    <div class="lg:order-2">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">Strategic Advisory</h3>
                                <p class="text-blue-600 font-semibold">$3K - $15K per month</p>
                            </div>
                        </div>
                        <p class="text-lg text-gray-600 mb-6">
                            Ongoing strategic guidance and technology leadership without the full-time commitment. Perfect for growing companies needing expert direction.
                        </p>
                        <div class="grid md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <h4 class="font-semibold mb-2">What's Included:</h4>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>• Monthly strategy sessions</li>
                                    <li>• Technology roadmaps</li>
                                    <li>• Executive reporting</li>
                                    <li>• Team mentoring</li>
                                    <li>• Vendor evaluations</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold mb-2">Best For:</h4>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>• Growing startups</li>
                                    <li>• Scale-up companies</li>
                                    <li>• Strategic planning</li>
                                    <li>• Technology decisions</li>
                                    <li>• Long-term guidance</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-sm text-blue-800">
                                <strong>Commitment:</strong> 3-month minimum engagement<br>
                                <strong>Time:</strong> 15-20 hours per month
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Project + Rev Share Model -->
        <div class="mb-20">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900">Project + Rev Share</h3>
                            <p class="text-purple-600 font-semibold">Reduced upfront + 2-5% revenue share*</p>
                            <p class="text-sm text-gray-500 mt-1">*Reference only - varies by complexity & jurisdiction</p>
                        </div>
                    </div>
                    <p class="text-lg text-gray-600 mb-6">
                        Partnership model where we share in your success. Lower upfront costs in exchange for ongoing revenue participation. Actual terms depend on project complexity, your country of tax, and other factors.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h4 class="font-semibold mb-2">What's Included:</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Full project development</li>
                                <li>• Ongoing optimization</li>
                                <li>• Performance monitoring</li>
                                <li>• Growth strategy</li>
                                <li>• Long-term partnership</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-2">Best For:</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Revenue-generating projects</li>
                                <li>• Startups with limited capital</li>
                                <li>• High-growth potential</li>
                                <li>• Long-term partnerships</li>
                                <li>• Shared risk tolerance</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <p class="text-sm text-purple-800">
                            <strong>Structure:</strong> 30-50% reduced upfront cost<br>
                            <strong>Revenue Share:</strong> 2-5% for 2-3 years
                        </p>
                    </div>
                </div>
                
                <!-- Animated SVG for Rev Share -->
                <div class="flex justify-center">
                    <svg width="400" height="300" viewBox="0 0 400 300" class="w-full max-w-md">
                        <!-- Background -->
                        <rect width="400" height="300" fill="#faf5ff" rx="20"/>
                        
                        <!-- Growth Chart -->
                        <polyline points="50,250 100,220 150,180 200,140 250,100 300,80 350,60" 
                                  stroke="#8b5cf6" stroke-width="3" fill="none">
                            <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="3s" repeatCount="indefinite"/>
                        </polyline>
                        
                        <!-- Data Points -->
                        <circle cx="100" cy="220" r="4" fill="#8b5cf6">
                            <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="200" cy="140" r="4" fill="#8b5cf6">
                            <animate attributeName="r" values="4;8;4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="300" cy="80" r="4" fill="#8b5cf6">
                            <animate attributeName="r" values="4;8;4" dur="2s" begin="1s" repeatCount="indefinite"/>
                        </circle>
                        
                        <!-- Revenue Share Visualization -->
                        <rect x="50" y="260" width="300" height="20" fill="#e5e7eb" rx="10"/>
                        <rect x="50" y="260" width="0" height="20" fill="#8b5cf6" rx="10">
                            <animate attributeName="width" values="0;300;0" dur="4s" repeatCount="indefinite"/>
                        </rect>
                        
                        <!-- Partnership Icons -->
                        <g>
                            <circle cx="120" cy="50" r="20" fill="#ddd6fe">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <text x="120" y="55" text-anchor="middle" class="text-xs fill-purple-600">You</text>
                        </g>
                        
                        <g>
                            <circle cx="280" cy="50" r="20" fill="#ddd6fe">
                                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <text x="280" y="55" text-anchor="middle" class="text-xs fill-purple-600">Us</text>
                        </g>
                        
                        <!-- Connection Line -->
                        <line x1="140" y1="50" x2="260" y2="50" stroke="#8b5cf6" stroke-width="2">
                            <animate attributeName="stroke-dasharray" values="0,120;60,60;120,0" dur="2s" repeatCount="indefinite"/>
                        </line>
                        
                        <!-- Success Arrow -->
                        <path d="M200,30 L210,20 L200,10 L190,20 Z" fill="#10b981">
                            <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="1.5s" repeatCount="indefinite"/>
                        </path>
                    </svg>
                </div>
            </div>
        </div>
        
        <!-- B.O.T Offshore Team Model -->
        <div class="bg-gray-50 -mx-4 px-4 py-16 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Animated SVG for B.O.T -->
                    <div class="flex justify-center lg:order-1">
                        <svg width="400" height="300" viewBox="0 0 400 300" class="w-full max-w-md">
                            <!-- Background -->
                            <rect width="400" height="300" fill="#ffffff" rx="20"/>
                            
                            <!-- Build Phase -->
                            <g>
                                <rect x="50" y="50" width="80" height="60" fill="#fef3c7" rx="8">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="6s" repeatCount="indefinite"/>
                                </rect>
                                <text x="90" y="75" text-anchor="middle" class="text-sm font-semibold fill-yellow-700">BUILD</text>
                                <text x="90" y="90" text-anchor="middle" class="text-xs fill-yellow-600">Team Setup</text>
                            </g>
                            
                            <!-- Operate Phase -->
                            <g>
                                <rect x="160" y="50" width="80" height="60" fill="#dbeafe" rx="8">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="6s" begin="2s" repeatCount="indefinite"/>
                                </rect>
                                <text x="200" y="75" text-anchor="middle" class="text-sm font-semibold fill-blue-700">OPERATE</text>
                                <text x="200" y="90" text-anchor="middle" class="text-xs fill-blue-600">Development</text>
                            </g>
                            
                            <!-- Transfer Phase -->
                            <g>
                                <rect x="270" y="50" width="80" height="60" fill="#dcfce7" rx="8">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="6s" begin="4s" repeatCount="indefinite"/>
                                </rect>
                                <text x="310" y="75" text-anchor="middle" class="text-sm font-semibold fill-green-700">TRANSFER</text>
                                <text x="310" y="90" text-anchor="middle" class="text-xs fill-green-600">Handover</text>
                            </g>
                            
                            <!-- Flow Arrows -->
                            <path d="M135,80 L155,80" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)">
                                <animate attributeName="opacity" values="0;1;0" dur="6s" begin="1s" repeatCount="indefinite"/>
                            </path>
                            <path d="M245,80 L265,80" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)">
                                <animate attributeName="opacity" values="0;1;0" dur="6s" begin="3s" repeatCount="indefinite"/>
                            </path>
                            
                            <!-- Team Members -->
                            <g>
                                <circle cx="90" cy="150" r="15" fill="#14b8a6">
                                    <animate attributeName="cy" values="150;140;150" dur="2s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="120" cy="170" r="15" fill="#14b8a6">
                                    <animate attributeName="cy" values="170;160;170" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="150" cy="150" r="15" fill="#14b8a6">
                                    <animate attributeName="cy" values="150;140;150" dur="2s" begin="0.6s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="180" cy="170" r="15" fill="#14b8a6">
                                    <animate attributeName="cy" values="170;160;170" dur="2s" begin="0.9s" repeatCount="indefinite"/>
                                </circle>
                            </g>
                            
                            <!-- Vietnam Flag Colors -->
                            <rect x="50" y="220" width="300" height="4" fill="#dc2626"/>
                            <rect x="50" y="228" width="300" height="4" fill="#fbbf24"/>
                            
                            <!-- Location Label -->
                            <text x="200" y="250" text-anchor="middle" class="text-sm font-semibold fill-gray-700">Vietnam Team</text>
                            
                            <!-- Arrow Marker Definition -->
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
                                </marker>
                            </defs>
                        </svg>
                    </div>
                    
                    <div class="lg:order-2">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">B.O.T Offshore Team</h3>
                                <p class="text-teal-600 font-semibold">$3K - $8K per developer/month</p>
                            </div>
                        </div>
                        <p class="text-lg text-gray-600 mb-6">
                            Build-Operate-Transfer model with dedicated Vietnam-based development team. Cost-effective scaling with eventual knowledge transfer.
                        </p>
                        <div class="grid md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <h4 class="font-semibold mb-2">What's Included:</h4>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>• Dedicated offshore team</li>
                                    <li>• Project management</li>
                                    <li>• Quality assurance</li>
                                    <li>• Knowledge transfer</li>
                                    <li>• Cultural bridge support</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold mb-2">Best For:</h4>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>• Large development projects</li>
                                    <li>• Cost-sensitive scaling</li>
                                    <li>• Long-term development</li>
                                    <li>• Product development</li>
                                    <li>• Team augmentation</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-teal-50 p-4 rounded-lg">
                            <p class="text-sm text-teal-800">
                                <strong>Team Size:</strong> 2-20 developers<br>
                                <strong>Location:</strong> Ho Chi Minh City, Vietnam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Comparison Table -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Model Comparison</h2>
            <p class="text-lg text-gray-600">
                Choose the engagement model that best fits your needs and budget.
            </p>
        </div>
        
        <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-200 rounded-lg">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Feature</th>
                        <th class="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">Project-based</th>
                        <th class="border border-gray-200 px-4 py-3 text-center font-semibold text-blue-600">Strategic Advisory</th>
                        <th class="border border-gray-200 px-4 py-3 text-center font-semibold text-purple-600">Project + Rev Share</th>
                        <th class="border border-gray-200 px-4 py-3 text-center font-semibold text-teal-600">B.O.T Offshore</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-200 px-4 py-3 font-medium">Pricing Range</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">$15K - $150K</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">$3K - $15K/mo</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">Reduced + 2-5%*</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">$2K - $5K/dev/mo</td>
                    </tr>
                    <tr class="bg-gray-25">
                        <td class="border border-gray-200 px-4 py-3 font-medium">Timeline</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">2-12 weeks</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">3+ months</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">3+ months</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">6+ months</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-200 px-4 py-3 font-medium">Best For</td>
                        <td class="border border-gray-200 px-4 py-3 text-center text-sm">Specific projects</td>
                        <td class="border border-gray-200 px-4 py-3 text-center text-sm">Ongoing guidance</td>
                        <td class="border border-gray-200 px-4 py-3 text-center text-sm">Shared success</td>
                        <td class="border border-gray-200 px-4 py-3 text-center text-sm">Large teams</td>
                    </tr>
                    <tr class="bg-gray-25">
                        <td class="border border-gray-200 px-4 py-3 font-medium">Commitment</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">Project duration</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">3-month minimum</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">2-3 years</td>
                        <td class="border border-gray-200 px-4 py-3 text-center">6-month minimum</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p class="text-lg text-gray-600">
                Common questions about our engagement models and pricing.
            </p>
        </div>
        
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">Can I switch between engagement models?</h3>
                <p class="text-gray-600">Yes, we're flexible. You can start with a project-based engagement and transition to strategic advisory or other models based on your evolving needs.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">What's included in the B.O.T offshore team model?</h3>
                <p class="text-gray-600">Our B.O.T model includes dedicated developers, project management, quality assurance, and cultural bridge support. We handle recruitment, management, and eventual knowledge transfer to your team.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">How does the revenue share model work?</h3>
                <p class="text-gray-600">We reduce our upfront project cost by 30-50% in exchange for a small percentage (2-5%) of revenue generated by the project for 2-3 years. This aligns our success with yours.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-2">Do you offer custom engagement models?</h3>
                <p class="text-gray-600">Absolutely. We understand every business is unique. We're happy to discuss custom arrangements that better fit your specific needs, timeline, and budget constraints.</p>
            </div>
        </div>
    </div>
</section>

<CTA 
    title="Ready to Get Started?"
    description="Let's discuss which engagement model works best for your specific needs and goals."
    primaryButton={{
        text: 'Schedule Free Consultation',
        href: '/contact',
        variant: 'custom',
        class: 'bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
    }}
    secondaryButton={{
        text: 'View Case Studies',
        href: '/case-studies'
    }}
    variant="gradient-blue"
/>