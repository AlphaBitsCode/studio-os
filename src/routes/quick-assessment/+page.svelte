<script lang="ts">
	import Button from "$lib/components/ui/button.svelte";
	import Card from "$lib/components/ui/card.svelte";
	import { onMount } from 'svelte';

	// Current step in the assessment journey
	let currentStep = $state(1);
	let calEmbed: HTMLElement;
	let isBookingComplete = $state(false);

	// Cal.com configuration
	const calUsername = "your-cal-username"; // Replace with your actual Cal.com username
	const eventSlug = "30min"; // Replace with your actual event slug

	function handleBookingSuccess() {
		console.log("Booking created successfully");
		isBookingComplete = true;
		// You can add additional success handling here
	}

	function nextStep() {
		currentStep++;
	}

	function prevStep() {
		if (currentStep > 1) currentStep--;
	}

	// Initialize Cal.com embed when component mounts
	onMount(async () => {
		if (typeof window !== 'undefined') {
			try {
				// Load Cal.com embed script
				const script = document.createElement('script');
				script.src = 'https://app.cal.com/embed/embed.js';
				script.async = true;
				document.head.appendChild(script);
				
				script.onload = () => {
					// Initialize Cal embed after script loads
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
				};
			} catch (error) {
				console.warn('Cal.com embed not available, using fallback:', error);
			}
		}
	});
</script>

