<svelte:head>
    <title>Coffee Chain Digital Transformation Case Study - AlphaBits</title>
    <meta name="description" content="Detailed case study of a major Vietnamese coffee chain's digital transformation - consolidating 5 POS systems, multiple databases, and marketing data into a unified BigQuery data warehouse with Looker Studio analytics." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-amber-600 via-orange-600 to-red-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <div class="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Case Study
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
                Coffee Chain Digital Transformation
            </h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Unifying operations across 200+ outlets by consolidating 5 different POS systems, multiple accounting databases, and marketing data into a single BigQuery data warehouse with advanced Looker Studio analytics.
            </p>
        </div>
    </div>
</section>

<!-- Project Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold mb-6">Project Overview</h2>
                <p class="text-lg text-gray-700 mb-6">
                    This major Vietnamese coffee chain faced the challenge of managing operations across 200+ outlets with fragmented systems. Five different POS systems, separate accounting databases from multiple entities, and disconnected marketing platforms created data silos that hindered decision-making and operational efficiency.
                </p>
                <p class="text-lg text-gray-700 mb-8">
                    Our solution consolidated all data sources into a unified BigQuery data warehouse, enabling real-time analytics through Looker Studio dashboards. This transformation provided unprecedented visibility into operations, sales performance, inventory management, and customer behavior across the entire chain.
                </p>
                
                <div class="bg-amber-50 border-4 border-amber-200 p-6 rounded-lg mb-8">
                    <h3 class="text-xl font-semibold mb-4">Key Challenge</h3>
                    <p class="text-gray-700">
                        The client struggled with data fragmentation across 5 different POS systems, multiple accounting databases from separate business entities, and isolated marketing platforms. This created blind spots in operations and made strategic decision-making nearly impossible.
                    </p>
                </div>
            </div>
            
            <div class="space-y-6">
                <div class="bg-orange-50 border-4 border-orange-200 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold mb-4">Project Details</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-gray-700">Industry:</span>
                            <span class="font-medium">Food & Beverage</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Outlets:</span>
                            <span class="font-medium">200+ locations</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Duration:</span>
                            <span class="font-medium">6 months</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Team Size:</span>
                            <span class="font-medium">4 specialists</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-700">Budget:</span>
                            <span class="font-medium">$80K - $150K</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 border-4 border-yellow-200 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold mb-4">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">BigQuery</span>
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Looker Studio</span>
                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Cloud Functions</span>
                        <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Pub/Sub</span>
                        <span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Cloud Storage</span>
                        <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Dataflow</span>
                        <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Cloud SQL</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">APIs</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Dashboard Showcase -->
