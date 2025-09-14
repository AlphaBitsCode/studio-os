import type { Approach } from '$lib/components/ApproachCard.svelte';
import type { Expertise } from '$lib/components/ExpertiseCard.svelte';

export const heroSection = {
	title: 'About AlphaBits',
	description:
		"We're passionate about helping businesses harness the transformative power of AI and modern technology."
};

export const missionVision = {
	mission: {
		title: 'Our Mission',
		description:
			'To democratize access to cutting-edge AI and automation technologies, making them practical for businesses of all sizes.',
		subDescription:
			'We bridge the gap between complex technology and real-world business solutions.'
	},
	vision: {
		title: 'Our Vision',
		description:
			'A world where businesses operate with seamless efficiency through intelligent automation, where data drives decisions, and technology serves as a catalyst for growth.'
	}
};

export const founderInfo = {
	name: 'Kent Nguyen',
	title: 'Serial Tech Entrepreneur & Inventor of Alterno Sand Battery',
	website: 'https://www.kentnguyen.com/',
	bio: [
		'Kent Nguyen is a seasoned tech entrepreneur and inventor with over 20 years of experience building startups, systems, and innovative solutions. As a Fractional CTO, he specializes in crafting technology strategies and leading software development teams across multiple countries.',
		'Based in Vietnam, Kent has a proven track record of creating complex software systems and driving energy-efficient breakthroughs, including pioneering work on thermal energy storage like the Sand Battery.',
		'His collaborative approach, strategic mindset, and ability to build trust with partners make him a respected leader in the tech industry.'
	],
	achievements: [
		{ label: '20+', description: 'Years Experience' },
		{ label: '15+', description: 'Startups Founded' }
	]
};

export const ourApproach: Approach[] = [
	{
		title: 'Innovation-First',
		description:
			'We stay at the forefront of technology trends, constantly exploring new tools and methodologies to deliver cutting-edge solutions.',
		icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
		</svg>`,
		iconColor: 'blue'
	},
	{
		title: 'Client-Centric',
		description:
			"Every solution is tailored to your specific needs, challenges, and goals. We don't believe in one-size-fits-all approaches.",
		icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
		</svg>`,
		iconColor: 'green'
	},
	{
		title: 'Results-Driven',
		description:
			'We measure success by the tangible impact our solutions have on your business operations, efficiency, and growth.',
		icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
		</svg>`,
		iconColor: 'purple'
	}
];

export const expertiseAreas: Expertise[] = [
	{
		title: 'AI & Machine Learning',
		description: 'Advanced AI agents, LLM integration, and intelligent automation systems'
	},
	{
		title: 'IoT & Automation',
		description: 'Node-RED workflows, sensor integration, and real-time monitoring'
	},
	{
		title: 'Data Engineering',
		description: 'BigQuery, ClickHouse, InfluxDB, and comprehensive data pipelines'
	},
	{
		title: 'Cloud Infrastructure',
		description: 'Modern cloud architectures, network configuration, and scalable systems'
	}
];

export const companyDetails = {
	legalName: 'ALPHA BITS TECHNOLOGY INNOVATION CONSULTING COMPANY LIMITED',
	address: {
		line1: 'Lầu 2, 68 Nguyễn Huệ',
		line2: 'Phường Bến Nghé, Quận 1',
		line3: 'Thành phố Hồ Chí Minh, Việt Nam'
	},
	taxId: {
		number: '0317647935',
		verificationUrl:
			'https://masothue.com/0317647935-cong-ty-tnhh-tu-van-cong-nghe-sang-tao-alpha-bits'
	},
	contact: {
		phone: '+84 868 000 317',
		phoneNote: 'Available on WhatsApp & Telegram',
		email: 'contact@alphabits.com',
		emailNote: 'We typically respond within 24 hours',
		bankAccount: '1471388638',
		bankName: 'BIDV Account',
		businessHours: 'Monday - Friday: 9 AM - 6 PM',
		timezone: 'GMT+7 (Ho Chi Minh City Time)'
	}
};

export const workspaceSection = {
	title: 'Our Workspace',
	description:
		'Take a look inside our collaborative environment where innovation happens every day.'
};

export const ctaSection = {
	description:
		"Let's discuss how our expertise can help you achieve your technology and business goals.",
	primaryButton: {
		text: 'Get in Touch',
		href: '/contact',
		variant: 'custom' as const,
		class:
			'bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
	},
	secondaryButton: {
		text: 'Explore Our Services',
		href: '/services',
		variant: 'custom' as const,
		class:
			'border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
	}
};
