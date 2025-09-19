// src/lib/ScrollProvider.tsx
import React, { useEffect } from "react";
import Lenis from "lenis"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = { children: React.ReactNode };

export default function ScrollProvider({ children }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // init lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // keep native feeling on touch devices
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // scrollerProxy so ScrollTrigger uses lenis's scroll
    ScrollTrigger.scrollerProxy(document.scrollingElement || document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // optional horizontal support omitted
    });

    // update ScrollTrigger on refresh
    const onRefresh = () => ScrollTrigger.update();
    ScrollTrigger.addEventListener("refreshInit", onRefresh);
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.removeEventListener("refreshInit", onRefresh);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
