<script lang="ts">
	import Button from "$lib/components/ui/button.svelte";
	import Card from "$lib/components/ui/card.svelte";
	import Calendar from "$lib/components/ui/calendar/calendar.svelte";
	import { CalendarDate, getLocalTimeZone } from "@internationalized/date";
	import type { DateValue } from "@internationalized/date";

	// Calendar state
	let selectedDate = $state<CalendarDate | undefined>(new CalendarDate(2025, 2, 15));
	let selectedTime = $state<string | null>("10:00");

	// Generate time slots from 9:00 AM to 6:00 PM in 30-minute intervals
	const timeSlots = Array.from({ length: 19 }, (_, i) => {
		const totalMinutes = i * 30;
		const hour = Math.floor(totalMinutes / 60) + 9;
		const minute = totalMinutes % 60;
		return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
	});

	// Mock booked dates (you can replace this with real data)
	const bookedDates = Array.from({ length: 3 }, (_, i) => new CalendarDate(2025, 2, 20 + i));

	// Current step in the assessment journey
	let currentStep = $state(1);

	function handleBooking() {
		if (selectedDate && selectedTime) {
			// Here you would typically send the booking data to your backend
			console.log('Booking:', { date: selectedDate, time: selectedTime });
			alert('Assessment booked successfully! We\'ll send you a confirmation email shortly.');
		}
	}

	function nextStep() {
		currentStep++;
	}

	function prevStep() {
		if (currentStep > 1) currentStep--;
	}
</script>

<svelte:head>
	<title>Quick Assessment - AI Workflow Automation | Alphabits</title>
	<meta name="description" content="Start your AI automation journey with a quick 30-minute assessment. Book your consultation to discover how AI can transform your business processes." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
	<!-- Hero Section -->
	<div class="container mx-auto px-4 py-16">
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
				Start Your <span class="text-blue-600">AI Journey</span>
			</h1>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
				Every transformation begins with understanding. Let's explore how AI can revolutionize your business processes in just 30 minutes.
			</p>
		</div>

		<!-- Progress Steps -->
		<div class="flex justify-center mb-12">
			<div class="flex items-center space-x-4">
				<div class="flex items-center">
					<div class="w-8 h-8 rounded-full {currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium">
						1
					</div>
					<span class="ml-2 text-sm font-medium text-gray-700">Discovery</span>
				</div>
				<div class="w-16 h-0.5 {currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}"></div>
				<div class="flex items-center">
					<div class="w-8 h-8 rounded-full {currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium">
						2
					</div>
					<span class="ml-2 text-sm font-medium text-gray-700">Assessment</span>
				</div>
				<div class="w-16 h-0.5 {currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}"></div>
				<div class="flex items-center">
					<div class="w-8 h-8 rounded-full {currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-sm font-medium">
						3
					</div>
					<span class="ml-2 text-sm font-medium text-gray-700">Transformation</span>
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
			<div class="max-w-6xl mx-auto">
				<Card class="p-8">
				<div class="text-center mb-8">
					<h2 class="text-2xl font-bold text-gray-900 mb-4">
						📅 Schedule Your Assessment
					</h2>
					<p class="text-lg text-gray-600">
						Book a 30-minute consultation with our AI experts to discuss your specific needs and opportunities.
					</p>
				</div>
				<div class="mb-6">
						<div class="grid lg:grid-cols-3 gap-8">
							<!-- Calendar Section -->
							<div class="lg:col-span-2">
								<div class="bg-white rounded-lg border p-6">
									<h3 class="text-lg font-semibold mb-4">Select Date & Time</h3>
									<div class="flex flex-col lg:flex-row gap-6">
										<!-- Calendar -->
										<div class="flex-1">
											<Calendar
												bind:value={selectedDate}
												isDateUnavailable={(date: DateValue) => bookedDates.some((d) => d.compare(date) === 0)}
												isDateDisabled={undefined}
												class="w-full"
											/>
										</div>
										<!-- Time Slots -->
										<div class="lg:w-48">
											<h4 class="font-medium mb-3">Available Times</h4>
											<div class="grid gap-2 max-h-80 overflow-y-auto">
												{#each timeSlots as time}
													<Button
														variant={selectedTime === time ? "default" : "outline"}
														onclick={() => (selectedTime = time)}
														class="w-full text-sm"
														size="sm"
													>
														{time}
													</Button>
												{/each}
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Booking Summary -->
							<div class="lg:col-span-1">
								<div class="bg-gray-50 rounded-lg p-6 sticky top-6">
									<h3 class="text-lg font-semibold mb-4">Assessment Details</h3>
									<div class="space-y-4">
										<div>
											<p class="text-sm text-gray-600">Duration</p>
											<p class="font-medium">30 minutes</p>
										</div>
										<div>
											<p class="text-sm text-gray-600">Format</p>
											<p class="font-medium">Video Call (Zoom/Teams)</p>
										</div>
										<div>
											<p class="text-sm text-gray-600">Cost</p>
											<p class="font-medium text-green-600">Free Consultation</p>
										</div>
										{#if selectedDate && selectedTime}
											<div class="border-t pt-4">
												<p class="text-sm text-gray-600">Selected Time</p>
												<p class="font-medium">
													{selectedDate.toDate(getLocalTimeZone()).toLocaleDateString("en-US", {
														weekday: "long",
														day: "numeric",
														month: "long",
														year: "numeric"
													})}
												</p>
												<p class="font-medium">{selectedTime}</p>
											</div>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
				<div class="flex justify-between">
					<Button variant="outline" onclick={prevStep}>
						Back
					</Button>
					<Button 
						disabled={!selectedDate || !selectedTime}
						onclick={handleBooking}
						class="px-8"
					>
						Book Assessment
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