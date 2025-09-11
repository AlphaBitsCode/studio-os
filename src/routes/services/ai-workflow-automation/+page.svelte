<script>
    import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
    <title>AI Workflow Automation - AlphaBits</title>
    <meta name="description" content="Transform your business operations with intelligent AI agents that automate complex workflows across all departments, reducing manual work by up to 80% while improving accuracy and response times." />
</svelte:head>

<!-- Animated Hero Section -->
<section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    AI Workflow
                    <span class="text-blue-600">Automation</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                    Transform your business operations with intelligent AI agents that automate complex workflows across all departments. Reduce manual work by up to 80% while improving accuracy and response times.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                        Start Automation
                    </a>
                    <a href="/case-studies" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                        View AI Demos
                    </a>
                </div>
            </div>
            
            <!-- Animated SVG -->
            <div class="flex justify-center">
                <svg width="500" height="400" viewBox="0 0 500 400" class="w-full max-w-lg">
                    <!-- Background gradient -->
                    <defs>
                        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#dbeafe;stop-opacity:0.4" />
                            <stop offset="100%" style="stop-color:#bfdbfe;stop-opacity:0.2" />
                        </linearGradient>
                        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#2563eb" />
                            <stop offset="100%" style="stop-color:#3b82f6" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/> 
                            </feMerge>
                        </filter>
                    </defs>
                    
                    <!-- Background circles -->
                    <circle cx="250" cy="200" r="180" fill="url(#aiGradient)">
                        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="250" cy="200" r="140" fill="#dbeafe" opacity="0.5">
                        <animate attributeName="r" values="140;150;140" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    <!-- Central AI Brain -->
                    <g transform="translate(250,200)">
                        <!-- Main brain structure -->
                        <ellipse cx="0" cy="-5" rx="40" ry="35" fill="url(#brainGradient)" filter="url(#glow)">
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                        </ellipse>
                        
                        <!-- Brain neural network -->
                        <g stroke="#60a5fa" stroke-width="1.5" fill="none" opacity="0.7">
                            <!-- Neural connections -->
                            <path d="M -20,-15 Q 0,-25 20,-15">
                                <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="2s" repeatCount="indefinite"/>
                            </path>
                            <path d="M -25,0 Q 0,-10 25,0">
                                <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="2.5s" repeatCount="indefinite"/>
                            </path>
                            <path d="M -20,15 Q 0,25 20,15">
                                <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="3s" repeatCount="indefinite"/>
                            </path>
                        </g>
                        
                        <!-- Neural nodes -->
                        <circle cx="-20" cy="-15" r="3" fill="#60a5fa">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="20" cy="-15" r="3" fill="#60a5fa">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                        </circle>
                        <circle cx="-25" cy="0" r="3" fill="#60a5fa">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s"/>
                        </circle>
                        <circle cx="25" cy="0" r="3" fill="#60a5fa">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1.5s"/>
                        </circle>
                        <circle cx="-20" cy="15" r="3" fill="#60a5fa">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                        </circle>
                        <circle cx="20" cy="15" r="3" fill="#60a5fa">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.8s"/>
                        </circle>
                        
                        <!-- AI processing indicator -->
                        <text x="0" y="5" text-anchor="middle" font-size="12" fill="white" font-weight="bold">AI</text>
                    </g>
                    
                    <!-- Department Workflows -->
                    <!-- Sales Department -->
                    <g transform="translate(120,120)">
                        <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#10b981">
                            <animate attributeName="fill" values="#10b981;#059669;#10b981" dur="3s" repeatCount="indefinite"/>
                        </rect>
                        <text x="0" y="5" text-anchor="middle" font-size="10" fill="white">Sales</text>
                        <!-- Data flow to AI -->
                        <circle cx="30" cy="0" r="2" fill="#10b981">
                            <animateTransform attributeName="transform" type="translate" values="0,0;60,40;120,80" dur="4s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                    
                    <!-- HR Department -->
                    <g transform="translate(380,120)">
                        <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#8b5cf6">
                            <animate attributeName="fill" values="#8b5cf6;#7c3aed;#8b5cf6" dur="3.5s" repeatCount="indefinite"/>
                        </rect>
                        <text x="0" y="5" text-anchor="middle" font-size="10" fill="white">HR</text>
                        <!-- Data flow to AI -->
                        <circle cx="-30" cy="0" r="2" fill="#8b5cf6">
                            <animateTransform attributeName="transform" type="translate" values="0,0;-60,40;-120,80" dur="4s" repeatCount="indefinite" begin="1s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="1s"/>
                        </circle>
                    </g>
                    
                    <!-- Finance Department -->
                    <g transform="translate(120,280)">
                        <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#f59e0b">
                            <animate attributeName="fill" values="#f59e0b;#d97706;#f59e0b" dur="2.5s" repeatCount="indefinite"/>
                        </rect>
                        <text x="0" y="5" text-anchor="middle" font-size="10" fill="white">Finance</text>
                        <!-- Data flow to AI -->
                        <circle cx="30" cy="0" r="2" fill="#f59e0b">
                            <animateTransform attributeName="transform" type="translate" values="0,0;60,-40;120,-80" dur="4s" repeatCount="indefinite" begin="2s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="2s"/>
                        </circle>
                    </g>
                    
                    <!-- Support Department -->
                    <g transform="translate(380,280)">
                        <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#ef4444">
                            <animate attributeName="fill" values="#ef4444;#dc2626;#ef4444" dur="4s" repeatCount="indefinite"/>
                        </rect>
                        <text x="0" y="5" text-anchor="middle" font-size="10" fill="white">Support</text>
                        <!-- Data flow to AI -->
                        <circle cx="-30" cy="0" r="2" fill="#ef4444">
                            <animateTransform attributeName="transform" type="translate" values="0,0;-60,-40;-120,-80" dur="4s" repeatCount="indefinite" begin="3s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="3s"/>
                        </circle>
                    </g>
                    
                    <!-- Automated Actions -->
                    <!-- Email Automation -->
                    <g transform="translate(150,50)">
                        <rect x="-15" y="-8" width="30" height="16" rx="3" fill="#06b6d4"/>
                        <text x="0" y="3" text-anchor="middle" font-size="8" fill="white">Email</text>
                        <animateTransform attributeName="transform" type="translate" values="150,50;155,45;150,50" dur="2s" repeatCount="indefinite"/>
                    </g>
                    
                    <!-- Report Generation -->
                    <g transform="translate(350,50)">
                        <rect x="-15" y="-8" width="30" height="16" rx="3" fill="#14b8a6"/>
                        <text x="0" y="3" text-anchor="middle" font-size="8" fill="white">Reports</text>
                        <animateTransform attributeName="transform" type="translate" values="350,50;345,45;350,50" dur="2.5s" repeatCount="indefinite"/>
                    </g>
                    
                    <!-- Task Assignment -->
                    <g transform="translate(150,350)">
                        <rect x="-15" y="-8" width="30" height="16" rx="3" fill="#a855f7"/>
                        <text x="0" y="3" text-anchor="middle" font-size="8" fill="white">Tasks</text>
                        <animateTransform attributeName="transform" type="translate" values="150,350;155,355;150,350" dur="3s" repeatCount="indefinite"/>
                    </g>
                    
                    <!-- Notifications -->
                    <g transform="translate(350,350)">
                        <rect x="-15" y="-8" width="30" height="16" rx="3" fill="#f97316"/>
                        <text x="0" y="3" text-anchor="middle" font-size="8" fill="white">Alerts</text>
                        <animateTransform attributeName="transform" type="translate" values="350,350;345,355;350,350" dur="1.5s" repeatCount="indefinite"/>
                    </g>
                    
                    <!-- Connection lines from AI to actions -->
                    <g stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.4">
                        <line x1="250" y1="165" x2="165" y2="58"/>
                        <line x1="250" y1="165" x2="335" y2="58"/>
                        <line x1="250" y1="235" x2="165" y2="342"/>
                        <line x1="250" y1="235" x2="335" y2="342"/>
                    </g>
                    
                    <!-- Efficiency indicators -->
                    <g>
                        <circle cx="80" cy="80" r="3" fill="#10b981" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="420" cy="100" r="3" fill="#3b82f6" opacity="0.8">
                            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="100" cy="320" r="3" fill="#8b5cf6" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="400" cy="300" r="3" fill="#f59e0b" opacity="0.8">
                            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                    
                    <!-- Workflow arrows -->
                    <g fill="#3b82f6" opacity="0.6">
                        <!-- Curved arrows showing workflow -->
                        <path d="M 180 140 Q 215 170 250 165">
                            <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite"/>
                        </path>
                        <path d="M 320 140 Q 285 170 250 165">
                            <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite" begin="1s"/>
                        </path>
                    </g>
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
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Intelligent Workflow Automation</h2>
                <p class="text-lg text-gray-600 mb-6">
                    Revolutionize your business operations with AI-powered workflow automation that handles complex, multi-step processes across all departments. Our intelligent agents learn from your existing workflows and continuously optimize for maximum efficiency.
                </p>
                <p class="text-lg text-gray-600 mb-8">
                    From customer support and sales processes to HR management and financial operations, our AI solutions integrate seamlessly with your existing systems while providing unprecedented automation capabilities.
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-2">80%</div>
                        <div class="text-sm text-gray-600">Reduction in Manual Work</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-green-600 mb-2">24/7</div>
                        <div class="text-sm text-gray-600">Automated Operations</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-6">Automation Benefits</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Cross-Department Integration</h4>
                            <p class="text-sm text-gray-600">Seamless workflows connecting Sales, HR, Finance, and Support</p>
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
                            <p class="text-sm text-gray-600">AI agents that learn and adapt to your business rules</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Real-time Processing</h4>
                            <p class="text-sm text-gray-600">Instant responses and automated actions 24/7</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Scalable Solutions</h4>
                            <p class="text-sm text-gray-600">Grows with your business without additional overhead</p>
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
            <h2 class="text-gray-900 text-3xl md:text-4xl font-bold mb-4">AI Automation Services</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI-powered automation solutions for every aspect of your business.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Customer Support Automation -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Customer Support Automation</h3>
                <p class="text-gray-600 mb-4">
                    Intelligent AI agents that handle customer inquiries, ticket routing, and resolution tracking with human-like understanding.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Multi-channel support (email, chat, phone)</li>
                    <li>• Intelligent ticket classification and routing</li>
                    <li>• Automated response generation</li>
                    <li>• Escalation management and follow-ups</li>
                    <li>• Customer satisfaction tracking</li>
                    <li>• Knowledge base integration and updates</li>
                </ul>
            </div>
            
            <!-- Sales Process Automation -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Sales Process Automation</h3>
                <p class="text-gray-600 mb-4">
                    End-to-end sales automation from lead qualification to deal closure, with intelligent nurturing and follow-up sequences.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Lead scoring and qualification</li>
                    <li>• Automated email sequences and nurturing</li>
                    <li>• Meeting scheduling and calendar management</li>
                    <li>• Proposal generation and contract processing</li>
                    <li>• Pipeline management and forecasting</li>
                    <li>• Performance analytics and reporting</li>
                </ul>
            </div>
            
            <!-- HR & Administrative Automation -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">HR & Administrative Automation</h3>
                <p class="text-gray-600 mb-4">
                    Streamline HR processes from recruitment to employee management with intelligent automation and decision support.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Resume screening and candidate matching</li>
                    <li>• Interview scheduling and coordination</li>
                    <li>• Employee onboarding workflows</li>
                    <li>• Leave management and approvals</li>
                    <li>• Performance review automation</li>
                    <li>• Compliance tracking and reporting</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- AI Platforms & Technologies -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">AI Platforms & Technologies</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We leverage cutting-edge AI platforms and technologies to build robust, scalable automation solutions.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- MindStudio -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">MindStudio</h3>
                <p class="text-sm text-gray-600 mb-4">Visual AI workflow builder for complex multi-step automations.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Visual workflow design</li>
                    <li>• Multi-model AI integration</li>
                    <li>• Custom AI agents</li>
                </ul>
            </div>
            
            <!-- Dify.ai -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Dify.ai</h3>
                <p class="text-sm text-gray-600 mb-4">Enterprise-grade LLM application development platform.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• LLM orchestration</li>
                    <li>• RAG implementation</li>
                    <li>• API integrations</li>
                </ul>
            </div>
            
            <!-- Local LLM Deployment -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Local LLM Deployment</h3>
                <p class="text-sm text-gray-600 mb-4">On-premises AI models for maximum security and control.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Data privacy protection</li>
                    <li>• Custom model training</li>
                    <li>• Offline capabilities</li>
                </ul>
            </div>
            
            <!-- Cloud AI Services -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Cloud AI Services</h3>
                <p class="text-sm text-gray-600 mb-4">Integration with leading cloud AI platforms and APIs.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• OpenAI GPT integration</li>
                    <li>• Azure Cognitive Services</li>
                    <li>• Google Cloud AI</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Success Stories -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-gray-900 text-3xl md:text-4xl font-bold mb-4">Automation Success Stories</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from our AI workflow automation implementations.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span class="text-blue-600 font-bold">T</span>
                    </div>
                    <div>
                        <h3 class="text-gray-900 font-bold">Tech Startup</h3>
                        <p class="text-sm text-gray-600">SaaS Platform</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    "AI workflow automation transformed our customer support operations. Response times improved by 500%, customer satisfaction increased to 95%, and our support team can now focus on complex issues while AI handles routine inquiries."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-blue-600">500%</div>
                        <div class="text-xs text-gray-500">Faster Response</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-green-600">95%</div>
                        <div class="text-xs text-gray-500">Satisfaction Rate</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600">75%</div>
                        <div class="text-xs text-gray-500">Cost Reduction</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <span class="text-green-600 font-bold">E</span>
                    </div>
                    <div>
                        <h3 class="text-gray-900 font-bold">E-commerce Company</h3>
                        <p class="text-sm text-gray-600">Online Retail</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    "Sales process automation increased our conversion rates by 300% and reduced sales cycle time by 60%. AI agents now handle lead qualification, follow-ups, and initial customer interactions, allowing our sales team to focus on closing deals."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-blue-600">300%</div>
                        <div class="text-xs text-gray-500">Higher Conversion</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-green-600">60%</div>
                        <div class="text-xs text-gray-500">Shorter Cycle</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600">24/7</div>
                        <div class="text-xs text-gray-500">Availability</div>
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
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Start Your AI Automation Journey</h2>
            <p class="text-lg text-gray-600">
                Our proven methodology ensures successful AI implementation with measurable results.
            </p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-blue-600 font-bold">1</span>
                </div>
                <h3 class="font-semibold mb-2">Process Analysis</h3>
                <p class="text-sm text-gray-600">Comprehensive evaluation of your current workflows and automation opportunities</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-green-600 font-bold">2</span>
                </div>
                <h3 class="font-semibold mb-2">AI Strategy Design</h3>
                <p class="text-sm text-gray-600">Custom automation strategy with AI agent design and integration planning</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-purple-600 font-bold">3</span>
                </div>
                <h3 class="font-semibold mb-2">Implementation</h3>
                <p class="text-sm text-gray-600">Phased deployment with testing, training, and continuous optimization</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-orange-600 font-bold">4</span>
                </div>
                <h3 class="font-semibold mb-2">Optimization</h3>
                <p class="text-sm text-gray-600">Ongoing monitoring, performance tuning, and expansion of automation capabilities</p>
            </div>
        </div>
    </div>
</section>

<CTA 
    title="Ready to Automate Your Workflows with AI?"
    description="Let's discuss how AI workflow automation can transform your business operations and boost productivity."
    primaryButton={{
        text: 'Schedule AI Consultation',
        href: 'http://cal.com/alphabits/mini',
        variant: 'custom',
        class: 'bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
    }}
    secondaryButton={{
        text: 'View AI Demos',
        href: '/case-studies'
    }}
    variant="gradient-blue"
/>