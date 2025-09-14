<script>
	import SEOHead from '$lib/components/SEOHead.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AlphaBits Case Studies',
		description:
			'Real-world examples of successful AI workflow automation and digital transformation projects',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@type': 'Article',
					name: 'Coffee Chain Digital Transformation',
					url: 'https://alphabits.team/case-studies/coffee-chain-transformation',
					description:
						"Major Vietnamese coffee chain's digital transformation - consolidating 5 POS systems into unified BigQuery data warehouse"
				}
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@type': 'Article',
					name: 'SENCAR Smoke Detection AIoT Prototype',
					url: 'https://alphabits.team/case-studies/sencar-smoke-detection',
					description:
						'AI-powered smoke and odor detection prototype for rental car fleet with 15-30 seconds accuracy'
				}
			}
		]
	};
</script>

<SEOHead
	title="Case Studies - AlphaBits | Real-World AI Automation & Digital Transformation Success Stories"
	description="Explore real-world examples of how AlphaBits has helped businesses transform through AI workflow automation and digital solutions. See measurable results and ROI from our implementations."
	keywords="case studies, AI automation success stories, digital transformation examples, business automation results, IoT implementation, data analytics case studies"
	canonicalUrl="https://alphabits.team/case-studies"
	ogImage="https://alphabits.team/case-studies/coffee-background.jpg"
	ogType="website"
	{structuredData}
/>

<!-- Hero Section with SVG Animation -->
<section
	class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20"
>
	<!-- Decorative background elements -->
	<div
		class="bg-grid-slate-100 absolute inset-0 -z-10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
	></div>
	<div class="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
	<div
		class="absolute right-1/4 bottom-0 -z-10 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div
				class="mb-6 inline-flex items-center rounded-full border-2 border-slate-200 bg-white/80 px-4 py-2 backdrop-blur-sm"
			>
				<span class="text-sm font-semibold tracking-wide text-slate-700 uppercase"
					>Success Stories</span
				>
			</div>
			<h1
				class="mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
			>
				Case Studies
			</h1>
			<p class="mx-auto max-w-3xl text-xl leading-relaxed font-medium text-slate-600">
				Real-world examples of how we've helped businesses transform through AI automation and
				digital solutions.
			</p>
		</div>

		<!-- Technology Animation SVG -->
		<div class="mb-8 flex justify-center">
			<svg width="400" height="200" viewBox="0 0 400 200" class="animate-pulse">
				<!-- Data Flow Animation -->
				<defs>
					<linearGradient id="dataGradient" x1="0%" y1="0%" x2="100" y2="0%">
						<stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
						<stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:1" />
						<stop offset="100%" style="stop-color:#06B6D4;stop-opacity:1" />
					</linearGradient>
				</defs>

				<!-- Data Sources -->
				<circle cx="50" cy="50" r="20" fill="#3B82F6" opacity="0.8">
					<animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
				</circle>
				<text x="50" y="85" text-anchor="middle" class="fill-slate-600 text-xs">POS Systems</text>

				<circle cx="50" cy="150" r="20" fill="#10B981" opacity="0.8">
					<animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
				</circle>
				<text x="50" y="185" text-anchor="middle" class="fill-slate-600 text-xs">IoT Sensors</text>

				<!-- Data Processing -->
				<rect x="175" y="75" width="50" height="50" rx="10" fill="url(#dataGradient)" opacity="0.9">
					<animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
				</rect>
				<text x="200" y="140" text-anchor="middle" class="fill-slate-600 text-xs"
					>AI Processing</text
				>

				<!-- Results -->
				<circle cx="350" cy="100" r="25" fill="#F59E0B" opacity="0.8">
					<animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
				</circle>
				<text x="350" y="140" text-anchor="middle" class="fill-slate-600 text-xs">Insights</text>

				<!-- Connecting Lines with Animation -->
				<line x1="70" y1="50" x2="175" y2="90" stroke="#3B82F6" stroke-width="2" opacity="0.6">
					<animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
				</line>
				<line x1="70" y1="150" x2="175" y2="110" stroke="#10B981" stroke-width="2" opacity="0.6">
					<animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
				</line>
				<line x1="225" y1="100" x2="325" y2="100" stroke="#8B5CF6" stroke-width="2" opacity="0.6">
					<animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
				</line>
			</svg>
		</div>
	</div>
