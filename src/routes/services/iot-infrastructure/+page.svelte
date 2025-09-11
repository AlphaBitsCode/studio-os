<script>
    import CTA from '$lib/components/CTA.svelte';
    import SEOHead from '$lib/components/SEOHead.svelte';
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "IoT Infrastructure Solutions",
        "description": "Build comprehensive IoT ecosystems that connect, monitor, and control your physical assets. From sensor networks to real-time dashboards, we create intelligent infrastructure that drives operational efficiency.",
        "provider": {
            "@type": "Organization",
            "name": "AlphaBits",
            "url": "https://alphabits.team"
        },
        "serviceType": "IoT Infrastructure Development",
        "category": "IoT & Infrastructure Services",
        "offers": {
            "@type": "Offer",
            "description": "IoT sensor networks, device management, and real-time monitoring systems",
            "seller": {
                "@type": "Organization",
                "name": "AlphaBits"
            }
        }
    };
</script>

<SEOHead 
    title="IoT Infrastructure Solutions - AlphaBits | Smart Sensor Networks & Monitoring"
    description="Build comprehensive IoT ecosystems that connect, monitor, and control your physical assets. From sensor networks to real-time dashboards, we create intelligent infrastructure that drives operational efficiency."
    keywords="IoT infrastructure, sensor networks, IoT monitoring, smart devices, industrial IoT, IoT dashboard, device management, real-time monitoring, IoT analytics"
    canonicalUrl="https://alphabits.team/services/iot-infrastructure"
    ogImage="https://alphabits.team/alphabits_cover.png"
    ogType="article"
    articleSection="Services"
    {structuredData}
/>

