<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock, Target, Zap, Brain, CheckCircle, ArrowRight, Lightbulb, TrendingUp } from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const productivityTips = [
		{
			title: "Time Blocking Method",
			category: "Time Management",
			description: "Allocate specific time blocks for different types of work to maintain focus and reduce context switching.",
			steps: [
				"Identify your most important tasks for the day",
				"Block out dedicated time slots in your calendar",
				"Include buffer time between blocks",
				"Stick to your schedule and avoid distractions"
			],
			benefits: ["Improved focus", "Better time estimation", "Reduced multitasking"],
			icon: Clock,
			difficulty: "Beginner"
		},
		{
			title: "The 2-Minute Rule",
			category: "Task Management",
			description: "If a task takes less than 2 minutes to complete, do it immediately rather than adding it to your to-do list.",
			steps: [
				"When a new task comes up, estimate how long it will take",
				"If it's under 2 minutes, complete it right away",
				"If it's longer, add it to your task list with proper prioritization",
				"Review and apply this rule consistently throughout your day"
			],
			benefits: ["Prevents task accumulation", "Maintains momentum", "Reduces mental overhead"],
			icon: Zap,
			difficulty: "Beginner"
		},
		{
			title: "Eisenhower Matrix",
			category: "Prioritization",
			description: "Categorize tasks based on urgency and importance to focus on what truly matters.",
			steps: [
				"List all your tasks and responsibilities",
				"Categorize each task: Urgent & Important, Important & Not Urgent, Urgent & Not Important, Neither",
				"Focus on Important & Not Urgent tasks to prevent crises",
				"Delegate or eliminate tasks that are neither urgent nor important"
			],
			benefits: ["Clear prioritization", "Reduced stress", "Strategic focus"],
			icon: Target,
			difficulty: "Intermediate"
		},
		{
			title: "Pomodoro Technique",
			category: "Focus",
			description: "Work in focused 25-minute intervals followed by short breaks to maintain high concentration.",
			steps: [
				"Choose a task to work on",
				"Set a timer for 25 minutes",
				"Work on the task until the timer rings",
				"Take a 5-minute break, then repeat",
				"After 4 pomodoros, take a longer 15-30 minute break"
			],
			benefits: ["Enhanced focus", "Reduced mental fatigue", "Better time awareness"],
			icon: Brain,
			difficulty: "Beginner"
		},
		{
			title: "Getting Things Done (GTD)",
			category: "System",
			description: "A comprehensive productivity system for capturing, organizing, and executing all your commitments.",
			steps: [
				"Capture everything in a trusted system",
				"Clarify what each item means and what action is required",
				"Organize items by context and priority",
				"Review your system regularly",
				"Engage with confidence in your choices"
			],
			benefits: ["Mental clarity", "Comprehensive organization", "Stress reduction"],
			icon: CheckCircle,
			difficulty: "Advanced"
		},
		{
			title: "Energy Management",
			category: "Wellness",
			description: "Align your most important work with your natural energy rhythms for optimal performance.",
			steps: [
				"Track your energy levels throughout the day for a week",
				"Identify your peak energy times",
				"Schedule your most important work during high-energy periods",
				"Use low-energy times for routine tasks",
				"Incorporate regular breaks and recovery periods"
			],
			benefits: ["Optimized performance", "Reduced burnout", "Better work quality"],
			icon: TrendingUp,
			difficulty: "Intermediate"
		}
	];

	const quickTips = [
		"Use keyboard shortcuts to save time on repetitive tasks",
		"Batch similar tasks together to reduce context switching",
		"Set up templates for recurring communications",
		"Use the 'Do, Delegate, Defer, Delete' framework for inbox management",
		"Implement a weekly review to stay on track with goals",
		"Create a distraction-free workspace",
		"Use automation tools for repetitive processes",
		"Practice saying 'no' to non-essential commitments"
	];

	const categories = [...new Set(productivityTips.map(tip => tip.category))];
</script>

<svelte:head>
	<title>Productivity Tips & Strategies - AlphaBits</title>
	<meta name="description" content="Discover proven productivity tips and strategies to boost efficiency, manage time better, and achieve more in your business and personal life." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 overflow-hidden">
	<div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="text-center">
			<div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
				<Lightbulb class="w-4 h-4 mr-2" />
				Productivity Tips
			</div>
			
			<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
				Boost Your
				<span class="text-green-700">
					Productivity
				</span>
			</h1>
			
			<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
				Discover proven strategies and techniques to maximize your efficiency, manage time better, and achieve more with less stress.
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a href="#tips" class="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
					Explore Tips
				</a>
				<a href="/quick-assessment" class="border-2 border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-all duration-300">
					Assess Your Workflow
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Productivity Tips Section -->
<section id="tips" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Productivity Strategies</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Implement these time-tested techniques to transform your workflow and achieve better results.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-8">
			{#each productivityTips as tip}
				<div class="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
					<div class="flex items-start justify-between mb-6">
						<div class="flex items-center">
							<div class="p-3 bg-green-100 rounded-lg mr-4">
								<svelte:component this={tip.icon} class="w-6 h-6 text-green-600" />
							</div>
							<div>
								<h3 class="text-xl font-semibold text-gray-900 mb-1">{tip.title}</h3>
								<span class="text-sm text-green-600 font-medium">{tip.category}</span>
							</div>
						</div>
						<div class="flex items-center">
							<span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{tip.difficulty}</span>
						</div>
					</div>
					
					<p class="text-gray-600 mb-6 leading-relaxed">{tip.description}</p>
					
					<div class="mb-6">
						<h4 class="text-sm font-semibold text-gray-900 mb-3">How to implement:</h4>
						<ol class="text-sm text-gray-600 space-y-2">
							{#each tip.steps as step, index}
								<li class="flex items-start">
									<span class="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">
										{index + 1}
									</span>
									{step}
								</li>
							{/each}
						</ol>
					</div>
					
					<div class="pt-4 border-t border-gray-100">
						<h4 class="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
						<div class="flex flex-wrap gap-2">
							{#each tip.benefits as benefit}
								<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{benefit}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Quick Tips Section -->
<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Productivity Wins</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Simple changes you can implement today to see immediate improvements in your productivity.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each quickTips as tip, index}
				<div class="bg-white rounded-lg p-6  hover:transition-shadow">
					<div class="flex items-center mb-3">
						<span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-bold flex items-center justify-center mr-3">
							{index + 1}
						</span>
						<Lightbulb class="w-5 h-5 text-yellow-500" />
					</div>
					<p class="text-gray-700 text-sm leading-relaxed">{tip}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Categories Overview -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Productivity Areas</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Explore different aspects of productivity to find strategies that work best for your situation.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each categories as category}
				<div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:from-green-50 hover:to-blue-50 transition-all duration-300">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
					<p class="text-gray-600 text-sm mb-4">
						{productivityTips.filter(tip => tip.category === category).length} strategies available
					</p>
					<div class="flex items-center text-green-600 font-medium text-sm">
						Explore strategies
						<ArrowRight class="w-4 h-4 ml-1" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-green-600 to-blue-600">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Ready to Transform Your Productivity?
		</h2>
		<p class="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
			Let us help you implement these strategies and create custom productivity solutions for your business.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/services/ai-workflow-automation" class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Explore AI Automation
			</a>
			<a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
				Get Consultation
			</a>
		</div>
	</div>
</section>

<style>
	.bg-grid-pattern {
		background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>