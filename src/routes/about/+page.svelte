<script>
	import CTA from '$lib/components/CTA.svelte';
	import ImageSlideshow from '$lib/components/ImageSlideshow.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ApproachCard from '$lib/components/ApproachCard.svelte';
	import ExpertiseCard from '$lib/components/ExpertiseCard.svelte';
	import {
		heroSection,
		missionVision,
		founderInfo,
		ourApproach,
		expertiseAreas,
		companyDetails,
		workspaceSection,
		ctaSection
	} from '$lib/data/about';
	import { onMount } from 'svelte';

	let mounted = false;

	// Office and teamwork images
	const officeImages = [
		'/office/office_1.jpg',
		'/office/office_2.jpg',
		'/office/office_3.jpg',
		'/office/office_4.jpg',
		'/office/teamwork_1.jpg',
		'/office/teamwork_2.jpg',
		'/office/teamwork_3.jpg',
		'/office/teamwork_4.jpg'
	];

	// Kent's profile images - randomized order
	const kentProfileImages = [
		'/profile/profile1.jpg',
		'/profile/profile2.jpg',
		'/profile/profile3.jpg',
		'/profile/profile4.jpg',
		'/profile/profile5.jpg',
		'/profile/profile6.jpg',
		'/profile/profile7.jpg',
		'/profile/profile8.jpg',
		'/profile/profile9.jpg',
		'/profile/profile10.jpg'
	].sort(() => Math.random() - 0.5);

	let currentImageIndex = 0;
	let imageElement;

	// Ken Burns effect slideshow
	onMount(() => {
		mounted = true;

		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % kentProfileImages.length;
		}, 5000);

		return () => clearInterval(interval);
	});

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		mainEntity: {
			'@type': 'Organization',
			name: 'AlphaBits',
			url: 'https://alphabits.team',
			logo: 'https://alphabits.team/logos/logo_square.png',
			description: 'AI Workflow Automation & Digital Transformation Solutions',
			foundingDate: '2020',
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
			knowsAbout: [
				'AI Workflow Automation',
				'Digital Transformation',
				'IoT Infrastructure',
				'Data Analytics',
				'Fractional CTO Services'
			]
		}
	};
</script>

<SEOHead
	title="About Us - AlphaBits | AI Automation & Digital Transformation Experts"
	description="Learn about AlphaBits' mission to transform businesses through AI workflow automation, digital transformation, and expert technical leadership. Discover our team, values, and approach to business innovation."
	keywords="about AlphaBits, AI automation company, digital transformation experts, technology consulting team, business automation specialists, fractional CTO services"
	canonicalUrl="https://alphabits.team/about"
	ogImage="https://alphabits.team/office/office_front.jpg"
	ogType="website"
	{structuredData}
/>

<!-- Animated SVG Hero Section -->
<section
	class="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-200"
