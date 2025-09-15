export interface NavigationItem {
	title: string;
	href: string;
	description?: string;
	thumbnail?: string;
}

export interface NavigationSection {
	title: string;
	items: NavigationItem[];
}

export interface SocialLink {
	platform: 'github' | 'linkedin' | 'twitter' | 'email';
	href: string;
}

export interface FooterSection {
	title: string;
	links: NavigationItem[];
}

// AI Workflow Navigation Items
export const aiWorkflowItems: NavigationItem[] = [
	{
		title: 'What is AI Workflow Automation?',
		href: '/services/ai-workflow-automation',
		description: 'Learn the fundamentals of AI workflow automation and its benefits.'
	},
	{
		title: 'Getting Started',
		href: '/quick-assessment',
		description: 'Step-by-step guide to implementing AI workflows in your business.'
	},
	{
		title: 'AI Tools',
		href: '/resources/ai-tools',
		description: 'Discover the best AI tools for workflow automation.'
	}
];

// Services Navigation Items
export const servicesItems: NavigationItem[] = [
	{
		title: 'Digital Transformation & Digital Infrastructure',
		href: '/services/digital-transformation',
		description: 'Complete digital infrastructure and transformation solutions.'
	},
	{
		title: 'Fractional CTO',
		href: '/services/fractional-cto',
		description: 'Strategic technology leadership for growing businesses.'
	},
	{
		title: 'AI Workflow Automation',
		href: '/services/ai-workflow-automation',
		description: 'Intelligent automation solutions for business processes.'
	},
	{
		title: 'Data Analytics',
		href: '/services/data-ai-solutions',
		description: 'Transform your data into actionable insights with AI-powered analytics.'
	},
	{
		title: 'IoT Solutions for Energy Management',
		href: '/services/iot-infrastructure',
		description: 'Smart IoT solutions for efficient energy management and monitoring.'
	}
];

// Case Studies Navigation Items
export const caseStudyItems: NavigationItem[] = [
	{
		title: 'Coffee Chain Digital Transformation',
		href: '/case-studies/coffee-chain-transformation',
		description:
			'Unifying 200+ outlets by consolidating 5 POS systems into BigQuery with Looker Studio analytics.',
		thumbnail: '/case-studies/coffee-background.jpg'
	},
	{
		title: 'SENCAR Smoke Detection AIoT',
		href: '/case-studies/sencar-smoke-detection',
		description:
			'AI-powered smoke detection system for rental car fleets with 15-30 second accuracy.',
		thumbnail: '/partners/sencar_slide1.jpg'
	}
];

// Free Resources Navigation Items
export const freeResourcesItems: NavigationItem[] = [
	{
		title: 'AI Tools',
		href: '/resources/ai-tools',
		description: 'Free AI tools and resources for productivity and automation.'
	},
	{
		title: 'Productivity Tips',
		href: '/resources/productivity-tips',
		description: 'Expert tips and strategies to boost your productivity.'
	},
	{
		title: 'NodeRED Learning Materials',
		href: '/resources/nodered-learning',
		description: 'Comprehensive guides and tutorials for NodeRED automation.'
	}
];

// IoT Projects for Case Studies
export const iotProjects: NavigationItem[] = [
	{
		title: 'Alpha Block',
		href: '/case-studies#iot-projects',
		description: 'Mushroom growing automation system',
		thumbnail: '/office/teamwork_1.jpg'
	},
	{
		title: 'RDX - Remote Driving Experience',
		href: '/case-studies#iot-projects',
		description: 'Remote driving experience platform'
	},
	{
		title: 'Energy Management Platform',
		href: '/case-studies#iot-projects',
		description: 'Comprehensive energy monitoring and management'
	},
	{
		title: 'Raspberry Pi & ESP32 Projects',
		href: '/case-studies#iot-projects',
		description: 'Custom IoT solutions and prototypes'
	}
];

// Footer Navigation Data
export const footerSections: FooterSection[] = [
	{
		title: 'Company',
		links: [
			{ title: 'About Us', href: '/about' },
			{ title: 'Tech Hotpot', href: '/tech-hotpot' },
			{ title: 'Contact Us', href: '/contact' },
			{ title: 'Privacy Policy', href: '/privacy-policy' },
			{ title: 'Engagement Models', href: '/pricing' }
		]
	},
	{
		title: 'Services',
		links: [
			{ title: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
			{ title: 'Digital Transformation', href: '/services/digital-transformation' },
			{ title: 'Fractional CTO', href: '/services/fractional-cto' },
			{ title: 'Data Analytics', href: '/services/data-ai-solutions' },
			{ title: 'IoT Energy Management', href: '/services/iot-infrastructure' }
		]
	},
	{
		title: 'Free Resources',
		links: [
			{ title: 'AI Tools', href: '/resources/ai-tools' },
			{ title: 'Productivity Tips', href: '/resources/productivity-tips' },
			{ title: 'NodeRED Learning', href: '/resources/nodered-learning' }
		]
	}
];

// Social Links
export const socialLinks: SocialLink[] = [
	{
		platform: 'github',
		href: 'https://github.com/AlphaBitsCode/'
	},
];
