<svelte:head>
    <title>Notion Wiki - AlphaBits Resources</title>
    <meta name="description" content="Comprehensive technical documentation, Node-RED guides, course materials, advanced developer documentation, and code/workflow samples in our Notion Wiki." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-gray-600 via-blue-600 to-indigo-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
                Notion Wiki
            </h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive technical documentation, guides, and code samples for developers and technical teams.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#documentation" class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                    Browse Documentation
                </a>
                <a href="#access" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Request Access
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Wiki Overview -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Comprehensive Technical Knowledge Base</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Our Notion Wiki serves as the central repository for all technical documentation, implementation guides, code samples, and best practices. It's designed to be your go-to resource for understanding and implementing our solutions.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    From beginner-friendly tutorials to advanced developer documentation, our wiki covers everything you need to successfully deploy and maintain AI workflow automation systems.
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">200+</div>
                        <div class="text-sm text-gray-600 dark:text-gray-300">Documentation Pages</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                        <div class="text-sm text-gray-600 dark:text-gray-300">Code Samples</div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
                <h3 class="text-2xl font-bold mb-6">Wiki Features</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Searchable Content</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Powerful search functionality to find exactly what you need</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Interactive Examples</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Live code examples and interactive demonstrations</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Regular Updates</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Continuously updated with latest best practices and solutions</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                        <div class="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-1">Community Contributions</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Collaborative platform for sharing knowledge and solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Documentation Sections -->
