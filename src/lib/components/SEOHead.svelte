<script lang="ts">
	export let title: string;
	export let description: string;
	export let keywords: string = '';
	export let ogImage: string = 'https://alphabits.team/alphabits_cover.png';
	export let ogType: string = 'website';
	export let canonicalUrl: string = '';
	export let author: string = 'AlphaBits';
	export let publishedTime: string = '';
	export let modifiedTime: string = '';
	export let articleSection: string = '';
	export let articleTags: string[] = [];
	export let structuredData: any = null;

	// Default structured data for organization
	const defaultStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'AlphaBits',
		url: 'https://alphabits.team',
		logo: 'https://alphabits.team/logos/logo_square.png',
		description: 'AI Workflow Automation & Digital Transformation Solutions',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'VN'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			url: 'https://alphabits.team/contact'
		},
		sameAs: ['https://www.linkedin.com/company/alphabits-team']
	};

	// Merge custom structured data with defaults
	const finalStructuredData = structuredData || defaultStructuredData;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	<meta name="author" content={author} />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Canonical URL -->
	{#if canonicalUrl}
		<link rel="canonical" href={canonicalUrl} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="AlphaBits" />
	<meta property="og:locale" content="en_US" />

	<!-- Article specific Open Graph tags -->
	{#if ogType === 'article'}
		{#if publishedTime}
			<meta property="article:published_time" content={publishedTime} />
		{/if}
		{#if modifiedTime}
			<meta property="article:modified_time" content={modifiedTime} />
		{/if}
		{#if articleSection}
			<meta property="article:section" content={articleSection} />
		{/if}
		{#each articleTags as tag}
			<meta property="article:tag" content={tag} />
		{/each}
		<meta property="article:author" content={author} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonicalUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />
	<meta property="twitter:site" content="@alphabits_team" />
	<meta property="twitter:creator" content="@alphabits_team" />

	<!-- Additional Meta Tags -->
	<meta name="theme-color" content="#6366f1" />
	<meta name="msapplication-TileColor" content="#6366f1" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="AlphaBits" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(finalStructuredData)}</script>`}
</svelte:head>
