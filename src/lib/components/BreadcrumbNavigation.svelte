<script lang="ts">
	import type { BlogPost } from '$lib/utils/blog-helpers';

	export let post: BlogPost;
</script>

<nav
	class="fixed top-14 right-0 left-0 z-80 border-t border-b border-gray-200 bg-white/80 py-4 backdrop-blur-md"
	aria-label="Breadcrumb"
>
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center space-x-2 text-sm text-gray-600" aria-label="Breadcrumb">
			{#if post.category}
				<a
					href="/tech-hotpot/all?category={encodeURIComponent(post.category.slug)}"
					class="truncate rounded transition-colors hover:text-blue-600 focus:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
					aria-label="View all posts in {post.category.title}"
				>
					{post.category.title}
				</a>
				<span aria-hidden="true">›</span>
			{/if}
			<span class="line-clamp-1 truncate font-medium text-gray-800" aria-current="page">
				{post.title}
			</span>
		</nav>
	</div>
</nav>

<style>
	.line-clamp-1 {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
