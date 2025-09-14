<script>
	import CTA from '$lib/components/CTA.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AlphaBits Services',
		description:
			'Comprehensive technology services including AI workflow automation, fractional CTO services, data solutions, digital transformation, and IoT infrastructure.',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@type': 'Service',
					name: 'AI Workflow Automation',
					url: 'https://alphabits.team/services/ai-workflow-automation',
					description: 'Intelligent AI agents and IoT workflow automation across all departments'
				}
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@type': 'Service',
					name: 'Fractional CTO Services',
					url: 'https://alphabits.team/services/fractional-cto',
					description: 'Expert technical leadership and strategic guidance'
				}
			},
			{
				'@type': 'ListItem',
				position: 3,
				item: {
					'@type': 'Service',
					name: 'Data & AI Solutions',
					url: 'https://alphabits.team/services/data-ai-solutions',
					description: 'Big data analytics, AI infrastructure, and intelligent agents'
				}
			},
			{
				'@type': 'ListItem',
				position: 4,
				item: {
					'@type': 'Service',
					name: 'IoT Infrastructure',
					url: 'https://alphabits.team/services/iot-infrastructure',
					description: 'Smart sensor networks and IoT monitoring systems'
				}
			},
			{
				'@type': 'ListItem',
				position: 5,
				item: {
					'@type': 'Service',
					name: 'Digital Transformation',
					url: 'https://alphabits.team/services/digital-transformation',
					description: 'ERP integration and legacy system modernization'
				}
			}
		]
	};
</script>

<SEOHead
	title="Our Services - AlphaBits | AI Automation, CTO Services & Digital Transformation"
	description="Comprehensive AI workflow automation, fractional CTO services, data solutions, digital transformation, and IoT infrastructure services. Transform your business with expert technology solutions."
	keywords="AI services, fractional CTO, digital transformation services, IoT infrastructure, data analytics, business automation, technology consulting, AI implementation"
	canonicalUrl="https://alphabits.team/services"
	ogImage="https://alphabits.team/alphabits_cover.png"
	ogType="website"
	{structuredData}
/>

