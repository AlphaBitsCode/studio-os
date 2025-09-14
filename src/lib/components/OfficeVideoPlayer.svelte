<script lang="ts">
	export let imageSrc: string;
	export let imageAlt: string;
	export let videoSrc: string;
	export let title: string;
	export let staticDescription: string;
	export let videoDescription: string;
	export let className: string = '';

	let isVideoPlaying = false;
	let videoElement: HTMLVideoElement;

	function playVideo() {
		isVideoPlaying = true;
		setTimeout(() => {
			if (videoElement) {
				videoElement.play();
			}
		}, 100);
	}

	function stopVideo() {
		if (videoElement) {
			videoElement.pause();
			videoElement.currentTime = 0;
		}
		isVideoPlaying = false;
	}
</script>

<div class="group relative overflow-hidden rounded-lg shadow-lg {className}">
	{#if !isVideoPlaying}
		<img src={imageSrc} alt={imageAlt} class="h-96 w-full object-cover" />
		<button
			on:click={playVideo}
			class="bg-opacity-0 group-hover:bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black transition-all duration-300"
			aria-label="Play office tour video"
		>
			<div
				class="bg-opacity-90 hover:bg-opacity-100 flex h-16 w-16 items-center justify-center rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<svg class="ml-1 h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
					<path d="M8 5v14l11-7z" />
				</svg>
			</div>
		</button>
	{:else}
		<div class="relative">
			<video
				bind:this={videoElement}
				class="h-96 w-full object-cover"
				controls
				preload="metadata"
				on:ended={stopVideo}
			>
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<button
				on:click={stopVideo}
				class="bg-opacity-50 hover:bg-opacity-75 absolute top-2 right-2 rounded-full bg-black p-2 text-white transition-all"
				aria-label="Stop video and return to image"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</button>
		</div>
	{/if}
	<div class="bg-white p-6">
		<h3 class="mb-2 text-xl font-semibold">{title}</h3>
		<p class="text-sm text-gray-600">
			{isVideoPlaying ? videoDescription : staticDescription}
		</p>
	</div>
</div>
