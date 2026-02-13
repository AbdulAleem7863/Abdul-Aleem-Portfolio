import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero Content - Smooth & Lightweight
export const animateHeroContent = (containerRef) => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
    });

    tl.fromTo(
        container.querySelector(".hero-image-wrap"),
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5 }
    );

    tl.fromTo(
        [
            container.querySelector(".hero-greeting"),
            container.querySelector(".hero-name"),
            container.querySelector(".hero-title"),
            container.querySelector(".hero-tagline"),
        ],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15 },
        "-=1.0"
    );

    tl.fromTo(
        container.querySelectorAll(".hero-btn"),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
        "-=0.6"
    );
};

// Text Reveal - Modern & Sleek
export const animateTextReveal = (containerRef) => {
    const container = containerRef.current;
    if (!container) return;

    const titles = container.querySelectorAll("h2, h3");

    titles.forEach(title => {
        gsap.fromTo(
            title,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    });
};

// Standard Scroll Animation (Fixes your reported error)
export const animateOnScroll = (elementRef) => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        }
    );
};

// Staggered Fade Up for Skills/Cards
export const animateStaggeredFadeUp = (containerRef, selector) => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);

    gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container,
                start: "top 85%",
            },
        }
    );
};

// Alternating Slide for Journey/Projects
export const animateAlternatingSlide = (containerRef, selector) => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);

    elements.forEach((el, index) => {
        const xOffset = index % 2 === 0 ? -30 : 30;

        gsap.fromTo(
            el,
            { opacity: 0, x: xOffset },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
            }
        );
    });
};
