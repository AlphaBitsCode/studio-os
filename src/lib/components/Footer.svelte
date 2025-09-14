<script lang="ts">
	import Logo from './Logo.svelte';
	import SocialIcon from './SocialIcon.svelte';
	import { footerSections, socialLinks } from '$lib/data/navigation';
</script>

<footer class="border-t border-gray-200 bg-gray-50">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Company Info -->
			<div class="col-span-1 md:col-span-1">
				<div class="mb-4">
					<Logo size="medium" variant="default" alt="AlphaBits" />
				</div>
				<p class="mb-4 text-gray-600">AIoT Solutions for the modern businesses.</p>
				<div class="flex space-x-4">
					{#each socialLinks as social}
						<SocialIcon {...social} size="medium" />
					{/each}
				</div>
			</div>

			{#each footerSections as section}
				<div>
					<h3 class="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
						{section.title}
					</h3>
					<ul class="space-y-3">
						{#each section.links as link}
							<li>
								<a
									href={link.href}
									class="hover:text-medium-teal text-gray-700 transition-colors"
									aria-label="{link.title} - {section.title}"
								>
									{link.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-8 border-t border-gray-200 pt-8">
			<div class="flex flex-col items-center justify-between sm:flex-row">
				<p class="mb-4 text-center text-sm text-gray-500 sm:mb-0">
					© {new Date().getFullYear()} AlphaBits. All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>
