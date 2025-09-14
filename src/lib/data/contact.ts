export interface ContactInfo {
	title: string;
	href?: string;
	description: string[];
	note?: string;
}

export interface ContactMethod {
	title: string;
	description: string[];
	note?: string;
	icon: string;
	iconColor: string;
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface OfficeImage {
	src: string;
	alt: string;
	title: string;
	description: string;
}

export const contactPage = {
	hero: {
		title: 'Our Lab Office',
		subtitle: 'Welcome to AlphaBits - where the future is now.'
	},

	contactSection: {
		title: 'Contact Information',
		description:
			'Get in touch with us for consultations, partnerships, or any inquiries about our services.'
	},

	companyDetails: [
		{
			title: 'Legal Name',
			description: ['ALPHA BITS TECHNOLOGY INNOVATION CONSULTING COMPANY LIMITED'],
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
			</svg>`,
			iconColor: 'blue'
		},
		{
			title: 'Address',
			description: [
				'Lầu 2, 68 Nguyễn Huệ',
				'Phường Bến Nghé, Quận 1',
				'Thành phố Hồ Chí Minh, Việt Nam'
			],
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
			</svg>`,
			iconColor: 'green'
		},
		{
			title: 'Tax ID',
			description: ['0317647935'],
			note: 'Click to verify registration',
			href: 'https://masothue.com/0317647935-cong-ty-tnhh-tu-van-cong-nghe-sang-tao-alpha-bits',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
			</svg>`,
			iconColor: 'purple'
		}
	] as ContactMethod[],

	contactMethods: [
		{
			title: 'Phone',
			description: ['+84 868 000 317'],
			note: 'Available on WhatsApp & Telegram',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
			</svg>`,
			iconColor: 'green'
		},
		{
			title: 'Email',
			description: ['contact@alphabits.com'],
			note: 'We typically respond within 24 hours',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
			</svg>`,
			iconColor: 'blue'
		},
		{
			title: 'Bank Account',
			description: ['BIDV Account: <span class="font-mono">1471388638</span>'],
			note: 'For business transactions',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
			</svg>`,
			iconColor: 'orange'
		},
		{
			title: 'Business Hours',
			description: ['Monday - Friday: 9 AM - 6 PM'],
			note: 'GMT+7 (Ho Chi Minh City Time)',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>`,
			iconColor: 'indigo'
		}
	] as ContactMethod[],

	officeImages: [
		{
			src: '/office/lobby_1.jpg',
			alt: 'AlphaBits Office Lobby - Modern workspace with comfortable seating',
			title: 'Office Tour',
			description: 'Click to take a step into our office',
			videoDescription: 'A walk through our office, July 2025'
		}
	] as OfficeImage[],

	collaborationSpace: {
		src: '/office/lobby_2.jpg',
		alt: 'AlphaBits Office Lobby - Collaborative meeting space',
		title: 'Collaboration Space'
	},

	faqSection: {
		title: 'Frequently Asked Questions',
		description: 'Quick answers to common questions about our services and process.'
	},

	faqItems: [
		{
			question: 'How quickly can you start a project?',
			answer:
				'We can typically begin discovery and planning within 1-2 weeks of project approval. Implementation timelines vary based on project scope and complexity.'
		},
		{
			question: 'Do you work with small businesses or just enterprises?',
			answer:
				'We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit your budget and requirements.'
		},
		{
			question: "What's included in a fractional CTO engagement?",
			answer:
				'Our fractional CTO services include strategic technology planning, team leadership, architecture reviews, vendor management, and ongoing technical guidance tailored to your needs.'
		},
		{
			question: 'Do you provide ongoing support after implementation?',
			answer:
				'Yes, we offer various support packages including monitoring, maintenance, updates, and additional feature development to ensure your systems continue to perform optimally.'
		}
	] as FAQItem[]
};