<!-- Hero Section with Large Vector Animation -->
<section
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
>
	<div class="absolute inset-0 bg-white/30"></div>

	<!-- Main Hero Animation -->
	<div class="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-6xl text-center">
			<!-- Large Vector Animation -->
			<div class="mb-8 flex justify-center">
				<svg width="800" height="500" viewBox="0 0 800 500" class="h-auto w-full max-w-4xl">
					<!-- Background gradient -->
					<defs>
						<linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#dbeafe;stop-opacity:0.4" />
							<stop offset="100%" style="stop-color:#e0e7ff;stop-opacity:0.2" />
						</linearGradient>
						<linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style="stop-color:#2563eb" />
							<stop offset="100%" style="stop-color:#7c3aed" />
						</linearGradient>
						<radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
							<stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
							<stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.1" />
						</radialGradient>
					</defs>

					<!-- Background circles -->
					<circle cx="400" cy="250" r="220" fill="url(#heroGradient)">
						<animate attributeName="r" values="220;230;220" dur="4s" repeatCount="indefinite" />
					</circle>
					<circle cx="400" cy="250" r="180" fill="#dbeafe" opacity="0.3">
						<animate attributeName="r" values="180;190;180" dur="3s" repeatCount="indefinite" />
					</circle>

					<!-- Central Hub -->
					<g transform="translate(400,250)">
						<!-- Main hub -->
						<circle cx="0" cy="0" r="40" fill="url(#centerGradient)">
							<animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite" />
						</circle>
						<circle cx="0" cy="0" r="30" fill="#ffffff" opacity="0.9" />
						<text x="0" y="8" text-anchor="middle" font-size="16" fill="#2563eb" font-weight="bold"
							>AB</text
						>

						<!-- Pulse rings -->
						<circle
							cx="0"
							cy="0"
							r="60"
							fill="none"
							stroke="#3b82f6"
							stroke-width="2"
							opacity="0.4"
						>
							<animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite" />
							<animate
								attributeName="opacity"
								values="0.4;0.1;0.4"
								dur="3s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle
							cx="0"
							cy="0"
							r="70"
							fill="none"
							stroke="#7c3aed"
							stroke-width="1.5"
							opacity="0.3"
						>
							<animate attributeName="r" values="70;90;70" dur="4s" repeatCount="indefinite" />
							<animate
								attributeName="opacity"
								values="0.3;0.05;0.3"
								dur="4s"
								repeatCount="indefinite"
							/>
						</circle>
					</g>

					<!-- Service Icons -->
					<!-- AI Workflow Automation -->
					<g transform="translate(200,150)">
						<circle cx="0" cy="0" r="25" fill="#3b82f6">
							<animate
								attributeName="fill"
								values="#3b82f6;#2563eb;#3b82f6"
								dur="2s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="0" cy="0" r="18" fill="#dbeafe" />
						<!-- AI brain icon -->
						<path d="M -8,-8 Q 0,-12 8,-8 Q 12,0 8,8 Q 0,12 -8,8 Q -12,0 -8,-8" fill="#2563eb" />
						<circle cx="-4" cy="-4" r="2" fill="#ffffff" />
						<circle cx="4" cy="-4" r="2" fill="#ffffff" />
						<circle cx="0" cy="4" r="2" fill="#ffffff" />
						<text
							x="0"
							y="-35"
							text-anchor="middle"
							font-size="10"
							fill="#374151"
							font-weight="bold">AI Workflow</text
						>
						<text
							x="0"
							y="-25"
							text-anchor="middle"
							font-size="10"
							fill="#374151"
							font-weight="bold">Automation</text
						>
						<!-- Data flow -->
						<circle cx="30" cy="15" r="3" fill="#3b82f6">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;100,50;200,100"
								dur="4s"
								repeatCount="indefinite"
							/>
							<animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" />
						</circle>
					</g>

					<!-- Fractional CTO -->
					<g transform="translate(600,150)">
						<circle cx="0" cy="0" r="25" fill="#10b981">
							<animate
								attributeName="fill"
								values="#10b981;#059669;#10b981"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="0" cy="0" r="18" fill="#d1fae5" />
						<!-- CTO icon -->
						<rect x="-8" y="-8" width="16" height="16" rx="2" fill="#10b981" />
						<circle cx="0" cy="-3" r="3" fill="#ffffff" />
						<rect x="-4" y="2" width="8" height="6" rx="1" fill="#ffffff" />
						<text
							x="0"
							y="-35"
							text-anchor="middle"
							font-size="10"
							fill="#374151"
							font-weight="bold">Fractional</text
						>
						<text
							x="0"
							y="-25"
							text-anchor="middle"
							font-size="10"
							fill="#374151"
							font-weight="bold">CTO</text
						>
						<!-- Data flow -->
						<circle cx="-30" cy="15" r="3" fill="#10b981">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;-100,50;-200,100"
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

					<!-- Digital Transformation -->
					<g transform="translate(200,350)">
						<circle cx="0" cy="0" r="25" fill="#f59e0b">
							<animate
								attributeName="fill"
								values="#f59e0b;#d97706;#f59e0b"
								dur="3s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="0" cy="0" r="18" fill="#fef3c7" />
						<!-- Digital transformation icon -->
						<rect x="-10" y="-6" width="20" height="12" rx="2" fill="#f59e0b" />
						<rect x="-8" y="-4" width="6" height="2" fill="#ffffff" />
						<rect x="-8" y="-1" width="8" height="2" fill="#ffffff" />
						<rect x="-8" y="2" width="4" height="2" fill="#ffffff" />
						<circle cx="6" cy="0" r="4" fill="#ffffff" />
						<path d="M 4,-2 L 8,0 L 4,2" fill="#f59e0b" />
						<text x="0" y="40" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold"
							>Digital</text
						>
						<text x="0" y="50" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold"
							>Transformation</text
						>
						<!-- Data flow -->
						<circle cx="30" cy="-15" r="3" fill="#f59e0b">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;100,-50;200,-100"
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

					<!-- IoT Infrastructure -->
					<g transform="translate(600,350)">
						<circle cx="0" cy="0" r="25" fill="#14b8a6">
							<animate
								attributeName="fill"
								values="#14b8a6;#0d9488;#14b8a6"
								dur="2.8s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="0" cy="0" r="18" fill="#ccfbf1" />
						<!-- IoT icon -->
						<circle cx="0" cy="0" r="6" fill="#14b8a6" />
						<circle cx="-8" cy="-8" r="3" fill="#14b8a6" />
						<circle cx="8" cy="-8" r="3" fill="#14b8a6" />
						<circle cx="-8" cy="8" r="3" fill="#14b8a6" />
						<circle cx="8" cy="8" r="3" fill="#14b8a6" />
						<line x1="-6" y1="-6" x2="-3" y2="-3" stroke="#14b8a6" stroke-width="1" />
						<line x1="6" y1="-6" x2="3" y2="-3" stroke="#14b8a6" stroke-width="1" />
						<line x1="-6" y1="6" x2="-3" y2="3" stroke="#14b8a6" stroke-width="1" />
						<line x1="6" y1="6" x2="3" y2="3" stroke="#14b8a6" stroke-width="1" />
						<text x="0" y="40" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold"
							>IoT</text
						>
						<text x="0" y="50" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold"
							>Infrastructure</text
						>
						<!-- Data flow -->
						<circle cx="-30" cy="-15" r="3" fill="#14b8a6">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;-100,-50;-200,-100"
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

					<!-- Data & AI Solutions -->
					<g transform="translate(400,100)">
						<circle cx="0" cy="0" r="25" fill="#8b5cf6">
							<animate
								attributeName="fill"
								values="#8b5cf6;#7c3aed;#8b5cf6"
								dur="2.2s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="0" cy="0" r="18" fill="#ede9fe" />
						<!-- Data & AI icon -->
						<rect x="-8" y="-8" width="16" height="16" rx="2" fill="#8b5cf6" />
						<rect x="-6" y="-6" width="4" height="2" fill="#ffffff" />
						<rect x="-6" y="-3" width="6" height="2" fill="#ffffff" />
						<rect x="-6" y="0" width="3" height="2" fill="#ffffff" />
						<rect x="-6" y="3" width="5" height="2" fill="#ffffff" />
						<circle cx="4" cy="-2" r="3" fill="#ffffff" />
						<circle cx="4" cy="-2" r="1" fill="#8b5cf6" />
						<text
							x="0"
							y="-35"
							text-anchor="middle"
							font-size="10"
							fill="#374151"
							font-weight="bold">Data & AI</text
						>
						<text
							x="0"
							y="-25"
							text-anchor="middle"
							font-size="10"
							fill="#374151"
							font-weight="bold">Solutions</text
						>
						<!-- Data flow -->
						<circle cx="0" cy="25" r="3" fill="#8b5cf6">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0,0;0,75;0,150"
								dur="4s"
								repeatCount="indefinite"
								begin="0.5s"
							/>
							<animate
								attributeName="opacity"
								values="1;0"
								dur="4s"
								repeatCount="indefinite"
								begin="0.5s"
							/>
						</circle>
					</g>

					<!-- Connection lines -->
					<g stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.3">
						<line x1="225" y1="175" x2="375" y2="225" />
						<line x1="575" y1="175" x2="425" y2="225" />
						<line x1="225" y1="325" x2="375" y2="275" />
						<line x1="575" y1="325" x2="425" y2="275" />
						<line x1="400" y1="125" x2="400" y2="210" />
					</g>

					<!-- Floating particles -->
					<g>
						<circle cx="150" cy="100" r="4" fill="#3b82f6" opacity="0.6">
							<animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite" />
							<animate
								attributeName="opacity"
								values="0.6;0.2;0.6"
								dur="3s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="650" cy="120" r="3" fill="#10b981" opacity="0.5">
							<animate attributeName="cy" values="120;100;120" dur="4s" repeatCount="indefinite" />
							<animate
								attributeName="opacity"
								values="0.5;0.1;0.5"
								dur="4s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="100" cy="400" r="5" fill="#f59e0b" opacity="0.4">
							<animate
								attributeName="cy"
								values="400;380;400"
								dur="2.5s"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="opacity"
								values="0.4;0.1;0.4"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="700" cy="380" r="3" fill="#14b8a6" opacity="0.7">
							<animate
								attributeName="cy"
								values="380;360;380"
								dur="3.5s"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="opacity"
								values="0.7;0.2;0.7"
								dur="3.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="450" cy="50" r="4" fill="#8b5cf6" opacity="0.5">
							<animate attributeName="cy" values="50;30;50" dur="4s" repeatCount="indefinite" />
							<animate
								attributeName="opacity"
								values="0.5;0.1;0.5"
								dur="4s"
								repeatCount="indefinite"
							/>
						</circle>
					</g>

					<!-- Service integration indicators -->
					<g>
						<circle cx="300" cy="200" r="2" fill="#3b82f6" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.3;0.8"
								dur="1.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="500" cy="200" r="2" fill="#10b981" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.3;0.8;0.3"
								dur="2s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="300" cy="300" r="2" fill="#f59e0b" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.3;0.8"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="500" cy="300" r="2" fill="#14b8a6" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.3;0.8;0.3"
								dur="1.8s"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="400" cy="150" r="2" fill="#8b5cf6" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;0.3;0.8"
								dur="3s"
								repeatCount="indefinite"
							/>
						</circle>
					</g>
				</svg>
			</div>

			<!-- Hero Text -->
			<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
				Transform Your Business with
				<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-blue-700">
					Expert Technology Solutions
				</span>
			</h1>

			<p class="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
				From AI workflow automation to fractional CTO services, we deliver comprehensive technology
				solutions that drive real business results.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="http://cal.com/alphabits/mini"
					class="transform rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-900"
				>
					Book Tech Assessment
				</a>
				<a
					href="/services"
					class="rounded-lg border-2 border-gray-400 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-400 hover:text-white"
				>
					Learn more
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
		<svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path>
		</svg>
	</div>
