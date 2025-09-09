<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	let loading = $state(false);
</script>

<svelte:head>
	<title>Register - AlphaBits</title>
	<meta name="description" content="Create your AlphaBits account" />
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				Create your account
			</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				Or
				<a href="/auth/login" class="font-medium text-blue-600 hover:text-blue-500">
					sign in to your existing account
				</a>
			</p>
		</div>

		<form 
			class="mt-8 space-y-6" 
			method="POST"
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					loading = false;
					await update();
				};
			}}
		>
			<div class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<div>
						<label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
						<input
							id="firstName"
							name="firstName"
							type="text"
							autocomplete="given-name"
							required
							value={form?.firstName ?? ''}
							class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="First Name"
						/>
					</div>
					<div>
						<label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
						<input
							id="lastName"
							name="lastName"
							type="text"
							autocomplete="family-name"
							required
							value={form?.lastName ?? ''}
							class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Last Name"
						/>
					</div>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						value={form?.email ?? ''}
						class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
					/>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="new-password"
						required
						class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
						placeholder="Password (min. 6 characters)"
					/>
				</div>

				<div>
					<label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
					<input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						autocomplete="new-password"
						required
						class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
						placeholder="Confirm password"
					/>
				</div>
			</div>

			{#if form?.error}
				<div class="rounded-md bg-red-50 p-4">
					<div class="flex">
						<div class="flex-shrink-0">
							<svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
							</svg>
						</div>
						<div class="ml-3">
							<h3 class="text-sm font-medium text-red-800">
								{form.error}
							</h3>
						</div>
					</div>
				</div>
			{/if}

			<div class="flex items-center">
				<input
					id="terms"
					name="terms"
					type="checkbox"
					required
					class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
				/>
				<label for="terms" class="ml-2 block text-sm text-gray-900">
					I agree to the
					<a href="#" class="font-medium text-blue-600 hover:text-blue-500">Terms of Service</a>
					and
					<a href="#" class="font-medium text-blue-600 hover:text-blue-500">Privacy Policy</a>
				</label>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{#if loading}
						<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Creating account...
					{:else}
						<span class="absolute left-0 inset-y-0 flex items-center pl-3">
							<svg class="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
							</svg>
						</span>
						Create Account
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>