<!-- Animated Hero Section -->
<section class="py-20 bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    IoT
                    <span class="text-teal-600">Infrastructure</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                    Build comprehensive IoT ecosystems that connect, monitor, and control your physical assets. From sensor networks to real-time dashboards, we create intelligent infrastructure that drives operational efficiency and data-driven insights.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" class="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center">
                        Build IoT Solution
                    </a>
                    <a href="/case-studies" class="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors text-center">
                        View IoT Demos
                    </a>
                </div>
            </div>
            
            <!-- Animated SVG -->
            <div class="flex justify-center">
                <svg width="500" height="400" viewBox="0 0 500 400" class="w-full max-w-lg">
                    <!-- Background gradient -->
                    <defs>
                        <linearGradient id="iotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#a7f3d0;stop-opacity:0.4" />
                            <stop offset="100%" style="stop-color:#6ee7b7;stop-opacity:0.2" />
                        </linearGradient>
                        <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#0d9488" />
                            <stop offset="100%" style="stop-color:#14b8a6" />
                        </linearGradient>
                        <radialGradient id="signalGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:0.8" />
                            <stop offset="100%" style="stop-color:#14b8a6;stop-opacity:0.1" />
                        </radialGradient>
                    </defs>
                    
                    <!-- Background circles -->
                    <circle cx="250" cy="200" r="180" fill="url(#iotGradient)">
                        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="250" cy="200" r="140" fill="#a7f3d0" opacity="0.5">
                        <animate attributeName="r" values="140;150;140" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    <!-- Central IoT Hub -->
                    <g transform="translate(250,200)">
                        <!-- Main hub -->
                        <rect x="-25" y="-15" width="50" height="30" rx="8" fill="url(#hubGradient)">
                            <animate attributeName="fill" values="url(#hubGradient);#0f766e;url(#hubGradient)" dur="2s" repeatCount="indefinite"/>
                        </rect>
                        <text x="0" y="5" text-anchor="middle" font-size="10" fill="white" font-weight="bold">IoT Hub</text>
                        
                        <!-- Hub antennas -->
                        <rect x="-2" y="-25" width="4" height="10" fill="#14b8a6"/>
                        <circle cx="0" cy="-30" r="3" fill="#14b8a6">
                            <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
                        </circle>
                        
                        <!-- Signal waves -->
                        <circle cx="0" cy="0" r="35" fill="none" stroke="#14b8a6" stroke-width="2" opacity="0.6">
                            <animate attributeName="r" values="35;60;35" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="0" cy="0" r="45" fill="none" stroke="#0d9488" stroke-width="1.5" opacity="0.4">
                            <animate attributeName="r" values="45;70;45" dur="3.5s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                    
                    <!-- IoT Sensors and Devices -->
                    <!-- Temperature Sensor -->
                    <g transform="translate(120,120)">
                        <circle cx="0" cy="0" r="12" fill="#ef4444">
                            <animate attributeName="fill" values="#ef4444;#dc2626;#ef4444" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <text x="0" y="4" text-anchor="middle" font-size="8" fill="white">T</text>
                        <text x="0" y="-20" text-anchor="middle" font-size="8" fill="#374151">Temp</text>
                        <!-- Data transmission -->
                        <circle cx="15" cy="-15" r="2" fill="#ef4444">
                            <animateTransform attributeName="transform" type="translate" values="0,0;60,40;130,80" dur="4s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite"/>
                        </circle>
                    </g>
                    
                    <!-- Humidity Sensor -->
                    <g transform="translate(380,120)">
                        <circle cx="0" cy="0" r="12" fill="#3b82f6">
                            <animate attributeName="fill" values="#3b82f6;#2563eb;#3b82f6" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <text x="0" y="4" text-anchor="middle" font-size="8" fill="white">H</text>
                        <text x="0" y="-20" text-anchor="middle" font-size="8" fill="#374151">Humidity</text>
                        <!-- Data transmission -->
                        <circle cx="-15" cy="-15" r="2" fill="#3b82f6">
                            <animateTransform attributeName="transform" type="translate" values="0,0;-60,40;-130,80" dur="4s" repeatCount="indefinite" begin="1s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="1s"/>
                        </circle>
                    </g>
                    
                    <!-- Motion Sensor -->
                    <g transform="translate(120,280)">
                        <circle cx="0" cy="0" r="12" fill="#8b5cf6">
                            <animate attributeName="fill" values="#8b5cf6;#7c3aed;#8b5cf6" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <text x="0" y="4" text-anchor="middle" font-size="8" fill="white">M</text>
                        <text x="0" y="25" text-anchor="middle" font-size="8" fill="#374151">Motion</text>
                        <!-- Data transmission -->
                        <circle cx="15" cy="15" r="2" fill="#8b5cf6">
                            <animateTransform attributeName="transform" type="translate" values="0,0;60,-40;130,-80" dur="4s" repeatCount="indefinite" begin="2s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="2s"/>
                        </circle>
                    </g>
                    
                    <!-- Light Sensor -->
                    <g transform="translate(380,280)">
                        <circle cx="0" cy="0" r="12" fill="#f59e0b">
                            <animate attributeName="fill" values="#f59e0b;#d97706;#f59e0b" dur="1.8s" repeatCount="indefinite"/>
                        </circle>
                        <text x="0" y="4" text-anchor="middle" font-size="8" fill="white">L</text>
                        <text x="0" y="25" text-anchor="middle" font-size="8" fill="#374151">Light</text>
                        <!-- Data transmission -->
                        <circle cx="-15" cy="15" r="2" fill="#f59e0b">
                            <animateTransform attributeName="transform" type="translate" values="0,0;-60,-40;-130,-80" dur="4s" repeatCount="indefinite" begin="3s"/>
                            <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="3s"/>
                        </circle>
                    </g>
                    
                    <!-- Smart Actuators -->
                    <!-- Smart Light -->
                    <g transform="translate(150,60)">
                        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#fbbf24">
                            <animate attributeName="fill" values="#fbbf24;#f59e0b;#fbbf24" dur="2s" repeatCount="indefinite"/>
                        </rect>
                        <text x="0" y="-15" text-anchor="middle" font-size="7" fill="#374151">Light</text>
                    </g>
                    
                    <!-- Smart Fan -->
                    <g transform="translate(350,60)">
                        <circle cx="0" cy="0" r="8" fill="#06b6d4">
                            <animateTransform attributeName="transform" type="rotate" values="0;360" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <rect x="-1" y="-6" width="2" height="12" fill="white"/>
                        <rect x="-6" y="-1" width="12" height="2" fill="white"/>
                        <text x="0" y="-15" text-anchor="middle" font-size="7" fill="#374151">Fan</text>
                    </g>
                    
                    <!-- Smart Lock -->
                    <g transform="translate(150,340)">
                        <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#10b981"/>
                        <circle cx="0" cy="0" r="3" fill="white"/>
                        <text x="0" y="20" text-anchor="middle" font-size="7" fill="#374151">Lock</text>
                    </g>
                    
                    <!-- Smart Camera -->
                    <g transform="translate(350,340)">
                        <rect x="-8" y="-6" width="16" height="12" rx="3" fill="#374151"/>
                        <circle cx="3" cy="0" r="4" fill="#6b7280"/>
                        <circle cx="3" cy="0" r="2" fill="#1f2937"/>
                        <text x="0" y="20" text-anchor="middle" font-size="7" fill="#374151">Camera</text>
                    </g>
                    
                    <!-- Connection lines -->
                    <g stroke="#14b8a6" stroke-width="1" fill="none" opacity="0.3">
                        <!-- Sensors to hub -->
                        <line x1="132" y1="132" x2="225" y2="185"/>
                        <line x1="368" y1="132" x2="275" y2="185"/>
                        <line x1="132" y1="268" x2="225" y2="215"/>
                        <line x1="368" y1="268" x2="275" y2="215"/>
                        
                        <!-- Hub to actuators -->
                        <line x1="225" y1="185" x2="158" y2="68"/>
                        <line x1="275" y1="185" x2="342" y2="68"/>
                        <line x1="225" y1="215" x2="158" y2="332"/>
                        <line x1="275" y1="215" x2="342" y2="332"/>
                    </g>
                    
                    <!-- Data Flow Indicators -->
                    <g>
                        <!-- Wireless signals -->
                        <g transform="translate(120,120)">
                            <path d="M 20,0 Q 30,-10 40,0" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.6">
                                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                            </path>
                            <path d="M 25,0 Q 35,-15 45,0" stroke="#ef4444" stroke-width="1" fill="none" opacity="0.4">
                                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                            </path>
                        </g>
                        
                        <g transform="translate(380,120)">
                            <path d="M -20,0 Q -30,-10 -40,0" stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.6">
                                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
                            </path>
                            <path d="M -25,0 Q -35,-15 -45,0" stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.4">
                                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite" begin="0.7s"/>
                            </path>
                        </g>
                    </g>
                    
                    <!-- Status indicators -->
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
                    
                    <!-- Network mesh visualization -->
                    <g stroke="#14b8a6" stroke-width="0.5" fill="none" opacity="0.2">
                        <line x1="120" y1="120" x2="380" y2="120"/>
                        <line x1="120" y1="280" x2="380" y2="280"/>
                        <line x1="120" y1="120" x2="120" y2="280"/>
                        <line x1="380" y1="120" x2="380" y2="280"/>
                        <line x1="120" y1="120" x2="380" y2="280"/>
                        <line x1="380" y1="120" x2="120" y2="280"/>
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
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Complete IoT Ecosystem Solutions</h2>
                <p class="text-lg text-gray-600 mb-6">
                    Transform your physical operations with comprehensive IoT infrastructure that connects every aspect of your business. From environmental monitoring to automated control systems, we create intelligent networks that provide real-time insights and autonomous responses.
                </p>
                <p class="text-lg text-gray-600 mb-8">
                    Our IoT solutions leverage industry-leading technologies like Node-RED for workflow automation, Grafana for visualization, MQTT for reliable messaging, and InfluxDB for time-series data management, creating a robust foundation for your smart operations.
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-teal-600 mb-2">1000+</div>
                        <div class="text-sm text-gray-600">Devices Connected</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-cyan-600 mb-2">99.9%</div>
                        <div class="text-sm text-gray-600">Network Uptime</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-6">IoT Infrastructure Benefits</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Real-time Monitoring</h4>
                            <p class="text-sm text-gray-600">Continuous monitoring of all connected devices and sensors</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Automated Control</h4>
                            <p class="text-sm text-gray-600">Intelligent automation based on sensor data and business rules</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Scalable Architecture</h4>
                            <p class="text-sm text-gray-600">Easily expandable infrastructure that grows with your needs</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Data-Driven Insights</h4>
                            <p class="text-sm text-gray-600">Advanced analytics and reporting for informed decision-making</p>
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
            <h2 class="text-gray-900 text-3xl md:text-4xl font-bold mb-4">IoT Infrastructure Services</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end IoT solutions from sensor deployment to data visualization and automation.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Sensor Networks & Device Management -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Sensor Networks & Device Management</h3>
                <p class="text-gray-600 mb-4">
                    Comprehensive sensor deployment and device management solutions for environmental monitoring, asset tracking, and operational control.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Environmental sensors (temperature, humidity, air quality)</li>
                    <li>• Industrial sensors (pressure, vibration, flow)</li>
                    <li>• Security sensors (motion, door/window, cameras)</li>
                    <li>• Asset tracking and GPS monitoring</li>
                    <li>• Device provisioning and configuration</li>
                    <li>• Remote firmware updates and maintenance</li>
                </ul>
            </div>
            
            <!-- Real-time Data Processing & Analytics -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Real-time Data Processing & Analytics</h3>
                <p class="text-gray-600 mb-4">
                    Advanced data processing pipelines and analytics platforms that turn raw sensor data into actionable business insights.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• InfluxDB time-series database implementation</li>
                    <li>• Real-time data streaming and processing</li>
                    <li>• Grafana dashboards and visualization</li>
                    <li>• Predictive analytics and machine learning</li>
                    <li>• Anomaly detection and alerting</li>
                    <li>• Historical data analysis and reporting</li>
                </ul>
            </div>
            
            <!-- Workflow Automation & Control Systems -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Workflow Automation & Control Systems</h3>
                <p class="text-gray-600 mb-4">
                    Intelligent automation systems that respond to sensor data and execute complex workflows for optimal operational efficiency.
                </p>
                <ul class="text-sm text-gray-500 space-y-2">
                    <li>• Node-RED visual workflow programming</li>
                    <li>• MQTT messaging and device communication</li>
                    <li>• Automated control logic and rule engines</li>
                    <li>• Integration with existing business systems</li>
                    <li>• Mobile and web-based control interfaces</li>
                    <li>• Emergency response and failsafe systems</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Technology Stack -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">IoT Technology Stack</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We leverage proven, enterprise-grade technologies to build robust and scalable IoT infrastructure.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Node-RED -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Node-RED</h3>
                <p class="text-sm text-gray-600 mb-4">Visual programming tool for wiring together IoT devices and services.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Flow-based programming</li>
                    <li>• Extensive node library</li>
                    <li>• Real-time workflow execution</li>
                </ul>
            </div>
            
            <!-- Grafana -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Grafana</h3>
                <p class="text-sm text-gray-600 mb-4">Advanced analytics and monitoring platform with beautiful dashboards.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Real-time visualization</li>
                    <li>• Custom dashboards</li>
                    <li>• Alerting and notifications</li>
                </ul>
            </div>
            
            <!-- MQTT/Mosquitto -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">MQTT/Mosquitto</h3>
                <p class="text-sm text-gray-600 mb-4">Lightweight messaging protocol for reliable IoT device communication.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Publish/subscribe messaging</li>
                    <li>• Low bandwidth usage</li>
                    <li>• Quality of service levels</li>
                </ul>
            </div>
            
            <!-- InfluxDB -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">InfluxDB</h3>
                <p class="text-sm text-gray-600 mb-4">High-performance time-series database optimized for IoT data storage.</p>
                <ul class="text-xs text-gray-500 space-y-1">
                    <li>• Time-series optimization</li>
                    <li>• High write throughput</li>
                    <li>• Data compression</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Success Stories -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-gray-900 text-3xl md:text-4xl font-bold mb-4">IoT Implementation Success Stories</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from our IoT infrastructure deployments.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                        <span class="text-teal-600 font-bold">M</span>
                    </div>
                    <div>
                        <h3 class="text-gray-900 font-bold">Manufacturing Facility</h3>
                        <p class="text-sm text-gray-600">Smart Factory Implementation</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    "IoT infrastructure transformed our production monitoring and predictive maintenance. Equipment downtime reduced by 70%, energy consumption decreased by 30%, and overall equipment effectiveness improved significantly through real-time monitoring and automated controls."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-teal-600">70%</div>
                        <div class="text-xs text-gray-500">Less Downtime</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-cyan-600">30%</div>
                        <div class="text-xs text-gray-500">Energy Savings</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-blue-600">500+</div>
                        <div class="text-xs text-gray-500">Sensors Deployed</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <span class="text-green-600 font-bold">A</span>
                    </div>
                    <div>
                        <h3 class="text-gray-900 font-bold">Agriculture Operation</h3>
                        <p class="text-sm text-gray-600">Smart Farming Solution</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    "Smart agriculture IoT system optimized our irrigation, fertilization, and pest control processes. Crop yields increased by 40%, water usage reduced by 50%, and labor costs decreased through automated monitoring and control systems across 200+ acres."
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-teal-600">40%</div>
                        <div class="text-xs text-gray-500">Higher Yields</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-cyan-600">50%</div>
                        <div class="text-xs text-gray-500">Water Savings</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold">200+</div>
                        <div class="text-xs text-gray-500">Acres Monitored</div>
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
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Build Your IoT Infrastructure</h2>
            <p class="text-lg text-gray-600">
                Our systematic approach ensures successful IoT deployment with measurable business impact.
            </p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
                <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-teal-600 font-bold">1</span>
                </div>
                <h3 class="font-semibold mb-2">Site Assessment</h3>
                <p class="text-sm text-gray-600">Comprehensive evaluation of your facility and IoT requirements</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-cyan-600 font-bold">2</span>
                </div>
                <h3 class="font-semibold mb-2">System Design</h3>
                <p class="text-sm text-gray-600">Custom IoT architecture design with sensor placement and network topology</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-blue-600 font-bold">3</span>
                </div>
                <h3 class="font-semibold mb-2">Deployment</h3>
                <p class="text-sm text-gray-600">Professional installation, configuration, and testing of all IoT components</p>
            </div>
            
            <div class="text-center">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-green-600 font-bold">4</span>
                </div>
                <h3 class="font-semibold mb-2">Optimization</h3>
                <p class="text-sm text-gray-600">Continuous monitoring, performance tuning, and system expansion</p>
            </div>
        </div>
    </div>
</section>

<CTA 
    title="Ready to Build Your IoT Infrastructure?"
    description="Let's discuss how IoT solutions can optimize your operations and provide valuable business insights."
    primaryButton={{
        text: 'Schedule IoT Consultation',
        href: 'http://cal.com/alphabits/mini',
        variant: 'custom',
        class: 'bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
    }}
    secondaryButton={{
        text: 'View IoT Demos',
        href: '/case-studies'
    }}
    variant="gradient-teal"
/>