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
	export let viewMode: 'grid' | 'list' | 'compact' = 'grid';
	export let showCategory: boolean = true;
	export let showAuthor: boolean = true;
	export let showMeta: boolean = true;
	export let delay: number = 0;
	export let className: string = '';

	$: imageUrl = getImageUrl(
		post.image,
		viewMode === 'list' ? 400 : 600,
		viewMode === 'list' ? 300 : 400
	);
</script>

<article
	class="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md {className}"
	in:fly={{ y: 20, delay, duration: 400 }}
>
	<a href="/tech-hotpot/{post.slug}" class="block">
		{#if viewMode === 'list'}
			<!-- List View Layout -->
			<div class="flex flex-col sm:flex-row">
				<!-- Post Thumbnail -->
				<div class="sm:w-64 sm:flex-shrink-0">
					<div
						class="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 sm:aspect-square"
					>
						<img
							src={imageUrl}
							alt={post.title}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
					</div>
				</div>

				<!-- Post Content -->
				<div class="flex-1 p-6">
					{#if showCategory && post.category}
						<div class="mb-3 flex items-center">
							<div class="mr-2 h-4 w-4">
								<img
									src={getCategoryIconPath(post.category.title)}
									alt={post.category.title}
									class="h-full w-full opacity-70"
								/>
							</div>
							<span
								class="inline-block rounded-full px-3 py-1 text-xs font-medium"
								style="background-color: {post.category.color}20; color: {post.category.color};"
							>
								{post.category.title}
							</span>
						</div>
					{/if}

					<h2
						class="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
					>
						{post.title}
					</h2>

					{#if post.summary || post.excerpt}
						<p class="mb-4 line-clamp-2 text-gray-600">
							{post.summary || post.excerpt}
						</p>
					{/if}

					{#if showMeta}
						<div class="flex items-center justify-between text-sm text-gray-500">
							<div class="flex items-center space-x-4">
								<span>{formatDate(post.date_published || post.date_created)}</span>
								<span>•</span>
								<span>{calculateReadTime(post.content)} min read</span>
							</div>
							{#if showAuthor}
								<div class="flex items-center space-x-2">
									{#if typeof post.author === 'object' && post.author?.image}
										<img
											src={getAvatarUrl(post.author.image, 20)}
											alt={getAuthorName(post.author)}
											class="h-5 w-5 rounded-full object-cover"
											loading="lazy"
										/>
									{:else}
										<div
											class="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
										>
											<span class="text-xs font-semibold text-white">
												{getAuthorInitials(post.author)}
											</span>
										</div>
									{/if}
									<span>{getAuthorName(post.author)}</span>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		{:else if viewMode === 'compact'}
			<!-- Compact View Layout -->
			<div class="p-4">
				<div class="flex items-start space-x-4">
					<!-- Post Thumbnail -->
					<div
						class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200"
					>
						<img
							src={imageUrl}
							alt={post.title}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
					</div>

					<!-- Post Content -->
					<div class="flex-1">
						{#if showCategory && post.category}
							<div class="mb-1 flex items-center">
								<div class="mr-1 h-3 w-3">
									<img
										src={getCategoryIconPath(post.category.title)}
										alt={post.category.title}
										class="h-full w-full opacity-70"
									/>
								</div>
								<span
									class="inline-block rounded-full px-2 py-0.5 text-xs font-medium"
									style="background-color: {post.category.color}20; color: {post.category.color};"
								>
									{post.category.title}
								</span>
							</div>
						{/if}

						<h3
							class="mb-1 line-clamp-2 text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-600"
						>
							{post.title}
						</h3>

						{#if showMeta}
							<div class="flex items-center justify-between text-xs text-gray-500">
								<span>{formatDate(post.date_published || post.date_created)}</span>
								<span>•</span>
								<span>{calculateReadTime(post.content)} min</span>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{:else}
			<!-- Grid View Layout (default) -->
			<div class="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
				<img
					src={imageUrl}
					alt={post.title}
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					loading="lazy"
				/>
			</div>

			<div class="p-4">
				{#if showCategory && post.category}
					<div class="mb-3 flex items-center">
						<div class="mr-2 h-4 w-4">
							<img
								src={getCategoryIconPath(post.category.title)}
								alt={post.category.title}
								class="h-full w-full opacity-70"
							/>
						</div>
						<span
							class="inline-block rounded-full px-2 py-1 text-xs font-medium"
							style="background-color: {post.category.color}20; color: {post.category.color};"
						>
							{post.category.title}
						</span>
					</div>
				{/if}

				<h2
					class="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600"
				>
					{post.title}
				</h2>

				{#if post.summary || post.excerpt}
					<p class="mb-3 line-clamp-3 text-sm text-gray-600">
						{post.summary || post.excerpt}
					</p>
				{/if}

				{#if showMeta}
					<div class="flex items-center justify-between text-xs text-gray-500">
						<div class="flex items-center space-x-2">
							<span>{formatDate(post.date_published || post.date_created)}</span>
							<span>•</span>
							<span>{calculateReadTime(post.content)} min</span>
						</div>
						{#if showAuthor}
							<div class="flex items-center space-x-1">
								{#if typeof post.author === 'object' && post.author?.image}
									<img
										src={getAvatarUrl(post.author.image, 16)}
										alt={getAuthorName(post.author)}
										class="h-4 w-4 rounded-full object-cover"
										loading="lazy"
									/>
								{:else}
									<div
										class="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
									>
										<span class="text-xs font-semibold text-white">
											{getAuthorInitials(post.author)}
										</span>
									</div>
								{/if}
								<span class="text-xs">{getAuthorName(post.author)}</span>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		{/if}
	</a>
</article>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
