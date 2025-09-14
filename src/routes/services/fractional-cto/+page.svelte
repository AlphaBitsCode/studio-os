<script>
	import CTA from '$lib/components/CTA.svelte';
	import Card from '$lib/components/ui/card.svelte';
	import Badge from '$lib/components/ui/badge.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Fractional CTO & Tech Leadership',
		description:
			'Expert technical leadership with comprehensive assessments, infrastructure modernization, and strategic guidance for your technology decisions.',
		provider: {
			'@type': 'Organization',
			name: 'AlphaBits',
			url: 'https://alphabits.team'
		},
		serviceType: 'Technology Leadership Consulting',
		category: 'CTO Services',
		offers: {
			'@type': 'Offer',
			description: 'Fractional CTO services and technical leadership consulting',
			seller: {
				'@type': 'Organization',
				name: 'AlphaBits'
			}
		}
	};
</script>

<SEOHead
	title="Fractional CTO & Tech Leadership Services - AlphaBits | Expert Technical Guidance"
	description="Expert technical leadership with comprehensive assessments, infrastructure modernization, and strategic guidance for your technology decisions. Get CTO-level expertise without full-time costs."
	keywords="fractional CTO, technical leadership, CTO services, technology strategy, infrastructure modernization, tech consulting, startup CTO, technology assessment"
	canonicalUrl="https://alphabits.team/services/fractional-cto"
	ogImage="https://alphabits.team/alphabits_cover.png"
	ogType="article"
	articleSection="Services"
	{structuredData}
/>

