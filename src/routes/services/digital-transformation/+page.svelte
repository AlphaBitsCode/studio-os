<script>
	import CTA from '$lib/components/CTA.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Digital Transformation & Integration',
		description:
			'Comprehensive digital transformation services including ERP integration, legacy system migration, and modern infrastructure implementation for seamless business operations.',
		provider: {
			'@type': 'Organization',
			name: 'AlphaBits',
			url: 'https://alphabits.team'
		},
		serviceType: 'Digital Transformation Consulting',
		category: 'Digital Transformation Services',
		offers: {
			'@type': 'Offer',
			description:
				'ERP integration, legacy system migration, and digital infrastructure modernization',
			seller: {
				'@type': 'Organization',
				name: 'AlphaBits'
			}
		}
	};
</script>

<SEOHead
	title="Digital Transformation & Integration - AlphaBits | ERP & Legacy System Migration"
	description="Comprehensive digital transformation services including ERP integration, legacy system migration, and modern infrastructure implementation for seamless business operations."
	keywords="digital transformation, ERP integration, legacy system migration, business modernization, digital infrastructure, system integration, enterprise transformation"
	canonicalUrl="https://alphabits.team/services/digital-transformation"
	ogImage="https://alphabits.team/alphabits_cover.png"
	ogType="article"
	articleSection="Services"
	{structuredData}
/>

