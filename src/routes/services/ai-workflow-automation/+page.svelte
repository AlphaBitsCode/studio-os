<script>
    import Hero from '$lib/components/Hero.svelte';
    import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
    <title>AI Workflow Automation - AlphaBits</title>
    <meta name="description" content="Streamline your operations with intelligent AI agents and IoT workflow automation across all departments." />
</svelte:head>

<Hero 
    title="AI Workflow Automation" 
    subtitle="Streamline your operations with intelligent AI agents and IoT workflow automation across all departments."
    variant="services"
/>

<!-- CTA Buttons -->
<section class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                Get Started
            </a>
            <a href="/case-studies/coffee-chain-transformation" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                View Case Study
            </a>
        </div>
    </div>
</section>

<!-- Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Transform Your Operations</h2>
                <p class="text-lg text-gray-700 mb-6">
                    Our AI Workflow Automation solutions combine intelligent AI agents with IoT integration to create seamless, automated processes that work across your entire organization. From customer support to financial operations, we help you eliminate manual tasks and focus on what matters most.
                </p>
                <p class="text-lg text-gray-700 mb-8">
                    By leveraging cutting-edge technologies like Node-RED, intelligent decision trees, and real-time data processing, we create workflows that adapt to your business needs and scale with your growth.
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-2">85%</div>
                        <div class="text-sm text-gray-700">Average Efficiency Gain</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-green-600 mb-2">60%</div>
                        <div class="text-sm text-gray-700">Cost Reduction</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-6">Key Benefits</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">24/7 Automated Operations</h4>
                            <p class="text-sm text-gray-700">Continuous workflow execution without human intervention</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Intelligent Decision Making</h4>
                            <p class="text-sm text-gray-700">AI agents that learn and adapt to your business rules</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Cross-Department Integration</h4>
                            <p class="text-sm text-gray-700">Seamless workflows that span multiple departments</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Real-time Monitoring</h4>
                            <p class="text-sm text-gray-700">Complete visibility into all automated processes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Core Technologies -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Core Technologies</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Powered by cutting-edge AI and automation technologies.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg ">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">AI Agents</h3>
                <p class="text-gray-700 mb-4">
                    Intelligent agents that can understand context, make decisions, and execute complex workflows autonomously.
                </p>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Natural language processing</li>
                    <li>• Decision tree automation</li>
                    <li>• Learning and adaptation</li>
                    <li>• Multi-modal interactions</li>
                </ul>
            </div>
            
            <div class="bg-white p-6 rounded-lg ">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">IoT Integration</h3>
                <p class="text-gray-700 mb-4">
                    Seamless integration with IoT devices and sensors to create responsive, data-driven workflows.
                </p>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Sensor data processing</li>
                    <li>• Device control automation</li>
                    <li>• Real-time monitoring</li>
                    <li>• Edge computing capabilities</li>
                </ul>
            </div>
            
            <div class="bg-white p-6 rounded-lg ">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Node-RED Workflows</h3>
                <p class="text-gray-700 mb-4">
                    Visual workflow programming that makes complex automation accessible and maintainable.
                </p>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Visual flow programming</li>
                    <li>• Drag-and-drop interface</li>
                    <li>• Extensive node library</li>
                    <li>• Custom node development</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Department Applications -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Department Applications</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Tailored automation solutions for every department in your organization.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Customer Support -->
            <div class="bg-white p-6 rounded-lg  hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Customer Support</h3>
                <p class="text-gray-700 mb-4">
                    Intelligent ticket routing, automated responses, and escalation management.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                    <li>• Automated ticket classification</li>
                    <li>• Intelligent response generation</li>
                    <li>• Priority-based routing</li>
                    <li>• Customer satisfaction tracking</li>
                    <li>• Knowledge base integration</li>
                </ul>
            </div>
            
            <!-- Sales -->
            <div class="bg-white p-6 rounded-lg  hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Sales</h3>
                <p class="text-gray-700 mb-4">
                    Lead qualification, pipeline management, and automated follow-up sequences.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                    <li>• Lead scoring and qualification</li>
                    <li>• Automated follow-up campaigns</li>
                    <li>• Pipeline stage automation</li>
                    <li>• Quote generation and approval</li>
                    <li>• Performance analytics</li>
                </ul>
            </div>
            
            <!-- Marketing -->
            <div class="bg-white p-6 rounded-lg  hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Marketing</h3>
                <p class="text-gray-700 mb-4">
                    Campaign automation, content personalization, and performance optimization.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                    <li>• Multi-channel campaign automation</li>
                    <li>• Dynamic content personalization</li>
                    <li>• A/B testing automation</li>
                    <li>• Social media scheduling</li>
                    <li>• ROI tracking and optimization</li>
                </ul>
            </div>
            
            <!-- HR -->
            <div class="bg-white p-6 rounded-lg  hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Human Resources</h3>
                <p class="text-gray-700 mb-4">
                    Recruitment automation, employee onboarding, and performance management.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                    <li>• Resume screening and ranking</li>
                    <li>• Automated interview scheduling</li>
                    <li>• Employee onboarding workflows</li>
                    <li>• Performance review automation</li>
                    <li>• Compliance tracking</li>
                </ul>
            </div>
            
            <!-- Financial/Accounting -->
            <div class="bg-white p-6 rounded-lg  hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Financial/Accounting</h3>
                <p class="text-gray-700 mb-4">
                    Invoice processing, expense management, and financial reporting automation.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                    <li>• Automated invoice processing</li>
                    <li>• Expense report validation</li>
                    <li>• Financial report generation</li>
                    <li>• Budget monitoring and alerts</li>
                    <li>• Compliance and audit trails</li>
                </ul>
            </div>
            
            <!-- Management -->
            <div class="bg-white p-6 rounded-lg  hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Management</h3>
                <p class="text-gray-700 mb-4">
                    Executive dashboards, KPI monitoring, and strategic decision support.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                    <li>• Real-time KPI dashboards</li>
                    <li>• Automated reporting schedules</li>
                    <li>• Performance trend analysis</li>
                    <li>• Strategic alert systems</li>
                    <li>• Decision support analytics</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Implementation Process -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl text-white md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p class="text-lg text-gray-100 dark:text-gray-300 max-w-2xl mx-auto">
                Our proven methodology ensures successful automation deployment.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">1</span>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Discovery & Analysis</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive assessment of current processes and automation opportunities
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">2</span>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Design & Planning</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Custom workflow design and implementation roadmap creation
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">3</span>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Development & Testing</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    AI agent development, workflow creation, and comprehensive testing
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">4</span>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Deployment & Support</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Production deployment, team training, and ongoing optimization
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ROI Calculator -->
<section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-4">Calculate Your ROI</h2>
                <p class="text-lg text-gray-600">
                    See how much you could save with AI workflow automation.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40 hrs/week</div>
                    <div class="text-sm text-gray-60">Average time saved per employee</div>
                </div>
                <div>
                    <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$50K/year</div>
                    <div class="text-sm text-gray-600">Typical cost savings per department</div>
                </div>
                <div>
                    <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">6 months</div>
                    <div class="text-sm text-gray-600">Average payback period</div>
                </div>
            </div>
            
            <div class="text-center mt-8">
                <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Your Custom ROI Analysis
                </a>
            </div>
        </div>
    </div>
</section>

<CTA 
    title="Ready to Automate Your Workflows?"
    description="Let's discuss how AI workflow automation can transform your business operations."
    primaryButton={{
        text: 'Schedule a Consultation',
        href: '/contact'
    }}
    secondaryButton={{
        text: 'View Success Story',
        href: '/case-studies/coffee-chain-transformation'
    }}
    variant="gradient-blue"
/>