<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let headerElement: HTMLElement;
	let isSticky = false;

	onMount(() => {
		const handleScroll = () => {
			if (headerElement) {
				const rect = headerElement.getBoundingClientRect();
				isSticky = rect.top <= 0;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const categories = [
		{
			name: 'Software',
			path: '/blog/software',
			icon: 'software'
		},
		{
			name: 'IoT News',
			path: '/blog/iot',
			icon: 'iot'
		},
		{
			name: 'Data & Analytics',
			path: '/blog/analytics',
			icon: 'analytics'
		},
		{
			name: 'Workflow Automation',
			path: '/blog/workflow-automation',
			icon: 'workflow'
		},
		{
			name: 'Digital Transformation',
			path: '/blog/digital-transformation',
			icon: 'digital'
		}
	];

	function handleCategoryClick(path: string) {
		goto(path);
	}
</script>

<div 
	bind:this={headerElement}
	class="category-header transition-all duration-300 {isSticky ? 'sticky top-0 z-50 shadow-lg bg-white/95 backdrop-blur-sm dark:bg-deep-navy/95' : 'bg-white dark:bg-deep-navy'}"
>
	<div class="container mx-auto px-4 py-4">
		<div class="flex justify-center items-center gap-6 md:gap-8">
			{#each categories as category}
				<button
					on:click={() => handleCategoryClick(category.path)}
					class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
					aria-label={`View ${category.name} posts`}
				>
					<div class="w-8 h-8 md:w-10 md:h-10 text-medium-teal group-hover:text-dark-teal transition-colors">
						{#if category.icon === 'software'}
							<!-- Code/Software Icon -->
							<svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
								<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
							</svg>
						{:else if category.icon === 'iot'}
							<!-- IoT/Network Icon -->
							<svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 9.83 7 9s.67-1.5 1.5-1.5zM12 18c-1.38 0-2.63-.56-3.54-1.46L10.5 14.5c.63.63 1.5 1 2.5 1s1.87-.37 2.5-1l2.04 2.04C16.63 17.44 15.38 18 12 18zm3.5-4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
							</svg>
						{:else if category.icon === 'analytics'}
							<!-- Analytics/Chart Icon -->
							<svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
								<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
							</svg>
						{:else if category.icon === 'workflow'}
							<!-- Workflow/Process Icon -->
							<svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
								<path d="M12.5 2C13.3 2 14 2.7 14 3.5S13.3 5 12.5 5 11 4.3 11 3.5 11.7 2 12.5 2M21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H13V9H19M12 12L10.5 10.5L9 12L10.5 13.5L12 12M12 16L10.5 14.5L9 16L10.5 17.5L12 16Z"/>
							</svg>
						{:else if category.icon === 'digital'}
							<!-- Digital Transformation Icon -->
							<svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
							</svg>
						{/if}
					</div>
					<span class="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-medium-teal transition-colors text-center">
						{category.name}
					</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.category-header {
		border-bottom: 1px solid rgba(229, 231, 235, 0.5);
	}
	
	.dark .category-header {
		border-bottom-color: rgba(75, 85, 99, 0.5);
	}
	
	.container {
		max-width: 1200px;
	}
</style>