<section class="py-16 bg-blue-50 border-t-4 border-blue-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Real-Time Analytics Dashboards</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Interactive Looker Studio dashboards providing comprehensive insights across all business operations.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <!-- Sales Performance Dashboard -->
            <div class="bg-white border-4 border-blue-300 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Sales Performance Dashboard</h3>
                <div class="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 h-64 flex items-center justify-center">
                    <svg width="300" height="200" viewBox="0 0 300 200" class="animate-pulse">
                        <!-- Background -->
                        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
                        
                        <!-- Header -->
                        <rect x="10" y="10" width="280" height="30" fill="#1e293b" rx="4"/>
                        <text x="20" y="28" fill="white" font-size="12" font-weight="bold">Daily Sales Overview</text>
                        
                        <!-- Sales Chart -->
                        <g transform="translate(20, 50)">
                            <!-- Chart bars with animation -->
                            <rect x="0" y="80" width="20" height="60" fill="#f59e0b">
                                <animate attributeName="height" values="20;60;40" dur="3s" repeatCount="indefinite"/>
                                <animate attributeName="y" values="120;80;100" dur="3s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="30" y="60" width="20" height="80" fill="#f59e0b">
                                <animate attributeName="height" values="40;80;60" dur="3s" begin="0.5s" repeatCount="indefinite"/>
                                <animate attributeName="y" values="100;60;80" dur="3s" begin="0.5s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="60" y="40" width="20" height="100" fill="#f59e0b">
                                <animate attributeName="height" values="60;100;80" dur="3s" begin="1s" repeatCount="indefinite"/>
                                <animate attributeName="y" values="80;40;60" dur="3s" begin="1s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="90" y="70" width="20" height="70" fill="#f59e0b">
                                <animate attributeName="height" values="30;70;50" dur="3s" begin="1.5s" repeatCount="indefinite"/>
                                <animate attributeName="y" values="110;70;90" dur="3s" begin="1.5s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="120" y="30" width="20" height="110" fill="#f59e0b">
                                <animate attributeName="height" values="70;110;90" dur="3s" begin="2s" repeatCount="indefinite"/>
                                <animate attributeName="y" values="70;30;50" dur="3s" begin="2s" repeatCount="indefinite"/>
                            </rect>
                        </g>
                        
                        <!-- KPI Cards -->
                        <rect x="180" y="50" width="100" height="40" fill="#10b981" rx="4"/>
                        <text x="190" y="65" fill="white" font-size="10">Today's Revenue</text>
                        <text x="190" y="80" fill="white" font-size="14" font-weight="bold">₫2.4M</text>
                        
                        <rect x="180" y="100" width="100" height="40" fill="#3b82f6" rx="4"/>
                        <text x="190" y="115" fill="white" font-size="10">Active Outlets</text>
                        <text x="190" y="130" fill="white" font-size="14" font-weight="bold">198/200</text>
                        
                        <rect x="180" y="150" width="100" height="40" fill="#8b5cf6" rx="4"/>
                        <text x="190" y="165" fill="white" font-size="10">Avg Order Value</text>
                        <text x="190" y="180" fill="white" font-size="14" font-weight="bold">₫85K</text>
                    </svg>
                </div>
                <p class="text-sm text-gray-700 mt-2">
                    Real-time sales tracking across all outlets with automated alerts for performance anomalies.
                </p>
            </div>
            
            <!-- Inventory Management Dashboard -->
            <div class="bg-white border-4 border-green-300 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Inventory Management Dashboard</h3>
                <div class="bg-green-100 border-2 border-green-300 rounded-lg p-4 h-64 flex items-center justify-center">
                    <svg width="300" height="200" viewBox="0 0 300 200">
                        <!-- Background -->
                        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
                        
                        <!-- Header -->
                        <rect x="10" y="10" width="280" height="30" fill="#1e293b" rx="4"/>
                        <text x="20" y="28" fill="white" font-size="12" font-weight="bold">Inventory Status</text>
                        
                        <!-- Inventory Items -->
                        <g transform="translate(20, 50)">
                            <!-- Coffee Beans -->
                            <rect x="0" y="0" width="250" height="20" fill="#e5e7eb" rx="10"/>
                            <rect x="0" y="0" width="200" height="20" fill="#10b981" rx="10">
                                <animate attributeName="width" values="150;200;180" dur="4s" repeatCount="indefinite"/>
                            </rect>
                            <text x="5" y="14" fill="white" font-size="10" font-weight="bold">Coffee Beans - 80%</text>
                            
                            <!-- Milk -->
                            <rect x="0" y="30" width="250" height="20" fill="#e5e7eb" rx="10"/>
                            <rect x="0" y="30" width="100" height="20" fill="#f59e0b" rx="10">
                                <animate attributeName="width" values="80;100;90" dur="4s" begin="1s" repeatCount="indefinite"/>
                            </rect>
                            <text x="5" y="44" fill="white" font-size="10" font-weight="bold">Milk - 40%</text>
                            
                            <!-- Sugar -->
                            <rect x="0" y="60" width="250" height="20" fill="#e5e7eb" rx="10"/>
                            <rect x="0" y="60" width="50" height="20" fill="#ef4444" rx="10">
                                <animate attributeName="width" values="30;50;40" dur="4s" begin="2s" repeatCount="indefinite"/>
                            </rect>
                            <text x="5" y="74" fill="white" font-size="10" font-weight="bold">Sugar - 20%</text>
                            
                            <!-- Cups -->
                            <rect x="0" y="90" width="250" height="20" fill="#e5e7eb" rx="10"/>
                            <rect x="0" y="90" width="175" height="20" fill="#10b981" rx="10">
                                <animate attributeName="width" values="150;175;160" dur="4s" begin="3s" repeatCount="indefinite"/>
                            </rect>
                            <text x="5" y="104" fill="white" font-size="10" font-weight="bold">Cups - 70%</text>
                        </g>
                        
                        <!-- Alert Section -->
                        <rect x="20" y="160" width="260" height="30" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="4"/>
                        <text x="30" y="175" fill="#92400e" font-size="10">⚠️ Low Stock Alert: 15 outlets need sugar restocking</text>
                        <text x="30" y="185" fill="#92400e" font-size="8">Auto-reorder triggered for next delivery cycle</text>
                    </svg>
                </div>
                <p class="text-sm text-gray-700 mt-2">
                     Automated inventory tracking with predictive restocking and low-stock alerts.
                 </p>
            </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Customer Analytics Dashboard -->
             <div class="bg-white border-4 border-purple-300 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Customer Analytics Dashboard</h3>
                <div class="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 h-64 flex items-center justify-center">
                    <svg width="300" height="200" viewBox="0 0 300 200">
                        <!-- Background -->
                        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
                        
                        <!-- Header -->
                        <rect x="10" y="10" width="280" height="30" fill="#1e293b" rx="4"/>
                        <text x="20" y="28" fill="white" font-size="12" font-weight="bold">Customer Insights</text>
                        
                        <!-- Pie Chart -->
                        <g transform="translate(80, 120)">
                            <circle cx="0" cy="0" r="40" fill="#e5e7eb"/>
                            <!-- Animated pie slices -->
                            <path d="M 0,-40 A 40,40 0 0,1 28.28,-28.28 L 0,0 Z" fill="#3b82f6">
                                <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
                            </path>
                            <path d="M 28.28,-28.28 A 40,40 0 0,1 40,0 L 0,0 Z" fill="#10b981">
                                <animateTransform attributeName="transform" type="rotate" values="45;405" dur="8s" repeatCount="indefinite"/>
                            </path>
                            <path d="M 40,0 A 40,40 0 0,1 0,40 L 0,0 Z" fill="#f59e0b">
                                <animateTransform attributeName="transform" type="rotate" values="135;495" dur="8s" repeatCount="indefinite"/>
                            </path>
                            <path d="M 0,40 A 40,40 0 0,1 0,-40 L 0,0 Z" fill="#8b5cf6">
                                <animateTransform attributeName="transform" type="rotate" values="270;630" dur="8s" repeatCount="indefinite"/>
                            </path>
                        </g>
                        
                        <!-- Legend -->
                        <g transform="translate(160, 60)">
                            <rect x="0" y="0" width="10" height="10" fill="#3b82f6"/>
                            <text x="15" y="9" font-size="10">Regular (35%)</text>
                            
                            <rect x="0" y="20" width="10" height="10" fill="#10b981"/>
                            <text x="15" y="29" font-size="10">Premium (25%)</text>
                            
                            <rect x="0" y="40" width="10" height="10" fill="#f59e0b"/>
                            <text x="15" y="49" font-size="10">Loyalty (30%)</text>
                            
                            <rect x="0" y="60" width="10" height="10" fill="#8b5cf6"/>
                            <text x="15" y="69" font-size="10">New (10%)</text>
                        </g>
                        
                        <!-- Stats -->
                        <rect x="20" y="170" width="80" height="25" fill="#ddd6fe" rx="4"/>
                        <text x="25" y="185" font-size="10">Daily Customers</text>
                        <text x="25" y="195" font-size="12" font-weight="bold">12,450</text>
                        
                        <rect x="110" y="170" width="80" height="25" fill="#fef3c7" rx="4"/>
                        <text x="115" y="185" font-size="10">Retention Rate</text>
                        <text x="115" y="195" font-size="12" font-weight="bold">78%</text>
                        
                        <rect x="200" y="170" width="80" height="25" fill="#d1fae5" rx="4"/>
                        <text x="205" y="185" font-size="10">Satisfaction</text>
                        <text x="205" y="195" font-size="12" font-weight="bold">4.6/5</text>
                    </svg>
                </div>
                <p class="text-sm text-gray-700 mt-2">
                     Customer segmentation and behavior analysis with loyalty program insights.
                 </p>
            </div>
            
            <!-- Financial Performance Dashboard -->
             <div class="bg-white border-4 border-orange-300 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Financial Performance Dashboard</h3>
                <div class="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 h-64 flex items-center justify-center">
                    <svg width="300" height="200" viewBox="0 0 300 200">
                        <!-- Background -->
                        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
                        
                        <!-- Header -->
                        <rect x="10" y="10" width="280" height="30" fill="#1e293b" rx="4"/>
                        <text x="20" y="28" fill="white" font-size="12" font-weight="bold">Financial Overview</text>
                        
                        <!-- Revenue Trend Line -->
                        <g transform="translate(20, 50)">
                            <polyline points="0,80 40,70 80,60 120,45 160,40 200,35 240,30" 
                                     fill="none" stroke="#10b981" stroke-width="3">
                                <animate attributeName="points" 
                                        values="0,80 40,75 80,70 120,65 160,60 200,55 240,50;
                                               0,80 40,70 80,60 120,45 160,40 200,35 240,30;
                                               0,80 40,72 80,65 120,50 160,45 200,38 240,32" 
                                        dur="5s" repeatCount="indefinite"/>
                            </polyline>
                            
                            <!-- Data points -->
                            <circle cx="0" cy="80" r="3" fill="#10b981">
                                <animate attributeName="cy" values="80;75;80" dur="5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="40" cy="70" r="3" fill="#10b981">
                                <animate attributeName="cy" values="70;72;70" dur="5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="80" cy="60" r="3" fill="#10b981">
                                <animate attributeName="cy" values="60;65;60" dur="5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="120" cy="45" r="3" fill="#10b981">
                                <animate attributeName="cy" values="45;50;45" dur="5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="160" cy="40" r="3" fill="#10b981">
                                <animate attributeName="cy" values="40;45;40" dur="5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="200" cy="35" r="3" fill="#10b981">
                                <animate attributeName="cy" values="35;38;35" dur="5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="240" cy="30" r="3" fill="#10b981">
                                <animate attributeName="cy" values="30;32;30" dur="5s" repeatCount="indefinite"/>
                            </circle>
                        </g>
                        
                        <!-- Financial Metrics -->
                        <rect x="20" y="140" width="70" height="50" fill="#ecfdf5" stroke="#10b981" rx="4"/>
                        <text x="25" y="155" font-size="10" fill="#065f46">Monthly Revenue</text>
                        <text x="25" y="170" font-size="14" font-weight="bold" fill="#065f46">₫8.2B</text>
                        <text x="25" y="182" font-size="8" fill="#10b981">↗ +15.3%</text>
                        
                        <rect x="100" y="140" width="70" height="50" fill="#fef3c7" stroke="#f59e0b" rx="4"/>
                        <text x="105" y="155" font-size="10" fill="#92400e">Profit Margin</text>
                        <text x="105" y="170" font-size="14" font-weight="bold" fill="#92400e">23.5%</text>
                        <text x="105" y="182" font-size="8" fill="#f59e0b">↗ +2.1%</text>
                        
                        <rect x="180" y="140" width="70" height="50" fill="#dbeafe" stroke="#3b82f6" rx="4"/>
                        <text x="185" y="155" font-size="10" fill="#1e40af">Cost per Sale</text>
                        <text x="185" y="170" font-size="14" font-weight="bold" fill="#1e40af">₫52K</text>
                        <text x="185" y="182" font-size="8" fill="#ef4444">↘ -8.2%</text>
                    </svg>
                </div>
                <p class="text-sm text-gray-700 mt-2">
                     Consolidated financial reporting across all entities with real-time P&L tracking.
                 </p>
            </div>
        </div>
    </div>
