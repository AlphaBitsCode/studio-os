<script>
    import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
    <title>Our Services - AlphaBits</title>
    <meta name="description" content="Comprehensive AI workflow automation, fractional CTO services, data solutions, digital transformation, and IoT infrastructure services." />
</svelte:head>

<Hero 
    title="Our Services" 
    subtitle="Comprehensive solutions to transform your business with cutting-edge technology and expert guidance."
    variant="services"
/>

<!-- Services Grid -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- AI Workflow Automation -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">AI Workflow Automation</h3>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Streamline operations with intelligent AI agents and IoT workflow automation across Customer Support, Sales, Marketing, HR, Financial/Accounting, and Management departments.
                    </p>
                    <ul class="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-1">
                        <li>• AI Agents & Intelligent Automation</li>
                        <li>• IoT Workflow Integration</li>
                        <li>• Cross-Department Solutions</li>
                        <li>• Process Optimization</li>
                    </ul>
                    <a href="/services/ai-workflow-automation" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                        Learn More
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Fractional CTO -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-br from-green-500 to-green-600 p-6">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Fractional CTO & Tech Leadership</h3>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Expert technical leadership with comprehensive assessments, infrastructure modernization, and strategic guidance for budget and staffing decisions.
                    </p>
                    <ul class="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-1">
                        <li>• Deep-dive Tech Assessments</li>
                        <li>• IT Infrastructure Modernization</li>
                        <li>• Budget & Staffing Guidance</li>
                        <li>• Strategic Technology Planning</li>
                    </ul>
                    <a href="/services/fractional-cto" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                        Learn More
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Data & AI Solutions -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Data & AI Solutions</h3>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Comprehensive data analytics, big data infrastructure, AI agent building, and local LLM solutions covering all 6 stages of data processing.
                    </p>
                    <ul class="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-1">
                        <li>• Data Analytics & Business Intelligence</li>
                        <li>• Big Data Infrastructure (BigQuery, ClickHouse)</li>
                        <li>• AI Agent Building (MindStudio, Dify.ai)</li>
                        <li>• Local LLM & AI Infrastructure</li>
                    </ul>
                    <a href="/services/data-ai-solutions" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                        Learn More
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Digital Transformation -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-br from-orange-500 to-orange-600 p-6">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Digital Transformation & Integration</h3>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Turn-key digital infrastructure solutions including ERP & CRM integration, legacy system migration, and advanced network configuration.
                    </p>
                    <ul class="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-1">
                        <li>• Turn-Key Digital Infrastructure</li>
                        <li>• ERP & CRM Integration</li>
                        <li>• Legacy System Migration</li>
                        <li>• Network Configuration (ZeroTier, Cloudflare)</li>
                    </ul>
                    <a href="/services/digital-transformation" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                        Learn More
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- IoT Infrastructure -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-br from-teal-500 to-teal-600 p-6">
                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">IoT Infrastructure</h3>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Complete IoT ecosystem with workflow automation, message queuing, real-time monitoring, local data storage, and intuitive touch UI controls.
                    </p>
                    <ul class="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-1">
                        <li>• IoT Workflow Automation (Node-RED)</li>
                        <li>• Message Queuing (Mosquitto)</li>
                        <li>• Real-time Monitoring (Grafana)</li>
                        <li>• Local Data Storage (InfluxDB)</li>
                    </ul>
                    <a href="/services/iot-infrastructure" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                        Learn More
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="bg-gray-50 dark:bg-gray-800 py-16">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss which services align best with your business goals and technical requirements.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://cal.com/alphabits/mini" target="_blank" rel="noopener noreferrer" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book CTO Assessment (30 min)
            </a>
            <a href="/contact" class="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                General Consultation
            </a>
            <a href="/case-studies" class="border-2 border-gray-400 text-gray-600 dark:text-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-colors">
                View Case Studies
            </a>
        </div>
    </div>
</section>