>
	<!-- Animated Background Elements -->
	<div class="absolute inset-0">
		<svg class="h-full w-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
			<!-- Floating Geometric Shapes -->
			<g class={mounted ? 'animate-float-slow' : ''}>
				<circle cx="100" cy="100" r="30" fill="rgba(255,255,255,0.3)" />
				<rect x="1000" y="80" width="40" height="40" fill="rgba(255,255,255,0.08)" rx="8" />
				<polygon points="200,500 230,450 260,500" fill="rgba(255,255,255,0.06)" />
			</g>

			<!-- Pulsing Dots -->
			<g class={mounted ? 'animate-pulse-gentle' : ''}>
				<circle cx="300" cy="150" r="8" fill="rgba(255,255,255,0.3)" />
				<circle cx="900" cy="200" r="6" fill="rgba(255,255,255,0.25)" />
				<circle cx="150" cy="400" r="10" fill="rgba(255,255,255,0.2)" />
				<circle cx="1050" cy="450" r="7" fill="rgba(255,255,255,0.28)" />
			</g>

			<!-- Flowing Lines -->
			<g
				class={mounted ? 'animate-flow' : ''}
				stroke="rgba(255,255,255,0.3)"
				stroke-width="4"
				fill="none"
			>
				<path d="M0,300 Q300,250 600,300 T1200,300" />
				<path d="M0,350 Q400,300 800,350 T1200,350" />
			</g>

			<!-- Tech-inspired Grid Pattern -->
			<defs>
				<pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
					<path
						d="M 50 0 L 0 0 0 50"
						fill="none"
						stroke="rgba(255,255,255,0.05)"
						stroke-width="1"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid)" />

			<!-- Glowing Orbs -->
			<defs>
				<radialGradient id="glow1" cx="50%" cy="50%" r="50%">
					<stop offset="0%" style="stop-color:rgba(255,255,255,0.5);stop-opacity:1" />
					<stop offset="100%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:0" />
				</radialGradient>
				<radialGradient id="glow2" cx="50%" cy="50%" r="50%">
					<stop offset="0%" style="stop-color:rgba(99,102,241,0.4);stop-opacity:1" />
					<stop offset="100%" style="stop-color:rgba(99,102,241,0);stop-opacity:0" />
				</radialGradient>
			</defs>

			<circle cx="800" cy="120" r="80" fill="url(#glow1)" class={mounted ? 'animate-glow' : ''} />
			<circle
				cx="400"
				cy="480"
				r="60"
				fill="url(#glow2)"
				class={mounted ? 'animate-glow-delayed' : ''}
			/>
		</svg>
	</div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h1
			class="mb-6 text-5xl font-bold text-black/90 md:text-7xl {mounted
				? 'animate-fade-in-up'
				: 'opacity-0'}"
		>
			{heroSection.title}
		</h1>
		<p
			class="text-xl leading-relaxed text-black/80 md:text-2xl {mounted
				? 'animate-fade-in-up-delayed'
				: 'opacity-0'}"
		>
			{heroSection.description}
		</p>

		<!-- Floating Action Elements -->
		<div
			class="mt-8 flex justify-center space-x-4 {mounted
				? 'animate-fade-in-up-more-delayed'
				: 'opacity-0'}"
		>
			<div
				class="h-3 w-3 animate-bounce rounded-full bg-white/40"
				style="animation-delay: 0s;"
			></div>
			<div
				class="h-3 w-3 animate-bounce rounded-full bg-white/40"
				style="animation-delay: 0.2s;"
			></div>
			<div
				class="h-3 w-3 animate-bounce rounded-full bg-white/40"
				style="animation-delay: 0.4s;"
			></div>
		</div>
	</div>

	<!-- Bottom Gradient Fade -->
	<div
		class="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white to-transparent"
	></div>
</section>

