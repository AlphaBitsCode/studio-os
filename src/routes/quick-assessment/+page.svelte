<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Card from '$lib/components/ui/card.svelte';
	import { onMount } from 'svelte';

	// Current step in the assessment journey
	let currentStep = $state(1);
	let isBookingComplete = $state(false);
	let showBookingModal = $state(false);
	let calEmbed: HTMLElement;

	// Cal.com configuration
	const calUsername = 'alphabits'; // Replace with your actual Cal.com username
	const eventSlug = 'mini'; // Replace with your actual event slug

	function handleBookingSuccess() {
		console.log('Booking created successfully');
		isBookingComplete = true;
		showBookingModal = false;
		// You can add additional success handling here
	}

	function nextStep() {
		currentStep++;
	}

	function prevStep() {
		if (currentStep > 1) currentStep--;
	}

	function openBookingModal() {
		showBookingModal = true;
		// Initialize Cal.com embed when modal opens
		setTimeout(() => {
			if (typeof window !== 'undefined' && calEmbed) {
				try {
					// Load Cal.com embed script if not already loaded
					if (!(window as any).Cal) {
						const script = document.createElement('script');
						script.src = 'https://app.cal.com/embed/embed.js';
						script.async = true;
						document.head.appendChild(script);

						script.onload = () => {
							initializeCal();
						};
					} else {
						initializeCal();
					}
				} catch (error) {
					console.warn('Cal.com embed not available:', error);
				}
			}
		}, 100);
	}

	function initializeCal() {
		const cal = (window as any).Cal;
		if (cal) {
			cal('init', {
				origin: 'https://cal.com'
			});

			// Listen for booking success
			cal('on', {
				action: 'bookingSuccessful',
				callback: handleBookingSuccess
			});
		}
	}

	function closeBookingModal() {
		showBookingModal = false;
	}
</script>

<svelte:head>
	<title>Quick Assessment - AI Workflow Automation | Alphabits</title>
	<meta
		name="description"
		content="Start your AI automation journey with a quick 30-minute assessment. Book your consultation to discover how AI can transform your business processes."
	/>
