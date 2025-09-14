<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { BlogPost } from '$lib/utils/blog-helpers';
	import {
		formatDate,
		calculateReadTime,
		getImageUrl,
		getAvatarUrl,
		getAuthorName,
		getAuthorInitials,
		getCategoryIconPath
	} from '$lib/utils/blog-helpers';

	export let post: BlogPost;
	export let delay: number = 200;
	export let duration: number = 600;
</script>

<article class="mb-12" in:fade={{ delay, duration }}>
	<!-- Category Badge -->
	{#if post.category}
		<div class="mb-6 flex items-center">
			<div class="mr-3 h-6 w-6">
				<img
					src={getCategoryIconPath(post.category.title)}
					alt={post.category.title}
					class="h-full w-full opacity-70"
				/>
			</div>
			<span
				class="inline-block rounded-full px-4 py-2 text-sm font-medium"
				style="background-color: {post.category.color}20; color: {post.category.color};"
			>
				{post.category.title}
			</span>
		</div>
	{/if}

	<!-- Title -->
	<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
		{post.title}
	</h1>

	<!-- Summary -->
	{#if post.summary}
		<p class="mb-8 text-xl leading-relaxed text-gray-600">
			{post.summary}
		</p>
	{/if}

	<!-- Meta Information -->
	<div class="mb-8 flex flex-wrap items-center gap-6 text-gray-500">
		<!-- Author -->
		<div class="flex items-center space-x-3">
			{#if typeof post.author === 'object' && post.author?.image}
				<img
					src={getAvatarUrl(post.author.image, 40)}
					alt={getAuthorName(post.author)}
					class="h-10 w-10 rounded-full object-cover"
					loading="lazy"
				/>
			{:else}
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
				>
					<span class="text-sm font-semibold text-white">{getAuthorInitials(post.author)}</span>
				</div>
			{/if}
			<div>
				<p class="font-medium text-gray-900">{getAuthorName(post.author)}</p>
				<p class="text-sm text-gray-500">Engineering Team</p>
			</div>
		</div>

		<!-- Publication Date -->
		<div class="flex items-center space-x-2">
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				></path>
			</svg>
			<span>{formatDate(post.date_published || post.date_created)}</span>
		</div>

		<!-- Reading Time -->
		<div class="flex items-center space-x-2">
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span>{calculateReadTime(post.content)} min read</span>
		</div>
	</div>

	<!-- Featured Image -->
	{#if post.image}
		<div
			class="mb-8 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200"
		>
			<img
				src={getImageUrl(post.image, 800, 450)}
				alt={post.title}
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</div>
	{/if}
</article>