<!-- Mission & Vision -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-bold md:text-4xl">{missionVision.mission.title}</h2>
				<p class="mb-6 text-lg text-gray-600">
					{missionVision.mission.description}
				</p>
				<p class="text-lg text-gray-600">
					{missionVision.mission.subDescription}
				</p>
			</div>
			<div class="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8">
				<h3 class="mb-4 text-2xl font-bold">{missionVision.vision.title}</h3>
				<p class="text-gray-600">
					{missionVision.vision.description}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Founder Profile -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Meet Our Founder</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Leading innovation with over two decades of entrepreneurial and technical expertise.
			</p>
		</div>

		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Profile Image Slideshow -->
			<div class="flex justify-center">
				<div class="profile-slideshow max-w-md">
					{#each kentProfileImages as image, index}
						<img
							src={image}
							alt="Kent Nguyen - Founder of AlphaBits"
							class="ken-burns-effect {index === currentImageIndex ? 'active' : ''}"
							loading="lazy"
						/>
					{/each}
				</div>
			</div>

			<!-- Bio Content -->
			<div>
				<div class="mb-6">
					<h3 class="mb-2 text-2xl font-bold text-gray-900">
						<a
							href={founderInfo.website}
							target="_blank"
							rel="noopener noreferrer"
							class="transition-colors hover:text-blue-600"
						>
							{founderInfo.name}
						</a>
					</h3>
					<p class="mb-4 text-lg font-semibold text-blue-600">
						{founderInfo.title}
					</p>
				</div>

				<div class="prose prose-lg mb-6 text-gray-600">
					{#each founderInfo.bio as paragraph}
						<p class="mb-4">{paragraph}</p>
					{/each}
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href={founderInfo.website}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
					>
						Learn More About Kent
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							></path>
						</svg>
					</a>
					<a
						href="/contact"
						class="inline-flex items-center rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
					>
						Connect with Kent
					</a>
				</div>

				<!-- Key Achievements -->
				<div class="mt-8 grid grid-cols-2 gap-4">
					{#each founderInfo.achievements as achievement}
						<div class="rounded-lg bg-white p-4 text-center">
							<div class="mb-1 text-2xl font-bold text-blue-600">{achievement.label}</div>
							<div class="text-sm text-gray-600">{achievement.description}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Approach -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Our Approach</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				We combine deep technical expertise with practical business acumen to deliver solutions that
				work.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each ourApproach as approach}
				<ApproachCard {approach} />
			{/each}
		</div>
	</div>
</section>

<!-- Our Expertise -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Our Expertise</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Years of experience across diverse industries and technologies.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each expertiseAreas as expertise}
				<ExpertiseCard {expertise} />
			{/each}
		</div>
	</div>
</section>

<!-- Office Gallery -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">{workspaceSection.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				{workspaceSection.description}
			</p>
		</div>

		<div class="mx-auto max-w-4xl">
			<ImageSlideshow
				images={officeImages}
				size="large"
				interval={4000}
				alt="AlphaBits office and teamwork"
			/>
		</div>
	</div>
</section>

<!-- Contact Information -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 md:grid-cols-2">
			<!-- Company Details -->
			<div class="rounded-lg bg-white p-8">
				<h3 class="mb-6 text-2xl font-semibold text-gray-800">Company Details</h3>

				<div class="space-y-6">
					<!-- Company Name -->
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100"
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
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 text-lg font-semibold text-gray-800">Legal Name</h4>
							<p class="font-medium text-gray-600">
								{companyDetails.legalName}
							</p>
						</div>
					</div>

					<!-- Address -->
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100"
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
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 text-lg font-semibold text-gray-800">Address</h4>
							<p class="text-gray-600">{companyDetails.address.line1}</p>
							<p class="text-gray-600">{companyDetails.address.line2}</p>
							<p class="text-gray-600">{companyDetails.address.line3}</p>
						</div>
					</div>

					<!-- Tax ID -->
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100"
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
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 text-lg font-semibold text-gray-800">Tax ID</h4>
							<a
								href={companyDetails.taxId.verificationUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="text-purple-600 transition-colors hover:text-purple-700 hover:underline"
							>
								{companyDetails.taxId.number}
							</a>
							<p class="mt-1 text-sm text-gray-500">Click to verify registration</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Methods -->
			<div class="rounded-lg bg-white p-8">
				<h3 class="mb-6 text-2xl font-semibold text-gray-800">Get In Touch</h3>

				<div class="space-y-6">
					<!-- Phone -->
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100"
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
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 text-lg font-semibold text-gray-800">Phone</h4>
							<p class="font-medium text-gray-600">{companyDetails.contact.phone}</p>
							<p class="text-sm text-gray-500">{companyDetails.contact.phoneNote}</p>
						</div>
					</div>

					<!-- Email -->
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100"
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
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 text-lg font-semibold text-gray-800">Email</h4>
							<p class="text-gray-600">{companyDetails.contact.email}</p>
							<p class="text-sm text-gray-500">{companyDetails.contact.emailNote}</p>
						</div>
					</div>

					<!-- Bank Account -->
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100"
						>
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
									d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 text-lg font-semibold text-gray-800">Bank Account</h4>
							<p class="text-gray-600">
								{companyDetails.contact.bankName}:
								<span class="font-mono">{companyDetails.contact.bankAccount}</span>
							</p>
							<p class="text-sm text-gray-500">For business transactions</p>
						</div>
					</div>

					<!-- Business Hours -->
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100"
						>
							<svg
								class="h-6 w-6 text-indigo-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 text-lg font-semibold text-gray-800">Business Hours</h4>
							<p class="text-gray-600">{companyDetails.contact.businessHours}</p>
							<p class="text-sm text-gray-500">{companyDetails.contact.timezone}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<CTA {...ctaSection} />

<style>
	@keyframes float-slow {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(5deg);
		}
	}

	@keyframes pulse-gentle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.1);
		}
	}

	@keyframes flow {
		0% {
			transform: translateX(-100px);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: translateX(100px);
			opacity: 0;
		}
	}

	@keyframes glow {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.05);
		}
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-float-slow {
		animation: float-slow 6s ease-in-out infinite;
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 3s ease-in-out infinite;
	}

	.animate-flow {
		animation: flow 8s linear infinite;
	}

	.animate-glow {
		animation: glow 4s ease-in-out infinite;
	}

	.animate-glow-delayed {
		animation: glow 4s ease-in-out infinite;
		animation-delay: 2s;
	}

	.animate-fade-in-up {
		animation: fade-in-up 1s ease-out forwards;
	}

	.animate-fade-in-up-delayed {
		animation: fade-in-up 1s ease-out 0.3s forwards;
	}

	.animate-fade-in-up-more-delayed {
		animation: fade-in-up 1s ease-out 0.6s forwards;
	}

	/* Ken Burns Effect */
	@keyframes kenBurns {
		0% {
			transform: scale(1) translate(0, 0);
		}
		100% {
			transform: scale(1.1) translate(-2%, -2%);
		}
	}

	.ken-burns-effect {
		animation: kenBurns 5s ease-in-out infinite alternate;
		transition: opacity 1s ease-in-out;
	}

	.profile-slideshow {
		position: relative;
		width: 100%;
		height: 400px;
		overflow: hidden;
		border-radius: 1rem;
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	.profile-slideshow img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}

	.profile-slideshow img.active {
		opacity: 1;
	}
</style>