</section>

<!-- Case Studies Grid -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Success Stories</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-600">
				Discover how our clients have achieved measurable results through innovative technology
				solutions.
			</p>
		</div>

		<!-- Technology Consulting Case Studies -->
		<div class="mb-16">
			<div class="mb-8 text-center">
				<h3 class="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Technology Consulting</h3>
				<p class="mx-auto max-w-2xl text-lg text-slate-600">
					Strategic technology leadership and digital transformation projects.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<!-- Coffee Chain Digital Transformation -->
				<div
					class="overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl"
				>
					<div class="p-6 lg:p-8">
						<div
							class="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
						>
							Featured Case Study
						</div>
						<h4 class="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
							Coffee Chain Digital Transformation
						</h4>
						<p class="mb-4 text-slate-600">
							Comprehensive digital transformation integrating AI workflow automation, IoT
							infrastructure, and modern web applications.
						</p>

						<div class="mb-4 grid grid-cols-2 gap-4">
							<div>
								<div class="text-xl font-bold text-blue-600">85%</div>
								<div class="text-xs text-slate-600">Process Efficiency</div>
							</div>
							<div>
								<div class="text-xl font-bold text-green-600">60%</div>
								<div class="text-xs text-slate-600">Cost Reduction</div>
							</div>
						</div>

						<div class="mb-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
								>AI Automation</span
							>
							<span class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
								>IoT Integration</span
							>
							<span class="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800"
								>Web Development</span
							>
						</div>

						<a
							href="/case-studies/coffee-chain-transformation"
							class="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
						>
							Read Full Case Study
							<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</a>
					</div>
				</div>

				<!-- SENCAR Smoke Detection -->
				<div
					class="overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-r from-red-50 to-orange-50 shadow-xl"
				>
					<div class="p-6 lg:p-8">
						<div
							class="mb-4 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
						>
							AIoT Innovation
						</div>
						<h4 class="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
							SENCAR Smoke Detection AIoT
						</h4>
						<p class="mb-4 text-slate-600">
							AI-powered smoke and odor detection prototype for rental car fleets with 15-30 second
							detection accuracy using advanced sensor fusion.
						</p>

						<div class="mb-4 grid grid-cols-2 gap-4">
							<div>
								<div class="text-xl font-bold text-red-600">15-30s</div>
								<div class="text-xs text-slate-600">Detection Time</div>
							</div>
							<div>
								<div class="text-xl font-bold text-orange-600">95%</div>
								<div class="text-xs text-slate-600">Accuracy Rate</div>
							</div>
						</div>

						<div class="mb-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800"
								>AI Detection</span
							>
							<span class="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800"
								>IoT Sensors</span
							>
							<span class="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800"
								>Real-time</span
							>
						</div>

						<a
							href="/case-studies/sencar-smoke-detection"
							class="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
						>
							Read Full Case Study
							<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- IoT Projects Section -->
		<div id="iot-projects" class="mb-16">
			<div class="mb-12 text-center">
				<h3 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">IoT Projects Showcase</h3>
				<p class="mx-auto max-w-3xl text-lg text-slate-600">
					Explore our innovative IoT solutions that demonstrate our expertise in hardware
					integration, real-time data processing, and intelligent automation systems.
				</p>
			</div>

			<div class="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
				<!-- Alpha Block -->
				<div
					class="transform overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
				>
					<div class="relative h-48 overflow-hidden">
						<img
							src="/alphablock/mushroombox1.png"
							alt="Alpha Block Mushroom Growing System"
							class="h-full w-full object-cover"
						/>
						<div class="bg-opacity-30 absolute inset-0 bg-black"></div>
						<div class="absolute bottom-4 left-4 text-white">
							<div
								class="bg-opacity-20 mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
									></path>
								</svg>
							</div>
							<h4 class="text-lg font-bold">Alpha Block</h4>
						</div>
					</div>
					<div class="p-6">
						<h4 class="mb-3 text-xl font-bold text-slate-900">Mushroom Growing in a Box</h4>
						<p class="mb-4 text-slate-600">
							Automated mushroom cultivation system with IoT sensors for temperature, humidity, and
							CO2 monitoring. Features automated watering, climate control, and mobile app
							integration for remote monitoring.
						</p>
						<div class="mb-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
								>IoT Sensors</span
							>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
								>Automation</span
							>
							<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
								>Mobile App</span
							>
						</div>
						<div class="grid grid-cols-2 gap-4 text-sm">
							<div>
								<div class="font-semibold text-slate-900">Technologies:</div>
								<div class="text-slate-600">ESP32, Sensors, NodeRED</div>
							</div>
							<div>
								<div class="font-semibold text-slate-900">Features:</div>
								<div class="text-slate-600">Climate Control, Monitoring</div>
							</div>
						</div>
					</div>
				</div>

				<!-- RDX -->
				<div
					class="transform overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
				>
					<div class="relative h-48 overflow-hidden bg-gradient-to-br from-red-400 to-red-600">
						<img
							src="/case-studies/rdx.jpg"
							alt="Remote Driving eXperience"
							class="h-full w-full object-cover"
						/>
						<div class="bg-opacity-20 absolute inset-0 bg-black"></div>
						<div class="absolute bottom-4 left-4 text-white">
							<div
								class="bg-opacity-20 mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									></path>
								</svg>
							</div>
							<h4 class="text-lg font-bold">RDX</h4>
						</div>
					</div>
					<div class="p-6">
						<h4 class="mb-3 text-xl font-bold text-slate-900">Remote Driving Experience</h4>
						<p class="mb-4 text-slate-600">
							Advanced RC car system with long-range real-time video streaming at ultra-low latency.
							Features include remote control interface, live video feed, and telemetry data
							transmission.
						</p>
						<div class="mb-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
								>Real-time Video</span
							>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
								>Low Latency</span
							>
							<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
								>Remote Control</span
							>
						</div>
						<div class="grid grid-cols-2 gap-4 text-sm">
							<div>
								<div class="font-semibold text-slate-900">Technologies:</div>
								<div class="text-slate-600">WebRTC, Raspberry Pi</div>
							</div>
							<div>
								<div class="font-semibold text-slate-900">Features:</div>
								<div class="text-slate-600">Live Stream, Telemetry</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
				<!-- Energy Management Platform -->
				<div
					class="transform overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
				>
					<div class="relative h-48 overflow-hidden">
						<img
							src="/aiot/energytwin_ss1.jpg"
							alt="Energy Management Platform Dashboard"
							class="h-full w-full object-cover"
						/>
						<div class="bg-opacity-30 absolute inset-0 bg-black"></div>
						<div class="absolute bottom-4 left-4 text-white">
							<div
								class="bg-opacity-20 mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									></path>
								</svg>
							</div>
							<h4 class="text-lg font-bold">Energy Platform</h4>
						</div>
					</div>
					<div class="p-6">
						<h4 class="mb-3 text-xl font-bold text-slate-900">Energy Management Platform</h4>
						<p class="mb-4 text-slate-600">
							Comprehensive energy monitoring and management system built on NodeRED and
							SecondBrains architecture. Provides real-time energy consumption tracking,
							optimization recommendations, and automated control.
						</p>
						<div class="mb-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
								>NodeRED</span
							>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
								>SecondBrains</span
							>
							<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
								>Energy Monitoring</span
							>
						</div>
						<div class="grid grid-cols-2 gap-4 text-sm">
							<div>
								<div class="font-semibold text-slate-900">Technologies:</div>
								<div class="text-slate-600">NodeRED, InfluxDB</div>
							</div>
							<div>
								<div class="font-semibold text-slate-900">Features:</div>
								<div class="text-slate-600">Real-time Monitoring</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Other IoT Projects -->
				<div
					class="transform overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
				>
					<div
						class="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-600"
					>
						<img
							src="/office/office_2.jpg"
							alt="Alpha Bits IoT Hardware Projects"
							class="h-full w-full object-cover"
						/>
						<div class="bg-opacity-20 absolute inset-0 bg-black"></div>
						<div class="absolute bottom-4 left-4 text-white">
							<div
								class="bg-opacity-20 mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
									></path>
								</svg>
							</div>
							<h4 class="text-lg font-bold">IoT Ecosystem</h4>
						</div>
					</div>
					<div class="p-6">
						<h4 class="mb-3 text-xl font-bold text-slate-900">IoT Hardware Projects</h4>
						<p class="mb-4 text-slate-600">
							Collection of IoT projects using various hardware platforms including Raspberry Pi,
							OrangePi, ESP32, and WiFi Mesh networks for smart home automation, environmental
							monitoring, and industrial applications.
						</p>
						<div class="mb-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>Raspberry Pi</span
							>
							<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
								>ESP32</span
							>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
								>WiFi Mesh</span
							>
						</div>
						<div class="grid grid-cols-2 gap-4 text-sm">
							<div>
								<div class="font-semibold text-slate-900">Platforms:</div>
								<div class="text-slate-600">Pi, ESP32, OrangePi</div>
							</div>
							<div>
								<div class="font-semibold text-slate-900">Applications:</div>
								<div class="text-slate-600">Smart Home, Industrial</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Coming Soon Section with Technology SVG -->
		<div class="text-center">
			<h3 class="mb-4 text-2xl font-bold text-slate-900">More Case Studies Coming Soon</h3>
			<p class="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
				We're currently working on documenting additional success stories from our recent projects.
				Check back soon for more detailed case studies.
			</p>

			<!-- Technology Stack Visualization -->
			<div class="mb-12 flex justify-center">
				<svg width="500" height="150" viewBox="0 0 500 150" class="">
					<defs>
						<linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
							<stop offset="33%" style="stop-color:#10B981;stop-opacity:1" />
							<stop offset="66%" style="stop-color:#8B5CF6;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" />
						</linearGradient>
					</defs>

					<!-- AI Automation -->
					<g>
						<circle cx="100" cy="75" r="30" fill="#3B82F6" opacity="0.8">
							<animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
						</circle>
						<text x="100" y="80" text-anchor="middle" class="fill-white text-sm font-semibold"
							>AI</text
						>
						<text x="100" y="120" text-anchor="middle" class="fill-slate-600 text-xs"
							>Automation</text
						>
					</g>

					<!-- Data Analytics -->
					<g>
						<rect x="175" y="45" width="60" height="60" rx="15" fill="#10B981" opacity="0.8">
							<animate
								attributeName="opacity"
								values="0.8;1;0.8"
								dur="2s"
								repeatCount="indefinite"
							/>
						</rect>
						<text x="205" y="80" text-anchor="middle" class="fill-white text-sm font-semibold"
							>Data</text
						>
						<text x="205" y="120" text-anchor="middle" class="fill-slate-600 text-xs"
							>Analytics</text
						>
					</g>

					<!-- IoT Infrastructure -->
					<g>
						<polygon
							points="300,45 330,60 330,90 300,105 270,90 270,60"
							fill="#8B5CF6"
							opacity="0.8"
						>
							<animate
								attributeName="opacity"
								values="0.8;1;0.8"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</polygon>
						<text x="300" y="80" text-anchor="middle" class="fill-white text-sm font-semibold"
							>IoT</text
						>
						<text x="300" y="120" text-anchor="middle" class="fill-slate-600 text-xs"
							>Infrastructure</text
						>
					</g>

					<!-- Results -->
					<g>
						<ellipse cx="400" cy="75" rx="35" ry="25" fill="#F59E0B" opacity="0.8">
							<animate attributeName="rx" values="35;40;35" dur="4s" repeatCount="indefinite" />
						</ellipse>
						<text x="400" y="80" text-anchor="middle" class="fill-white text-sm font-semibold"
							>Results</text
						>
						<text x="400" y="120" text-anchor="middle" class="fill-slate-600 text-xs">Success</text>
					</g>

					<!-- Connecting arrows -->
					<path
						d="M 135 75 L 165 75"
						stroke="url(#techGradient)"
						stroke-width="3"
						marker-end="url(#arrowhead)"
					>
						<animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
					</path>
					<path
						d="M 240 75 L 265 75"
						stroke="url(#techGradient)"
						stroke-width="3"
						marker-end="url(#arrowhead)"
					>
						<animate
							attributeName="opacity"
							values="0.6;1;0.6"
							dur="2.5s"
							repeatCount="indefinite"
						/>
					</path>
					<path
						d="M 335 75 L 360 75"
						stroke="url(#techGradient)"
						stroke-width="3"
						marker-end="url(#arrowhead)"
					>
						<animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
					</path>

					<!-- Arrow marker -->
					<defs>
						<marker
							id="arrowhead"
							markerWidth="10"
							markerHeight="7"
							refX="9"
							refY="3.5"
							orient="auto"
						>
							<polygon points="0 0, 10 3.5, 0 7" fill="url(#techGradient)" />
						</marker>
					</defs>
				</svg>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				<div
					class="rounded-lg border-2 border-dashed border-slate-300 bg-white p-6 transition-colors hover:border-blue-400"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100"
					>
						<svg
							class="h-6 w-6 text-blue-600"
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
					<h4 class="mb-2 text-lg font-semibold text-slate-900">AI Workflow Automation</h4>
					<p class="mb-4 text-sm text-slate-600">
						Manufacturing company streamlines operations with intelligent automation
					</p>
					<div class="text-sm text-slate-500">Coming Q2 2024</div>
				</div>

				<div
					class="rounded-lg border-2 border-dashed border-slate-300 bg-white p-6 transition-colors hover:border-green-400"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100"
					>
						<svg
							class="h-6 w-6 text-green-600"
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
					<h4 class="mb-2 text-lg font-semibold text-slate-900">Data Analytics Platform</h4>
					<p class="mb-4 text-sm text-slate-600">
						E-commerce business gains insights with comprehensive analytics solution
					</p>
					<div class="text-sm text-slate-500">Coming Q2 2024</div>
				</div>

				<div
					class="rounded-lg border-2 border-dashed border-slate-300 bg-white p-6 transition-colors hover:border-purple-400"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100"
					>
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
								d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
							></path>
						</svg>
					</div>
					<h4 class="mb-2 text-lg font-semibold text-slate-900">IoT Infrastructure</h4>
					<p class="mb-4 text-sm text-slate-600">
						Smart building implementation with real-time monitoring and control
					</p>
					<div class="text-sm text-slate-500">Coming Q3 2024</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Results Overview -->
