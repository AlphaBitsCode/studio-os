import type { Service } from '$lib/components/ServiceCard.svelte';
import type { Feature } from '$lib/components/FeatureCard.svelte';

export const homeServices: Service[] = [
	{
		title: 'AI Workflow Automation',
		description:
			'Streamline your operations with intelligent AI agents and IoT workflow automation across all departments.',
		href: '/services/ai-workflow-automation',
		icon: `<svg class="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
		</svg>`,
		badge: {
			text: 'Popular',
			variant: 'secondary',
			class: 'border-orange-200 bg-orange-100 font-bold text-orange-800'
		},
		colorTheme: 'blue'
	},
	{
		title: 'Fractional CTO & Tech Leadership',
		description:
			'Get expert technical leadership with deep-dive assessments, infrastructure modernization, and strategic guidance.',
		href: '/services/fractional-cto',
		icon: `<svg class="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
		</svg>`,
		badge: {
			text: 'Expert',
			variant: 'outline',
			class: 'border-2 border-emerald-300 font-bold text-emerald-700'
		},
		colorTheme: 'emerald'
	},
	{
		title: 'Data & AI Solutions',
		description:
			'Harness the power of big data with analytics, AI infrastructure, and intelligent agent building platforms.',
		href: '/services/data-ai-solutions',
		icon: `<svg class="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
		</svg>`,
		badge: {
			text: 'New',
			variant: 'default',
			class: 'border-0 bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white'
		},
		colorTheme: 'purple'
	}
];

export const homeFeatures: Feature[] = [
	{
		title: 'Rapid Implementation',
		description: 'Get up and running quickly with our proven methodologies and frameworks.',
		icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
		</svg>`,
		iconColor: 'medium-teal'
	},
	{
		title: 'Enterprise Security',
		description: 'Built with security-first principles and enterprise-grade infrastructure.',
		icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
		</svg>`,
		iconColor: 'dark-teal'
	},
	{
		title: 'Scalable Solutions',
		description: 'Solutions that grow with your business, from startup to enterprise scale.',
		icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
		</svg>`,
		iconColor: 'cyan-accent'
	},
	{
		title: '24/7 Support',
		description: 'Continuous monitoring and support to keep your systems running smoothly.',
		icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
		</svg>`,
		iconColor: 'medium-teal'
	}
];

export const heroSection = {
	tagline: 'Our Expertise',
	title: 'Core Services That Drive Results',
	description:
		'From AI automation to digital transformation, we provide comprehensive solutions that modernize your business operations and accelerate growth.'
};

export const whyChooseUs = {
	title: 'Why Choose AlphaBits?',
	description:
		'We combine deep technical expertise with practical business solutions to deliver measurable results.'
};

export const ctaSection = {
	variant: 'gradient-teal' as const,
	description:
		"Let's discuss how AI workflow automation and digital transformation can accelerate your growth.",
	primaryButton: {
		text: 'Schedule a Consultation',
		href: '/quick-assessment',
		variant: 'custom' as const,
		class:
			'bg-white text-medium-teal hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors'
	},
	secondaryButton: {
		text: 'View Case Studies',
		href: '/case-studies',
		variant: 'custom' as const,
		class:
			'border-2 border-white hover:bg-white hover:text-medium-teal px-8 py-3 rounded-lg font-semibold transition-colors'
	}
};
