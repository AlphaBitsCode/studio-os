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
	class="category-header -mt-14 transition-all duration-300 {isSticky
		? 'dark:bg-deep-navy/95 sticky top-0 z-50 bg-white/95 shadow-lg backdrop-blur-sm'
		: 'dark:bg-deep-navy bg-white'}"
>
	<div class="container mx-auto px-2 py-2 sm:px-4">
		<div class="flex items-center justify-between gap-2 sm:justify-center sm:gap-4 md:gap-8">
			{#each categories as category}
				<button
					on:click={() => handleCategoryClick(category.path)}
					class="group flex flex-1 flex-col items-center gap-1 rounded-lg p-1 transition-colors hover:bg-gray-100 sm:flex-none sm:gap-2 sm:p-2 dark:hover:bg-gray-800"
					aria-label={`View ${category.name} posts`}
				>
					<div class="flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8 md:h-10 md:w-10">
						<img
							src={category.icon}
							alt={`${category.name} icon`}
							class="h-full w-full object-contain transition-all group-hover:brightness-75"
						/>
					</div>
					<span
						class="group-hover:text-medium-teal line-clamp-2 text-center text-[10px] font-medium text-gray-700 transition-colors sm:line-clamp-1 sm:text-xs md:text-sm dark:text-gray-300"
					>
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
