<script lang="ts">
	import Button from './ui/button.svelte';

	interface Props {
		title?: string;
		description?: string;
		primaryButton?: {
			text: string;
			href: string;
			variant?: 'default' | 'outline' | 'custom';
			class?: string;
		};
		secondaryButton?: {
			text: string;
			href: string;
			variant?: 'default' | 'outline' | 'custom';
			class?: string;
		};
		variant?: 'default' | 'gradient-teal' | 'gradient-orange' | 'gradient-blue';
		class?: string;
	}

	let {
		title = 'Ready to Transform Your Business?',
		description = "Let's discuss how we can help you achieve your goals.",
		primaryButton = {
			text: 'Get in Touch',
			href: '/contact',
			variant: 'default'
		},
		secondaryButton,
		variant = 'default',
		class: className = ''
	}: Props = $props();

	// Background variants - Updated to light theme
	const backgroundClasses = {
		default: 'py-16 bg-gray-50',
		'gradient-teal': 'py-16 bg-gradient-to-r from-teal-50 to-teal-100',
		'gradient-orange': 'py-16 bg-gradient-to-r from-orange-50 to-orange-100',
		'gradient-blue': 'py-16 bg-gradient-to-r from-blue-50 to-blue-100'
	};

	// Text color variants - Updated to dark text for light theme
	const textClasses = {
		default: 'text-gray-600',
		'gradient-teal': 'text-gray-700',
		'gradient-orange': 'text-gray-700',
		'gradient-blue': 'text-gray-700'
	};

	const sectionClasses = $derived(`${backgroundClasses[variant]} ${className}`.trim());
	const descriptionClasses = $derived(`text-xl mb-8 ${textClasses[variant]}`);
</script>

<section class={sectionClasses}>
	<div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl font-bold mb-4 {variant === 'default' ? 'text-gray-900' : 'text-gray-800'}">
			{title}
		</h2>
		<p class={descriptionClasses}>
			{description}
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			{#if primaryButton}
				{#if primaryButton.variant === 'custom'}
					<a href={primaryButton.href} class={primaryButton.class || 'bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'}>
						{primaryButton.text}
					</a>
				{:else}
					<Button 
						href={primaryButton.href} 
						size="lg" 
						variant={primaryButton.variant || 'default'}
						class={primaryButton.class || ''}
					>
						{primaryButton.text}
					</Button>
				{/if}
			{/if}
			
			{#if secondaryButton}
				{#if secondaryButton.variant === 'custom'}
					<a href={secondaryButton.href} class={secondaryButton.class || 'border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'}>
						{secondaryButton.text}
					</a>
				{:else}
					<Button 
						href={secondaryButton.href} 
						size="lg" 
						variant={secondaryButton.variant || 'outline'}
						class={secondaryButton.class || ''}
					>
						{secondaryButton.text}
					</Button>
				{/if}
			{/if}
		</div>
	</div>
</section>