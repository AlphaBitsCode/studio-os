<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import Button from '$lib/components/ui/button.svelte';
	import { ChevronRight, Brain, Zap, Menu, X } from 'lucide-svelte';

	// Animated text cycle variables
	let currentIndex: number = 0;
	let textWidth: string = 'auto';
	let measureRef: HTMLDivElement;
	let textInterval: NodeJS.Timeout;

	const automationWords: string[] = [
		"Workflows",
		"Processes", 
		"Operations",
		"Tasks",
		"Systems"
	];

	// Mobile menu state
	let isMobileMenuOpen: boolean = false;
	let isScrolled: boolean = false;

	// Canvas animation variables
	let canvasRef: HTMLCanvasElement;
	let animationId: number;
	let particles: Particle[] = [];
	let isRunning: boolean = true;

	// Particle interface
	class Particle {
		x: number;
		y: number;
		radius: number;
		color: string;
		vx: number;
		vy: number;
		opacity: number;

		constructor(x: number, y: number, radius: number, color: string, vx: number, vy: number, opacity: number) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.color = color;
			this.vx = vx;
			this.vy = vy;
			this.opacity = opacity;
		}
	}

	// Initialize particles
	function initParticles(): void {
		if (!canvasRef) return;
		
		particles = [];
		for (let i = 0; i < 60; i++) {
			particles.push(new Particle(
				Math.random() * canvasRef.width,
				Math.random() * canvasRef.height,
				Math.random() * 2 + 1,
				'#57DCCD',
				(Math.random() - 0.5) * 2,
				(Math.random() - 0.5) * 2,
				Math.random() * 0.5 + 0.5
			));
		}
	}

	// Animation loop
	function animate(): void {
		if (!canvasRef) {
			animationId = requestAnimationFrame(animate);
			return;
		}

		const ctx = canvasRef.getContext('2d');
		if (!ctx) return;

		ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

		// Update and draw particles
		particles.forEach((particle: Particle) => {
			particle.x += particle.vx;
			particle.y += particle.vy;

			// Bounce off walls
			if (particle.x < 0 || particle.x > canvasRef.width) {
				particle.vx = -particle.vx;
			}
			if (particle.y < 0 || particle.y > canvasRef.height) {
				particle.vy = -particle.vy;
			}

			// Draw particle
			ctx.beginPath();
			ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
			ctx.fillStyle = particle.color;
			ctx.globalAlpha = particle.opacity;
			ctx.fill();
		});

		// Draw connections
		ctx.globalAlpha = 1;
		ctx.strokeStyle = 'rgba(87, 220, 205, 0.2)';
		ctx.lineWidth = 0.5;

		for (let i = 0; i < particles.length; i++) {
			const particle = particles[i];
			
			for (let j = i + 1; j < particles.length; j++) {
				const particle2 = particles[j];
				const dx = particle.x - particle2.x;
				const dy = particle.y - particle2.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				
				if (distance < 100) {
					ctx.globalAlpha = 1 - (distance / 100);
					ctx.beginPath();
					ctx.moveTo(particle.x, particle.y);
					ctx.lineTo(particle2.x, particle2.y);
					ctx.stroke();
				}
			}
		}

		ctx.globalAlpha = 1;

		if (isRunning) {
			animationId = requestAnimationFrame(animate);
		}
	}

	// Resize canvas
	function resizeCanvas(): void {
		if (!canvasRef) return;
		
		const container = canvasRef.parentElement;
		if (!container) return;
		
		canvasRef.width = container.clientWidth;
		canvasRef.height = container.clientHeight;
		initParticles();
	}

	// Handle scroll
	function handleScroll(): void {
		isScrolled = window.scrollY > 10;
	}

	// Update text width for animation
	function updateTextWidth(): void {
		if (measureRef) {
			const elements = measureRef.children;
			if (elements.length > currentIndex) {
				const newWidth = elements[currentIndex].getBoundingClientRect().width;
				textWidth = `${newWidth}px`;
			}
		}
	}

	// Start text cycling
	function startTextCycle(): void {
		textInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % automationWords.length;
			updateTextWidth();
		}, 2500);
	}

	onMount(() => {
		// Initialize canvas animation
		if (canvasRef) {
			resizeCanvas();
			animationId = requestAnimationFrame(animate);
		}

		// Start text animation
		startTextCycle();
		updateTextWidth();

		// Add event listeners
		window.addEventListener('resize', resizeCanvas);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (textInterval) {
			clearInterval(textInterval);
		}
		isRunning = false;
	});

	// Workflow data
	interface WorkflowItem {
		title: string;
		status: string;
		progress: number;
	}

	const workflows: WorkflowItem[] = [
		{ title: "Data Processing", status: "Active", progress: 85 },
		{ title: "Email Automation", status: "Running", progress: 92 },
		{ title: "Report Generation", status: "Completed", progress: 100 },
		{ title: "Customer Onboarding", status: "Active", progress: 67 },
		{ title: "Invoice Processing", status: "Queued", progress: 0 },
		{ title: "Quality Assurance", status: "Running", progress: 78 }
	];

	// Utility function for class names
	function cn(...classes: (string | undefined | null | boolean)[]): string {
		return classes.filter(Boolean).join(" ");
	}

	// Get status class
	function getStatusClass(status: string): string {
		switch (status) {
			case "Active":
				return "bg-[#57DCCD]/20 text-[#57DCCD]";
			case "Running":
				return "bg-blue-500/20 text-blue-400";
			case "Completed":
				return "bg-green-500/20 text-green-400";
			case "Queued":
				return "bg-gray-500/20 text-gray-400";
			default:
				return "bg-gray-500/20 text-gray-400";
		}
	}