</section>

<!-- Solution Architecture -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Data Integration Architecture</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                A comprehensive data pipeline consolidating multiple systems into a unified analytics platform.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-blue-50 border-4 border-blue-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Data Consolidation</h3>
                <p class="text-gray-700 mb-4">
                    Unified data ingestion from 5 different POS systems, multiple accounting databases, and marketing platforms into BigQuery.
                </p>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Real-time POS data streaming</li>
                    <li>• Batch accounting data imports</li>
                    <li>• Marketing campaign integration</li>
                    <li>• Data validation and cleansing</li>
                </ul>
            </div>
            
            <div class="bg-green-50 border-4 border-green-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">BigQuery Data Warehouse</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Scalable cloud data warehouse with optimized schemas for fast querying and analysis across all business dimensions.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Partitioned tables for performance</li>
                    <li>• Automated data quality checks</li>
                    <li>• Historical data preservation</li>
                    <li>• Cost-optimized storage</li>
                </ul>
            </div>
            
            <div class="bg-purple-50 border-4 border-purple-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Looker Studio Analytics</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Interactive dashboards and reports providing real-time insights into sales, operations, and customer behavior.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Real-time dashboard updates</li>
                    <li>• Custom KPI tracking</li>
                    <li>• Automated report generation</li>
                    <li>• Mobile-responsive design</li>
                </ul>
            </div>
            
            <div class="bg-orange-50 border-4 border-orange-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Real-Time Processing</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Cloud Functions and Pub/Sub enable real-time data processing and immediate dashboard updates across all outlets.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Event-driven architecture</li>
                    <li>• Automatic scaling</li>
                    <li>• Error handling and retry logic</li>
                    <li>• Monitoring and alerting</li>
                </ul>
            </div>
            
            <div class="bg-teal-50 border-4 border-teal-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Data Security & Compliance</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Enterprise-grade security with role-based access control, data encryption, and compliance with Vietnamese data protection regulations.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Role-based access control</li>
                    <li>• Audit logging</li>
                    <li>• GDPR compliance ready</li>
                </ul>
            </div>
            
            <div class="bg-indigo-50 border-4 border-indigo-300 p-6 rounded-lg">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4 19h10a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Automated Reporting</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Scheduled reports and alerts for management, with customizable KPIs and automated distribution to stakeholders.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Daily/weekly/monthly reports</li>
                    <li>• Exception-based alerting</li>
                    <li>• Executive dashboards</li>
                    <li>• Performance benchmarking</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Results & Impact -->
