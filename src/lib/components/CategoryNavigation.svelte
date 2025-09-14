<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Category } from '$lib/utils/blog-helpers';
	import { getCategoryIcon } from '$lib/utils/blog-helpers';

	export let categories: Category[];
	export let selectedCategory: Category | null = null;
	export let showAll: boolean = true;
	export let compact: boolean = false;
	export let className: string = '';

	// Icon components for each category type
	const icons = {
		software: {
			svg: `<svg class="h-full w-full" viewBox="0 0 64 64" fill="currentColor">
				<rect x="8" y="12" width="48" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
				<path d="M16 20 L20 24 L16 28" fill="none" stroke="currentColor" stroke-width="2"/>
				<line x1="24" y1="28" x2="32" y2="28" stroke="currentColor" stroke-width="2"/>
			</svg>`,
			color: 'blue'
		},
		iot: {
			svg: `<svg class="h-full w-full" viewBox="0 0 64 64" fill="currentColor">
				<circle cx="32" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="16" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="48" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="32" cy="52" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
				<path d="M32 26 L32 32 M26 20 L20 36 M38 20 L44 36 M32 32 L16 40 M32 32 L48 40 M32 32 L32 48" stroke="currentColor" stroke-width="2"/>
			</svg>`,
			color: 'green'
		},
		analytics: {
			svg: `<svg class="h-full w-full" viewBox="0 0 64 64" fill="currentColor">
				<rect x="8" y="32" width="8" height="24" rx="2"/>
				<rect x="20" y="24" width="8" height="32" rx="2"/>
				<rect x="32" y="16" width="8" height="40" rx="2"/>
				<rect x="44" y="28" width="8" height="28" rx="2"/>
			</svg>`,
			color: 'purple'
		},
		ai: {
			svg: `<svg class="h-full w-full" viewBox="0 0 64 64" fill="currentColor">
				<circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="48" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="32" cy="48" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
				<path d="M24 16 L40 16 M24 22 L26 40 M40 22 L38 40" stroke="currentColor" stroke-width="2"/>
				<path d="M16 24 L16 32 L24 40 M48 24 L48 32 L40 40" stroke="currentColor" stroke-width="2"/>
			</svg>`,
			color: 'teal'
		},
		dx: {
			svg: `<svg class="h-full w-full" viewBox="0 0 64 64" fill="currentColor">
				<circle cx="20" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="2"/>
				<path d="M14 26 L26 38 M26 26 L14 38" stroke="currentColor" stroke-width="2"/>
				<rect x="40" y="20" width="16" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="44" cy="28" r="1"/>
				<circle cx="52" cy="28" r="1"/>
				<path d="M44 36 Q48 32 52 36" fill="none" stroke="currentColor" stroke-width="2"/>
			</svg>`,
			color: 'orange'
		},
		workflow: {
			svg: `<svg class="h-full w-full" viewBox="0 0 64 64" fill="currentColor">
				<circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="48" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
				<circle cx="32" cy="48" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
				<path d="M24 16 L40 16 M24 22 L26 40 M40 22 L38 40" stroke="currentColor" stroke-width="2"/>
				<path d="M16 24 L16 32 L24 40 M48 24 L48 32 L40 40" stroke="currentColor" stroke-width="2"/>
			</svg>`,
			color: 'teal'
		}
	};

	// All categories icon
	const allIcon = {
		svg: `<svg class="h-full w-full" viewBox="0 0 64 64" fill="currentColor">
			<rect x="8" y="8" width="48" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
			<rect x="16" y="16" width="12" height="12" rx="2"/>
			<rect x="36" y="16" width="12" height="12" rx="2"/>
			<rect x="16" y="36" width="12" height="12" rx="2"/>
			<rect x="36" y="36" width="12" height="12" rx="2"/>
		</svg>`,
		color: 'blue'
	};

	function getIconData(categoryTitle: string) {
		const iconType = getCategoryIcon(categoryTitle);
		return icons[iconType as keyof typeof icons] || icons.software;
	}

	function getIconSize() {
		if (compact) return 'h-4 w-4 sm:h-6 sm:w-6';
		return 'h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10';
	}

	function getTextSize() {
		if (compact) return 'text-xs sm:text-sm';
		return 'text-xs sm:text-sm';
	}
</script>

<nav class={className}>
	<div class="flex items-center justify-between space-x-1 sm:space-x-4 md:space-x-6 lg:space-x-8">
		{#if showAll}
			<a
				href="/tech-hotpot/all"
				class="group flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105 {!selectedCategory
					? 'opacity-100'
					: 'opacity-70 hover:opacity-100'}"
				in:fly={{ y: -20, delay: 0, duration: 400 }}
			>
				<div class="mb-1 {getIconSize()}">
					<div
						class="{!selectedCategory
							? 'text-blue-600'
							: 'text-gray-500 group-hover:text-gray-700'} transition-colors"
					>
						{@html allIcon.svg}
					</div>
				</div>
				<span
					class="{getTextSize()} font-medium {!selectedCategory
						? 'text-blue-600'
						: 'text-gray-700 group-hover:text-gray-900'} max-w-16 text-center leading-tight transition-colors sm:max-w-none"
				>
					<span class="hidden sm:inline">All</span>
					<span class="sm:hidden">All</span>
				</span>
			</a>
		{/if}

		{#each categories as category, index}
			{@const iconData = getIconData(category.title)}
			{@const isSelected = selectedCategory?.id === category.id}
			<a
				href="/tech-hotpot/all?category={encodeURIComponent(category.slug)}"
				class="group flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105 {isSelected
					? 'opacity-100'
					: 'opacity-70 hover:opacity-100'}"
				in:fly={{ y: -20, delay: (showAll ? index + 1 : index) * 50, duration: 400 }}
			>
				<div class="mb-1 {getIconSize()}">
					<div
						class="{isSelected
							? `text-${iconData.color}-600`
							: `text-${iconData.color}-500 group-hover:text-${iconData.color}-600`} transition-colors"
					>
						{@html iconData.svg}
					</div>
				</div>
				<span
					class="{getTextSize()} font-medium {isSelected
						? 'text-blue-600'
						: 'text-gray-700 group-hover:text-gray-900'} max-w-16 text-center leading-tight transition-colors sm:max-w-none"
				>
					<span class="hidden sm:inline"
						>{category.title.replace(' & ', '\n&\n').replace(' ', '\n')}</span
					>
					<span class="sm:hidden">{category.title.split(' ')[0]}</span>
				</span>
			</a>
		{/each}
	</div>
</nav>