</script>

<div class="min-h-screen bg-[#1B2951] text-white relative overflow-hidden">
	<!-- AI Visualization Background -->
	<div class="absolute inset-0 overflow-hidden">
		<canvas 
			bind:this={canvasRef}
			class="w-full h-full opacity-30"
		/>
	</div>
	
	<!-- Hero Content -->
	<main class="relative z-10 pt-24 pb-14">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="text-center">
				<!-- Announcement Banner -->
				<div class="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-600 delay-200">
					<div class="inline-flex items-center px-4 py-2 rounded-full bg-[#2A4A6B]/50 border border-[#57DCCD]/30 text-sm">
						<Zap class="w-4 h-4 text-[#57DCCD] mr-2" />
						<span class="text-[#57DCCD]">New:</span>
						<span class="ml-1 text-gray-300">Advanced AI Automation Platform</span>
					</div>
				</div>

				<!-- Main Headline -->
				<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-800 delay-300">
					Automate Your{' '}
					<span class="text-[#57DCCD] relative inline-block" style="width: {textWidth}; transition: width 0.3s ease;">
						<!-- Hidden measurement div -->
						<div bind:this={measureRef} class="absolute opacity-0 pointer-events-none" style="visibility: hidden;">
							{#each automationWords as word, i}
								<span class="font-bold text-[#57DCCD]">{word}</span>
							{/each}
						</div>
						<!-- Animated text -->
						<span class="inline-block font-bold text-[#57DCCD] animate-in fade-in slide-in-from-bottom-4 duration-400" style="white-space: nowrap;">
							{automationWords[currentIndex]}
						</span>
					</span>
					<br />
					with AI Intelligence
				</h1>

				<!-- Subtitle -->
				<p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-600 delay-500">
					Transform your business operations with cutting-edge AI workflow automation. 
					Reduce manual tasks by 90%, increase efficiency, and scale your operations intelligently.
				</p>

				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-600 delay-700">
					<!-- Get Started Button -->
					<Button href="/quick-assessment" class="group relative overflow-hidden bg-[#57DCCD] hover:bg-[#4BC4B8] text-[#1B2951]" size="lg">
						<span class="mr-8 transition-opacity duration-500 group-hover:opacity-0">
							Get Started
						</span>
						<i class="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
							<ChevronRight size={16} strokeWidth={2} />
						</i>
					</Button>
				</div>

				<!-- Stats -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-600 delay-900">
					<div class="text-center">
						<div class="text-3xl md:text-4xl font-bold text-[#57DCCD] mb-2">90%</div>
						<div class="text-gray-400">Reduction in Manual Tasks</div>
					</div>
					<div class="text-center">
						<div class="text-3xl md:text-4xl font-bold text-[#57DCCD] mb-2">5x</div>
						<div class="text-gray-400">Faster Process Execution</div>
					</div>
					<div class="text-center">
						<div class="text-3xl md:text-4xl font-bold text-[#57DCCD] mb-2">24/7</div>
						<div class="text-gray-400">Autonomous Operation</div>
					</div>
				</div>

				<!-- Interactive Demo Preview -->
				<div class="relative max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-10 zoom-in-95 duration-800 delay-1100">
					<div class="relative bg-gradient-to-br from-[#2A4A6B]/50 to-[#1B2951]/50 rounded-2xl border border-[#57DCCD]/20 p-8 backdrop-blur-sm">
						<div class="flex items-center justify-between mb-6">
							<div class="flex items-center space-x-2">
								<div class="w-3 h-3 rounded-full bg-red-500"></div>
								<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div class="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<div class="text-sm text-gray-400">AI Workflow Dashboard</div>
						</div>
						
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{#each workflows as workflow, index}
								<div class="bg-[#1B2951]/50 rounded-lg p-4 border border-[#2A4A6B]/30 animate-in fade-in slide-in-from-bottom-4 duration-400" style="animation-delay: {1300 + index * 100}ms;">
									<div class="flex items-center justify-between mb-2">
										<h3 class="text-sm font-medium text-white">{workflow.title}</h3>
										<span class="text-xs px-2 py-1 rounded-full {getStatusClass(workflow.status)}">
											{workflow.status}
										</span>
									</div>
									<div class="w-full bg-[#2A4A6B]/50 rounded-full h-2">
										<div 
											class="bg-[#57DCCD] h-2 rounded-full transition-all duration-1000 ease-out"
											style="width: {workflow.progress}%; animation-delay: {1500 + index * 100}ms;"
										/>
									</div>
									<div class="text-xs text-gray-400 mt-1">{workflow.progress}% Complete</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	@keyframes animate-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-in {
		animation: animate-in 0.6s ease-out forwards;
		opacity: 0;
	}

	.fade-in {
		animation-name: fadeIn;
	}

	.slide-in-from-bottom-4 {
		animation-name: slideInFromBottom4;
	}

	.slide-in-from-bottom-8 {
		animation-name: slideInFromBottom8;
	}

	.slide-in-from-bottom-10 {
		animation-name: slideInFromBottom10;
	}

	.zoom-in-95 {
		animation-name: zoomIn95;
	}

	.slide-in-from-top {
		animation-name: slideInFromTop;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slideInFromBottom4 {
		from { 
			opacity: 0;
			transform: translateY(1rem);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideInFromBottom8 {
		from { 
			opacity: 0;
			transform: translateY(2rem);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideInFromBottom10 {
		from { 
			opacity: 0;
			transform: translateY(2.5rem);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes zoomIn95 {
		from { 
			opacity: 0;
			transform: scale(0.95);
		}
		to { 
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes slideInFromTop {
		from { 
			opacity: 0;
			transform: translateY(-1rem);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}

	.duration-300 { animation-duration: 300ms; }
	.duration-400 { animation-duration: 400ms; }
	.duration-600 { animation-duration: 600ms; }
	.duration-800 { animation-duration: 800ms; }
	.duration-1000 { animation-duration: 1000ms; }

	.delay-200 { animation-delay: 200ms; }
	.delay-300 { animation-delay: 300ms; }
	.delay-500 { animation-delay: 500ms; }
	.delay-700 { animation-delay: 700ms; }
	.delay-900 { animation-delay: 900ms; }
	.delay-1100 { animation-delay: 1100ms; }
</style>