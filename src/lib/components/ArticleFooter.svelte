<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { BlogPost } from '$lib/utils/blog-helpers';
	import { getShareUrl, getLinkedInShareUrl, copyToClipboard } from '$lib/utils/blog-helpers';

	export let post: BlogPost;
	export let delay: number = 600;
	export let duration: number = 600;

	let copied = false;

	async function handleCopyLink() {
		try {
			await copyToClipboard(getShareUrl(post.slug));
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (error) {
			console.error('Failed to copy link:', error);
		}
	}
</script>

<article class="mt-16 border-t border-gray-200 pt-8" in:fade={{ delay, duration }}>
	<!-- Share Buttons -->
	<div class="mb-8">
		<h3 class="mb-4 text-lg font-semibold text-gray-900">Share this article</h3>
		<div class="flex items-center space-x-4">
			<!-- LinkedIn -->
			<a
				href={getLinkedInShareUrl(post.slug)}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center space-x-2 rounded-lg bg-blue-700 px-4 py-2 text-white transition-colors hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
				aria-label="Share on LinkedIn"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
				<span>LinkedIn</span>
			</a>

			<!-- Copy Link -->
			<button
				on:click={handleCopyLink}
				class="flex items-center space-x-2 rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
				aria-label={copied ? 'Link copied!' : 'Copy link'}
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
					></path>
				</svg>
				<span>{copied ? 'Copied!' : 'Copy Link'}</span>
			</button>
		</div>
	</div>

	<!-- Navigation Links -->
	<div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
		<a
			href="/tech-hotpot/all"
			class="group inline-flex items-center space-x-2 rounded px-2 py-1 font-medium text-blue-600 transition-colors hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			aria-label="View all posts"
		>
			<svg
				class="h-5 w-5 transition-transform group-hover:-translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"
				></path>
			</svg>
			<span>All Posts</span>
		</a>

		<a
			href="/tech-hotpot"
			class="group inline-flex items-center space-x-2 rounded px-2 py-1 font-medium text-blue-600 transition-colors hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			aria-label="Back to Tech Hotpot"
		>
			<span>Back to Tech Hotpot</span>
			<svg
				class="h-5 w-5 transition-transform group-hover:translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
				></path>
			</svg>
		</a>
	</div>
</article>
