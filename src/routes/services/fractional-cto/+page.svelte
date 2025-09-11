<script>
    import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
    <title>Fractional CTO & Tech Leadership - AlphaBits</title>
    <meta name="description" content="Expert technical leadership with comprehensive assessments, infrastructure modernization, and strategic guidance for your technology decisions." />
</svelte:head>

<!-- Animated Hero Section -->
<section class="py-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Fractional CTO & 
                    <span class="text-green-600">Tech Leadership</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                    Expert technical leadership with comprehensive assessments, infrastructure modernization, and strategic guidance for your technology decisions.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" class="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                        Schedule Consultation
                    </a>
                    <a href="/about" class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center">
                        Meet Our Team
                    </a>
                </div>
            </div>
            
            <!-- Animated SVG -->
            <div class="flex justify-center">
                <svg width="500" height="400" viewBox="0 0 500 400" class="w-full max-w-lg">
                    <!-- Background circles -->
                    <circle cx="250" cy="200" r="180" fill="#f0f9ff" opacity="0.5">
                        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="250" cy="200" r="140" fill="#dbeafe" opacity="0.7">
                        <animate attributeName="r" values="140;150;140" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    <!-- Central figure (CTO) -->
                    <circle cx="250" cy="180" r="25" fill="#3b82f6"/>
                    <rect x="235" y="205" width="30" height="40" rx="5" fill="#1e40af"/>
                    
                    <!-- Tech elements floating around -->
                    <g>
                        <!-- Code brackets -->
                        <text x="180" y="120" font-family="monospace" font-size="24" fill="#059669" opacity="0.8">
                            &lt;/&gt;
                            <animateTransform attributeName="transform" type="rotate" values="0 180 120;360 180 120" dur="8s" repeatCount="indefinite"/>
                        </text>
                        
                        <!-- Database icon -->
                        <g transform="translate(320,100)">
                            <ellipse cx="0" cy="0" rx="15" ry="5" fill="#7c3aed"/>
                            <rect x="-15" y="0" width="30" height="20" fill="#7c3aed"/>
                            <ellipse cx="0" cy="20" rx="15" ry="5" fill="#7c3aed"/>
                            <animateTransform attributeName="transform" type="translate" values="320,100;330,90;320,100" dur="3s" repeatCount="indefinite"/>
                        </g>
                        
                        <!-- Cloud -->
                        <g transform="translate(150,280)">
                            <circle cx="0" cy="0" r="12" fill="#06b6d4"/>
                            <circle cx="15" cy="-5" r="15" fill="#06b6d4"/>
                            <circle cx="30" cy="0" r="12" fill="#06b6d4"/>
                            <animateTransform attributeName="transform" type="translate" values="150,280;160,270;150,280" dur="5s" repeatCount="indefinite"/>
                        </g>
                        
                        <!-- Gear -->
                        <g transform="translate(350,250)">
                            <circle cx="0" cy="0" r="15" fill="none" stroke="#f59e0b" stroke-width="3"/>
                            <circle cx="0" cy="0" r="5" fill="#f59e0b"/>
                            <rect x="-2" y="-18" width="4" height="6" fill="#f59e0b"/>
                            <rect x="-2" y="12" width="4" height="6" fill="#f59e0b"/>
                            <rect x="-18" y="-2" width="6" height="4" fill="#f59e0b"/>
                            <rect x="12" y="-2" width="6" height="4" fill="#f59e0b"/>
                            <animateTransform attributeName="transform" type="rotate" values="0 350 250;360 350 250" dur="6s" repeatCount="indefinite"/>
                        </g>
                        
                        <!-- Network nodes -->
                        <g>
                            <circle cx="200" cy="300" r="4" fill="#ef4444">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="300" cy="320" r="4" fill="#ef4444">
                                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <line x1="200" y1="300" x2="300" y2="320" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
                            <line x1="250" y1="245" x2="200" y2="300" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
                            <line x1="250" y1="245" x2="300" y2="320" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
                        </g>
                    </g>
                    
                    <!-- Floating particles -->
                    <circle cx="100" cy="150" r="2" fill="#10b981" opacity="0.6">
                        <animateTransform attributeName="transform" type="translate" values="0,0;10,-10;0,0" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="400" cy="180" r="2" fill="#3b82f6" opacity="0.6">
                        <animateTransform attributeName="transform" type="translate" values="0,0;-10,10;0,0" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="120" cy="320" r="2" fill="#8b5cf6" opacity="0.6">
                        <animateTransform attributeName="transform" type="translate" values="0,0;15,5;0,0" dur="5s" repeatCount="indefinite"/>
                    </circle>
                </svg>
            </div>
        </div>
    </div>
