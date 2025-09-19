// src/lib/useAutoReveal.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAutoReveal(scopeSelector = "body") {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // prefer reduced motion -> make items visible and skip animations
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(`${scopeSelector} .i-animate`).forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    const container = document.querySelector(scopeSelector) ?? document;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>(".i-animate"));

    items.forEach((node) => {
      // decide direction
      const isLeft = node.classList.contains("slide-left");
      const isRight = node.classList.contains("slide-right");
      const isUp = node.classList.contains("slide-up");
      const isFade = node.classList.contains("fade");

      const fromVars: any = { opacity: 0 };
      if (isLeft) fromVars.x = -28;
      if (isRight) fromVars.x = 28;
      if (isUp) fromVars.y = 24;

      // set initial inline styles for better FOUC handling
      node.style.opacity = "0";

      gsap.from(node, {
        ...fromVars,
        duration: 0.78,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reverse",
          // scroller: not needed because ScrollProvider scrollerProxy is global
        },
      });
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      items.forEach((el) => gsap.killTweensOf(el));
    };
  }, [scopeSelector]);
}
