<script>
	import CTA from '$lib/components/CTA.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Data & AI Solutions',
		description:
			'Unlock the power of your data with comprehensive analytics, AI infrastructure, and intelligent agents. From data collection to actionable insights, we build scalable solutions that turn information into competitive advantage.',
		provider: {
			'@type': 'Organization',
			name: 'AlphaBits',
			url: 'https://alphabits.team'
		},
		serviceType: 'Data Analytics & AI Infrastructure',
		category: 'Data & AI Services',
		offers: {
			'@type': 'Offer',
			description: 'Big data infrastructure, AI analytics, and intelligent agent development',
			seller: {
				'@type': 'Organization',
				name: 'AlphaBits'
			}
		}
	};
</script>

<SEOHead
	title="Data & AI Solutions - AlphaBits | Big Data Analytics & AI Infrastructure"
	description="Unlock the power of your data with comprehensive analytics, AI infrastructure, and intelligent agents. From data collection to actionable insights, we build scalable solutions that turn information into competitive advantage."
	keywords="data analytics, AI solutions, big data infrastructure, machine learning, data warehouse, business intelligence, AI infrastructure, data science, predictive analytics"
	canonicalUrl="https://alphabits.team/services/data-ai-solutions"
	ogImage="https://alphabits.team/alphabits_cover.png"
	ogType="article"
	articleSection="Services"
	{structuredData}
/>

