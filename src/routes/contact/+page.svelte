<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ContactCard from '$lib/components/ContactCard.svelte';
	import FAQItem from '$lib/components/FAQItem.svelte';
	import OfficeVideoPlayer from '$lib/components/OfficeVideoPlayer.svelte';
	import { contactPage } from '$lib/data/contact';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		mainEntity: {
			'@type': 'Organization',
			name: 'AlphaBits',
			url: 'https://alphabits.team',
			contactPoint: {
				'@type': 'ContactPoint',
				contactType: 'customer service',
				url: 'https://alphabits.team/contact',
				availableLanguage: ['English', 'Vietnamese']
			},
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'VN'
			}
		}
	};
</script>

<SEOHead
	title="Contact Us - AlphaBits | Get Started with AI Automation & Digital Transformation"
	description="Get in touch with AlphaBits for AI workflow automation, fractional CTO services, and digital transformation solutions. Schedule a consultation to discuss your business automation needs."
	keywords="contact AlphaBits, AI automation consultation, digital transformation inquiry, fractional CTO services, business automation contact, technology consulting"
	canonicalUrl="https://alphabits.team/contact"
	ogImage="https://alphabits.team/alphabits_cover.png"
	ogType="website"
	{structuredData}
/>

<!-- Office Lobby Photos -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl">{contactPage.hero.title}</h1>
			<p class="text-lg text-gray-600">{contactPage.hero.subtitle}</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each contactPage.officeImages as office}
				<OfficeVideoPlayer
					imageSrc={office.src}
					imageAlt={office.alt}
					videoSrc="/office/office_lakeview_052025.mp4"
					title={office.title}
					staticDescription={office.description}
					videoDescription={office.videoDescription}
				/>
			{/each}

			<div class="overflow-hidden rounded-lg shadow-lg">
				<img
					src={contactPage.collaborationSpace.src}
					alt={contactPage.collaborationSpace.alt}
					class="h-96 w-full object-cover"
				/>
				<div class="bg-white p-6">
					<h3 class="mb-2 text-xl font-semibold">{contactPage.collaborationSpace.title}</h3>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Information -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">{contactPage.contactSection.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				{contactPage.contactSection.description}
			</p>
		</div>

		<div class="grid gap-12 md:grid-cols-2">
			<!-- Company Details -->
			<div class="rounded-lg border border-gray-200 bg-white p-8">
				<h3 class="mb-6 text-2xl font-semibold text-gray-800">Company Details</h3>
				<div class="space-y-6">
					{#each contactPage.companyDetails as detail}
						<div class="flex items-start space-x-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg {detail.iconColor ===
								'blue'
									? 'bg-blue-100'
									: detail.iconColor === 'green'
										? 'bg-green-100'
										: 'bg-purple-100'}"
							>
								{@html detail.icon}
							</div>
							<div>
								<h4 class="mb-1 text-lg font-semibold text-gray-800">{detail.title}</h4>
								{#each detail.description as line}
									<p class="text-gray-600">{line}</p>
								{/each}
								{#if detail.href}
									<a
										href={detail.href}
										target="_blank"
										rel="noopener noreferrer"
										class="text-purple-600 transition-colors hover:text-purple-700 hover:underline"
									>
										{detail.description[0]}
									</a>
									<p class="mt-1 text-sm text-gray-500">{detail.note}</p>
								{:else if detail.note}
									<p class="text-sm text-gray-500">{detail.note}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Contact Methods -->
			<div class="rounded-lg border border-gray-200 bg-white p-8">
				<h3 class="mb-6 text-2xl font-semibold text-gray-800">Get In Touch</h3>
				<div class="space-y-6">
					{#each contactPage.contactMethods as method}
						<ContactCard {method} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">{contactPage.faqSection.title}</h2>
			<p class="text-lg text-gray-600">{contactPage.faqSection.description}</p>
		</div>

		<div class="space-y-6">
			{#each contactPage.faqItems as faq}
				<FAQItem {faq} />
			{/each}
		</div>
	</div>
</section>
