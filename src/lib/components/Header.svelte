<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let { user = null } = $props();

	async function handleLogout() {
		try {
			const response = await fetch('/auth/logout', {
				method: 'POST'
			});
			if (response.ok) {
				goto('/');
			}
		} catch (error) {
			console.error('Logout failed:', error);
		}
	}
</script>

<header class="bg-white shadow-sm border-b">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold text-gray-900">
					AlphaBits
				</a>
			</div>

			<!-- Navigation -->
			<nav class="hidden md:flex space-x-8">
				<a href="/" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
					Home
				</a>
				<a href="/blog" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
					Blog
				</a>
				<a href="/pages" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
					Pages
				</a>
			</nav>

			<!-- User Menu -->
			<div class="flex items-center space-x-4">
				{#if user}
					<div class="flex items-center space-x-3">
						<span class="text-sm text-gray-700">
							Welcome, {user.first_name || user.email}
						</span>
						<button
							on:click={handleLogout}
							class="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
						>
							Logout
						</button>
					</div>
				{:else}
					<div class="flex items-center space-x-3">
						<a
							href="/auth/login"
							class="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
						>
							Login
						</a>
						<a
							href="/auth/register"
							class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
						>
							Register
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>

<style>
	/* Additional custom styles if needed */
</style>