<!-- Animated Hero Section -->
<section class="overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
					Data & AI
					<span class="text-purple-600">Solutions</span>
				</h1>
				<p class="mb-8 text-xl leading-relaxed text-gray-600">
					Unlock the power of your data with comprehensive analytics, AI infrastructure, and
					intelligent agents. From data collection to actionable insights, we build scalable
					solutions that turn information into competitive advantage.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="/contact"
						class="rounded-lg bg-purple-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-purple-700"
					>
						Build Data Solution
					</a>
					<a
						href="/case-studies"
						class="rounded-lg border-2 border-purple-600 px-8 py-3 text-center font-semibold text-purple-600 transition-colors hover:bg-purple-600 hover:text-white"
					>
						View Data Demos
					</a>
				</div>
			</div>

			<!-- Animated SVG -->
			<div class="flex justify-center">
				<svg width="500" height="400" viewBox="0 0 500 400" class="w-full max-w-lg">
					<!-- Background gradient -->
					<defs>
						<linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#e9d5ff;stop-opacity:0.4" />
							<stop offset="100%" style="stop-color:#ddd6fe;stop-opacity:0.2" />
						</linearGradient>
						<linearGradient id="aiCoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style="stop-color:#7c3aed" />
							<stop offset="100%" style="stop-color:#8b5cf6" />
						</linearGradient>
						<radialGradient id="neuralGradient" cx="50%" cy="50%" r="50%">
							<stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.8" />
							<stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.1" />
						</radialGradient>
					</defs>

					<!-- Background circles -->
					<circle cx="250" cy="200" r="180" fill="url(#dataGradient)">
						<animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
					</circle>
					<circle cx="250" cy="200" r="140" fill="#e9d5ff" opacity="0.5">
						<animate attributeName="r" values="140;150;140" dur="3s" repeatCount="indefinite" />
					</circle>

					<!-- Central AI Core -->
					<g transform="translate(250,200)">
						<!-- Main AI processing unit -->
						<circle cx="0" cy="0" r="35" fill="url(#aiCoreGradient)">
							<animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite" />
						</circle>
						<circle cx="0" cy="0" r="25" fill="#ffffff" opacity="0.9" />

						<!-- Neural network pattern -->
						<g stroke="#a855f7" stroke-width="1.5" fill="none" opacity="0.7">
							<!-- Neural connections -->
							<circle cx="-15" cy="-15" r="3" fill="#a855f7">
								<animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
							</circle>
							<circle cx="15" cy="-15" r="3" fill="#a855f7">
								<animate
									attributeName="r"
									values="3;5;3"
									dur="2s"
									repeatCount="indefinite"
									begin="0.5s"
								/>
							</circle>
							<circle cx="-15" cy="15" r="3" fill="#a855f7">
								<animate
									attributeName="r"
									values="3;5;3"
									dur="2s"
									repeatCount="indefinite"
									begin="1s"
								/>
							</circle>
							<circle cx="15" cy="15" r="3" fill="#a855f7">
								<animate
									attributeName="r"
									values="3;5;3"
									dur="2s"
									repeatCount="indefinite"
									begin="1.5s"
								/>
							</circle>

							<!-- Connection lines -->
							<line x1="-15" y1="-15" x2="15" y2="15">
								<animate
									attributeName="opacity"
									values="0.3;0.8;0.3"
									dur="2s"
									repeatCount="indefinite"
								/>
							</line>
							<line x1="15" y1="-15" x2="-15" y2="15">
								<animate
									attributeName="opacity"
									values="0.8;0.3;0.8"
									dur="2s"
									repeatCount="indefinite"
								/>
							</line>
							<line x1="-15" y1="-15" x2="15" y2="-15">
								<animate
									attributeName="opacity"
									values="0.5;0.9;0.5"
									dur="2.5s"
									repeatCount="indefinite"
								/>
							</line>
							<line x1="-15" y1="15" x2="15" y2="15">
								<animate
									attributeName="opacity"
									values="0.9;0.5;0.9"
									dur="2.5s"
									repeatCount="indefinite"
								/>
							</line>
						</g>

						<!-- AI label -->
						<text x="0" y="5" text-anchor="middle" font-size="12" fill="#7c3aed" font-weight="bold"
							>AI</text
						>
					</g>

					<!-- Data Sources -->
					<!-- Database -->
					<g transform="translate(120,120)">
						<rect x="-20" y="-15" width="40" height="30" rx="5" fill="#3b82f6">
							<animate
								attributeName="fill"
								values="#3b82f6;#2563eb;#3b82f6"
								dur="3s"
								repeatCount="indefinite"
							/>
						</rect>
						<ellipse cx="0" cy="-10" rx="15" ry="4" fill="#60a5fa" />
						<ellipse cx="0" cy="0" rx="15" ry="4" fill="#60a5fa" />
						<ellipse cx="0" cy="10" rx="15" ry="4" fill="#60a5fa" />
						<text x="0" y="-25" text-anchor="middle" font-size="8" fill="#374151">Database</text>
						<!-- Data flow -->
						<circle cx="25" cy="0" r="2" fill="#3b82f6">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;60,40;130,80"
								dur="4s"
								repeatCount="indefinite"
							/>
							<animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" />
						</circle>
					</g>

					<!-- APIs -->
					<g transform="translate(380,120)">
						<rect x="-20" y="-15" width="40" height="30" rx="5" fill="#10b981">
							<animate
								attributeName="fill"
								values="#10b981;#059669;#10b981"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</rect>
						<circle cx="-10" cy="-5" r="3" fill="#34d399" />
						<circle cx="0" cy="-5" r="3" fill="#34d399" />
						<circle cx="10" cy="-5" r="3" fill="#34d399" />
						<rect x="-12" y="2" width="24" height="2" fill="#34d399" />
						<rect x="-12" y="6" width="24" height="2" fill="#34d399" />
						<text x="0" y="-25" text-anchor="middle" font-size="8" fill="#374151">APIs</text>
						<!-- Data flow -->
						<circle cx="-25" cy="0" r="2" fill="#10b981">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;-60,40;-130,80"
								dur="4s"
								repeatCount="indefinite"
								begin="1s"
							/>
							<animate
								attributeName="opacity"
								values="1;0"
								dur="4s"
								repeatCount="indefinite"
								begin="1s"
							/>
						</circle>
					</g>

					<!-- Files/Documents -->
					<g transform="translate(120,280)">
						<rect x="-20" y="-15" width="40" height="30" rx="3" fill="#f59e0b">
							<animate
								attributeName="fill"
								values="#f59e0b;#d97706;#f59e0b"
								dur="3.5s"
								repeatCount="indefinite"
							/>
						</rect>
						<rect x="-15" y="-10" width="30" height="2" fill="#fbbf24" />
						<rect x="-15" y="-6" width="20" height="2" fill="#fbbf24" />
						<rect x="-15" y="-2" width="25" height="2" fill="#fbbf24" />
						<rect x="-15" y="2" width="18" height="2" fill="#fbbf24" />
						<text x="0" y="25" text-anchor="middle" font-size="8" fill="#374151">Files</text>
						<!-- Data flow -->
						<circle cx="25" cy="0" r="2" fill="#f59e0b">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;60,-40;130,-80"
								dur="4s"
								repeatCount="indefinite"
								begin="2s"
							/>
							<animate
								attributeName="opacity"
								values="1;0"
								dur="4s"
								repeatCount="indefinite"
								begin="2s"
							/>
						</circle>
					</g>

					<!-- Sensors/IoT -->
					<g transform="translate(380,280)">
						<circle cx="0" cy="0" r="15" fill="#ef4444">
							<animate
								attributeName="fill"
								values="#ef4444;#dc2626;#ef4444"
								dur="2s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="0" cy="0" r="8" fill="#fca5a5" />
						<circle cx="0" cy="0" r="4" fill="#ffffff" />
						<text x="0" y="25" text-anchor="middle" font-size="8" fill="#374151">Sensors</text>
						<!-- Data flow -->
						<circle cx="-25" cy="0" r="2" fill="#ef4444">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;-60,-40;-130,-80"
								dur="4s"
								repeatCount="indefinite"
								begin="3s"
							/>
							<animate
								attributeName="opacity"
								values="1;0"
								dur="4s"
								repeatCount="indefinite"
								begin="3s"
							/>
						</circle>
					</g>

					<!-- AI Outputs -->
					<!-- Analytics Dashboard -->
					<g transform="translate(150,60)">
						<rect x="-18" y="-12" width="36" height="24" rx="3" fill="#06b6d4" />
						<rect x="-15" y="-9" width="30" height="18" fill="#67e8f9" />
						<!-- Chart bars -->
						<rect x="-12" y="-3" width="3" height="8" fill="#0891b2" />
						<rect x="-7" y="-6" width="3" height="11" fill="#0891b2" />
						<rect x="-2" y="-1" width="3" height="6" fill="#0891b2" />
						<rect x="3" y="-4" width="3" height="9" fill="#0891b2" />
						<rect x="8" y="-7" width="3" height="12" fill="#0891b2" />
						<text x="0" y="-20" text-anchor="middle" font-size="7" fill="#374151">Analytics</text>
					</g>

					<!-- ML Models -->
					<g transform="translate(350,60)">
						<circle cx="0" cy="0" r="12" fill="#8b5cf6">
							<animate
								attributeName="fill"
								values="#8b5cf6;#7c3aed;#8b5cf6"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<polygon points="-6,-3 6,-3 3,3 -3,3" fill="white" />
						<circle cx="0" cy="0" r="2" fill="white" />
						<text x="0" y="-20" text-anchor="middle" font-size="7" fill="#374151">ML Models</text>
					</g>

					<!-- Predictions -->
					<g transform="translate(150,340)">
						<rect x="-15" y="-10" width="30" height="20" rx="5" fill="#14b8a6" />
						<path
							d="M -8,-2 L -4,2 L 0,-1 L 4,3 L 8,0"
							stroke="white"
							stroke-width="2"
							fill="none"
						/>
						<circle cx="8" cy="0" r="2" fill="white" />
						<text x="0" y="18" text-anchor="middle" font-size="7" fill="#374151">Predictions</text>
					</g>

					<!-- Insights -->
					<g transform="translate(350,340)">
						<rect x="-15" y="-10" width="30" height="20" rx="5" fill="#f97316" />
						<circle cx="-5" cy="-2" r="3" fill="white" />
						<rect x="0" y="-4" width="8" height="2" fill="white" />
						<rect x="0" y="-1" width="6" height="2" fill="white" />
						<rect x="0" y="2" width="10" height="2" fill="white" />
						<text x="0" y="18" text-anchor="middle" font-size="7" fill="#374151">Insights</text>
					</g>

					<!-- Connection lines from AI core to outputs -->
					<g stroke="#8b5cf6" stroke-width="1" fill="none" opacity="0.4">
						<line x1="225" y1="175" x2="168" y2="72" />
						<line x1="275" y1="175" x2="332" y2="72" />
						<line x1="225" y1="225" x2="168" y2="328" />
						<line x1="275" y1="225" x2="332" y2="328" />
					</g>

					<!-- Data processing indicators -->
					<g>
						<!-- Processing waves around AI core -->
						<circle
							cx="250"
							cy="200"
							r="50"
							fill="none"
							stroke="#a855f7"
							stroke-width="1"
							opacity="0.3"
						>
							<animate attributeName="r" values="50;70;50" dur="3s" repeatCount="indefinite" />
							<animate
								attributeName="opacity"
								values="0.3;0.1;0.3"
								dur="3s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle
							cx="250"
							cy="200"
							r="60"
							fill="none"
							stroke="#7c3aed"
							stroke-width="1"
							opacity="0.2"
						>
							<animate attributeName="r" values="60;80;60" dur="4s" repeatCount="indefinite" />
							<animate
								attributeName="opacity"
								values="0.2;0.05;0.2"
								dur="4s"
								repeatCount="indefinite"
							/>
						</circle>
					</g>

					<!-- Data quality indicators -->
					<g>
						<circle cx="80" cy="80" r="3" fill="#10b981" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.3;0.8"
								dur="1.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="420" cy="100" r="3" fill="#3b82f6" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.3;0.8;0.3"
								dur="2s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="100" cy="320" r="3" fill="#8b5cf6" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.3;0.8"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="400" cy="300" r="3" fill="#f59e0b" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.3;0.8;0.3"
								dur="1.8s"
								repeatCount="indefinite"
							/>
						</circle>
					</g>

					<!-- Data flow network -->
					<g stroke="#8b5cf6" stroke-width="0.5" fill="none" opacity="0.2">
						<line x1="120" y1="120" x2="380" y2="120" />
						<line x1="120" y1="280" x2="380" y2="280" />
						<line x1="120" y1="120" x2="120" y2="280" />
						<line x1="380" y1="120" x2="380" y2="280" />
					</g>
				</svg>
			</div>
		</div>
	</div>
