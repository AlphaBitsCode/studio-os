<script>
    import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
    <title>Fractional CTO & Tech Leadership - AlphaBits</title>
    <meta name="description" content="Expert technical leadership with comprehensive assessments, infrastructure modernization, and strategic guidance for your technology decisions." />
</svelte:head>

<Hero 
    title="Fractional CTO & Tech Leadership" 
    subtitle="Expert technical leadership with comprehensive assessments, infrastructure modernization, and strategic guidance for your technology decisions."
    variant="services"
/>

<!-- CTA Buttons -->
<section class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                Schedule Consultation
            </a>
            <a href="/about" class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center">
                Meet Our Team
            </a>
        </div>
    </div>
</section>

<!-- Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Strategic Technology Leadership</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Whether you're a startup needing technical direction or an established company requiring strategic technology guidance, our fractional CTO services provide the expertise you need without the full-time commitment.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We bring decades of experience in technology leadership, helping organizations make informed decisions about their technical infrastructure, team building, and strategic technology investments.
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
                        <div class="text-sm text-gray-600 dark:text-gray-300">Years Combined Experience</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                        <div class="text-sm text-gray-600 dark:text-gray-300">Companies Advised</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
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
                            <p class="text-sm text-gray-600 dark:text-gray-300">Long-term technology roadmaps aligned with business goals</p>
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
                            <p class="text-sm text-gray-600 dark:text-gray-300">Mentoring and guidance for your development teams</p>
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
                            <p class="text-sm text-gray-600 dark:text-gray-300">Expert evaluation of technical decisions and implementations</p>
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
                            <p class="text-sm text-gray-600 dark:text-gray-300">Objective guidance on technology choices and partnerships</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Core Services -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive technical leadership services tailored to your needs.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Deep-dive Tech Assessments -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Deep-dive Tech Assessments</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Comprehensive evaluation of your current technology stack, architecture, and development processes.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Code quality and architecture review</li>
                    <li>• Security vulnerability assessment</li>
                    <li>• Performance and scalability analysis</li>
                    <li>• Technical debt evaluation</li>
                    <li>• Development process optimization</li>
                    <li>• Technology stack modernization recommendations</li>
                </ul>
            </div>
            
            <!-- IT Infrastructure Modernization -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">IT Infrastructure Modernization</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Strategic planning and execution of infrastructure upgrades and cloud migration initiatives.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Cloud migration strategy and execution</li>
                    <li>• DevOps and CI/CD pipeline implementation</li>
                    <li>• Containerization and orchestration</li>
                    <li>• Monitoring and observability setup</li>
                    <li>• Disaster recovery and backup strategies</li>
                    <li>• Cost optimization and resource management</li>
                </ul>
            </div>
            
            <!-- Budget & Staffing Guidance -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Budget & Staffing Guidance</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Strategic advice on technology investments, team structure, and resource allocation.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
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

<!-- Engagement Models -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Engagement Models</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Flexible engagement options to match your needs and budget.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Strategic Advisory -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-green-500 transition-colors">
                <div class="text-center mb-6">
                    <h3 class="text-xl font-bold mb-2">Strategic Advisory</h3>
                    <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$5K-10K</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">per month</div>
                </div>
                <ul class="space-y-3 mb-6">
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Monthly strategic planning sessions</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Technology roadmap development</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Executive reporting and updates</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Email and phone support</span>
                    </li>
                </ul>
                <div class="text-center">
                    <span class="text-sm text-gray-600 dark:text-gray-300">Best for: Strategic guidance and planning</span>
                </div>
            </div>
            
            <!-- Hands-on Leadership -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-blue-500 hover:border-blue-600 transition-colors relative">
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                </div>
                <div class="text-center mb-6">
                    <h3 class="text-xl font-bold mb-2">Hands-on Leadership</h3>
                    <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$15K-25K</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">per month</div>
                </div>
                <ul class="space-y-3 mb-6">
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Direct team management and mentoring</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Architecture and code reviews</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Project planning and execution</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Regular on-site or remote presence</span>
                    </li>
                </ul>
                <div class="text-center">
                    <span class="text-sm text-gray-600 dark:text-gray-300">Best for: Active technical leadership</span>
                </div>
            </div>
            
            <!-- Project-based -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-teal-500 transition-colors">
                <div class="text-center mb-6">
                    <h3 class="text-xl font-bold mb-2">Project-based</h3>
                    <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">Custom</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">pricing</div>
                </div>
                <ul class="space-y-3 mb-6">
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Technology assessments</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Infrastructure modernization</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Team training and development</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-sm">Specific deliverable-focused work</span>
                    </li>
                </ul>
                <div class="text-center">
                    <span class="text-sm text-gray-600 dark:text-gray-300">Best for: Specific initiatives and assessments</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Success Stories -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real results from our fractional CTO engagements.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                        <span class="text-green-600 dark:text-green-400 font-bold">S</span>
                    </div>
                    <div>
                        <h3 class="font-semibold">SaaS Startup</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Series A Company</p>
                    </div>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    "Our fractional CTO helped us scale from 10 to 100 users to over 10,000 users without major infrastructure issues. The strategic guidance on technology choices saved us months of development time."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-green-600 dark:text-green-400">10x</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">User Growth</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">40%</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">Cost Savings</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">6mo</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">Time Saved</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                        <span class="text-blue-600 dark:text-blue-400 font-bold">M</span>
                    </div>
                    <div>
                        <h3 class="font-semibold">Manufacturing Company</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Mid-size Enterprise</p>
                    </div>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    "The technology assessment revealed critical security vulnerabilities and performance bottlenecks. The modernization plan helped us avoid a potential disaster and improved our system performance by 300%."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-green-600 dark:text-green-400">300%</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">Performance Gain</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">Zero</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">Security Incidents</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">Uptime</div>
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
            <p class="text-lg text-gray-600 dark:text-gray-300">
                Our proven process ensures we understand your needs and deliver maximum value.
            </p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-green-600 dark:text-green-400 font-bold">1</span>
                </div>
                <h3 class="font-semibold mb-2">Initial Consultation</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Free 30-minute discovery call to understand your challenges</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-blue-600 dark:text-blue-400 font-bold">2</span>
                </div>
                <h3 class="font-semibold mb-2">Assessment</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Comprehensive evaluation of your current technology landscape</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-teal-600 dark:text-teal-400 font-bold">3</span>
                </div>
                <h3 class="font-semibold mb-2">Strategy Development</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Custom roadmap and engagement plan tailored to your needs</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-purple-600 dark:text-purple-400 font-bold">4</span>
                </div>
                <h3 class="font-semibold mb-2">Execution</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Ongoing leadership and support to achieve your technology goals</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready for Strategic Technology Leadership?
        </h2>
        <p class="text-xl mb-8">
            Let's discuss how our fractional CTO services can accelerate your technology initiatives.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://cal.com/alphabits/mini" target="_blank" rel="noopener noreferrer" class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book CTO Assessment (30 min)
            </a>
            <a href="/about" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Meet Our Leadership Team
            </a>
        </div>
    </div>
</section>