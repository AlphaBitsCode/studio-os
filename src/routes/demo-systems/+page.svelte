<script lang="ts">
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';

	// State for showing/hiding credentials
	let showCrmCredentials = $state(false);
	let showCmsCredentials = $state(false);

	const systems = {
		crm: {
			title: 'Multi-Channel CRM System',
			url: 'https://crm.alphabits.team',
			description: 'Advanced customer relationship management system with omnichannel support',
			businessValue: 'Streamline customer communications across WhatsApp, Zalo, Email, Telegram, and Slack. Centralize all customer interactions in one platform, improving response times and customer satisfaction.',
			features: [
				'Multi-channel messaging (WhatsApp, Zalo, Email, Telegram, Slack)',
				'Automated ticket routing and assignment',
				'Real-time chat and collaboration',
				'Customer history and context tracking',
				'Performance analytics and reporting'
			],
			credentials: {
				endUser: { email: 'demo@alphabits.team', password: 'demo123' },
				admin: { email: 'admin@alphabits.team', password: 'admin123' }
			}
		},
		cms: {
			title: 'Headless CMS & Blog Platform',
			url: 'https://cms.alphabits.team',
			description: 'Modern content management system built with Svelte 5 and Directus',
			businessValue: 'Manage your website content efficiently with a modern, developer-friendly CMS. Built with the same technology stack as this website, ensuring consistency and performance.',
			features: [
				'Headless CMS architecture for flexibility',
				'Real-time content editing and preview',
				'Multi-language content support',
				'SEO optimization tools',
				'Role-based access control'
			],
			credentials: {
				endUser: { email: 'editor@alphabits.team', password: 'editor123' },
				admin: { email: 'admin@alphabits.team', password: 'admin123' }
			}
		},
		analytics: {
			title: 'Business Intelligence Dashboard',
			url: 'https://lookerstudio.google.com/reporting/your-dashboard-id',
			description: 'Comprehensive business analytics and reporting dashboard',
			businessValue: 'Make data-driven decisions with real-time business intelligence. Track KPIs, monitor performance, and identify growth opportunities through interactive dashboards.',
			features: [
				'Real-time data visualization',
				'Custom KPI tracking',
				'Interactive charts and graphs',
				'Automated report generation',
				'Mobile-responsive design'
			],
			credentials: null
		},
		metrics: {
			title: 'Website Analytics',
			url: 'https://metrica.yandex.com/dashboard?id=your-counter-id',
			description: 'Privacy-focused website analytics and user behavior tracking',
			businessValue: 'Understand your website visitors without compromising their privacy. Track user journeys, optimize conversion funnels, and improve user experience.',
			features: [
				'Privacy-compliant analytics',
				'Real-time visitor tracking',
				'Conversion funnel analysis',
				'Heat maps and session recordings',
				'Custom event tracking'
			],
			credentials: null
		},
		iot: {
			title: 'IoT Performance Dashboard',
			url: 'https://iot.alphabits.team/dashboard',
			description: 'Server and IoT device monitoring with Node-RED and Beszel',
			businessValue: 'Monitor your infrastructure health in real-time. Prevent downtime, optimize resource usage, and ensure reliable IoT operations with comprehensive monitoring.',
			features: [
				'Real-time server monitoring',
				'IoT device status tracking',
				'Automated alert system',
				'Performance metrics and trends',
				'Custom workflow automation'
			],
			credentials: null
		}
	};

	function toggleCredentials(system: string) {
		if (system === 'crm') {
			showCrmCredentials = !showCrmCredentials;
		} else if (system === 'cms') {
			showCmsCredentials = !showCmsCredentials;
		}
	}
</script>

<SEOHead
	title="Demo Systems - AlphaBits"
	description="Explore our live demo systems including CRM, CMS, analytics dashboards, and IoT monitoring platforms. See how our solutions can transform your business operations."
	keywords="demo systems, CRM demo, CMS demo, business analytics, IoT monitoring, AlphaBits"
