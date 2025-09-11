<script>
    import Hero from '$lib/components/Hero.svelte';
    import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
    <title>IoT Infrastructure - AlphaBits</title>
    <meta name="description" content="Complete IoT ecosystem with workflow automation, message queuing, real-time monitoring, local data storage, and intuitive touch UI controls." />
</svelte:head>

<Hero 
    title="IoT Infrastructure" 
    subtitle="Complete IoT ecosystem with workflow automation, message queuing, real-time monitoring, local data storage, and intuitive touch UI controls."
    variant="services"
/>

<!-- CTA Buttons -->
<section class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quick-assessment" class="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center">
                Build Your IoT System
            </a>
            <a href="/quick-assessment" class="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors text-center">
                See Implementation
            </a>
        </div>
    </div>
</section>

<!-- Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Complete IoT Ecosystem</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Our IoT infrastructure solutions provide end-to-end connectivity, data processing, and control systems for modern smart environments. From sensor data collection to real-time visualization and automated responses, we create comprehensive IoT ecosystems that scale with your needs.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Built on proven open-source technologies like Node-RED, Mosquitto, Grafana, and InfluxDB, our solutions offer enterprise-grade reliability with the flexibility to adapt to any use case.
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">1000+</div>
                        <div class="text-sm text-gray-600 dark:text-gray-300">Devices Supported</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">24/7</div>
                        <div class="text-sm text-gray-600 dark:text-gray-300">Real-time Monitoring</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-6">IoT Stack Components</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Device Layer</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Sensors, actuators, and smart devices</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Communication Layer</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">MQTT messaging and protocol handling</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Processing Layer</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Node-RED workflow automation</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Application Layer</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Dashboards, analytics, and user interfaces</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Core Components -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Core Components</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Industry-leading open-source technologies for robust IoT infrastructure.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Node-RED Workflow Automation -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Node-RED Workflow Automation</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Visual programming tool for wiring together hardware devices, APIs, and online services in IoT applications.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Visual flow-based programming</li>
                    <li>• Extensive node library (3000+ nodes)</li>
                    <li>• Real-time data processing</li>
                    <li>• Custom function development</li>
                    <li>• Protocol translation and routing</li>
                    <li>• Integration with external systems</li>
                </ul>
            </div>
            
            <!-- Mosquitto Message Queuing -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Mosquitto Message Queuing</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Lightweight MQTT broker for reliable message delivery between IoT devices and applications.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• MQTT 3.1.1 and 5.0 protocol support</li>
                    <li>• High-performance message routing</li>
                    <li>• Quality of Service (QoS) levels</li>
                    <li>• Retained messages and last will</li>
                    <li>• SSL/TLS encryption support</li>
                    <li>• Bridge connections for scaling</li>
                </ul>
            </div>
            
            <!-- Grafana Real-time Monitoring -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Grafana Real-time Monitoring</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Powerful visualization and monitoring platform for IoT data with customizable dashboards and alerting.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Interactive dashboards and panels</li>
                    <li>• Real-time data visualization</li>
                    <li>• Advanced alerting and notifications</li>
                    <li>• Multiple data source support</li>
                    <li>• Custom plugins and extensions</li>
                    <li>• Mobile-responsive interfaces</li>
                </ul>
            </div>
            
            <!-- InfluxDB Local Data Storage -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">InfluxDB Local Data Storage</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    High-performance time-series database optimized for IoT sensor data and metrics storage.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Time-series data optimization</li>
                    <li>• High write and query performance</li>
                    <li>• Data compression and retention</li>
                    <li>• SQL-like query language (Flux)</li>
                    <li>• Continuous queries and tasks</li>
                    <li>• Built-in data downsampling</li>
                </ul>
            </div>
            
            <!-- Touch UI Display Controls -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Touch UI Display Controls</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Intuitive touch-based interfaces for on-site control and monitoring of IoT systems.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Touch-optimized control panels</li>
                    <li>• Real-time system status displays</li>
                    <li>• Quick action buttons and controls</li>
                    <li>• Customizable dashboard layouts</li>
                    <li>• Multi-device responsive design</li>
                    <li>• Offline operation capabilities</li>
                </ul>
            </div>
            
            <!-- Edge Computing -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Edge Computing</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Local processing capabilities for reduced latency and improved reliability in IoT deployments.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Local data processing and filtering</li>
                    <li>• Reduced cloud dependency</li>
                    <li>• Real-time decision making</li>
                    <li>• Bandwidth optimization</li>
                    <li>• Offline operation support</li>
                    <li>• Edge-to-cloud synchronization</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Use Cases -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">IoT Use Cases</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real-world applications across industries and environments.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Smart Building Management -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Smart Building Management</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Automated HVAC, lighting, security, and energy management systems for commercial and residential buildings.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Temperature and humidity control</li>
                    <li>• Occupancy-based lighting</li>
                    <li>• Energy consumption monitoring</li>
                    <li>• Security system integration</li>
                    <li>• Predictive maintenance alerts</li>
                </ul>
            </div>
            
            <!-- Industrial Monitoring -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Industrial Monitoring</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Real-time monitoring of manufacturing equipment, production lines, and industrial processes.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Equipment performance tracking</li>
                    <li>• Vibration and temperature monitoring</li>
                    <li>• Production line optimization</li>
                    <li>• Quality control automation</li>
                    <li>• Predictive maintenance scheduling</li>
                </ul>
            </div>
            
            <!-- Environmental Monitoring -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Environmental Monitoring</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Comprehensive environmental data collection for air quality, weather, and ecosystem monitoring.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Air quality and pollution tracking</li>
                    <li>• Weather station data collection</li>
                    <li>• Soil moisture and pH monitoring</li>
                    <li>• Water quality assessment</li>
                    <li>• Wildlife and ecosystem tracking</li>
                </ul>
            </div>
            
            <!-- Agriculture & Farming -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Agriculture & Farming</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Smart farming solutions for crop monitoring, irrigation control, and livestock management.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Automated irrigation systems</li>
                    <li>• Crop health monitoring</li>
                    <li>• Livestock tracking and health</li>
                    <li>• Greenhouse climate control</li>
                    <li>• Precision agriculture analytics</li>
                </ul>
            </div>
            
            <!-- Fleet & Asset Tracking -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Fleet & Asset Tracking</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Real-time location tracking and management of vehicles, equipment, and valuable assets.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• GPS location tracking</li>
                    <li>• Vehicle performance monitoring</li>
                    <li>• Route optimization</li>
                    <li>• Asset utilization analytics</li>
                    <li>• Theft prevention and alerts</li>
                </ul>
            </div>
            
            <!-- Healthcare & Wellness -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Healthcare & Wellness</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Patient monitoring, medical equipment tracking, and healthcare facility management systems.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Patient vital sign monitoring</li>
                    <li>• Medical equipment tracking</li>
                    <li>• Hospital environment control</li>
                    <li>• Emergency response systems</li>
                    <li>• Medication management</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Architecture Diagram -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">IoT Architecture</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Scalable, secure, and reliable IoT infrastructure design.
            </p>
        </div>
        
        <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div class="grid md:grid-cols-4 gap-6">
                <!-- Device Layer -->
                <div class="text-center">
                    <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Device Layer</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        Sensors, actuators, and smart devices collecting and responding to data
                    </p>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                        Temperature, Humidity, Motion, Light, etc.
                    </div>
                </div>
                
                <!-- Communication Layer -->
                <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Communication</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        MQTT messaging broker handling device communication and data routing
                    </p>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                        Mosquitto MQTT Broker
                    </div>
                </div>
                
                <!-- Processing Layer -->
                <div class="text-center">
                    <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Processing</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        Node-RED workflows processing data, applying business logic, and triggering actions
                    </p>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                        Node-RED Flow Engine
                    </div>
                </div>
                
                <!-- Application Layer -->
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Application</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        Dashboards, analytics, and user interfaces for monitoring and control
                    </p>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                        Grafana + InfluxDB + Touch UI
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Success Stories -->
<section class="py-16 bg-teal-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real-world IoT implementations delivering measurable results for our clients.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Coffee Chain Case Study -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">Coffee Chain Data Transformation</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">200+ outlets • BigQuery Analytics</p>
                    </div>
                </div>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Unified data platform consolidating 5 POS systems, multiple databases, and marketing data into real-time BigQuery analytics with Looker Studio dashboards.
                </p>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">95%</div>
                        <div class="text-xs text-gray-600 dark:text-gray-300">Data Accuracy</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-green-600 dark:text-green-400">70%</div>
                        <div class="text-xs text-gray-600 dark:text-gray-300">Faster Reporting</div>
                    </div>
                </div>
                <a href="/case-studies/coffee-chain-transformation" class="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold">
                    Read Full Case Study
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
            
            <!-- SENCAR AIoT Case Study -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">SENCAR Smoke Detection AIoT</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Rental Fleet • AI Embedded Chips</p>
                    </div>
                </div>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    AI-powered smoke and odor detection prototype for rental car fleet using embedded AI chips with 15-30 second detection accuracy and 24-hour monitoring.
                </p>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">15-30s</div>
                        <div class="text-xs text-gray-600 dark:text-gray-300">Detection Speed</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-green-600 dark:text-green-400">95%</div>
                        <div class="text-xs text-gray-600 dark:text-gray-300">Accuracy Rate</div>
                    </div>
                </div>
                <a href="/case-studies/sencar-smoke-detection" class="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold">
                    Read Full Case Study
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Implementation Process -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Structured approach to IoT infrastructure deployment.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div class="text-center">
                <div class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">1</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Requirements Analysis</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Understanding your IoT needs, device requirements, and integration points
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">2</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Architecture Design</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Designing scalable IoT architecture and selecting appropriate technologies
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">3</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Infrastructure Setup</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Installing and configuring MQTT brokers, databases, and processing engines
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">4</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Device Integration</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Connecting devices, configuring workflows, and testing data flows
                </p>
            </div>
            
            <div class="text-center">
                <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-white font-bold text-xl">5</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Monitoring & Support</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Deploying dashboards, setting up alerts, and providing ongoing support
                </p>
            </div>
        </div>
    </div>
</section>

<CTA 
    title="Ready to Build Your IoT Infrastructure?"
    description="Let's discuss how our comprehensive IoT solutions can transform your operations and provide real-time insights."
    primaryButton={{
        text: 'Start Your IoT Project',
        href: '/contact'
    }}
    secondaryButton={{
        text: 'View Success Stories',
        href: '/case-studies/coffee-chain-transformation'
    }}
    variant="gradient-teal"
/>