<section id="documentation" class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Documentation Sections</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Organized documentation covering all aspects of our technology stack and solutions.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Node-RED Implementation Guides -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Node-RED Implementation Guides</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Comprehensive guides for implementing Node-RED workflows, from basic concepts to advanced enterprise patterns.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
                    <li>• Getting Started with Node-RED</li>
                    <li>• Custom Node Development</li>
                    <li>• Enterprise Deployment Patterns</li>
                    <li>• Performance Optimization</li>
                    <li>• Security Best Practices</li>
                    <li>• Troubleshooting Common Issues</li>
                </ul>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">45+ guides</span>
                    <button class="text-red-600 dark:text-red-400 font-medium hover:underline">
                        Browse Guides →
                    </button>
                </div>
            </div>
            
            <!-- Advanced Developer Documentation -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Advanced Developer Documentation</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    In-depth technical documentation for developers working with our frameworks and APIs.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
                    <li>• API Reference Documentation</li>
                    <li>• SDK Integration Guides</li>
                    <li>• Architecture Deep Dives</li>
                    <li>• Database Schema Documentation</li>
                    <li>• Testing and Quality Assurance</li>
                    <li>• Deployment and DevOps</li>
                </ul>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">60+ documents</span>
                    <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                        Browse Documentation →
                    </button>
                </div>
            </div>
            
            <!-- Code & Workflow Samples -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Code & Workflow Samples</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Ready-to-use code samples, workflow templates, and implementation examples for common use cases.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
                    <li>• Node-RED Flow Templates</li>
                    <li>• AI Agent Implementation Examples</li>
                    <li>• IoT Integration Samples</li>
                    <li>• Data Processing Workflows</li>
                    <li>• Dashboard and UI Components</li>
                    <li>• Integration Code Snippets</li>
                </ul>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">80+ samples</span>
                    <button class="text-green-600 dark:text-green-400 font-medium hover:underline">
                        Browse Samples →
                    </button>
                </div>
            </div>
            
            <!-- Course Materials & Resources -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3">Course Materials & Resources</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Supplementary materials, exercises, and resources for our training courses and workshops.
                </p>
                <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-6">
                    <li>• Course Slides and Presentations</li>
                    <li>• Hands-on Lab Exercises</li>
                    <li>• Project Templates and Starters</li>
                    <li>• Assessment and Quiz Materials</li>
                    <li>• Additional Reading Resources</li>
                    <li>• Video Tutorials and Recordings</li>
                </ul>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">25+ resources</span>
                    <button class="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                        Browse Resources →
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Quick Access Tools -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Quick Access Tools</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Essential tools and utilities to help you navigate and utilize our documentation effectively.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Search Documentation -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Search Documentation</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Find specific guides, code samples, and solutions quickly</p>
                <button class="text-gray-600 dark:text-gray-400 font-medium hover:underline text-sm">
                    Open Search
                </button>
            </div>
            
            <!-- Getting Started Guide -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Getting Started Guide</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">New to our platform? Start with the basics</p>
                <button class="text-green-600 dark:text-green-400 font-medium hover:underline text-sm">
                    Start Here
                </button>
            </div>
            
            <!-- API Reference -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">API Reference</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Complete API documentation and examples</p>
                <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                    View APIs
                </button>
            </div>
            
            <!-- Community Forum -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Community Forum</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Ask questions and share knowledge with the community</p>
                <button class="text-purple-600 dark:text-purple-400 font-medium hover:underline text-sm">
                    Join Discussion
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Popular Resources -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Popular Resources</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Most accessed and highly rated documentation and resources.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Resource 1 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Node-RED Quick Start Guide</h3>
                    <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">Popular</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Get up and running with Node-RED in 30 minutes. Complete setup guide with examples.
                </p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Updated 2 days ago</span>
                    <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                        View Guide →
                    </button>
                </div>
            </div>
            
            <!-- Resource 2 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">AI Agent Implementation Template</h3>
                    <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">Template</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Ready-to-use template for building intelligent AI agents with decision-making capabilities.
                </p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Updated 1 week ago</span>
                    <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                        Download Template →
                    </button>
                </div>
            </div>
            
            <!-- Resource 3 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">IoT Device Integration Cookbook</h3>
                    <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-medium">Guide</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Step-by-step recipes for integrating various IoT devices and sensors with your workflows.
                </p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Updated 3 days ago</span>
                    <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                        View Cookbook →
                    </button>
                </div>
            </div>
            
            <!-- Resource 4 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Enterprise Security Best Practices</h3>
                    <span class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs font-medium">Security</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Comprehensive security guidelines for enterprise automation deployments.
                </p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Updated 5 days ago</span>
                    <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                        Read Guide →
                    </button>
                </div>
            </div>
            
            <!-- Resource 5 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Performance Optimization Checklist</h3>
                    <span class="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs font-medium">Checklist</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Essential checklist for optimizing the performance of your automation workflows.
                </p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Updated 1 week ago</span>
                    <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                        View Checklist →
                    </button>
                </div>
            </div>
            
            <!-- Resource 6 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Troubleshooting Common Issues</h3>
                    <span class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs font-medium">FAQ</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Solutions to the most common issues and error messages you might encounter.
                </p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Updated 4 days ago</span>
                    <button class="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                        View Solutions →
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Access Request -->
<section id="access" class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-4">Request Wiki Access</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Get full access to our comprehensive Notion Wiki with detailed documentation, code samples, and exclusive resources.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Access Levels -->
                <div>
                    <h3 class="text-xl font-semibold mb-4">Access Levels</h3>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold">Public Access</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">Basic guides and getting started documentation</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold">Developer Access</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">Advanced documentation, API references, and code samples</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold">Enterprise Access</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">Full access including enterprise patterns and exclusive resources</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Request Form -->
                <div>
                    <h3 class="text-xl font-semibold mb-4">Request Access</h3>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                            <input type="text" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="Your full name" />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input type="email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="your.email@company.com" />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Access Level</label>
                            <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                                <option>Developer Access</option>
                                <option>Enterprise Access</option>
                            </select>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Use Case</label>
                            <textarea rows="3" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="Briefly describe how you plan to use the documentation..."></textarea>
                        </div>
                        
                        <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Request Access
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-gray-600 to-blue-600 text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Need Help Getting Started?
        </h2>
        <p class="text-xl mb-8">
            Our team is here to help you navigate the documentation and find the resources you need.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
            </a>
            <a href="/resources/courses" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-600 transition-colors">
                Take a Course
            </a>
        </div>
    </div>
</section>