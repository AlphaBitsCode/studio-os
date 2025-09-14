<script lang="ts">
	import { onMount } from 'svelte';

	let currentDate = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>Privacy Policy - AlphaBits</title>
	<meta
		name="description"
		content="Privacy Policy for AlphaBits - Learn how we collect, use, and protect your personal information in our management consulting services."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
		<p class="mb-6 text-xl">
			Your privacy is important to us. This policy explains how we collect, use, and protect your
			information.
		</p>
		<p class="text-lg opacity-90">
			Last updated: {currentDate}
		</p>
	</div>
</section>

<!-- Privacy Policy Content -->
<section class="py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="prose prose-lg max-w-none dark:prose-invert">
			<!-- Introduction -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Introduction</h2>
				<p class="leading-relaxed text-gray-600 dark:text-gray-300">
					AlphaBits ("we," "our," or "us") is committed to protecting your privacy. This Privacy
					Policy explains how we collect, use, disclose, and safeguard your information when you
					visit our website, use our services, or engage with our management consulting business.
					Please read this privacy policy carefully. If you do not agree with the terms of this
					privacy policy, please do not access our services.
				</p>
			</div>

			<!-- Information We Collect -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Information We Collect</h2>

				<h3 class="mb-3 text-xl font-semibold">Personal Information</h3>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					We may collect personal information that you voluntarily provide to us when you:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>Register for an account on our website</li>
					<li>Request information about our consulting services</li>
					<li>Schedule a consultation or meeting</li>
					<li>Subscribe to our newsletter or blog</li>
					<li>Contact us through our website or email</li>
					<li>Participate in surveys or feedback forms</li>
				</ul>

				<p class="mb-4 text-gray-600 dark:text-gray-300">This information may include:</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>Name and contact information (email address, phone number, mailing address)</li>
					<li>Company name and job title</li>
					<li>Business requirements and project details</li>
					<li>Payment information (processed securely through third-party providers)</li>
					<li>Communication preferences</li>
				</ul>

				<h3 class="mb-3 text-xl font-semibold">Automatically Collected Information</h3>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					When you visit our website, we may automatically collect certain information about your
					device and usage patterns:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>IP address and geographic location</li>
					<li>Browser type and version</li>
					<li>Operating system</li>
					<li>Pages visited and time spent on our website</li>
					<li>Referring website or source</li>
					<li>Device information and screen resolution</li>
				</ul>
			</div>

			<!-- How We Use Your Information -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">How We Use Your Information</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					We use the information we collect for legitimate business purposes, including:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>Providing and improving our consulting services</li>
					<li>Communicating with you about our services and your projects</li>
					<li>Processing payments and managing client relationships</li>
					<li>Sending newsletters, updates, and marketing communications (with your consent)</li>
					<li>Analyzing website usage to improve user experience</li>
					<li>Complying with legal obligations and protecting our rights</li>
					<li>Preventing fraud and ensuring security</li>
				</ul>
			</div>

			<!-- Information Sharing -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Information Sharing and Disclosure</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					We do not sell, trade, or rent your personal information to third parties. We may share
					your information only in the following circumstances:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>
						<strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating
						our website and providing services (e.g., payment processors, email service providers)
					</li>
					<li>
						<strong>Legal Requirements:</strong> When required by law, court order, or government regulation
					</li>
					<li>
						<strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of
						business assets
					</li>
					<li>
						<strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that
						of our clients or others
					</li>
					<li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
				</ul>
			</div>

			<!-- Data Security -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Data Security</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					We implement appropriate technical and organizational security measures to protect your
					personal information against unauthorized access, alteration, disclosure, or destruction.
					These measures include:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>SSL encryption for data transmission</li>
					<li>Secure data storage and access controls</li>
					<li>Regular security assessments and updates</li>
					<li>Employee training on data protection practices</li>
					<li>Limited access to personal information on a need-to-know basis</li>
				</ul>
				<p class="text-gray-600 dark:text-gray-300">
					However, no method of transmission over the internet or electronic storage is 100% secure.
					While we strive to protect your information, we cannot guarantee absolute security.
				</p>
			</div>

			<!-- Your Rights -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Your Privacy Rights</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					Depending on your location, you may have certain rights regarding your personal
					information:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li><strong>Access:</strong> Request access to your personal information we hold</li>
					<li>
						<strong>Correction:</strong> Request correction of inaccurate or incomplete information
					</li>
					<li>
						<strong>Deletion:</strong> Request deletion of your personal information (subject to legal
						obligations)
					</li>
					<li>
						<strong>Portability:</strong> Request a copy of your information in a structured format
					</li>
					<li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
					<li>
						<strong>Restriction:</strong> Request restriction of processing in certain circumstances
					</li>
				</ul>
				<p class="text-gray-600 dark:text-gray-300">
					To exercise these rights, please contact us using the information provided below.
				</p>
			</div>

			<!-- Cookies and Tracking -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Cookies and Tracking Technologies</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					We use cookies and similar tracking technologies to enhance your experience on our
					website. Cookies are small data files stored on your device that help us:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>Remember your preferences and settings</li>
					<li>Analyze website traffic and usage patterns</li>
					<li>Provide personalized content and recommendations</li>
					<li>Improve website functionality and performance</li>
				</ul>
				<p class="text-gray-600 dark:text-gray-300">
					You can control cookie settings through your browser preferences. However, disabling
					cookies may affect website functionality.
				</p>
			</div>

			<!-- Data Retention -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Data Retention</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					We retain your personal information only as long as necessary to fulfill the purposes
					outlined in this privacy policy, unless a longer retention period is required or permitted
					by law. Factors affecting retention periods include:
				</p>
				<ul class="mb-6 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
					<li>The nature of our business relationship</li>
					<li>Legal and regulatory requirements</li>
					<li>Legitimate business interests</li>
					<li>Dispute resolution needs</li>
				</ul>
			</div>

			<!-- Third-Party Links -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Third-Party Links</h2>
				<p class="text-gray-600 dark:text-gray-300">
					Our website may contain links to third-party websites or services. We are not responsible
					for the privacy practices or content of these external sites. We encourage you to review
					the privacy policies of any third-party sites you visit.
				</p>
			</div>

			<!-- Children's Privacy -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Children's Privacy</h2>
				<p class="text-gray-600 dark:text-gray-300">
					Our services are not intended for individuals under the age of 18. We do not knowingly
					collect personal information from children under 18. If we become aware that we have
					collected personal information from a child under 18, we will take steps to delete such
					information promptly.
				</p>
			</div>

			<!-- International Transfers -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">International Data Transfers</h2>
				<p class="text-gray-600 dark:text-gray-300">
					Your information may be transferred to and processed in countries other than your own. We
					ensure that such transfers comply with applicable data protection laws and implement
					appropriate safeguards to protect your information.
				</p>
			</div>

			<!-- Changes to Privacy Policy -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Changes to This Privacy Policy</h2>
				<p class="text-gray-600 dark:text-gray-300">
					We may update this privacy policy from time to time to reflect changes in our practices or
					applicable laws. We will notify you of any material changes by posting the updated policy
					on our website and updating the "Last updated" date. Your continued use of our services
					after such changes constitutes acceptance of the updated policy.
				</p>
			</div>

			<!-- Contact Information -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-bold">Contact Us</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					If you have any questions about this privacy policy or our data practices, please contact
					us:
				</p>
				<div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
					<h3 class="mb-3 text-lg font-semibold">AlphaBits</h3>
					<p class="mb-2 text-gray-600 dark:text-gray-300">
						<strong>Email:</strong> privacy@alphabits.com
					</p>
					<p class="mb-2 text-gray-600 dark:text-gray-300">
						<strong>Website:</strong>
						<a href="/contact" class="text-blue-600 hover:underline dark:text-blue-400"
							>Contact Form</a
						>
					</p>
					<p class="text-gray-600 dark:text-gray-300">
						<strong>Response Time:</strong> We will respond to your inquiry within 30 days
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gray-50 py-16 dark:bg-gray-800">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold">Questions About Our Privacy Practices?</h2>
		<p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
			We're committed to transparency and protecting your privacy. Contact us if you need
			clarification.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
			>
				Contact Us
			</a>
			<a
				href="/"
				class="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:text-blue-400"
			>
				Return Home
			</a>
		</div>
	</div>
</section>