<section class="bg-slate-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Results That Matter</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-600">
				Our clients consistently see significant improvements in efficiency, cost savings, and
				operational capabilities.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-lg bg-white p-6 text-center hover:transition-shadow">
				<div class="mb-2 text-4xl font-bold text-blue-600">85%</div>
				<div class="mb-1 text-lg font-semibold text-slate-900">Average Efficiency Gain</div>
				<div class="text-sm text-slate-600">Process automation improvements</div>
			</div>

			<div class="rounded-lg bg-white p-6 text-center hover:transition-shadow">
				<div class="mb-2 text-4xl font-bold text-green-600">60%</div>
				<div class="mb-1 text-lg font-semibold text-slate-900">Cost Reduction</div>
				<div class="text-sm text-slate-600">Operational expense savings</div>
			</div>

			<div class="rounded-lg bg-white p-6 text-center hover:transition-shadow">
				<div class="mb-2 text-4xl font-bold text-purple-600">3x</div>
				<div class="mb-1 text-lg font-semibold text-slate-900">Faster Processing</div>
				<div class="text-sm text-slate-600">Data processing speed improvements</div>
			</div>

			<div class="rounded-lg bg-white p-6 text-center hover:transition-shadow">
				<div class="mb-2 text-4xl font-bold text-orange-600">24/7</div>
				<div class="mb-1 text-lg font-semibold text-slate-900">Automated Monitoring</div>
				<div class="text-sm text-slate-600">Continuous system oversight</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
			Ready to Create Your Success Story?
		</h2>
		<p class="mb-8 text-xl text-slate-600">
			Let's discuss how we can help you achieve similar results with our proven methodologies and
			cutting-edge solutions.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 hover:shadow-xl"
			>
				Start Your Project
			</a>
			<a
				href="/services"
				class="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
			>
				Explore Our Services
			</a>
		</div>
	</div>
</section>
