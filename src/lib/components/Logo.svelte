<script lang="ts">
	interface Props {
		size?: 'small' | 'medium' | 'large' | 'header';
		variant?: 'default' | 'square' | 'tagline' | 'trim';
		class?: string;
		alt?: string;
	}

	let {
		size = 'medium',
		variant = 'default',
		class: className = '',
		alt = 'AlphaBits Logo'
	}: Props = $props();

	// Size mappings
	const sizeClasses = {
		small: 'h-8 w-auto',
		medium: 'h-12 w-auto',
		large: 'h-16 w-auto',
		header: 'h-10 w-auto'
	};

	// Logo selection logic for light theme only
	function getLogoSrc(variant: string): string {
		const basePath = '/logos';

		switch (variant) {
			case 'square':
				return `${basePath}/logo_square.png`;

			case 'tagline':
				return `${basePath}/logo_tagline.png`;

			case 'trim':
				return `${basePath}/logo_trim.png`;

			case 'default':
			default:
				if (variant === 'header' || size === 'header') {
					return `${basePath}/logo_header.png`;
				}
				return `${basePath}/logo_black.png`;
		}
	}

	const logoSrc = $derived(getLogoSrc(variant));
	const combinedClasses = $derived(`${sizeClasses[size]} ${className}`.trim());
</script>

<img src={logoSrc} {alt} class={combinedClasses} loading="lazy" />
