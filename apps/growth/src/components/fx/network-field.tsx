"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type Node = { x: number; y: number; vx: number; vy: number };

const LINK_DISTANCE = 148;
/** Nodes per million device-independent pixels, so density is screen-independent. */
const DENSITY = 46;
const MAX_NODES = 90;

/**
 * Canvas particle lattice used as the hero backdrop.
 *
 * Stands in for the video background the brief wanted: a few KB of script
 * instead of a multi-megabyte file, no autoplay policy to fight, and it tints
 * itself from the brand token rather than being baked in.
 */
export function NetworkField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Read the brand colour off the cascade so this follows the theme.
    const brand =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--brand")
        .trim() || "oklch(0.862 0.148 145)";

    let nodes: Node[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      // Cap DPR: at 3x the link pass gets expensive for no visible gain.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(
        MAX_NODES,
        Math.round(((width * height) / 1_000_000) * DENSITY),
      );

      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        // Wrap rather than bounce, so there's no edge-collecting.
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DISTANCE) continue;

          ctx.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.22;
          ctx.strokeStyle = brand;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 0.55;
      ctx.fillStyle = brand;
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    // Don't burn frames on a backgrounded tab.
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
    />
  );
}