</section>

<!-- Overview -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-bold md:text-4xl">Comprehensive Data & AI Platform</h2>
				<p class="mb-6 text-lg text-gray-600">
					Transform raw data into strategic business intelligence with our comprehensive data and AI
					solutions. From big data infrastructure to advanced machine learning models, we create
					end-to-end platforms that drive data-driven decision making and competitive advantage.
				</p>
				<p class="mb-8 text-lg text-gray-600">
					Our solutions leverage cutting-edge technologies including BigQuery for data warehousing,
					ClickHouse for real-time analytics, advanced ETL pipelines, and custom AI agents built
					with the latest LLM technologies for intelligent automation and insights.
				</p>
			</div>

			<div class="rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 p-8">
				<h3 class="mb-6 text-2xl font-bold">Data & AI Benefits</h3>
				<div class="space-y-4">
					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Unified Data Platform</h4>
							<p class="text-sm text-gray-600">
								Centralized data warehouse with real-time analytics capabilities
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Intelligent Automation</h4>
							<p class="text-sm text-gray-600">
								AI agents that automate complex data processing and analysis
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Predictive Analytics</h4>
							<p class="text-sm text-gray-600">
								Machine learning models for forecasting and trend analysis
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Real-time Insights</h4>
							<p class="text-sm text-gray-600">
								Interactive dashboards with live data visualization and alerts
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Core Services -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Data & AI Services</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				End-to-end data solutions from collection and storage to advanced AI-powered analytics.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Big Data Infrastructure -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
					<svg
						class="h-6 w-6 text-purple-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Big Data Infrastructure</h3>
				<p class="mb-4 text-gray-600">
					Scalable data warehouses and processing pipelines that handle massive datasets with
					enterprise-grade performance and reliability.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• BigQuery data warehouse implementation</li>
					<li>• ClickHouse for real-time analytics</li>
					<li>• ETL/ELT pipeline development</li>
					<li>• Data lake architecture design</li>
					<li>• Stream processing with Apache Kafka</li>
					<li>• Data governance and quality management</li>
				</ul>
			</div>

			<!-- AI Agent Development -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
					<svg
						class="h-6 w-6 text-violet-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">AI Agent Development</h3>
				<p class="mb-4 text-gray-600">
					Custom AI agents and intelligent systems that automate complex data analysis,
					decision-making, and business processes.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Custom AI agents with Node-RED</li>
					<li>• Local LLM deployment and fine-tuning</li>
					<li>• RAG (Retrieval Augmented Generation) systems</li>
					<li>• Natural language processing solutions</li>
					<li>• Computer vision and image analysis</li>
					<li>• Conversational AI and chatbot development</li>
				</ul>
			</div>

			<!-- Business Intelligence & Analytics -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
					<svg
						class="h-6 w-6 text-indigo-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Business Intelligence & Analytics</h3>
				<p class="mb-4 text-gray-600">
					Interactive dashboards, advanced analytics, and machine learning models that transform
					data into actionable business insights.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Interactive dashboards with Looker Studio</li>
					<li>• Advanced statistical analysis and modeling</li>
					<li>• Predictive analytics and forecasting</li>
					<li>• Customer segmentation and behavior analysis</li>
					<li>• A/B testing and experimentation platforms</li>
					<li>• Real-time monitoring and alerting systems</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Technology Stack -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Data & AI Technology Stack</h2>
			<p class="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
				We leverage cutting-edge technologies and platforms to build robust, scalable data and AI
				solutions.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- BigQuery -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
					<svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">BigQuery</h3>
				<p class="mb-4 text-sm text-gray-600">
					Google Cloud's serverless data warehouse for analytics at scale.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Petabyte-scale analytics</li>
					<li>• Real-time data streaming</li>
					<li>• Machine learning integration</li>
				</ul>
			</div>

			<!-- ClickHouse -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
					<svg
						class="h-6 w-6 text-orange-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">ClickHouse</h3>
				<p class="mb-4 text-sm text-gray-600">
					High-performance columnar database for real-time analytics.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Sub-second query response</li>
					<li>• Columnar storage</li>
					<li>• Horizontal scaling</li>
				</ul>
			</div>

			<!-- Node-RED -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
					<svg
						class="h-6 w-6 text-purple-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Node-RED</h3>
				<p class="mb-4 text-sm text-gray-600">
					Visual AI agent builder for complex multi-step workflows.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• No-code AI development</li>
					<li>• Multi-model integration</li>
					<li>• Custom agent deployment</li>
				</ul>
			</div>

			<!-- Looker Studio -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
					<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Looker Studio</h3>
				<p class="mb-4 text-sm text-gray-600">
					Interactive dashboards and business intelligence platform.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Interactive visualizations</li>
					<li>• Real-time data connections</li>
					<li>• Collaborative reporting</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Success Stories -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Data & AI Success Stories</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Real results from our data and AI implementations.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex items-center">
					<div class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
						<span class="font-bold text-purple-600">C</span>
					</div>
					<div>
						<h3 class="font-bold text-gray-900">Coffee Chain</h3>
						<p class="text-sm text-gray-600">200+ Outlets Data Platform</p>
					</div>
				</div>
				<p class="mb-4 text-gray-600">
					"Unified data platform consolidated 5 POS systems and multiple databases into real-time
					BigQuery analytics. Data accuracy improved to 95%, reporting speed increased by 70%, and
					we now have actionable insights across all 200+ outlets with Looker Studio dashboards."
				</p>
				<div class="grid grid-cols-3 gap-4 text-center">
					<div>
						<div class="text-2xl font-bold text-purple-600">95%</div>
						<div class="text-xs text-gray-500">Data Accuracy</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-violet-600">70%</div>
						<div class="text-xs text-gray-500">Faster Reporting</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-indigo-600">200+</div>
						<div class="text-xs text-gray-500">Outlets Connected</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>

