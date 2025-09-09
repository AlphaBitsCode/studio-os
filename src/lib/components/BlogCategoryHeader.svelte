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
			icon: '/icons/icon_software.png'
		},
		{
			name: 'IoT News',
			path: '/blog/iot',
			icon: '/icons/icon_iot.png'
		},
		{
			name: 'Data & Analytics',
			path: '/blog/analytics',
			icon: '/icons/icon_analytics.png'
		},
		{
			name: 'AI Workflow',
			path: '/blog/workflow-automation',
			icon: '/icons/icon_workflow.png'
		},
		{
			name: 'Digital Transformation',
			path: '/blog/digital-transformation',
			icon: '/icons/icon_dx.png'
		}
	];

	function handleCategoryClick(path: string) {
		goto(path);
	}
</script>

<div 
	bind:this={headerElement}
	class="-mt-14 category-header transition-all duration-300 {isSticky ? 'sticky top-0 z-50 shadow-lg bg-white/95 backdrop-blur-sm dark:bg-deep-navy/95' : 'bg-white dark:bg-deep-navy'}"
>
	<div class="container mx-auto px-4 py-2">
		<div class="flex justify-center items-center gap-6 md:gap-8">
			{#each categories as category}
				<button
					on:click={() => handleCategoryClick(category.path)}
					class="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
					aria-label={`View ${category.name} posts`}
				>
					<div class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
						<img 
							src={category.icon} 
							alt={`${category.name} icon`}
							class="w-full h-full object-contain group-hover:brightness-75 transition-all"
						/>
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