<section class="py-16 bg-green-50 border-t-4 border-green-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Results & Impact</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Transformational improvements in operational efficiency and decision-making capabilities.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div class="text-center">
                <div class="text-4xl font-bold text-amber-600 mb-2">95%</div>
                <div class="text-lg font-semibold mb-1">Data Accuracy</div>
                <div class="text-sm text-gray-700">Eliminated manual data entry errors</div>
            </div>
            
            <div class="text-center">
                <div class="text-4xl font-bold text-green-600 mb-2">70%</div>
                <div class="text-lg font-semibold mb-1">Faster Reporting</div>
                <div class="text-sm text-gray-700">Real-time insights vs. weekly reports</div>
            </div>
            
            <div class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div class="text-lg font-semibold mb-1">Cost Reduction</div>
                <div class="text-sm text-gray-700">Operational efficiency improvements</div>
            </div>
            
            <div class="text-center">
                <div class="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div class="text-lg font-semibold mb-1">Real-Time Monitoring</div>
                <div class="text-sm text-gray-700">Continuous operations visibility</div>
            </div>
        </div>
        
        <div class="bg-amber-50 border-4 border-amber-300 p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4">Client Testimonial</h3>
            <blockquote class="text-lg text-gray-700 italic mb-4">
                "This digital transformation has revolutionized how we manage our coffee chain. We now have complete visibility across all 200+ outlets in real-time. The unified data platform has enabled us to make data-driven decisions that have significantly improved our profitability and customer satisfaction. The AlphaBits team delivered exactly what we needed."
            </blockquote>
            <div class="flex items-center">
                <div class="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    TN
                </div>
                <div>
                    <div class="font-semibold">Trần Ngọc</div>
                    <div class="text-sm text-gray-700">Operations Director, Major Coffee Chain</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Implementation Timeline -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Implementation Timeline</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                A structured 6-month implementation process with clear milestones and deliverables.
            </p>
        </div>
        
        <div class="space-y-8">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold mb-2">Data Assessment & Planning (Month 1)</h3>
                    <p class="text-gray-700 mb-2">
                        Comprehensive audit of existing POS systems, accounting databases, and data sources. Architecture design and integration planning.
                    </p>
                    <div class="text-sm text-gray-600">Deliverables: Data inventory, integration architecture, project roadmap</div>
                </div>
            </div>
            
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                </div>
                <div class="flex-1">
                     <h3 class="text-xl font-semibold mb-2">Infrastructure Setup (Months 2-3)</h3>
                     <p class="text-gray-700 mb-2">
                         BigQuery data warehouse setup, Cloud Functions deployment, and initial data pipeline development for POS systems integration.
                     </p>
                     <div class="text-sm text-gray-600">Deliverables: Cloud infrastructure, data schemas, initial data pipelines</div>
                 </div>
            </div>
            
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                </div>
                <div class="flex-1">
                     <h3 class="text-xl font-semibold mb-2">Data Integration & ETL (Months 4-5)</h3>
                     <p class="text-gray-700 mb-2">
                         Complete integration of all 5 POS systems, accounting databases, and marketing platforms. Data validation and quality assurance.
                     </p>
                     <div class="text-sm text-gray-600">Deliverables: Unified data warehouse, validated data flows, quality monitoring</div>
                 </div>
            </div>
            
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                </div>
                <div class="flex-1">
                     <h3 class="text-xl font-semibold mb-2">Analytics & Deployment (Month 6)</h3>
                     <p class="text-gray-700 mb-2">
                         Looker Studio dashboard development, user training, and production deployment with ongoing support setup.
                     </p>
                     <div class="text-sm text-gray-600">Deliverables: Live dashboards, user training, documentation, support procedures</div>
                 </div>
            </div>
        </div>
    </div>
</section>

<!-- Key Learnings -->
<section class="py-16 bg-yellow-50 border-t-4 border-yellow-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Key Learnings</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Insights and best practices from this comprehensive data consolidation project.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-green-50 border-4 border-green-300 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4 text-green-600">What Worked Well</h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Phased approach allowed for continuous validation and adjustment</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Early stakeholder engagement ensured buy-in from all outlet managers</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Cloud-native architecture provided scalability and cost efficiency</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Real-time monitoring prevented data quality issues</span>
                    </li>
                </ul>
            </div>
            
            <div class="bg-blue-50 border-4 border-blue-300 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-4 text-blue-600">Areas for Improvement</h3>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>More extensive data profiling could have identified edge cases earlier</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Additional change management support would have accelerated adoption</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Earlier performance testing with full data volumes</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>More comprehensive disaster recovery testing</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Data Transformation?
        </h2>
        <p class="text-xl mb-8">
            Let's discuss how we can consolidate your business data and create powerful analytics solutions for your organization.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quick-assessment" class="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
            </a>
            <a href="/services" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
                Explore Our Services
            </a>
        </div>
    </div>
</section>