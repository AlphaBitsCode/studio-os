<script lang="ts">
	import type { BlogPost } from '$lib/utils/blog-helpers';
	import {
		getAuthorName,
		getImageUrl,
		generateStructuredData,
		getShareUrl
	} from '$lib/utils/blog-helpers';

	export let post: BlogPost;

	$: structuredData = generateStructuredData(post);
</script>

<svelte:head>
	<title>{post.seo?.title || post.title} - Tech Hotpot | AlphaBits</title>
	<meta name="description" content={post.seo?.meta_description || post.summary || post.title} />
	<meta name="author" content={getAuthorName(post.author)} />

	<!-- Canonical URL -->
	{#if post.seo?.canonical_url}
		<link rel="canonical" href={post.seo.canonical_url} />
	{:else}
		<link rel="canonical" href={getShareUrl(post.slug)} />
	{/if}

	<!-- Robots meta tags -->
	{#if post.seo?.no_index || post.seo?.no_follow}
		<meta
			name="robots"
			content="{post.seo.no_index ? 'noindex' : 'index'},{post.seo.no_follow
				? 'nofollow'
				: 'follow'}"
		/>
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.seo?.title || post.title} />
	<meta
		property="og:description"
		content={post.seo?.meta_description || post.summary || post.title}
	/>
	<meta property="og:image" content={getImageUrl(post.image, 1200, 630)} />
	<meta property="og:url" content={getShareUrl(post.slug)} />
	<meta property="article:author" content={getAuthorName(post.author)} />
	<meta property="article:published_time" content={post.date_published || post.date_created} />
	{#if post.date_published !== post.date_created}
		<meta property="article:modified_time" content={post.date_created} />
	{/if}
	{#if post.category}
		<meta property="article:section" content={post.category.title} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.seo?.title || post.title} />
	<meta
		name="twitter:description"
		content={post.seo?.meta_description || post.summary || post.title}
	/>
	<meta name="twitter:image" content={getImageUrl(post.image, 1200, 630)} />

	<!-- Additional SEO -->
	<meta
		name="keywords"
		content="{post.category?.title || ''}, tech blog, AlphaBits, technology, {post.title
			.toLowerCase()
			.split(' ')
			.join(', ')}"
	/>
	<meta name="article:tag" content={post.category?.title || 'Technology'} />

	<!-- Schema.org structured data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`}
</svelte:head>
