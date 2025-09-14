<script lang="ts">
	import { onMount } from 'svelte';
	import ArticleContent from '$lib/components/ArticleContent.svelte';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import ArticleFooter from '$lib/components/ArticleFooter.svelte';
	import ArticleSEO from '$lib/components/ArticleSEO.svelte';
	import BreadcrumbNavigation from '$lib/components/BreadcrumbNavigation.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let contentElement: HTMLElement;
	let readingProgress = 0;

	$: post = data.post;

	onMount(() => {
		// Initialize expandable code blocks after content is rendered
		setTimeout(() => {
			setupExpandableCodeBlocks();
		}, 100);

		// Setup reading progress tracking
		const updateProgress = () => {
			readingProgress = getReadingProgress();
		};

		window.addEventListener('scroll', updateProgress);
		return () => window.removeEventListener('scroll', updateProgress);
	});

	// Also setup code blocks when content changes
	$: if (post && contentElement) {
		setTimeout(() => {
			setupExpandableCodeBlocks();
		}, 100);
	}

	// Setup expandable code blocks functionality
	function setupExpandableCodeBlocks() {
		if (!contentElement) return;

		const codeBlocks = contentElement.querySelectorAll('pre');
		codeBlocks.forEach((pre: HTMLElement) => {
			// Check if code block is tall enough to need expansion
			const actualHeight = pre.scrollHeight;
			if (actualHeight > 300) {
				pre.classList.add('expandable');

				// Add click handler for expansion
				pre.addEventListener('click', () => {
					pre.classList.toggle('expanded');
				});
			}
		});
	}

	// Helper function to estimate reading progress
	function getReadingProgress() {
		if (!contentElement) return 0;

		const scrollTop = window.scrollY;
		const docHeight = contentElement.offsetHeight;
		const winHeight = window.innerHeight;
		const scrollPercent = scrollTop / (docHeight - winHeight);

		return Math.min(100, Math.max(0, scrollPercent * 100));
	}
</script>

<ArticleSEO {post} />

<BreadcrumbNavigation {post} />

<!-- Main Content -->
<main class="relative z-10 pt-20 pb-8">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Article Header -->
		<ArticleHeader {post} />

		<!-- Article Content -->
		<ArticleContent content={post.content} bind:contentElement delay={400} duration={600} />

		<!-- Article Footer -->
		<ArticleFooter {post} />
	</div>
</main>

<style>
	@reference "tailwindcss";

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		33% {
			transform: translateY(-10px) rotate(120deg);
		}
		66% {
			transform: translateY(5px) rotate(240deg);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	/* Prose styling for article content */
	:global(.prose) {
		@apply leading-relaxed text-gray-800;
	}

	:global(.prose h1) {
		@apply relative mt-8 mb-6 px-4 py-2 text-2xl font-bold text-gray-900;
		border-left: 2px solid #1e40af;
		border-top: 2px solid #1e40af;
		transform: translateX(-4px);
		transition: all 0.3s ease;
	}

	:global(.prose h1:hover) {
		transform: translateX(0);
	}

	:global(.prose h2) {
		@apply relative mt-8 mb-4 px-2 py-2 text-xl font-bold;
		color: #1e3a8a;
		background: rgba(30, 58, 138, 0.03);
		transition: all 0.3s ease;
	}

	:global(.prose h2:hover) {
		background: rgba(30, 58, 138, 0.06);
	}

	:global(.prose h3) {
		@apply relative mt-6 mb-3 px-2 py-2 text-lg font-bold;
		color: #1e40af;
		transition: all 0.3s ease;
	}

	:global(.prose h3:hover) {
		background: rgba(30, 64, 175, 0.05);
		transform: translateX(1px);
	}

	:global(.prose h4) {
		@apply mt-6 mb-3 text-lg font-semibold text-gray-900;
	}

	:global(.prose p) {
		@apply mb-4 ml-4 leading-relaxed;
	}

	:global(.prose ul) {
		@apply mb-4 pl-10;
	}

	:global(.prose ol) {
		@apply mb-4 pl-10;
	}

	:global(.prose li) {
		@apply mb-2 pl-2;
		list-style-type: circle;
	}

	:global(.prose a) {
		@apply text-blue-600 underline hover:text-blue-800;
	}

	:global(.prose blockquote) {
		@apply my-6 border-l-4 border-blue-500 pl-4 text-gray-700 italic;
	}

	:global(.prose pre) {
		@apply my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100;
	}

	:global(.prose code) {
		@apply rounded bg-gray-100 px-2 py-1 text-sm text-gray-800;
	}

	:global(.prose pre code) {
		@apply bg-transparent p-0 text-gray-100;
	}

	:global(.prose img) {
		@apply my-6 rounded-lg shadow-lg;
	}

	:global(.prose table) {
		@apply my-6 w-full border-collapse border border-gray-300;
	}

	:global(.prose th) {
		@apply border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold;
	}

	:global(.prose td) {
		@apply border border-gray-300 px-4 py-2;
	}

	/* Expandable code blocks */
	:global(.prose pre.expandable) {
		@apply relative max-h-72 cursor-pointer;
		overflow: hidden;
	}

	:global(.prose pre.expandable:not(.expanded)::after) {
		content: 'Click to expand...';
		@apply absolute right-0 bottom-0 left-0 bg-gradient-to-t from-gray-900 to-transparent py-2 text-center text-sm text-gray-400;
	}

	:global(.prose pre.expandable.expanded) {
		@apply max-h-none;
	}
</style>
