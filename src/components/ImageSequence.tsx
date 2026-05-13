"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ImageSequenceProps {
  frameCount: number;
  folder: string;
  prefix?: string;
  extension?: string;
  children?: React.ReactNode;
  factor?: number;
  containerClassName?: string;
}

export default function ImageSequence({
  frameCount,
  folder,
  prefix = "ezgif-frame-",
  extension = ".png",
  children,
  factor = 60,
  containerClassName = "h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden relative"
}: ImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    // You can adjust these if your images have a different aspect ratio
    canvas.width = 1920;
    canvas.height = 1080;

    const currentFrame = (index: number) =>
      `/${folder}/${prefix}${String(index).padStart(3, "0")}${extension}`;

    const images: HTMLImageElement[] = [];
    const sequence = {
      frame: 0
    };

    // Preload all frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // Render the very first frame once it loads
    images[0].onload = render;

    function render() {
      // GSAP updates sequence.frame as a float (e.g. 1.45), so we must round it
      const frameIndex = Math.round(sequence.frame);
      const img = images[frameIndex];

      if (img && img.complete) {
        // Clear canvas
        context!.clearRect(0, 0, canvas!.width, canvas!.height);
        context!.drawImage(img, 0, 0, canvas!.width, canvas!.height);
      }
    }

    // Using gsap.context for React cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // 200% of viewport height creates a long scrolling area
          scrub: 0.5,    // Smooth scrub effect
          pin: true,     // Pin the canvas in place while scrolling
        }
      });

      tl.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        onUpdate: render
      });

      const handle = containerRef.current?.querySelector(".progress-handle");
      if (handle) {
        tl.to(handle, {
          x: 168, // (48 * 4) - 8 (padding) - 16 (handle) = 168
          ease: "none"
        }, "<");
      }
    }, containerRef);

    return () => {
      ctx.revert(); // Clean up GSAP animations on unmount
    };
  }, [frameCount, folder, prefix, extension]);

  const maxw = 16 * factor;

  return (
    <div ref={containerRef} className={containerClassName}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-contain mx-auto z-0" style={{ maxWidth: `${maxw}px` }} />
      {children && (
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
}