<!-- Animated Hero Section -->
<section class="overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
					Digital Transformation &
					<span class="text-orange-600">Integration</span>
				</h1>
				<p class="mb-8 text-xl leading-relaxed text-gray-600">
					Modernize your entire digital ecosystem with comprehensive transformation services. From
					legacy system migration to cutting-edge ERP implementations, we ensure seamless
					integration and minimal business disruption.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="/contact"
						class="rounded-lg bg-orange-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-700"
					>
						Start Transformation
					</a>
					<a
						href="/case-studies"
						class="rounded-lg border-2 border-orange-600 px-8 py-3 text-center font-semibold text-orange-600 transition-colors hover:bg-orange-600 hover:text-white"
					>
						View Case Studies
					</a>
				</div>
			</div>

			<!-- Animated SVG -->
			<div class="flex justify-center">
				<svg width="500" height="400" viewBox="0 0 500 400" class="w-full max-w-lg">
					<!-- Background gradient -->
					<defs>
						<linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#fed7aa;stop-opacity:0.3" />
							<stop offset="100%" style="stop-color:#fdba74;stop-opacity:0.1" />
						</linearGradient>
						<linearGradient id="transformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style="stop-color:#ea580c" />
							<stop offset="100%" style="stop-color:#f97316" />
						</linearGradient>
					</defs>

					<!-- Background circles -->
					<circle cx="250" cy="200" r="180" fill="url(#bgGradient)">
						<animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
					</circle>
					<circle cx="250" cy="200" r="140" fill="#fed7aa" opacity="0.4">
						<animate attributeName="r" values="140;150;140" dur="3s" repeatCount="indefinite" />
					</circle>

					<!-- Legacy System (Left) -->
					<g transform="translate(120,150)">
						<rect x="-30" y="-20" width="60" height="40" rx="5" fill="#6b7280" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.4;0.8"
								dur="2s"
								repeatCount="indefinite"
							/>
						</rect>
						<text x="0" y="5" text-anchor="middle" font-size="10" fill="white">Legacy</text>
						<!-- Old data flowing out -->
						<circle cx="35" cy="0" r="3" fill="#dc2626">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;50,0;100,0"
								dur="3s"
								repeatCount="indefinite"
							/>
							<animate attributeName="opacity" values="1;0" dur="3s" repeatCount="indefinite" />
						</circle>
					</g>

					<!-- Transformation Engine (Center) -->
					<g transform="translate(250,200)">
						<!-- Main transformation hub -->
						<circle cx="0" cy="0" r="35" fill="url(#transformGradient)">
							<animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite" />
						</circle>
						<circle cx="0" cy="0" r="25" fill="#ffffff" opacity="0.9" />

						<!-- Transformation gears -->
						<g>
							<circle cx="0" cy="0" r="15" fill="none" stroke="#ea580c" stroke-width="2" />
							<rect x="-2" y="-18" width="4" height="6" fill="#ea580c" />
							<rect x="-2" y="12" width="4" height="6" fill="#ea580c" />
							<rect x="-18" y="-2" width="6" height="4" fill="#ea580c" />
							<rect x="12" y="-2" width="6" height="4" fill="#ea580c" />
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0;360"
								dur="4s"
								repeatCount="indefinite"
							/>
						</g>

						<!-- Inner gear -->
						<g>
							<circle cx="0" cy="0" r="8" fill="none" stroke="#f97316" stroke-width="1.5" />
							<rect x="-1" y="-10" width="2" height="3" fill="#f97316" />
							<rect x="-1" y="7" width="2" height="3" fill="#f97316" />
							<rect x="-10" y="-1" width="3" height="2" fill="#f97316" />
							<rect x="7" y="-1" width="3" height="2" fill="#f97316" />
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="360;0"
								dur="3s"
								repeatCount="indefinite"
							/>
						</g>

						<!-- Transformation particles -->
						<circle cx="20" cy="-20" r="2" fill="#f97316" opacity="0.7">
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 0 0;360 0 0"
								dur="5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="-25" cy="15" r="2" fill="#ea580c" opacity="0.7">
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 0 0;-360 0 0"
								dur="4s"
								repeatCount="indefinite"
							/>
						</circle>
					</g>

					<!-- Modern System (Right) -->
					<g transform="translate(380,150)">
						<rect x="-30" y="-20" width="60" height="40" rx="8" fill="#10b981">
							<animate
								attributeName="fill"
								values="#10b981;#059669;#10b981"
								dur="2s"
								repeatCount="indefinite"
							/>
						</rect>
						<text x="0" y="5" text-anchor="middle" font-size="10" fill="white">Modern</text>
						<!-- New data flowing in -->
						<circle cx="-35" cy="0" r="3" fill="#10b981">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="-100,0;-50,0;0,0"
								dur="3s"
								repeatCount="indefinite"
							/>
							<animate attributeName="opacity" values="0;1" dur="3s" repeatCount="indefinite" />
						</circle>
					</g>

					<!-- Data Flow Lines -->
					<g stroke="#f97316" stroke-width="2" fill="none" opacity="0.6">
						<!-- Legacy to Center -->
						<path d="M 155 150 Q 200 130 215 200">
							<animate
								attributeName="stroke-dasharray"
								values="0,200;200,0"
								dur="3s"
								repeatCount="indefinite"
							/>
						</path>
						<!-- Center to Modern -->
						<path d="M 285 200 Q 330 130 345 150">
							<animate
								attributeName="stroke-dasharray"
								values="0,200;200,0"
								dur="3s"
								repeatCount="indefinite"
								begin="1s"
							/>
						</path>
					</g>

					<!-- Integration Points -->
					<g>
						<!-- ERP Integration -->
						<g transform="translate(180,280)">
							<rect x="-20" y="-10" width="40" height="20" rx="3" fill="#3b82f6" />
							<text x="0" y="3" text-anchor="middle" font-size="8" fill="white">ERP</text>
							<animateTransform
								attributeName="transform"
								type="translate"
								values="180,280;185,275;180,280"
								dur="2s"
								repeatCount="indefinite"
							/>
						</g>

						<!-- CRM Integration -->
						<g transform="translate(320,280)">
							<rect x="-20" y="-10" width="40" height="20" rx="3" fill="#8b5cf6" />
							<text x="0" y="3" text-anchor="middle" font-size="8" fill="white">CRM</text>
							<animateTransform
								attributeName="transform"
								type="translate"
								values="320,280;315,275;320,280"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</g>

						<!-- Cloud Infrastructure -->
						<g transform="translate(250,320)">
							<ellipse cx="0" cy="0" rx="25" ry="8" fill="#06b6d4" />
							<ellipse cx="-10" cy="-5" rx="15" ry="6" fill="#0891b2" />
							<ellipse cx="10" cy="-3" rx="12" ry="5" fill="#0e7490" />
							<text x="0" y="15" text-anchor="middle" font-size="8" fill="#0891b2">Cloud</text>
							<animateTransform
								attributeName="transform"
								type="translate"
								values="250,320;250,315;250,320"
								dur="4s"
								repeatCount="indefinite"
							/>
						</g>
					</g>

					<!-- Connection lines to integrations -->
					<g stroke="#f97316" stroke-width="1" fill="none" opacity="0.4">
						<line x1="250" y1="235" x2="200" y2="270" />
						<line x1="250" y1="235" x2="300" y2="270" />
						<line x1="250" y1="235" x2="250" y2="310" />
					</g>

					<!-- Success indicators -->
					<g>
						<circle cx="100" cy="100" r="3" fill="#10b981" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.3;0.8"
								dur="1.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="400" cy="120" r="3" fill="#3b82f6" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.3;0.8;0.3"
								dur="2s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="120" cy="320" r="3" fill="#8b5cf6" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.3;0.8"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</circle>
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
				<h2 class="mb-6 text-3xl font-bold md:text-4xl">
					Complete Digital Ecosystem Transformation
				</h2>
				<p class="mb-6 text-lg text-gray-600">
					Transform your business operations with comprehensive digital transformation services that
					modernize legacy systems, integrate enterprise applications, and create seamless workflows
					across your entire organization.
				</p>
				<p class="mb-8 text-lg text-gray-600">
					Our proven methodology ensures minimal disruption while maximizing the benefits of modern
					technology infrastructure, from cloud migration to ERP integration and beyond.
				</p>

				<div class="grid grid-cols-2 gap-6">
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-orange-600">95%</div>
						<div class="text-sm text-gray-600">Successful Migrations</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-blue-600">60%</div>
						<div class="text-sm text-gray-600">Average Cost Reduction</div>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 p-8">
				<h3 class="mb-6 text-2xl font-bold">Transformation Benefits</h3>
				<div class="space-y-4">
					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-600"
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
							<h4 class="mb-1 font-semibold">Unified Operations</h4>
							<p class="text-sm text-gray-600">
								Seamless integration across all business systems and departments
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
							<h4 class="mb-1 font-semibold">Enhanced Security</h4>
							<p class="text-sm text-gray-600">
								Modern security protocols and compliance frameworks
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600"
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
							<h4 class="mb-1 font-semibold">Scalable Infrastructure</h4>
							<p class="text-sm text-gray-600">
								Cloud-native solutions that grow with your business
							</p>
						</div>
					</div>

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
							<h4 class="mb-1 font-semibold">Real-time Analytics</h4>
							<p class="text-sm text-gray-600">
								Data-driven insights for better business decisions
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
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Transformation Services</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Comprehensive digital transformation solutions tailored to your business needs.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Legacy System Migration -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
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
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Legacy System Migration</h3>
				<p class="mb-4 text-gray-600">
					Safe and secure migration from outdated systems to modern, cloud-native platforms with
					zero data loss.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Comprehensive system assessment and planning</li>
					<li>• Data migration with integrity validation</li>
					<li>• Phased rollout with minimal downtime</li>
					<li>• User training and change management</li>
					<li>• Post-migration support and optimization</li>
					<li>• Legacy system decommissioning</li>
				</ul>
			</div>

			<!-- ERP & CRM Integration -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
					<svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">ERP & CRM Integration</h3>
				<p class="mb-4 text-gray-600">
					Seamless integration of enterprise systems for unified operations and real-time data
					synchronization.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• SAP, Oracle, Microsoft Dynamics integration</li>
					<li>• Salesforce and HubSpot CRM setup</li>
					<li>• Custom API development and integration</li>
					<li>• Workflow automation and optimization</li>
					<li>• Real-time data synchronization</li>
					<li>• Multi-system reporting and analytics</li>
				</ul>
			</div>

			<!-- Cloud Infrastructure Setup -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
					<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Cloud Infrastructure Setup</h3>
				<p class="mb-4 text-gray-600">
					Modern cloud infrastructure design and implementation for scalability, security, and cost
					optimization.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• AWS, Azure, Google Cloud deployment</li>
					<li>• Containerization with Docker and Kubernetes</li>
					<li>• CI/CD pipeline implementation</li>
					<li>• Auto-scaling and load balancing</li>
					<li>• Security and compliance configuration</li>
					<li>• Cost optimization and monitoring</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Transformation Process -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Our Transformation Process</h2>
			<p class="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
				A proven methodology that ensures successful digital transformation with minimal business
				disruption.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
			<!-- Assessment -->
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
							d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Assessment</h3>
				<p class="mb-4 text-sm text-gray-600">
					Comprehensive evaluation of current systems and processes.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• System architecture review</li>
					<li>• Process mapping</li>
					<li>• Gap analysis</li>
				</ul>
			</div>

			<!-- Strategy -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
					<svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Strategy</h3>
				<p class="mb-4 text-sm text-gray-600">
					Custom transformation roadmap and implementation plan.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Technology selection</li>
					<li>• Migration strategy</li>
					<li>• Timeline planning</li>
				</ul>
			</div>

			<!-- Implementation -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
					<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
						></path>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Implementation</h3>
				<p class="mb-4 text-sm text-gray-600">
					Phased rollout with continuous monitoring and support.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• System deployment</li>
					<li>• Data migration</li>
					<li>• Integration testing</li>
				</ul>
			</div>

			<!-- Training -->
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
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Training</h3>
				<p class="mb-4 text-sm text-gray-600">Comprehensive user training and change management.</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• User workshops</li>
					<li>• Documentation</li>
					<li>• Support materials</li>
				</ul>
			</div>

			<!-- Optimization -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
					<svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Optimization</h3>
				<p class="mb-4 text-sm text-gray-600">
					Continuous improvement and performance optimization.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Performance monitoring</li>
					<li>• Process refinement</li>
					<li>• Ongoing support</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Success Stories -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
				Transformation Success Stories
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Real results from our digital transformation projects.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex items-center">
					<div class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
						<span class="font-bold text-orange-600">R</span>
					</div>
					<div>
						<h3 class="font-bold text-gray-900">Retail Chain</h3>
						<p class="text-sm text-gray-600">Multi-location Enterprise</p>
					</div>
				</div>
				<p class="mb-4 text-gray-600">
					"The complete ERP transformation unified our inventory, sales, and financial systems
					across 50+ locations. Real-time visibility into operations improved our decision-making
					speed by 400% and reduced operational costs significantly."
				</p>
				<div class="grid grid-cols-3 gap-4 text-center">
					<div>
						<div class="text-2xl font-bold text-orange-600">400%</div>
						<div class="text-xs text-gray-500">Faster Decisions</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-blue-600">35%</div>
						<div class="text-xs text-gray-500">Cost Reduction</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-green-600">99.8%</div>
						<div class="text-xs text-gray-500">System Uptime</div>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex items-center">
					<div class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
						<span class="font-bold text-blue-600">F</span>
					</div>
					<div>
						<h3 class="font-bold text-gray-900">Financial Services</h3>
						<p class="text-sm text-gray-600">Regional Bank</p>
					</div>
				</div>
				<p class="mb-4 text-gray-600">
					"Legacy system migration to cloud-native infrastructure improved our customer service
					response times by 300% while ensuring full regulatory compliance. The transformation
					positioned us for future growth and innovation."
				</p>
				<div class="grid grid-cols-3 gap-4 text-center">
					<div>
						<div class="text-2xl font-bold text-orange-600">300%</div>
						<div class="text-xs text-gray-500">Faster Response</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-blue-600">100%</div>
						<div class="text-xs text-gray-500">Compliance</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-green-600">50%</div>
						<div class="text-xs text-gray-500">Infrastructure Savings</div>
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
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Start Your Transformation</h2>
			<p class="text-lg text-gray-600">
				Our proven process ensures successful digital transformation with minimal business
				disruption.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100"
				>
					<span class="font-bold text-orange-600">1</span>
				</div>
				<h3 class="mb-2 font-semibold">Discovery Call</h3>
				<p class="text-sm text-gray-600">
					Free consultation to understand your transformation needs
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100"
				>
					<span class="font-bold text-blue-600">2</span>
				</div>
				<h3 class="mb-2 font-semibold">System Assessment</h3>
				<p class="text-sm text-gray-600">
					Comprehensive evaluation of your current digital landscape
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
				>
					<span class="font-bold text-green-600">3</span>
				</div>
				<h3 class="mb-2 font-semibold">Transformation Plan</h3>
				<p class="text-sm text-gray-600">
					Custom roadmap with timeline and implementation strategy
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100"
				>
					<span class="font-bold text-purple-600">4</span>
				</div>
				<h3 class="mb-2 font-semibold">Implementation</h3>
				<p class="text-sm text-gray-600">
					Phased execution with continuous support and optimization
				</p>
			</div>
		</div>
	</div>
</section>

<CTA
	title="Ready to Transform Your Digital Infrastructure?"
	description="Let's discuss how our digital transformation services can modernize your operations and accelerate growth."
	primaryButton={{
		text: 'Schedule Transformation Assessment',
		href: 'http://cal.com/alphabits/mini',
		variant: 'custom',
		class:
			'bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
	}}
	secondaryButton={{
		text: 'View Our Case Studies',
		href: '/case-studies'
	}}
	variant="gradient-orange"
/>