</section>

<!-- Services Section with Creative Overlapping Layout -->
<section class="relative overflow-hidden bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Comprehensive Services</h2>
			<p class="mx-auto max-w-3xl text-xl text-gray-600">
				We deliver end-to-end technology solutions that transform how your business operates,
				scales, and succeeds in the digital age.
			</p>
		</div>

		<!-- AI Workflow Automation - Left Aligned with Animation -->
		<div class="relative mb-32">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="order-2 lg:order-1">
					<div class="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
						<div class="mb-6 flex items-center">
							<div
								class="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600"
							>
								<svg
									class="h-8 w-8 text-white"
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
							<h3 class="text-2xl font-bold text-gray-900">AI Workflow Automation</h3>
						</div>
						<p class="mb-6 text-lg leading-relaxed text-gray-700">
							Transform your business operations with intelligent AI agents that automate complex
							workflows across all departments. From customer support to financial processes, our AI
							solutions reduce manual work by up to 80% while improving accuracy and response times.
						</p>
						<div class="mb-6 grid gap-4 md:grid-cols-2">
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-blue-600">Smart Automation</h4>
								<p class="text-sm text-gray-600">
									AI agents handle repetitive tasks, freeing your team for strategic work
								</p>
							</div>
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-blue-600">Cross-Department Integration</h4>
								<p class="text-sm text-gray-600">
									Seamless workflows connecting Sales, HR, Finance, and Support
								</p>
							</div>
						</div>
						<a
							href="/services/ai-workflow-automation"
							class="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
						>
							Explore AI Solutions
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="relative order-1 lg:order-2">
					<div class="relative z-10">
						<img
							src="/animations/ai-workflow-animation.svg?v=1"
							alt="AI Workflow Automation"
							class="mx-auto h-auto w-full max-w-md"
						/>
					</div>
					<!-- Decorative elements -->
					<div
						class="absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-blue-200 opacity-20"
					></div>
					<div
						class="absolute -bottom-6 -left-6 h-32 w-32 animate-pulse rounded-full bg-indigo-200 opacity-15"
						style="animation-delay: 1s;"
					></div>
				</div>
			</div>
		</div>

		<!-- Fractional CTO & Tech Leadership - Right Aligned with Photo -->
		<div class="relative mb-32">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="relative">
					<div class="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
						<img
							src="/office/profile2.jpg"
							alt="Expert Technical Leadership"
							class="h-80 w-full object-cover"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
						<div class="absolute bottom-4 left-4 text-white">
							<p class="text-sm font-medium">Expert Technical Leadership</p>
						</div>
					</div>
					<!-- Decorative elements -->
					<div
						class="absolute -top-6 -left-6 h-32 w-32 animate-pulse rounded-full bg-green-200 opacity-20"
					></div>
					<div
						class="absolute -right-4 -bottom-4 h-24 w-24 animate-pulse rounded-full bg-emerald-200 opacity-15"
						style="animation-delay: 1.5s;"
					></div>
				</div>
				<div>
					<div class="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 p-8">
						<div class="mb-6 flex items-center">
							<div
								class="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600"
							>
								<svg
									class="h-8 w-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-gray-900">Fractional CTO & Tech Leadership</h3>
						</div>
						<p class="mb-6 text-lg leading-relaxed text-gray-700">
							Get C-level technical expertise without the full-time cost. Our fractional CTO
							services provide strategic technology leadership, comprehensive system assessments,
							and actionable roadmaps that align technology investments with business goals.
						</p>
						<div class="mb-6 space-y-4">
							<div class="flex items-start">
								<div
									class="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500"
								>
									<svg class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<div>
									<h4 class="font-semibold text-green-700">Strategic Technology Planning</h4>
									<p class="text-sm text-gray-600">
										Align your tech stack with business objectives and growth plans
									</p>
								</div>
							</div>
							<div class="flex items-start">
								<div
									class="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500"
								>
									<svg class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<div>
									<h4 class="font-semibold text-green-700">Infrastructure Modernization</h4>
									<p class="text-sm text-gray-600">
										Upgrade legacy systems and implement scalable solutions
									</p>
								</div>
							</div>
						</div>
						<a
							href="/services/fractional-cto"
							class="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
						>
							Schedule CTO Consultation
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Data & AI Solutions - Left Aligned with Animation -->
		<div class="relative mb-32">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="order-2 lg:order-1">
					<div class="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 p-8">
						<div class="mb-6 flex items-center">
							<div
								class="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600"
							>
								<svg
									class="h-8 w-8 text-white"
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
							<h3 class="text-2xl font-bold text-gray-900">Data & AI Solutions</h3>
						</div>
						<p class="mb-6 text-lg leading-relaxed text-gray-700">
							Unlock the power of your data with comprehensive analytics, AI infrastructure, and
							intelligent agents. From data collection to actionable insights, we build scalable
							solutions that turn information into competitive advantage.
						</p>
						<div class="mb-6 grid gap-4 md:grid-cols-2">
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-purple-600">Big Data Infrastructure</h4>
								<p class="text-sm text-gray-600">
									Scalable data warehouses with BigQuery, ClickHouse, and modern ETL pipelines
								</p>
							</div>
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-purple-600">AI Agent Development</h4>
								<p class="text-sm text-gray-600">
									Custom AI agents using MindStudio, Dify.ai, and local LLM deployments
								</p>
							</div>
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-purple-600">Business Intelligence</h4>
								<p class="text-sm text-gray-600">
									Interactive dashboards and real-time analytics for data-driven decisions
								</p>
							</div>
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-purple-600">Machine Learning</h4>
								<p class="text-sm text-gray-600">
									Predictive models and automated insights tailored to your business needs
								</p>
							</div>
						</div>
						<a
							href="/services/data-ai-solutions"
							class="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
						>
							Explore Data Solutions
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="relative order-1 lg:order-2">
					<div class="relative z-10">
						<img
							src="/animations/data-ai-animation.svg?v=1"
							alt="Data & AI Solutions"
							class="mx-auto h-auto w-full max-w-md"
						/>
					</div>
					<!-- Decorative elements -->
					<div
						class="absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-purple-200 opacity-20"
					></div>
					<div
						class="absolute -bottom-6 -left-6 h-32 w-32 animate-pulse rounded-full bg-violet-200 opacity-15"
						style="animation-delay: 2s;"
					></div>
				</div>
			</div>
		</div>

		<!-- Digital Transformation - Right Aligned with Office Photo -->
		<div class="relative mb-32">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="relative">
					<div class="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
						<img
							src="/office/office_7.jpg"
							alt="Digital Infrastructure Solutions"
							class="h-80 w-full object-cover"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
						<div class="absolute bottom-4 left-4 text-white">
							<p class="text-sm font-medium">Turn-key Digital Infrastructure</p>
						</div>
					</div>
					<!-- Decorative elements -->
					<div
						class="absolute -top-6 -left-6 h-32 w-32 animate-pulse rounded-full bg-orange-200 opacity-20"
					></div>
					<div
						class="absolute -right-4 -bottom-4 h-24 w-24 animate-pulse rounded-full bg-amber-200 opacity-15"
						style="animation-delay: 2.5s;"
					></div>
				</div>
				<div>
					<div class="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 p-8">
						<div class="mb-6 flex items-center">
							<div
								class="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600"
							>
								<svg
									class="h-8 w-8 text-white"
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
							<h3 class="text-2xl font-bold text-gray-900">Digital Transformation & Integration</h3>
						</div>
						<p class="mb-6 text-lg leading-relaxed text-gray-700">
							Modernize your entire digital ecosystem with comprehensive transformation services. We
							handle everything from legacy system migration to cutting-edge ERP implementations,
							ensuring seamless integration and minimal business disruption.
						</p>
						<div class="mb-6 space-y-4">
							<div class="flex items-start">
								<div
									class="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500"
								>
									<svg class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<div>
									<h4 class="font-semibold text-orange-700">ERP & CRM Integration</h4>
									<p class="text-sm text-gray-600">
										Seamless integration of enterprise systems for unified operations
									</p>
								</div>
							</div>
							<div class="flex items-start">
								<div
									class="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500"
								>
									<svg class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<div>
									<h4 class="font-semibold text-orange-700">Legacy System Migration</h4>
									<p class="text-sm text-gray-600">
										Safe, secure migration from outdated systems to modern platforms
									</p>
								</div>
							</div>
						</div>
						<a
							href="/services/digital-transformation"
							class="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
						>
							Start Transformation
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- IoT Infrastructure - Left Aligned with GIF -->
		<div class="relative mb-16">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="order-2 lg:order-1">
					<div class="rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 p-8">
						<div class="mb-6 flex items-center">
							<div
								class="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600"
							>
								<svg
									class="h-8 w-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
									></path>
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-gray-900">IoT Infrastructure</h3>
						</div>
						<p class="mb-6 text-lg leading-relaxed text-gray-700">
							Build comprehensive IoT ecosystems that connect, monitor, and control your physical
							assets. From sensor networks to real-time dashboards, we create intelligent
							infrastructure that drives operational efficiency and data-driven insights.
						</p>
						<div class="mb-6 grid gap-4 md:grid-cols-2">
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-teal-600">Workflow Automation</h4>
								<p class="text-sm text-gray-600">
									Node-RED based automation for complex IoT workflows and integrations
								</p>
							</div>
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-teal-600">Real-time Monitoring</h4>
								<p class="text-sm text-gray-600">
									Grafana dashboards with live data visualization and alerting
								</p>
							</div>
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-teal-600">Message Queuing</h4>
								<p class="text-sm text-gray-600">
									Reliable MQTT messaging with Mosquitto for device communication
								</p>
							</div>
							<div class="rounded-lg bg-white p-4 shadow-sm">
								<h4 class="mb-2 font-semibold text-teal-600">Data Storage</h4>
								<p class="text-sm text-gray-600">
									Time-series databases with InfluxDB for IoT data management
								</p>
							</div>
						</div>
						<a
							href="/services/iot-infrastructure"
							class="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700"
						>
							Explore IoT Solutions
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</a>
					</div>
				</div>
				<div class="relative order-1 lg:order-2">
					<div class="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
						<img
							src="/case-studies/iot_security_station.gif"
							alt="IoT Infrastructure in Action"
							class="h-80 w-full object-cover"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
						<div class="absolute bottom-4 left-4 text-white">
							<p class="text-sm font-medium">IoT Security Station Demo</p>
						</div>
					</div>
					<!-- Decorative elements -->
					<div
						class="absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-teal-200 opacity-20"
					></div>
					<div
						class="absolute -bottom-6 -left-6 h-32 w-32 animate-pulse rounded-full bg-cyan-200 opacity-15"
						style="animation-delay: 3s;"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<CTA
	title="Ready to Get Started?"
	description="Let's discuss which services align best with your business goals and technical requirements."
	primaryButton={{
		text: 'Book CTO Assessment (30 min)',
		href: 'http://cal.com/alphabits/mini',
		variant: 'custom',
		class:
			'bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center'
	}}
	secondaryButton={{
		text: 'General Consultation',
		href: '/contact'
	}}
	variant="default"
/>