</section>



<!-- Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Strategic Technology Leadership</h2>
                <p class="text-lg text-gray-600 mb-6">
                    Whether you're a startup needing technical direction or an established company requiring strategic technology guidance, our fractional CTO services provide the expertise you need without the full-time commitment.
                </p>
                <p class="text-lg text-gray-600 mb-8">
                    We bring decades of experience in technology leadership, helping organizations make informed decisions about their technical infrastructure, team building, and strategic technology investments.
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-green-600 mb-2">20+</div>
                        <div class="text-sm text-gray-600">Years Combined Experience</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-2">50+</div>
                        <div class="text-sm text-gray-600">Companies Advised</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-6">What You Get</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Strategic Technology Planning</h4>
                            <p class="text-sm text-gray-600">Long-term technology roadmaps aligned with business goals</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Technical Team Leadership</h4>
                            <p class="text-sm text-gray-600">Mentoring and guidance for your development teams</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Architecture & Design Reviews</h4>
                            <p class="text-sm text-gray-600">Expert evaluation of technical decisions and implementations</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Vendor & Technology Selection</h4>
                            <p class="text-sm text-gray-600">Objective guidance on technology choices and partnerships</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Core Services -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-gray-900 text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technical leadership services tailored to your needs.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Deep-dive Tech Assessments -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Deep-dive Tech Assessments</h3>
                <p class="text-gray-600 mb-4">
                    Comprehensive evaluation of your current technology stack, architecture, and development processes.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Code quality and architecture review</li>
                    <li>• Security vulnerability assessment</li>
                    <li>• Performance and scalability analysis</li>
                    <li>• Technical debt evaluation</li>
                    <li>• Development process optimization</li>
                    <li>• Technology stack modernization recommendations</li>
                </ul>
            </div>
            
            <!-- IT Infrastructure Modernization -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">IT Infrastructure Modernization</h3>
                <p class="text-gray-600 mb-4">
                    Strategic planning and execution of infrastructure upgrades and cloud migration initiatives.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Cloud migration strategy and execution</li>
                    <li>• DevOps and CI/CD pipeline implementation</li>
                    <li>• Containerization and orchestration</li>
                    <li>• Monitoring and observability setup</li>
                    <li>• Disaster recovery and backup strategies</li>
                    <li>• Cost optimization and resource management</li>
                </ul>
            </div>
            
            <!-- Budget & Staffing Guidance -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Budget & Staffing Guidance</h3>
                <p class="text-gray-600 mb-4">
                    Strategic advice on technology investments, team structure, and resource allocation.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Technology budget planning and optimization</li>
                    <li>• Team structure and hiring strategies</li>
                    <li>• Skill gap analysis and training plans</li>
                    <li>• Vendor evaluation and contract negotiation</li>
                    <li>• ROI analysis for technology investments</li>
                    <li>• Resource allocation and priority setting</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Engagement Models Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement Models</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We offer multiple engagement approaches to match your specific needs, timeline, and budget. From strategic advisory to hands-on development teams.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Project-based -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Project-based</h3>
                <p class="text-sm text-gray-600 mb-4">Fixed-scope projects with defined deliverables and timelines.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Technology assessments</li>
                    <li>• Infrastructure modernization</li>
                    <li>• Team training</li>
                </ul>
            </div>
            
            <!-- Strategic Advisory -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Strategic Advisory</h3>
                <p class="text-sm text-gray-600 mb-4">Ongoing strategic guidance and technology leadership.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Technology roadmaps</li>
                    <li>• Executive reporting</li>
                    <li>• Strategic planning</li>
                </ul>
            </div>
            
            <!-- Project + Rev Share -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Project + Rev Share</h3>
                <p class="text-sm text-gray-600 mb-4">Partnership model with shared success and ongoing revenue.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Reduced upfront costs</li>
                    <li>• Shared success model</li>
                    <li>• Long-term partnership</li>
                </ul>
            </div>
            
            <!-- B.O.T Offshore Team -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">B.O.T Offshore Team</h3>
                <p class="text-sm text-gray-600 mb-4">Build-Operate-Transfer model with dedicated Vietnam-based team.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Dedicated offshore team</li>
                    <li>• Cost-effective scaling</li>
                    <li>• Knowledge transfer</li>
                </ul>
            </div>
        </div>
        
        <div class="text-center mt-12">
            <a href="/pricing" class="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Detailed Pricing & Models
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</section>