<!-- Getting Started -->
<section class="py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Build Your Data & AI Platform</h2>
			<p class="text-lg text-gray-600">
				Our systematic approach ensures successful data and AI implementation with measurable
				business impact.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100"
				>
					<span class="font-bold text-purple-600">1</span>
				</div>
				<h3 class="mb-2 font-semibold">Data Assessment</h3>
				<p class="text-sm text-gray-600">
					Comprehensive evaluation of your data sources, quality, and analytics needs
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100"
				>
					<span class="font-bold text-violet-600">2</span>
				</div>
				<h3 class="mb-2 font-semibold">Architecture Design</h3>
				<p class="text-sm text-gray-600">
					Custom data platform and AI solution architecture tailored to your requirements
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100"
				>
					<span class="font-bold text-indigo-600">3</span>
				</div>
				<h3 class="mb-2 font-semibold">Implementation</h3>
				<p class="text-sm text-gray-600">
					Phased deployment with data migration, model training, and dashboard development
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100"
				>
					<span class="font-bold text-blue-600">4</span>
				</div>
				<h3 class="mb-2 font-semibold">Optimization</h3>
				<p class="text-sm text-gray-600">
					Continuous model improvement, performance tuning, and feature enhancement
				</p>
			</div>
		</div>
	</div>
</section>

<CTA
	title="Ready to Unlock Your Data's Potential?"
	description="Let's discuss how data and AI solutions can transform your business intelligence and decision-making capabilities."
	primaryButton={{
		text: 'Schedule Data Consultation',
		href: 'http://cal.com/alphabits/mini',
		variant: 'custom',
		class:
			'bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
	}}
	secondaryButton={{
		text: 'View Data Demos',
		href: '/case-studies'
	}}
	variant="gradient-blue"
/>