<!-- Animated Hero Section -->
<section class="overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
					Fractional CTO &
					<span class="text-green-600">Tech Leadership</span>
				</h1>
				<p class="mb-8 text-xl leading-relaxed text-gray-600">
					Expert technical leadership with comprehensive assessments, infrastructure modernization,
					and strategic guidance for your technology decisions.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="/contact"
						class="rounded-lg bg-green-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-green-700"
					>
						Schedule Consultation
					</a>
					<a
						href="/about"
						class="rounded-lg border-2 border-green-600 px-8 py-3 text-center font-semibold text-green-600 transition-colors hover:bg-green-600 hover:text-white"
					>
						Meet Our Team
					</a>
				</div>
			</div>

			<!-- Animated SVG -->
			<div class="flex justify-center">
				<svg width="500" height="400" viewBox="0 0 500 400" class="w-full max-w-lg">
					<!-- Background circles -->
					<circle cx="250" cy="200" r="180" fill="#f0f9ff" opacity="0.5">
						<animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
					</circle>
					<circle cx="250" cy="200" r="140" fill="#dbeafe" opacity="0.7">
						<animate attributeName="r" values="140;150;140" dur="3s" repeatCount="indefinite" />
					</circle>

					<!-- Central figure (CTO) -->
					<circle cx="250" cy="180" r="25" fill="#3b82f6" />
					<rect x="235" y="205" width="30" height="40" rx="5" fill="#1e40af" />

					<!-- Tech elements floating around -->
					<g>
						<!-- Code brackets -->
						<text
							x="180"
							y="120"
							font-family="monospace"
							font-size="24"
							fill="#059669"
							opacity="0.8"
						>
							&lt;/&gt;
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 180 120;360 180 120"
								dur="8s"
								repeatCount="indefinite"
							/>
						</text>

						<!-- Database icon -->
						<g transform="translate(320,100)">
							<ellipse cx="0" cy="0" rx="15" ry="5" fill="#7c3aed" />
							<rect x="-15" y="0" width="30" height="20" fill="#7c3aed" />
							<ellipse cx="0" cy="20" rx="15" ry="5" fill="#7c3aed" />
							<animateTransform
								attributeName="transform"
								type="translate"
								values="320,100;330,90;320,100"
								dur="3s"
								repeatCount="indefinite"
							/>
						</g>

						<!-- Cloud -->
						<g transform="translate(150,280)">
							<circle cx="0" cy="0" r="12" fill="#06b6d4" />
							<circle cx="15" cy="-5" r="15" fill="#06b6d4" />
							<circle cx="30" cy="0" r="12" fill="#06b6d4" />
							<animateTransform
								attributeName="transform"
								type="translate"
								values="150,280;160,270;150,280"
								dur="5s"
								repeatCount="indefinite"
							/>
						</g>

						<!-- Gear -->
						<g transform="translate(350,250)">
							<circle cx="0" cy="0" r="15" fill="none" stroke="#f59e0b" stroke-width="3" />
							<circle cx="0" cy="0" r="5" fill="#f59e0b" />
							<rect x="-2" y="-18" width="4" height="6" fill="#f59e0b" />
							<rect x="-2" y="12" width="4" height="6" fill="#f59e0b" />
							<rect x="-18" y="-2" width="6" height="4" fill="#f59e0b" />
							<rect x="12" y="-2" width="6" height="4" fill="#f59e0b" />
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 350 250;360 350 250"
								dur="6s"
								repeatCount="indefinite"
							/>
						</g>

						<!-- Network nodes -->
						<g>
							<circle cx="200" cy="300" r="4" fill="#ef4444">
								<animate
									attributeName="opacity"
									values="0.5;1;0.5"
									dur="2s"
									repeatCount="indefinite"
								/>
							</circle>
							<circle cx="300" cy="320" r="4" fill="#ef4444">
								<animate
									attributeName="opacity"
									values="1;0.5;1"
									dur="2s"
									repeatCount="indefinite"
								/>
							</circle>
							<line
								x1="200"
								y1="300"
								x2="300"
								y2="320"
								stroke="#ef4444"
								stroke-width="2"
								opacity="0.6"
							/>
							<line
								x1="250"
								y1="245"
								x2="200"
								y2="300"
								stroke="#ef4444"
								stroke-width="2"
								opacity="0.6"
							/>
							<line
								x1="250"
								y1="245"
								x2="300"
								y2="320"
								stroke="#ef4444"
								stroke-width="2"
								opacity="0.6"
							/>
						</g>
					</g>

					<!-- Floating particles -->
					<circle cx="100" cy="150" r="2" fill="#10b981" opacity="0.6">
						<animateTransform
							attributeName="transform"
							type="translate"
							values="0,0;10,-10;0,0"
							dur="4s"
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx="400" cy="180" r="2" fill="#3b82f6" opacity="0.6">
						<animateTransform
							attributeName="transform"
							type="translate"
							values="0,0;-10,10;0,0"
							dur="3s"
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx="120" cy="320" r="2" fill="#8b5cf6" opacity="0.6">
						<animateTransform
							attributeName="transform"
							type="translate"
							values="0,0;15,5;0,0"
							dur="5s"
							repeatCount="indefinite"
						/>
					</circle>
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
				<h2 class="mb-6 text-3xl font-bold md:text-4xl">Strategic Technology Leadership</h2>
				<p class="mb-6 text-lg text-gray-600">
					Whether you're a startup needing technical direction or an established company requiring
					strategic technology guidance, our fractional CTO services provide the expertise you need
					without the full-time commitment.
				</p>
				<p class="mb-8 text-lg text-gray-600">
					We bring decades of experience in technology leadership, helping organizations make
					informed decisions about their technical infrastructure, team building, and strategic
					technology investments.
				</p>

				<div class="grid grid-cols-2 gap-6">
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-green-600">20+</div>
						<div class="text-sm text-gray-600">Years Combined Experience</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-blue-600">50+</div>
						<div class="text-sm text-gray-600">Companies Advised</div>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8">
				<h3 class="mb-6 text-2xl font-bold">What You Get</h3>
				<div class="space-y-4">
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
							<h4 class="mb-1 font-semibold">Strategic Technology Planning</h4>
							<p class="text-sm text-gray-600">
								Long-term technology roadmaps aligned with business goals
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
							<h4 class="mb-1 font-semibold">Technical Team Leadership</h4>
							<p class="text-sm text-gray-600">Mentoring and guidance for your development teams</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-600"
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
							<h4 class="mb-1 font-semibold">Architecture & Design Reviews</h4>
							<p class="text-sm text-gray-600">
								Expert evaluation of technical decisions and implementations
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
							<h4 class="mb-1 font-semibold">Vendor & Technology Selection</h4>
							<p class="text-sm text-gray-600">
								Objective guidance on technology choices and partnerships
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
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Core Services</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Comprehensive technical leadership services tailored to your needs.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Deep-dive Tech Assessments -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
					<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Deep-dive Tech Assessments</h3>
				<p class="mb-4 text-gray-600">
					Comprehensive evaluation of your current technology stack, architecture, and development
					processes.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Code quality and architecture review</li>
					<li>• Security vulnerability assessment</li>
					<li>• Performance and scalability analysis</li>
					<li>• Technical debt evaluation</li>
					<li>• Development process optimization</li>
					<li>• Technology stack modernization recommendations</li>
				</ul>
			</div>

			<!-- IT Infrastructure Modernization -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
					<svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">IT Infrastructure Modernization</h3>
				<p class="mb-4 text-gray-600">
					Strategic planning and execution of infrastructure upgrades and cloud migration
					initiatives.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Cloud migration strategy and execution</li>
					<li>• DevOps and CI/CD pipeline implementation</li>
					<li>• Containerization and orchestration</li>
					<li>• Monitoring and observability setup</li>
					<li>• Disaster recovery and backup strategies</li>
					<li>• Cost optimization and resource management</li>
				</ul>
			</div>

			<!-- Budget & Staffing Guidance -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
					<svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Budget & Staffing Guidance</h3>
				<p class="mb-4 text-gray-600">
					Strategic advice on technology investments, team structure, and resource allocation.
				</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Technology budget planning and optimization</li>
					<li>• Team structure and hiring strategies</li>
					<li>• Skill gap analysis and training plans</li>
					<li>• Vendor evaluation and contract negotiation</li>
					<li>• ROI analysis for technology investments</li>
					<li>• Resource allocation and priority setting</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Engagement Models Overview -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Flexible Engagement Models</h2>
			<p class="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
				We offer multiple engagement approaches to match your specific needs, timeline, and budget.
				From strategic advisory to hands-on development teams.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- Project-based -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
					<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Project-based</h3>
				<p class="mb-4 text-sm text-gray-600">
					Fixed-scope projects with defined deliverables and timelines.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Technology assessments</li>
					<li>• Infrastructure modernization</li>
					<li>• Team training</li>
				</ul>
			</div>

			<!-- Strategic Advisory -->
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
				<h3 class="mb-2 text-lg font-semibold">Strategic Advisory</h3>
				<p class="mb-4 text-sm text-gray-600">
					Ongoing strategic guidance and technology leadership.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Technology roadmaps</li>
					<li>• Executive reporting</li>
					<li>• Strategic planning</li>
				</ul>
			</div>

			<!-- Project + Rev Share -->
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
							d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Project + Rev Share</h3>
				<p class="mb-4 text-sm text-gray-600">
					Partnership model with shared success and ongoing revenue.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Reduced upfront costs</li>
					<li>• Shared success model</li>
					<li>• Long-term partnership</li>
				</ul>
			</div>

			<!-- B.O.T Offshore Team -->
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
					<svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">B.O.T Offshore Team</h3>
				<p class="mb-4 text-sm text-gray-600">
					Build-Operate-Transfer model with dedicated Vietnam-based team.
				</p>
				<ul class="space-y-1 text-xs text-gray-500">
					<li>• Dedicated offshore team</li>
					<li>• Cost-effective scaling</li>
					<li>• Knowledge transfer</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 text-center">
			<a
				href="/pricing"
				class="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
			>
				View Detailed Pricing & Models
				<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
					></path>
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Success Stories -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Success Stories</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Real results from our fractional CTO engagements.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex items-center">
					<div class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
						<span class="font-bold text-green-600">S</span>
					</div>
					<div>
						<h3 class="font-bold text-gray-900">SaaS Startup</h3>
						<p class="text-sm text-gray-600">Series A Company</p>
					</div>
				</div>
				<p class="mb-4 text-gray-600">
					"Our fractional CTO helped us scale from 10 to 100 users to over 10,000 users without
					major infrastructure issues. The strategic guidance on technology choices saved us months
					of development time."
				</p>
				<div class="grid grid-cols-3 gap-4 text-center">
					<div>
						<div class="text-2xl font-bold text-green-600">10x</div>
						<div class="text-xs text-gray-500">User Growth</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-blue-600">40%</div>
						<div class="text-xs text-gray-500">Cost Savings</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-purple-600">6mo</div>
						<div class="text-xs text-gray-500">Time Saved</div>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-white p-6 shadow-lg">
				<div class="mb-4 flex items-center">
					<div class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
						<span class="font-bold text-blue-600">M</span>
					</div>
					<div>
						<h3 class="font-bold text-gray-900">Manufacturing Company</h3>
						<p class="text-sm text-gray-600">Mid-size Enterprise</p>
					</div>
				</div>
				<p class="mb-4 text-gray-600">
					"The technology assessment revealed critical security vulnerabilities and performance
					bottlenecks. The modernization plan helped us avoid a potential disaster and improved our
					system performance by 300%."
				</p>
				<div class="grid grid-cols-3 gap-4 text-center">
					<div>
						<div class="text-2xl font-bold text-green-600">300%</div>
						<div class="text-xs text-gray-500">Performance Gain</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-blue-600">Zero</div>
						<div class="text-xs text-gray-500">Security Incidents</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-purple-600">99.9%</div>
						<div class="text-xs text-gray-500">Uptime</div>
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
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Getting Started</h2>
			<p class="text-lg text-gray-600">
				Our proven process ensures we understand your needs and deliver maximum value.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
				>
					<span class="font-bold text-green-600">1</span>
				</div>
				<h3 class="mb-2 font-semibold">Initial Consultation</h3>
				<p class="text-sm text-gray-600">
					Free 30-minute discovery call to understand your challenges
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100"
				>
					<span class="font-bold text-blue-600">2</span>
				</div>
				<h3 class="mb-2 font-semibold">Assessment</h3>
				<p class="text-sm text-gray-600">
					Comprehensive evaluation of your current technology landscape
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100"
				>
					<span class="font-bold text-teal-600">3</span>
				</div>
				<h3 class="mb-2 font-semibold">Strategy Development</h3>
				<p class="text-sm text-gray-600">
					Custom roadmap and engagement plan tailored to your needs
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100"
				>
					<span class="font-bold text-purple-600">4</span>
				</div>
				<h3 class="mb-2 font-semibold">Execution</h3>
				<p class="text-sm text-gray-600">
					Ongoing leadership and support to achieve your technology goals
				</p>
			</div>
		</div>
	</div>
</section>

<CTA
	title="Ready for Strategic Technology Leadership?"
	description="Let's discuss how our fractional CTO services can accelerate your technology initiatives."
	primaryButton={{
		text: 'Book CTO Assessment (30 min)',
		href: 'http://cal.com/alphabits/mini',
		variant: 'custom',
		class:
			'bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center'
	}}
	secondaryButton={{
		text: 'Meet Our Leadership Team',
		href: '/about'
	}}
	variant="gradient-blue"
/>
