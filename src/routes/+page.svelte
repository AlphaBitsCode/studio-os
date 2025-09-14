<script>
	// Page data export for SvelteKit
	export let data;

	import Card from '$lib/components/ui/card.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import Badge from '$lib/components/ui/badge.svelte';
	import Separator from '$lib/components/ui/separator.svelte';
	import HeroWorkFlow from '$lib/components/HeroWorkFlow.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import { homeServices, homeFeatures, heroSection, whyChooseUs, ctaSection } from '$lib/data/home';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'AlphaBits',
		url: 'https://alphabits.team',
		logo: 'https://alphabits.team/logos/logo_square.png',
		description: 'AI Workflow Automation & Digital Transformation Solutions',
		foundingDate: '2023',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'VN'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			url: 'https://alphabits.team/contact'
		},
		sameAs: ['https://www.linkedin.com/company/alphabits-team'],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'AlphaBits Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI Workflow Automation',
						description: 'Intelligent AI agents and IoT workflow automation across all departments'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Fractional CTO Services',
						description: 'Expert technical leadership and strategic guidance'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Data & AI Solutions',
						description: 'Big data analytics, AI infrastructure, and intelligent agents'
					}
				}
			]
		}
	};
</script>

<SEOHead
	title="AlphaBits - AI Workflow Automation & Digital Transformation"
	description="Transform your business with AI workflow automation, fractional CTO services, and comprehensive digital transformation solutions. Reduce manual work by 80% with intelligent automation."
	keywords="AI workflow automation, digital transformation, fractional CTO, IoT infrastructure, data analytics, business automation, AI agents, Node-RED, process automation"
	canonicalUrl="https://alphabits.team"
	ogImage="https://alphabits.team/alphabits_cover.png"
	{structuredData}
/>

<!-- Hero Section -->
<HeroWorkFlow />

<!-- Services Overview -->
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
					>{heroSection.tagline}</span
				>
			</div>
			<h2
				class="mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
			>
				{heroSection.title}
			</h2>
			<p class="mx-auto max-w-3xl text-xl leading-relaxed font-medium text-slate-600">
				{heroSection.description}
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each homeServices as service}
				<ServiceCard {service} />
			{/each}
		</div>
	</div>
</section>

<Separator class="my-8" />

<!-- Why Choose AlphaBits -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">{whyChooseUs.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				{whyChooseUs.description}
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each homeFeatures as feature}
				<FeatureCard {feature} />
			{/each}
		</div>
	</div>
</section>

<Separator class="my-8" />

<CTA {...ctaSection} />