<svelte:head>
	<title>Quick Assessment - AI Workflow Automation | Alphabits</title>
	<meta name="description" content="Start your AI automation journey with a quick 30-minute assessment. Book your consultation to discover how AI can transform your business processes." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
	<!-- Hero Section -->
	<div class="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
		<div class="text-center mb-8 sm:mb-12 lg:mb-16">
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
				Start Your <span class="text-blue-600">AI Journey</span>
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
				Every transformation begins with understanding. Let's explore how AI can revolutionize your business processes in just 30 minutes.
			</p>
		</div>

		<!-- Progress Steps -->
		<div class="flex justify-center mb-8 sm:mb-12 px-4">
			<div class="flex items-center space-x-2 sm:space-x-4 max-w-full overflow-x-auto">
				<div class="flex items-center flex-shrink-0">
					<div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full {currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium">
						1
					</div>
					<span class="ml-2 text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline">Discovery</span>
					<span class="ml-1 text-xs font-medium text-gray-700 sm:hidden">Discovery</span>
				</div>
				<div class="w-8 sm:w-16 h-0.5 {currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'} flex-shrink-0"></div>
				<div class="flex items-center flex-shrink-0">
					<div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full {currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium">
						2
					</div>
					<span class="ml-2 text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline">Assessment</span>
					<span class="ml-1 text-xs font-medium text-gray-700 sm:hidden">Assessment</span>
				</div>
				<div class="w-8 sm:w-16 h-0.5 {currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'} flex-shrink-0"></div>
				<div class="flex items-center flex-shrink-0">
					<div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full {currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium">
						3
					</div>
					<span class="ml-2 text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline">Transformation</span>
					<span class="ml-1 text-xs font-medium text-gray-700 sm:hidden">Transform</span>
				</div>
			</div>
		</div>

		<!-- Content based on current step -->
		{#if currentStep === 1}
			<!-- Step 1: Discovery -->
			<div class="max-w-4xl mx-auto">
				<Card class="p-8 mb-8">
				<div class="text-center mb-6">
					<h2 class="text-2xl font-bold text-gray-900 mb-4">
						🔍 Discovery Phase
					</h2>
					<p class="text-lg text-gray-600">
						Before we dive into solutions, let's understand your current challenges and opportunities.
					</p>
				</div>
				<div class="mb-6">
						<div class="grid md:grid-cols-2 gap-8">
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
							<div class="bg-blue-50 p-6 rounded-lg">
								<h4 class="font-semibold text-blue-900 mb-3">Why This Matters</h4>
								<p class="text-blue-800 text-sm leading-relaxed">
									Understanding your unique situation allows us to identify the most impactful AI solutions. This isn't about technology for technology's sake—it's about finding the right tools to solve your specific challenges and unlock new opportunities.
								</p>
							</div>
						</div>
					</div>
				<div class="flex justify-center">
					<Button onclick={nextStep} class="px-8 py-3">
						Continue to Assessment
					</Button>
				</div>
			</Card>
			</div>

		{:else if currentStep === 2}
			<!-- Step 2: Assessment & Booking -->
			<div class="max-w-7xl mx-auto">
				<Card class="p-4 sm:p-6 lg:p-8">
				<div class="text-center mb-6 sm:mb-8">
					<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
						📅 Schedule Your Assessment
					</h2>
					<p class="text-base sm:text-lg text-gray-600 px-2">
						Book a 30-minute consultation with our AI experts to discuss your specific needs and opportunities.
					</p>
				</div>
				
				<div class="mb-6">
					<div class="grid lg:grid-cols-4 gap-4 lg:gap-8">
						<!-- Cal.com Booking Widget -->
						<div class="lg:col-span-3">
							<div class="bg-white rounded-lg border overflow-hidden">
								<div class="p-4 sm:p-6 border-b bg-gray-50">
									<h3 class="text-lg font-semibold text-gray-900">Select Your Preferred Time</h3>
									<p class="text-sm text-gray-600 mt-1">Choose a convenient time slot for your AI assessment consultation</p>
								</div>
								
								<!-- Cal.com Embed Container -->
								<div class="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
									<!-- Inline Cal.com booking widget -->
									<div 
										bind:this={calEmbed}
										data-cal-link="{calUsername}/{eventSlug}"
										data-cal-config='{JSON.stringify({layout:"month_view",theme:"light"})}'
										class="w-full h-full"
										style="width:100%;height:100%;overflow:scroll"
									></div>
									
									<!-- Fallback content if Cal.com doesn't load -->
									<div class="absolute inset-0 flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
										<div class="text-center p-6">
											<div class="text-4xl mb-4">📅</div>
											<h4 class="text-lg font-semibold text-gray-900 mb-2">Booking System Loading...</h4>
											<p class="text-gray-600 mb-4">Please wait while we load the booking calendar</p>
											<div class="text-sm text-gray-500">
												If this takes too long, please contact us directly at <br>
												<a href="mailto:contact@alphabits.team" class="text-blue-600 hover:underline">contact@alphabits.team</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Assessment Details Sidebar -->
						<div class="lg:col-span-1">
							<div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6 sticky top-6">
								<h3 class="text-lg font-semibold mb-4 text-gray-900">Assessment Details</h3>
								<div class="space-y-4">
									<div class="flex items-start space-x-3">
										<div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
											<span class="text-blue-600 text-sm">⏱️</span>
										</div>
										<div>
											<p class="text-sm font-medium text-gray-900">Duration</p>
											<p class="text-sm text-gray-600">30 minutes</p>
										</div>
									</div>
									
									<div class="flex items-start space-x-3">
										<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
											<span class="text-green-600 text-sm">💻</span>
										</div>
										<div>
											<p class="text-sm font-medium text-gray-900">Format</p>
											<p class="text-sm text-gray-600">Video Call (Zoom/Teams)</p>
										</div>
									</div>
									
									<div class="flex items-start space-x-3">
										<div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
											<span class="text-purple-600 text-sm">💰</span>
										</div>
										<div>
											<p class="text-sm font-medium text-gray-900">Cost</p>
											<p class="text-sm font-semibold text-green-600">Free Consultation</p>
										</div>
									</div>
									
									{#if isBookingComplete}
										<div class="border-t pt-4 mt-4">
											<div class="bg-green-50 border border-green-200 rounded-lg p-3">
												<div class="flex items-center space-x-2">
													<span class="text-green-600">✅</span>
													<p class="text-sm font-medium text-green-800">Booking Confirmed!</p>
												</div>
												<p class="text-xs text-green-700 mt-1">Check your email for confirmation details</p>
											</div>
										</div>
									{/if}
									
									<div class="mt-6 p-4 bg-white rounded-lg border border-gray-200">
										<h4 class="text-sm font-semibold text-gray-900 mb-2">What to Expect</h4>
										<ul class="text-xs text-gray-600 space-y-1">
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
				
				<div class="flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t">
					<Button variant="outline" onclick={prevStep} class="w-full sm:w-auto">
						← Back to Discovery
					</Button>
					<Button onclick={nextStep} class="w-full sm:w-auto px-6">
						Next: Transformation →
					</Button>
				</div>
			</Card>
			</div>

		{:else if currentStep === 3}
			<!-- Step 3: Transformation -->
			<div class="max-w-4xl mx-auto">
				<Card class="p-8">
				<div class="text-center mb-6">
					<h2 class="text-2xl font-bold text-gray-900 mb-4">
						🚀 Your Transformation Journey
					</h2>
					<p class="text-lg text-gray-600">
						After your assessment, here's what happens next in your AI automation journey.
					</p>
				</div>
				<div class="mb-6">
						<div class="space-y-8">
							<div class="grid md:grid-cols-3 gap-6">
								<div class="text-center p-6 bg-blue-50 rounded-lg">
									<div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
										📋
									</div>
									<h3 class="font-semibold text-gray-900 mb-2">Custom Strategy</h3>
									<p class="text-sm text-gray-600">Receive a tailored AI implementation roadmap based on your specific needs and goals.</p>
								</div>
								<div class="text-center p-6 bg-green-50 rounded-lg">
									<div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
										⚡
									</div>
									<h3 class="font-semibold text-gray-900 mb-2">Quick Wins</h3>
									<p class="text-sm text-gray-600">Identify immediate automation opportunities that can deliver results within weeks.</p>
								</div>
								<div class="text-center p-6 bg-purple-50 rounded-lg">
									<div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
										🎯
									</div>
									<h3 class="font-semibold text-gray-900 mb-2">Long-term Vision</h3>
									<p class="text-sm text-gray-600">Develop a comprehensive plan for scaling AI across your entire organization.</p>
								</div>
							</div>
						</div>
					</div>
				<div class="flex justify-center">
					<Button onclick={prevStep} variant="outline">
						Back to Booking
					</Button>
				</div>
			</Card>
			</div>
		{/if}
	</div>
</div>

<style>
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>