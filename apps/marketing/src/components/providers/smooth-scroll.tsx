"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis owns the scroll position, so GSAP has to be told about it rather than
 * reading window.scrollY on its own. We drive Lenis from the GSAP ticker
 * (autoRaf off) so both run on a single rAF and can't tear against each other.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <LenisGsapBridge />
      {children}
    </ReactLenis>
  );
}

/**
 * Rendered *inside* ReactLenis so it can read the instance from context.
 *
 * Reading it from a ref in the parent doesn't work: the parent's effect fires
 * before the ref is populated, and with `[]` deps it never retries — which
 * leaves autoRaf:false Lenis with nothing driving it. Keying the effect on the
 * context value means setup runs as soon as the instance exists.
 */
function LenisGsapBridge() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    if (process.env.NODE_ENV === "development") {
      (window as unknown as { __lenis?: unknown }).__lenis = lenis;
    }

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      // GSAP ticker reports seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  // App Router keeps the layout mounted across navigations, so reset scroll and
  // recalculate every trigger whenever the route changes.
  //
  // Ordering matters. This has to run *after* the new route has laid out,
  // otherwise Lenis resets against the old page's height and the browser clamps
  // it back. And refresh() has to come before the reset, because recalculating
  // a pinned trigger restores a scroll position of its own.
  useEffect(() => {
    if (!lenis) return;

    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      lenis.scrollTo(0, { immediate: true, force: true });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, lenis]);

  return null;
}
