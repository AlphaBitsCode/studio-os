<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Clock,
		Target,
		Zap,
		Brain,
		CheckCircle,
		ArrowRight,
		Lightbulb,
		TrendingUp
	} from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const productivityTips = [
		{
			title: 'Time Blocking Method',
			category: 'Time Management',
			description:
				'Allocate specific time blocks for different types of work to maintain focus and reduce context switching.',
			steps: [
				'Identify your most important tasks for the day',
				'Block out dedicated time slots in your calendar',
				'Include buffer time between blocks',
				'Stick to your schedule and avoid distractions'
			],
			benefits: ['Improved focus', 'Better time estimation', 'Reduced multitasking'],
			icon: Clock,
			difficulty: 'Beginner'
		},
		{
			title: 'The 2-Minute Rule',
			category: 'Task Management',
			description:
				'If a task takes less than 2 minutes to complete, do it immediately rather than adding it to your to-do list.',
			steps: [
				'When a new task comes up, estimate how long it will take',
				"If it's under 2 minutes, complete it right away",
				"If it's longer, add it to your task list with proper prioritization",
				'Review and apply this rule consistently throughout your day'
			],
			benefits: ['Prevents task accumulation', 'Maintains momentum', 'Reduces mental overhead'],
			icon: Zap,
			difficulty: 'Beginner'
		},
		{
			title: 'Eisenhower Matrix',
			category: 'Prioritization',
			description:
				'Categorize tasks based on urgency and importance to focus on what truly matters.',
			steps: [
				'List all your tasks and responsibilities',
				'Categorize each task: Urgent & Important, Important & Not Urgent, Urgent & Not Important, Neither',
				'Focus on Important & Not Urgent tasks to prevent crises',
				'Delegate or eliminate tasks that are neither urgent nor important'
			],
			benefits: ['Clear prioritization', 'Reduced stress', 'Strategic focus'],
			icon: Target,
			difficulty: 'Intermediate'
		},
		{
			title: 'Pomodoro Technique',
			category: 'Focus',
			description:
				'Work in focused 25-minute intervals followed by short breaks to maintain high concentration.',
			steps: [
				'Choose a task to work on',
				'Set a timer for 25 minutes',
				'Work on the task until the timer rings',
				'Take a 5-minute break, then repeat',
				'After 4 pomodoros, take a longer 15-30 minute break'
			],
			benefits: ['Enhanced focus', 'Reduced mental fatigue', 'Better time awareness'],
			icon: Brain,
			difficulty: 'Beginner'
		},
		{
			title: 'Getting Things Done (GTD)',
			category: 'System',
			description:
				'A comprehensive productivity system for capturing, organizing, and executing all your commitments.',
			steps: [
				'Capture everything in a trusted system',
				'Clarify what each item means and what action is required',
				'Organize items by context and priority',
				'Review your system regularly',
				'Engage with confidence in your choices'
			],
			benefits: ['Mental clarity', 'Comprehensive organization', 'Stress reduction'],
			icon: CheckCircle,
			difficulty: 'Advanced'
		},
		{
			title: 'Energy Management',
			category: 'Wellness',
			description:
				'Align your most important work with your natural energy rhythms for optimal performance.',
			steps: [
				'Track your energy levels throughout the day for a week',
				'Identify your peak energy times',
				'Schedule your most important work during high-energy periods',
				'Use low-energy times for routine tasks',
				'Incorporate regular breaks and recovery periods'
			],
			benefits: ['Optimized performance', 'Reduced burnout', 'Better work quality'],
			icon: TrendingUp,
			difficulty: 'Intermediate'
		}
	];

	const quickTips = [
		'Use keyboard shortcuts to save time on repetitive tasks',
		'Batch similar tasks together to reduce context switching',
		'Set up templates for recurring communications',
		"Use the 'Do, Delegate, Defer, Delete' framework for inbox management",
		'Implement a weekly review to stay on track with goals',
		'Create a distraction-free workspace',
		'Use automation tools for repetitive processes',
		"Practice saying 'no' to non-essential commitments"
	];

	const categories = [...new Set(productivityTips.map((tip) => tip.category))];
</script>

<svelte:head>
	<title>Productivity Tips & Strategies - AlphaBits</title>
	<meta
		name="description"
		content="Discover proven productivity tips and strategies to boost efficiency, manage time better, and achieve more in your business and personal life."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20"
>
	<div class="bg-grid-pattern absolute inset-0 opacity-5"></div>
	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<div
				class="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800"
			>
				<Lightbulb class="mr-2 h-4 w-4" />
				Productivity Tips
			</div>

			<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
				Boost Your
				<span class="text-green-700"> Productivity </span>
			</h1>

			<p class="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
				Discover proven strategies and techniques to maximize your efficiency, manage time better,
				and achieve more with less stress.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="#tips"
					class="transform rounded-lg bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700"
				>
					Explore Tips
				</a>
				<a
					href="/quick-assessment"
					class="rounded-lg border-2 border-gray-400 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-400 hover:text-white"
				>
					Assess Your Workflow
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Productivity Tips Section -->
<section id="tips" class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
				Proven Productivity Strategies
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">
				Implement these time-tested techniques to transform your workflow and achieve better
				results.
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-2">
			{#each productivityTips as tip}
				<div
					class="rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl"
				>
					<div class="mb-6 flex items-start justify-between">
						<div class="flex items-center">
							<div class="mr-4 rounded-lg bg-green-100 p-3">
								<svelte:component this={tip.icon} class="h-6 w-6 text-green-600" />
							</div>
							<div>
								<h3 class="mb-1 text-xl font-semibold text-gray-900">{tip.title}</h3>
								<span class="text-sm font-medium text-green-600">{tip.category}</span>
							</div>
						</div>
						<div class="flex items-center">
							<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
								>{tip.difficulty}</span
							>
						</div>
					</div>

					<p class="mb-6 leading-relaxed text-gray-600">{tip.description}</p>

					<div class="mb-6">
						<h4 class="mb-3 text-sm font-semibold text-gray-900">How to implement:</h4>
						<ol class="space-y-2 text-sm text-gray-600">
							{#each tip.steps as step, index}
								<li class="flex items-start">
									<span
										class="mt-0.5 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-600"
									>
										{index + 1}
									</span>
									{step}
								</li>
							{/each}
						</ol>
					</div>

					<div class="border-t border-gray-100 pt-4">
						<h4 class="mb-2 text-sm font-semibold text-gray-900">Benefits:</h4>
						<div class="flex flex-wrap gap-2">
							{#each tip.benefits as benefit}
								<span class="rounded bg-green-100 px-2 py-1 text-xs text-green-800">{benefit}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Quick Tips Section -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Quick Productivity Wins</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">
				Simple changes you can implement today to see immediate improvements in your productivity.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each quickTips as tip, index}
				<div class="rounded-lg bg-white p-6 hover:transition-shadow">
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600"
						>
							{index + 1}
						</span>
						<Lightbulb class="h-5 w-5 text-yellow-500" />
					</div>
					<p class="text-sm leading-relaxed text-gray-700">{tip}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-green-600 to-blue-600 py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Productivity?</h2>
		<p class="mx-auto mb-8 max-w-3xl text-xl text-green-600">
			Let us help you implement these strategies and create custom productivity solutions for your
			business.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/services/ai-workflow-automation"
				class="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
			>
				Explore AI Automation
			</a>
			<a
				href="/contact"
				class="rounded-lg border-2 border-white px-8 py-3 font-semibold transition-colors hover:bg-white hover:text-green-600"
			>
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
