<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import Logo from './Logo.svelte';
</script>

<footer class="bg-gray-50 dark:bg-deep-navy border-t border-gray-200 dark:border-dark-teal">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Company Info -->
			<div class="col-span-1 md:col-span-2">
				<div class="mb-4">
					<Logo size="medium" variant="default" alt="AlphaBits" />
				</div>
				<p class="text-gray-600 dark:text-gray-400 mb-4">
					Building modern web applications with cutting-edge technology and exceptional user experiences.
				</p>
				<div class="flex space-x-4">
					<a href="#" class="text-gray-400 hover:text-medium-teal dark:hover:text-cyan-accent">
						<span class="sr-only">Twitter</span>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-medium-teal dark:hover:text-cyan-accent">
						<span class="sr-only">GitHub</span>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-medium-teal dark:hover:text-cyan-accent">
						<span class="sr-only">LinkedIn</span>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">Quick Links</h3>
				<ul class="space-y-3">
					<li><a href="/" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Home</a></li>
					<li><a href="/blog" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Blog</a></li>
					<li><a href="/pages" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Pages</a></li>
					<li><a href="/admin" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Admin</a></li>
				</ul>
			</div>

			<!-- Support -->
			<div>
				<h3 class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">Support</h3>
				<ul class="space-y-3">
					<li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Documentation</a></li>
					<li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Help Center</a></li>
					<li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Contact Us</a></li>
					<li><a href="/privacy-policy" class="text-gray-600 dark:text-gray-400 hover:text-medium-teal dark:hover:text-light-mint">Privacy Policy</a></li>
				</ul>
			</div>
		</div>

		<div class="mt-8 pt-8 border-t border-gray-200 dark:border-dark-teal">
			<div class="flex flex-col sm:flex-row justify-between items-center">
				<p class="text-center text-gray-500 dark:text-gray-400 text-sm mb-4 sm:mb-0">
					© {new Date().getFullYear()} AlphaBits. All rights reserved.
				</p>
				
				<!-- Theme Toggle -->
				<button
					on:click={toggleTheme}
					class="flex items-center space-x-2 px-3 py-2 rounded-md bg-light-mint/20 hover:bg-light-mint/30 dark:bg-dark-teal dark:hover:bg-medium-teal text-gray-700 dark:text-gray-300 transition-colors"
					aria-label="Toggle theme"
				>
					{#if $theme === 'light'}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
						</svg>
						<span class="text-sm font-medium">Dark</span>
					{:else}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
						</svg>
						<span class="text-sm font-medium">Light</span>
					{/if}
				</button>
			</div>
		</div>
	</div>
</footer>