</svelte:head>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
		<!-- Page Header -->
		<div class="mb-12 text-center">
			<h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Start Your AI Journey</h1>
			<p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
				Every transformation begins with understanding. Let's explore how AI can revolutionize your
				business processes in just 30 minutes.
			</p>
		</div>

		<!-- Progress Steps -->
		<div class="mb-8 px-4 sm:mb-12">
			<!-- Mobile: Vertical Layout -->
			<div class="sm:hidden">
				<div class="mx-auto max-w-xs space-y-4">
					<div class="flex items-center space-x-3">
						<div
							class="h-8 w-8 rounded-full {currentStep >= 1
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-600'} flex flex-shrink-0 items-center justify-center text-sm font-medium"
						>
							1
						</div>
						<div class="flex-1">
							<p class="text-sm font-medium {currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}">
								Discovery
							</p>
							<p class="text-xs text-gray-500">Understand your needs</p>
						</div>
					</div>
					{#if currentStep >= 2 || currentStep === 1}
						<div class="ml-4 h-4 w-0.5 {currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}"></div>
					{/if}
					<div class="flex items-center space-x-3">
						<div
							class="h-8 w-8 rounded-full {currentStep >= 2
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-600'} flex flex-shrink-0 items-center justify-center text-sm font-medium"
						>
							2
						</div>
						<div class="flex-1">
							<p class="text-sm font-medium {currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}">
								Assessment
							</p>
							<p class="text-xs text-gray-500">Book consultation</p>
						</div>
					</div>
					{#if currentStep >= 3 || currentStep <= 2}
						<div class="ml-4 h-4 w-0.5 {currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}"></div>
					{/if}
					<div class="flex items-center space-x-3">
						<div
							class="h-8 w-8 rounded-full {currentStep >= 3
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-600'} flex flex-shrink-0 items-center justify-center text-sm font-medium"
						>
							3
						</div>
						<div class="flex-1">
							<p class="text-sm font-medium {currentStep >= 3 ? 'text-blue-600' : 'text-gray-500'}">
								Transformation
							</p>
							<p class="text-xs text-gray-500">Your AI journey</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Desktop: Horizontal Layout -->
			<div class="hidden justify-center sm:flex">
				<div class="flex items-center space-x-4 md:space-x-8">
					<div class="flex flex-shrink-0 items-center">
						<div
							class="h-10 w-10 rounded-full md:h-12 md:w-12 {currentStep >= 1
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium"
						>
							1
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-700">Discovery</p>
							<p class="text-xs text-gray-500">Understand needs</p>
						</div>
					</div>
					<div
						class="h-0.5 w-12 md:w-20 {currentStep >= 2
							? 'bg-blue-600'
							: 'bg-gray-200'} flex-shrink-0"
					></div>
					<div class="flex flex-shrink-0 items-center">
						<div
							class="h-10 w-10 rounded-full md:h-12 md:w-12 {currentStep >= 2
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium"
						>
							2
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-700">Assessment</p>
							<p class="text-xs text-gray-500">Book consultation</p>
						</div>
					</div>
					<div
						class="h-0.5 w-12 md:w-20 {currentStep >= 3
							? 'bg-blue-600'
							: 'bg-gray-200'} flex-shrink-0"
					></div>
					<div class="flex flex-shrink-0 items-center">
						<div
							class="h-10 w-10 rounded-full md:h-12 md:w-12 {currentStep >= 3
								? 'bg-blue-600 text-white'
								: 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium"
						>
							3
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-700">Transformation</p>
							<p class="text-xs text-gray-500">Your AI journey</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Content based on current step -->
		{#if currentStep === 1}
			<!-- Step 1: Discovery -->
			<div class="mx-auto max-w-4xl">
				<div class="mb-8 rounded-xl border-2 border-gray-200 bg-white p-8">
					<div class="mb-6 text-center">
						<h2 class="mb-4 text-2xl font-bold text-gray-900">🔍 Discovery Phase</h2>
						<p class="text-lg text-gray-600">
							Before we dive into solutions, let's understand your current challenges and
							opportunities.
						</p>
					</div>
					<div class="mb-6">
						<div class="grid gap-8 md:grid-cols-2">
							<div class="space-y-6">
								<h3 class="text-xl font-semibold text-gray-900">What We'll Explore</h3>
								<ul class="space-y-3">
									<li class="flex items-start space-x-3">
										<span class="text-blue-600">•</span>
										<span>Current business processes and pain points</span>
									</li>
									<li class="flex items-start space-x-3">
										<span class="text-blue-600">•</span>
										<span>Time-consuming manual tasks</span>
									</li>
									<li class="flex items-start space-x-3">
										<span class="text-blue-600">•</span>
										<span>Data management challenges</span>
									</li>
									<li class="flex items-start space-x-3">
										<span class="text-blue-600">•</span>
										<span>Growth bottlenecks and scalability issues</span>
									</li>
								</ul>
							</div>
							<div class="rounded-lg bg-blue-50 p-6">
								<h4 class="mb-3 font-semibold text-blue-900">Why This Matters</h4>
								<p class="text-sm leading-relaxed text-blue-800">
									Understanding your unique situation allows us to identify the most impactful AI
									solutions. This isn't about technology for technology's sake—it's about finding
									the right tools to solve your specific challenges and unlock new opportunities.
								</p>
							</div>
						</div>
					</div>
					<div class="flex justify-center">
						<Button onclick={nextStep} class="px-8 py-3 text-blue-800">
							Continue to Assessment
						</Button>
					</div>
				</div>
			</div>
		{:else if currentStep === 2}
			<!-- Step 2: Assessment & Booking -->
			<div class="mx-auto max-w-4xl">
				<div class="rounded-xl border-2 border-gray-200 bg-white p-6 lg:p-8">
					<div class="mb-8 text-center">
						<h2 class="mb-4 text-2xl font-bold text-gray-900">📅 Schedule Your Assessment</h2>
						<p class="mb-6 text-lg text-gray-600">
							Book a 30-minute consultation with our AI experts to discuss your specific needs and
							opportunities.
						</p>
					</div>

					<div class="mb-8">
						<div class="grid gap-8 md:grid-cols-2">
							<!-- Booking Call-to-Action -->
							<div class="text-center">
								<div class="mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8">
									<div class="mb-4 text-6xl">📅</div>
									<h3 class="mb-3 text-xl font-semibold text-gray-900">Ready to Get Started?</h3>
									<p class="mb-6 text-gray-600">
										Click below to open our booking calendar and select your preferred time slot.
									</p>
									<Button href="http://cal.com/alphabits/mini" class="text-md px-8 py-3 text-white">
										📅 Open Booking Calendar
									</Button>
								</div>

								{#if isBookingComplete}
									<div class="rounded-lg border border-green-200 bg-green-50 p-4">
										<div class="mb-2 flex items-center justify-center space-x-2">
											<span class="text-xl text-green-600">✅</span>
											<p class="font-semibold text-green-800">Booking Confirmed!</p>
										</div>
										<p class="text-sm text-green-700">Check your email for confirmation details</p>
									</div>
								{/if}
							</div>

							<!-- Assessment Details -->
							<div>
								<div class="rounded-lg border bg-white p-6">
									<h3 class="mb-4 text-lg font-semibold text-gray-900">Assessment Details</h3>
									<div class="space-y-4">
										<div class="flex items-start space-x-3">
											<div
												class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100"
											>
												<span class="text-sm text-blue-600">⏱️</span>
											</div>
											<div>
												<p class="text-sm font-medium text-gray-900">Duration</p>
												<p class="text-sm text-gray-600">30 minutes</p>
											</div>
										</div>

										<div class="flex items-start space-x-3">
											<div
												class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100"
											>
												<span class="text-sm text-green-600">💻</span>
											</div>
											<div>
												<p class="text-sm font-medium text-gray-900">Format</p>
												<p class="text-sm text-gray-600">Video Call</p>
											</div>
										</div>

										<div class="flex items-start space-x-3">
											<div
												class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100"
											>
												<span class="text-sm text-purple-600">💰</span>
											</div>
											<div>
												<p class="text-sm font-medium text-gray-900">Cost</p>
												<p class="text-sm font-semibold text-green-600">Free Consultation</p>
											</div>
										</div>

										<div class="mt-6 rounded-lg bg-gray-50 p-4">
											<h4 class="mb-2 text-sm font-semibold text-gray-900">What to Expect</h4>
											<ul class="space-y-1 text-xs text-gray-600">
												<li>• Process analysis & pain point identification</li>
												<li>• AI opportunity assessment</li>
												<li>• Custom roadmap recommendations</li>
												<li>• Next steps discussion</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-between gap-4 border-t pt-4 sm:flex-row">
						<Button variant="outline" onclick={prevStep} class="w-full sm:w-auto">
							← Back to Discovery
						</Button>
						<Button onclick={nextStep} class="w-full px-6 sm:w-auto">Next: Transformation →</Button>
					</div>
				</div>
			</div>
		{:else if currentStep === 3}
			<!-- Step 3: Transformation -->
			<div class="mx-auto max-w-4xl">
				<div class="rounded-xl border-2 border-gray-200 bg-white p-8">
					<div class="mb-6 text-center">
						<h2 class="mb-4 text-2xl font-bold text-gray-900">🚀 Your Transformation Journey</h2>
						<p class="text-lg text-gray-600">
							After your assessment, here's what happens next in your AI automation journey.
						</p>
					</div>
					<div class="mb-6">
						<div class="space-y-8">
							<div class="grid gap-6 md:grid-cols-3">
								<div class="rounded-lg bg-blue-50 p-6 text-center">
									<div
										class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white"
									>
										📋
									</div>
									<h3 class="mb-2 font-semibold text-gray-900">Custom Strategy</h3>
									<p class="text-sm text-gray-600">
										Receive a tailored AI implementation roadmap based on your specific needs and
										goals.
									</p>
								</div>
								<div class="rounded-lg bg-green-50 p-6 text-center">
									<div
										class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl text-white"
									>
										⚡
									</div>
									<h3 class="mb-2 font-semibold text-gray-900">Quick Wins</h3>
									<p class="text-sm text-gray-600">
										Identify immediate automation opportunities that can deliver results within
										weeks.
									</p>
								</div>
								<div class="rounded-lg bg-purple-50 p-6 text-center">
									<div
										class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl text-white"
									>
										🎯
									</div>
									<h3 class="mb-2 font-semibold text-gray-900">Long-term Vision</h3>
									<p class="text-sm text-gray-600">
										Develop a comprehensive plan for scaling AI across your entire organization.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-center">
						<Button onclick={prevStep} variant="outline">Back to Booking</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<!-- Booking Modal -->
{#if showBookingModal}
	<div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
		<div class="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
			<!-- Modal Header -->
			<div class="flex items-center justify-between border-b p-6">
				<div>
					<h3 class="text-xl font-semibold text-gray-900">Book Your AI Assessment</h3>
					<p class="mt-1 text-sm text-gray-600">Select your preferred time slot</p>
				</div>
				<button
					onclick={closeBookingModal}
					class="text-gray-400 transition-colors hover:text-gray-600"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</div>

			<!-- Modal Content -->
			<div class="max-h-[calc(90vh-120px)] overflow-y-auto p-6">
				<div class="relative min-h-[600px]">
					<!-- Cal.com Embed Container -->
					<div
						bind:this={calEmbed}
						data-cal-link="{calUsername}/{eventSlug}"
						data-cal-config={JSON.stringify({ layout: 'month_view', theme: 'light' })}
						class="h-full w-full"
						style="width:100%;height:100%;overflow:scroll"
					></div>

					<!-- Loading fallback -->
					<div
						class="absolute inset-0 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
					>
						<div class="p-6 text-center">
							<div class="mb-4 text-4xl">📅</div>
							<h4 class="mb-2 text-lg font-semibold text-gray-900">Loading Calendar...</h4>
							<p class="text-gray-600">Please wait while we load the booking calendar</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