/>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
	<div class="container mx-auto px-4 py-8 lg:py-12">
		<div class="mb-8 lg:mb-12 text-center px-4">
			<div class="mb-4 lg:mb-6 flex justify-center">
				<div class="relative">
					<svg class="h-16 w-16 lg:h-20 lg:w-20 text-blue-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
					<div class="absolute -top-2 -right-2 h-4 w-4 lg:h-6 lg:w-6 bg-green-500 rounded-full animate-bounce flex items-center justify-center">
						<svg class="h-2 w-2 lg:h-3 lg:w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
					</div>
				</div>
			</div>
			<h1 class="mb-4 lg:mb-6 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Live Demo Systems</h1>
			<p class="mx-auto max-w-3xl text-lg lg:text-xl text-gray-700 leading-relaxed">
				Explore our production-ready systems and see how they can transform your business operations. Each system is fully functional and available for testing.
			</p>
		</div>

		<Tabs defaultValue="crm" class="w-full">
			<TabsList class="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white border-2 border-gray-300 rounded-xl p-2 lg:p-3 gap-2 lg:gap-0">
				<TabsTrigger value="crm" class="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-blue-600 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-blue-300 flex flex-col items-center gap-1 lg:gap-2 py-2 lg:py-4">
					<div class="relative">
						<svg class="h-6 w-6 lg:h-8 lg:w-8 animate-spin" style="animation-duration: 3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
						</svg>
						<div class="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-blue-500 rounded-full animate-ping"></div>
					</div>
					<span class="text-xs lg:text-sm font-semibold text-center">CRM System</span>
				</TabsTrigger>
				<TabsTrigger value="cms" class="data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:border-green-600 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-green-300 flex flex-col items-center gap-1 lg:gap-2 py-2 lg:py-4">
					<div class="relative">
						<svg class="h-6 w-6 lg:h-8 lg:w-8 animate-bounce" style="animation-duration: 2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
						</svg>
						<div class="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-green-500 rounded-full animate-pulse"></div>
					</div>
					<span class="text-xs lg:text-sm font-semibold text-center">CMS Platform</span>
				</TabsTrigger>
				<TabsTrigger value="analytics" class="data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:border-purple-600 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-purple-300 flex flex-col items-center gap-1 lg:gap-2 py-2 lg:py-4">
					<div class="relative">
						<svg class="h-6 w-6 lg:h-8 lg:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
							<animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="2s" repeatCount="indefinite"/>
						</svg>
						<div class="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-purple-500 rounded-full animate-bounce"></div>
					</div>
					<span class="text-xs lg:text-sm font-semibold text-center">BI Dashboard</span>
				</TabsTrigger>
				<TabsTrigger value="metrics" class="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:border-orange-600 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-orange-300 flex flex-col items-center gap-1 lg:gap-2 py-2 lg:py-4">
					<div class="relative">
						<svg class="h-6 w-6 lg:h-8 lg:w-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
						</svg>
						<div class="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-orange-500 rounded-full animate-ping"></div>
					</div>
					<span class="text-xs lg:text-sm font-semibold text-center">Web Analytics</span>
				</TabsTrigger>
				<TabsTrigger value="iot" class="data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:border-indigo-600 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-indigo-300 flex flex-col items-center gap-1 lg:gap-2 py-2 lg:py-4">
					<div class="relative">
						<svg class="h-6 w-6 lg:h-8 lg:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
							<animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="4s" repeatCount="indefinite"/>
						</svg>
						<div class="absolute -top-1 -right-1 h-2 w-2 lg:h-3 lg:w-3 bg-indigo-500 rounded-full animate-pulse"></div>
					</div>
					<span class="text-xs lg:text-sm font-semibold text-center">IoT Monitoring</span>
				</TabsTrigger>
			</TabsList>

			<!-- CRM System Tab -->
			<TabsContent value="crm">
				<Card class="bg-white border-3 border-blue-400 rounded-xl">
					<CardHeader class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-xl border-b-3 border-blue-300 p-4 lg:p-6">
						<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 mb-3">
							<div class="relative p-2 lg:p-3 bg-blue-500 rounded-xl border-2 border-blue-600">
								<svg class="h-6 w-6 lg:h-8 lg:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
									<animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="3s" repeatCount="indefinite"/>
								</svg>
								<div class="absolute -top-1 -right-1 flex space-x-1">
									<div class="h-2 w-2 lg:h-3 lg:w-3 bg-green-400 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
									<div class="h-1.5 w-1.5 lg:h-2 lg:w-2 bg-yellow-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
								</div>
							</div>
							<div class="flex-1">
								<CardTitle class="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 animate-pulse">{systems.crm.title}</CardTitle>
								<div class="flex items-center gap-2 mt-1">
									<div class="h-2 w-2 bg-green-500 rounded-full animate-ping"></div>
									<span class="text-xs lg:text-sm text-green-600 font-semibold">LIVE DEMO</span>
								</div>
							</div>
						</div>
						<CardDescription class="text-blue-700 text-base lg:text-lg font-medium">{systems.crm.description}</CardDescription>
					</CardHeader>
					<CardContent class="space-y-6 lg:space-y-8 p-4 lg:p-8">
						<div class="bg-blue-50 rounded-xl p-6 border-3 border-blue-300">
							<h3 class="mb-4 text-xl font-bold text-blue-900 flex items-center gap-3">
								<div class="relative">
									<svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
										<animate attributeName="stroke-width" values="2.5;3;2.5" dur="2s" repeatCount="indefinite"/>
									</svg>
									<div class="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
								</div>
								Business Value
							</h3>
							<p class="text-blue-800 text-lg leading-relaxed font-medium">{systems.crm.businessValue}</p>
						</div>

						<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-3 border-indigo-300">
							<h3 class="mb-5 text-xl font-bold text-blue-900 flex items-center gap-3">
								<div class="relative">
									<svg class="h-6 w-6 text-indigo-600 animate-spin" style="animation-duration: 4s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
									</svg>
									<div class="absolute -top-1 -right-1 h-3 w-3 bg-yellow-400 rounded-full animate-bounce"></div>
								</div>
								Key Features
							</h3>
							<div class="grid gap-4">
								{#each systems.crm.features as feature, index}
									<div class="flex items-center gap-4 text-blue-800 p-3 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
										<div class="relative">
											<svg class="h-5 w-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
												<animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="3s" begin="{index * 0.5}s" repeatCount="indefinite"/>
											</svg>
											<div class="absolute -top-1 -right-1 h-2 w-2 bg-green-400 rounded-full animate-ping" style="animation-delay: {index * 0.2}s;"></div>
										</div>
										<span class="font-medium">{feature}</span>
									</div>
								{/each}
							</div>
						</div>

						<div class="bg-white rounded-xl p-8 border-4 border-blue-400">
							<h3 class="mb-4 text-xl font-bold text-blue-900 flex items-center gap-2">
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
								</svg>
								Demo Accounts
							</h3>
							<div class="grid gap-4 sm:grid-cols-2">
								<div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 p-4 lg:p-5 transition-all">
									<div class="flex items-center gap-2 mb-3">
										<svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
										</svg>
										<h4 class="font-bold text-blue-900">End User Account</h4>
									</div>
									{#if showCrmCredentials}
										<div class="space-y-2">
											<p class="text-sm font-medium text-blue-800">Email: <span class="font-mono bg-white px-2 py-1 rounded">{systems.crm.credentials.endUser.email}</span></p>
											<p class="text-sm font-medium text-blue-800">Password: <span class="font-mono bg-white px-2 py-1 rounded">{systems.crm.credentials.endUser.password}</span></p>
										</div>
									{:else}
										<Button variant="outline" size="sm" onclick={() => toggleCredentials('crm')} class="bg-white hover:bg-blue-50 border-blue-300 text-blue-700">
											<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
											</svg>
											Show Credentials
										</Button>
									{/if}
								</div>
								<div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border-2 border-indigo-200 p-4 lg:p-5 transition-all">
									<div class="flex items-center gap-2 mb-3">
										<svg class="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
										</svg>
										<h4 class="font-bold text-indigo-900">Admin Account</h4>
									</div>
									{#if showCrmCredentials}
										<div class="space-y-2">
											<p class="text-sm font-medium text-indigo-800">Email: <span class="font-mono bg-white px-2 py-1 rounded">{systems.crm.credentials.admin.email}</span></p>
											<p class="text-sm font-medium text-indigo-800">Password: <span class="font-mono bg-white px-2 py-1 rounded">{systems.crm.credentials.admin.password}</span></p>
										</div>
									{:else}
										<Button variant="outline" size="sm" onclick={() => toggleCredentials('crm')} class="bg-white hover:bg-indigo-50 border-indigo-300 text-indigo-700">
											<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
											</svg>
											Show Credentials
										</Button>
									{/if}
								</div>
							</div>
							<div class="mt-6">
								<Button onclick={() => window.open(systems.crm.url, '_blank')} class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-base lg:text-lg font-semibold transition-all">
									<svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
									</svg>
									Open CRM Demo
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>

			<!-- Enhanced CMS Tab -->
			<TabsContent value="cms">
				<Card class="bg-white border-4 border-green-400 rounded-xl">
					<CardHeader class="bg-gradient-to-r from-green-50 to-green-100 rounded-t-xl border-b-3 border-green-300">
						<div class="flex items-center gap-4 mb-3">
							<div class="relative p-3 bg-green-500 rounded-xl border-2 border-green-600">
								<svg class="h-8 w-8 text-white animate-bounce" style="animation-duration: 2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
								</svg>
								<div class="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 rounded-full animate-ping flex items-center justify-center">
									<div class="h-2 w-2 bg-white rounded-full"></div>
								</div>
							</div>
							<div>
								<CardTitle class="text-3xl font-bold text-green-900 animate-pulse">{systems.cms.title}</CardTitle>
								<div class="flex items-center gap-2 mt-1">
									<div class="h-2 w-2 bg-green-500 rounded-full animate-ping"></div>
									<span class="text-sm text-green-600 font-semibold">LIVE DEMO</span>
								</div>
							</div>
						</div>
						<CardDescription class="text-green-700 text-lg font-medium">{systems.cms.description}</CardDescription>
					</CardHeader>
					<CardContent class="p-8">
						<div class="bg-green-50 rounded-xl p-6 border-3 border-green-300 mb-6">
							<p class="text-green-800 text-lg font-medium leading-relaxed">{systems.cms.businessValue}</p>
						</div>
						<Button onclick={() => window.open(systems.cms.url, '_blank')} class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 lg:py-4 text-base lg:text-lg font-bold border-3 border-green-800 rounded-xl transition-all duration-300">
							<div class="flex items-center justify-center gap-3">
								<svg class="h-6 w-6 animate-spin" style="animation-duration: 3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
								</svg>
								Open CMS Demo
								<div class="h-2 w-2 bg-green-400 rounded-full animate-pulse ml-2"></div>
							</div>
						</Button>
					</CardContent>
				</Card>
			</TabsContent>

			<TabsContent value="analytics">
				<Card class="bg-white border-4 border-purple-400 rounded-xl">
					<CardHeader class="bg-gradient-to-r from-purple-50 to-purple-100 rounded-t-xl border-b-3 border-purple-300">
						<div class="flex items-center gap-4 mb-3">
							<div class="relative p-3 bg-purple-500 rounded-xl border-2 border-purple-600">
								<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
									<animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="2s" repeatCount="indefinite"/>
								</svg>
								<div class="absolute -top-1 -right-1 h-4 w-4 bg-yellow-500 rounded-full animate-bounce flex items-center justify-center">
									<div class="h-2 w-2 bg-white rounded-full animate-ping"></div>
								</div>
							</div>
							<div>
								<CardTitle class="text-3xl font-bold text-purple-900 animate-pulse">{systems.analytics.title}</CardTitle>
								<div class="flex items-center gap-2 mt-1">
									<div class="h-2 w-2 bg-purple-500 rounded-full animate-ping"></div>
									<span class="text-sm text-purple-600 font-semibold">PUBLIC ACCESS</span>
								</div>
							</div>
						</div>
						<CardDescription class="text-purple-700 text-lg font-medium">{systems.analytics.description}</CardDescription>
					</CardHeader>
					<CardContent class="p-8">
						<div class="bg-purple-50 rounded-xl p-6 border-3 border-purple-300 mb-6">
							<p class="text-purple-800 text-lg font-medium leading-relaxed">{systems.analytics.businessValue}</p>
						</div>
						<Button onclick={() => window.open(systems.analytics.url, '_blank')} class="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 lg:py-4 text-base lg:text-lg font-bold border-3 border-purple-800 rounded-xl transition-all duration-300">
							<div class="flex items-center justify-center gap-3">
								<svg class="h-6 w-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
								</svg>
								Open Analytics Dashboard
								<div class="h-2 w-2 bg-purple-400 rounded-full animate-bounce ml-2"></div>
							</div>
						</Button>
					</CardContent>
				</Card>
			</TabsContent>

			<TabsContent value="metrics">
				<Card class="bg-white border-4 border-orange-400 rounded-xl">
					<CardHeader class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-t-xl border-b-3 border-orange-300">
						<div class="flex items-center gap-4 mb-3">
							<div class="relative p-3 bg-orange-500 rounded-xl border-2 border-orange-600">
								<svg class="h-8 w-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
								</svg>
								<div class="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full animate-ping flex items-center justify-center">
									<div class="h-2 w-2 bg-white rounded-full"></div>
								</div>
							</div>
							<div>
								<CardTitle class="text-3xl font-bold text-orange-900 animate-pulse">{systems.metrics.title}</CardTitle>
								<div class="flex items-center gap-2 mt-1">
									<div class="h-2 w-2 bg-orange-500 rounded-full animate-ping"></div>
									<span class="text-sm text-orange-600 font-semibold">REAL-TIME DATA</span>
								</div>
							</div>
						</div>
						<CardDescription class="text-orange-700 text-lg font-medium">{systems.metrics.description}</CardDescription>
					</CardHeader>
					<CardContent class="p-8">
						<div class="bg-orange-50 rounded-xl p-6 border-3 border-orange-300 mb-6">
							<p class="text-orange-800 text-lg font-medium leading-relaxed">{systems.metrics.businessValue}</p>
						</div>
						<Button onclick={() => window.open(systems.metrics.url, '_blank')} class="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 lg:py-4 text-base lg:text-lg font-bold border-3 border-orange-800 rounded-xl transition-all duration-300">
							<div class="flex items-center justify-center gap-3">
								<svg class="h-6 w-6 animate-spin" style="animation-duration: 2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
								</svg>
								View Website Analytics
								<div class="h-2 w-2 bg-orange-400 rounded-full animate-pulse ml-2"></div>
							</div>
						</Button>
					</CardContent>
				</Card>
			</TabsContent>

			<TabsContent value="iot">
				<Card class="bg-white border-4 border-indigo-400 rounded-xl">
					<CardHeader class="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-t-xl border-b-3 border-indigo-300">
						<div class="flex items-center gap-4 mb-3">
							<div class="relative p-3 bg-indigo-500 rounded-xl border-2 border-indigo-600">
								<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
									<animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="4s" repeatCount="indefinite"/>
								</svg>
								<div class="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-bounce flex items-center justify-center">
									<div class="h-2 w-2 bg-white rounded-full animate-pulse"></div>
								</div>
							</div>
							<div>
								<CardTitle class="text-3xl font-bold text-indigo-900 animate-pulse">{systems.iot.title}</CardTitle>
								<div class="flex items-center gap-2 mt-1">
									<div class="h-2 w-2 bg-indigo-500 rounded-full animate-ping"></div>
									<span class="text-sm text-indigo-600 font-semibold">LIVE MONITORING</span>
								</div>
							</div>
						</div>
						<CardDescription class="text-indigo-700 text-lg font-medium">{systems.iot.description}</CardDescription>
					</CardHeader>
					<CardContent class="p-8">
						<div class="bg-indigo-50 rounded-xl p-6 border-3 border-indigo-300 mb-6">
							<p class="text-indigo-800 text-lg font-medium leading-relaxed">{systems.iot.businessValue}</p>
						</div>
						<Button onclick={() => window.open(systems.iot.url, '_blank')} class="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white py-3 lg:py-4 text-base lg:text-lg font-bold border-3 border-indigo-800 rounded-xl transition-all duration-300">
							<div class="flex items-center justify-center gap-3">
								<svg class="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
								</svg>
								Open IoT Dashboard
								<div class="h-2 w-2 bg-indigo-400 rounded-full animate-ping ml-2"></div>
							</div>
						</Button>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>

		<div class="mt-12 lg:mt-20 rounded-2xl bg-white border-4 border-gradient-to-r from-blue-400 to-purple-400 p-6 lg:p-10 text-center mx-4">
			<div class="mb-4 lg:mb-6 flex justify-center">
				<div class="relative">
					<svg class="h-12 w-12 lg:h-16 lg:w-16 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
						<animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="2s" repeatCount="indefinite"/>
					</svg>
					<div class="absolute -top-2 -right-2 h-4 w-4 lg:h-6 lg:w-6 bg-yellow-500 rounded-full animate-spin flex items-center justify-center">
						<div class="h-2 w-2 lg:h-3 lg:w-3 bg-white rounded-full animate-pulse"></div>
					</div>
					<div class="absolute -bottom-2 -left-2 h-3 w-3 lg:h-4 lg:w-4 bg-green-500 rounded-full animate-ping"></div>
				</div>
			</div>
			<h2 class="mb-4 text-2xl md:text-3xl font-bold text-gray-900 animate-pulse">Need a Custom Solution?</h2>
			<p class="mb-6 lg:mb-8 text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
				These demo systems showcase our capabilities. We can build similar solutions tailored to your specific business needs.
			</p>
			<Button onclick={() => window.location.href = '/contact'} class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl font-bold border-3 border-purple-800 rounded-xl transition-all duration-300">
				<div class="flex items-center gap-2 lg:gap-3">
					<svg class="h-5 w-5 lg:h-6 lg:w-6 animate-spin" style="animation-duration: 3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
					<span class="hidden sm:inline">Contact Us for Custom Development</span>
					<span class="sm:hidden">Contact Us</span>
					<div class="h-2 w-2 lg:h-3 lg:w-3 bg-yellow-400 rounded-full animate-bounce ml-1 lg:ml-2"></div>
				</div>
			</Button>
		</div>
	</div>
</div>