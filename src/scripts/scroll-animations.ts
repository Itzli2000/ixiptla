import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initScrollReveal(): void {
	const revealElements = document.querySelectorAll("[data-reveal]");
	if (!revealElements.length) return;

	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (prefersReducedMotion) {
		revealElements.forEach((el) => el.classList.add("revealed"));
		return;
	}

	// Set stagger indices for children of stagger containers
	document.querySelectorAll("[data-reveal-stagger]").forEach((container) => {
		const children = container.querySelectorAll("[data-reveal]");
		children.forEach((child, i) => {
			(child as HTMLElement).style.setProperty(
				"--reveal-index",
				String(i),
			);
		});
	});

	// Batch reveal for efficiency
	ScrollTrigger.batch("[data-reveal]", {
		onEnter: (batch) => {
			gsap.to(batch, {
				opacity: 1,
				y: 0,
				x: 0,
				scale: 1,
				stagger: 0.06,
				duration: 0.9,
				ease: "power3.out",
				onStart: function () {
					batch.forEach((el) => el.classList.add("revealed"));
				},
			});
		},
		start: "top 88%",
		once: true,
	});
}

function initCounterAnimations(): void {
	const counters = document.querySelectorAll("[data-counter]");
	if (!counters.length) return;

	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	counters.forEach((counter) => {
		const target = counter.getAttribute("data-counter") || "0";
		const isNumeric = /^\d+$/.test(target.replace("+", ""));
		const suffix = target.includes("+") ? "+" : "";
		const numericValue = parseInt(target.replace("+", ""), 10);

		if (!isNumeric || prefersReducedMotion) {
			counter.textContent = target;
			return;
		}

		const obj = { value: 0 };

		ScrollTrigger.create({
			trigger: counter,
			start: "top 90%",
			once: true,
			onEnter: () => {
				gsap.to(obj, {
					value: numericValue,
					duration: 2.0,
					ease: "power2.out",
					onUpdate: () => {
						counter.textContent =
							Math.round(obj.value) + suffix;
					},
				});
			},
		});
	});
}

function initProgressBars(): void {
	const bars = document.querySelectorAll("[data-progress]");
	if (!bars.length) return;

	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	bars.forEach((bar, i) => {
		const target = bar.getAttribute("data-progress") || "100";

		if (prefersReducedMotion) {
			(bar as HTMLElement).style.width = `${target}%`;
			return;
		}

		(bar as HTMLElement).style.width = "0%";

		ScrollTrigger.create({
			trigger: bar,
			start: "top 90%",
			once: true,
			onEnter: () => {
				gsap.to(bar, {
					width: `${target}%`,
					duration: 1.5,
					delay: i * 0.10,
					ease: "power2.out",
				});
			},
		});
	});
}

function initParallax(): void {
	const parallaxElements = document.querySelectorAll("[data-parallax]");
	if (!parallaxElements.length) return;

	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;
	if (prefersReducedMotion) return;

	parallaxElements.forEach((el) => {
		const speed = parseFloat(el.getAttribute("data-parallax") || "0.2");

		gsap.to(el, {
			y: () => speed * 100,
			ease: "none",
			scrollTrigger: {
				trigger: el.parentElement,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		});
	});
}

// Initialize all scroll animations
function init(): void {
	initScrollReveal();
	initCounterAnimations();
	initProgressBars();
	initParallax();
}

// Support Astro view transitions
document.addEventListener("astro:page-load", init);

// Fallback for non-view-transition pages
if (!document.querySelector("[data-astro-transition]")) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
}