<!-- Success Stories -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-gray-900 text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from our fractional CTO engagements.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <span class="text-green-600 font-bold">S</span>
                    </div>
                    <div>
                        <h3 class="text-gray-900 font-bold">SaaS Startup</h3>
                        <p class="text-sm text-gray-600">Series A Company</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    "Our fractional CTO helped us scale from 10 to 100 users to over 10,000 users without major infrastructure issues. The strategic guidance on technology choices saved us months of development time."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-green-600">10x</div>
                        <div class="text-xs text-gray-500">User Growth</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-blue-600">40%</div>
                        <div class="text-xs text-gray-500">Cost Savings</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600">6mo</div>
                        <div class="text-xs text-gray-500">Time Saved</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span class="text-blue-600 font-bold">M</span>
                    </div>
                    <div>
                        <h3 class="text-gray-900 font-bold">Manufacturing Company</h3>
                        <p class="text-sm text-gray-600">Mid-size Enterprise</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    "The technology assessment revealed critical security vulnerabilities and performance bottlenecks. The modernization plan helped us avoid a potential disaster and improved our system performance by 300%."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-green-600">300%</div>
                        <div class="text-xs text-gray-500">Performance Gain</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-blue-600">Zero</div>
                        <div class="text-xs text-gray-500">Security Incidents</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600">99.9%</div>
                        <div class="text-xs text-gray-500">Uptime</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Getting Started -->
<section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Getting Started</h2>
            <p class="text-lg text-gray-600">
                Our proven process ensures we understand your needs and deliver maximum value.
            </p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-green-600 font-bold">1</span>
                </div>
                <h3 class="font-semibold mb-2">Initial Consultation</h3>
                <p class="text-sm text-gray-600">Free 30-minute discovery call to understand your challenges</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-blue-600 font-bold">2</span>
                </div>
                <h3 class="font-semibold mb-2">Assessment</h3>
                <p class="text-sm text-gray-600">Comprehensive evaluation of your current technology landscape</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-teal-600 font-bold">3</span>
                </div>
                <h3 class="font-semibold mb-2">Strategy Development</h3>
                <p class="text-sm text-gray-600">Custom roadmap and engagement plan tailored to your needs</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-purple-600 font-bold">4</span>
                </div>
                <h3 class="font-semibold mb-2">Execution</h3>
                <p class="text-sm text-gray-600">Ongoing leadership and support to achieve your technology goals</p>
            </div>
        </div>
    </div>
</section>

<CTA 
    title="Ready for Strategic Technology Leadership?"
    description="Let's discuss how our fractional CTO services can accelerate your technology initiatives."
    primaryButton={{
        text: 'Book CTO Assessment (30 min)',
        href: 'http://cal.com/alphabits/mini',
        variant: 'custom',
        class: 'bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
    }}
    secondaryButton={{
        text: 'Meet Our Leadership Team',
        href: '/about'
    }}
    variant="gradient-blue"
/>