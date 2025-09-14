<script lang="ts">
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let href: string = '/tech-hotpot';
	export let title: string = 'Tech Hotpot';
	export let showLabel: boolean = false;
	export let className: string = '';

	const sizes = {
		small: { width: 24, height: 24 },
		medium: { width: 32, height: 32 },
		large: { width: 40, height: 40 }
	};

	const { width, height } = sizes[size];
</script>

<a {href} {title} class="inline-flex items-center justify-center {className}" aria-label={title}>
	<div class="relative" style="width: {width}px; height: {height}px;">
		<svg
			viewBox="0 0 100 100"
			class="h-full w-full"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<!-- Gradient Definitions -->
			<defs>
				<linearGradient id="potGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
					<stop offset="50%" style="stop-color:#f7931e;stop-opacity:1" />
					<stop offset="100%" style="stop-color:#ff4500;stop-opacity:1" />
				</linearGradient>
				<linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
					<stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.8" />
					<stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.6" />
					<stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:0.4" />
				</linearGradient>
				<radialGradient id="circuitGlow" cx="50%" cy="50%" r="50%">
					<stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8" />
					<stop offset="100%" style="stop-color:#059669;stop-opacity:0.3" />
				</radialGradient>
			</defs>

			<!-- Pot Shadow -->
			<ellipse cx="50" cy="85" rx="25" ry="4" fill="#000000" opacity="0.2" />

			<!-- Main Pot Body -->
			<path
				d="M20 45 L80 45 L78 75 C78 78 75 80 72 80 L28 80 C25 80 22 78 22 75 Z"
				fill="url(#potGradient)"
				stroke="#d97706"
				stroke-width="1.5"
			/>

			<!-- Pot Rim -->
			<ellipse cx="50" cy="45" rx="30" ry="3" fill="#ea580c" stroke="#9a3412" stroke-width="1" />

			<!-- Left Handle -->
			<path
				d="M15 40 C12 40 10 42 10 45 C10 48 12 50 15 50 L20 50 L20 45 L20 40 Z"
				fill="#92400e"
				stroke="#451a03"
				stroke-width="1.5"
			/>

			<!-- Right Handle -->
			<path
				d="M85 40 C88 40 90 42 90 45 C90 48 88 50 85 50 L80 50 L80 45 L80 40 Z"
				fill="#92400e"
				stroke="#451a03"
				stroke-width="1.5"
			/>

			<!-- Tech Circuit Pattern Inside Pot -->
			<g opacity="0.6">
				<!-- Circuit Board Lines -->
				<path
					d="M30 55 L35 55 L35 60 L40 60"
					stroke="url(#circuitGlow)"
					stroke-width="2"
					fill="none"
				/>
				<path
					d="M60 55 L65 55 L65 60 L70 60"
					stroke="url(#circuitGlow)"
					stroke-width="2"
					fill="none"
				/>
				<path d="M45 65 L55 65" stroke="url(#circuitGlow)" stroke-width="2" fill="none" />

				<!-- Circuit Nodes -->
				<circle cx="35" cy="55" r="2" fill="#10b981" />
				<circle cx="40" cy="60" r="2" fill="#10b981" />
				<circle cx="65" cy="55" r="2" fill="#10b981" />
				<circle cx="70" cy="60" r="2" fill="#10b981" />
				<circle cx="50" cy="65" r="2" fill="#10b981" />

				<!-- Microchip Symbol -->
				<rect x="47" y="57" width="6" height="6" fill="#374151" stroke="#10b981" stroke-width="1" />
				<rect x="48.5" y="58.5" width="3" height="3" fill="#10b981" />
			</g>

			<!-- Steam/Data Streams -->
			<g class="animate-pulse">
				<!-- Left Steam -->
				<path
					d="M35 40 Q37 35 35 30 Q33 25 35 20 Q37 15 35 10"
					stroke="url(#steamGradient)"
					stroke-width="2.5"
					fill="none"
					class="animate-bounce"
					style="animation-delay: 0s"
				/>

				<!-- Center Steam -->
				<path
					d="M50 40 Q52 35 50 30 Q48 25 50 20 Q52 15 50 10"
					stroke="url(#steamGradient)"
					stroke-width="3"
					fill="none"
					class="animate-bounce"
					style="animation-delay: 0.3s"
				/>

				<!-- Right Steam -->
				<path
					d="M65 40 Q67 35 65 30 Q63 25 65 20 Q67 15 65 10"
					stroke="url(#steamGradient)"
					stroke-width="2.5"
					fill="none"
					class="animate-bounce"
					style="animation-delay: 0.6s"
				/>
			</g>

			<!-- Digital Particles -->
			<g class="animate-ping" style="animation-delay: 1s">
				<circle cx="42" cy="25" r="1" fill="#3b82f6" opacity="0.8" />
				<circle cx="58" cy="18" r="1" fill="#10b981" opacity="0.8" />
				<circle cx="48" cy="12" r="1" fill="#f59e0b" opacity="0.8" />
			</g>
		</svg>
	</div>
	{#if showLabel}
		<span class="ml-2 text-sm font-medium text-orange-600">{title}</span>
	{/if}
</a>
