"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const components = [
  {
    name: "Top Case",
    title: "Aerospace Aluminum",
    points: [
      "CNC machined from a solid block of 6063 aluminum",
      "Flawless bead-blasted anodized finish",
      "Seamless invisible mounting system"
    ],
    image: "/keyboard-components/top-case.jpeg"
  },
  {
    name: "Keycaps",
    title: "Double-Shot PBT",
    points: [
      "Thick 1.5mm PBT plastic construction",
      "Crisp, non-fading double-shot legends",
      "Textured surface resists shine over time"
    ],
    image: "/keyboard-components/keycaps.jpeg"
  },
  {
    name: "Knob",
    title: "Rotary Encoder",
    points: [
      "Tactile aluminum knob for instant control",
      "Premium knurled edges for perfect grip",
      "Fully programmable via QMK/VIA"
    ],
    image: "/keyboard-components/knob.jpeg"
  },
  {
    name: "Switches",
    title: "Custom Linear",
    points: [
      "Factory-lubricated with Krytox 205g0",
      "Frictionless POM stem material",
      "62g dual-stage spring for snappy return"
    ],
    image: "/keyboard-components/machnical-switches.jpeg"
  },
  {
    name: "Screen",
    title: "OLED Side Screen",
    points: [
      "Customizable high-resolution display",
      "Real-time system stats and WPM tracking",
      "Upload custom GIF animations"
    ],
    image: "/keyboard-components/side-screen.jpeg"
  },
  {
    name: "PCB",
    title: "Hot-Swappable",
    points: [
      "1.2mm custom PCB with flex cuts",
      "Per-key programmable RGB illumination",
      "Kailh hot-swap sockets for solder-free changes"
    ],
    image: "/keyboard-components/pcb.jpeg"
  },
  {
    name: "Bottom Case",
    title: "Acoustic Base",
    points: [
      "Internal acoustic chamber eliminates hollowness",
      "High-density Poron foam layers included",
      "Machined brass internal weight"
    ],
    image: "/keyboard-components/Bottom_Case_Assembly_Internal_view_202605121750.jpeg"
  },
  {
    name: "Assembled",
    title: "The Masterpiece",
    points: [
      "Every component in perfect harmony",
      "Acoustically tuned out of the box",
      "A keyboard that feels as good as it looks"
    ],
    image: "/keyboard-components/keycaps.jpeg" // Using keycaps image for final product
  }
];

export default function ComponentShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800%", // 100% viewport height per slide
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            // Use Math.floor to ensure every slide gets an exactly equal scroll duration
            const index = Math.min(components.length - 1, Math.floor(self.progress * components.length));
            if (activeIndexRef.current !== index) {
              activeIndexRef.current = index;
              setActiveIndex(index);
            }
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-[#050505] relative overflow-hidden ">

      {/* Top Left: Main Title, Progress Tabs & Points */}
      <div className="absolute top-16 left-6 md:top-24 md:left-[10vw] z-30 max-w-xl w-full pointer-events-none">

        {/* Dynamic Component Heading */}
        <div className="relative h-16 md:h-24 w-full mb-4">
          {components.map((c, i) => (
            <h1
              key={i}
              className={`absolute top-0 left-0 text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-lg transition-all duration-700 ease-in-out ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
            >
              {c.title}
            </h1>
          ))}
        </div>

        {/* Removed Progress Tabs from here */}
      </div>

      {/* Top Right: Progress Indicator */}
      <div className="absolute top-16 right-6 md:top-28 md:right-[10vw] z-30 w-48 md:w-64 pointer-events-none">
        <div className="w-full flex gap-1.5 md:gap-2.5">
          {components.map((c, i) => (
            <div key={i} className="flex-1 flex flex-col gap-2">
              <div
                className={`h-1.5 w-full rounded-full transition-all duration-500 ${activeIndex === i
                  ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]'
                  : activeIndex > i
                    ? 'bg-zinc-600'
                    : 'bg-zinc-800/50'
                  }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Right: Points */}
      <div className="absolute bottom-12 right-6 md:bottom-20 md:right-[10vw] z-30 w-full md:w-[380px] pointer-events-none">
        <div className="relative w-full h-48 md:h-56">
          {components.map((c, i) => (
            <div
              key={i}
              className={`absolute bottom-0 right-0 w-full flex flex-col gap-4 transition-all duration-700 ease-in-out delay-100 ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
            >
              <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Section Context Label */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="h-[1px] w-6 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  <span className="text-orange-500 font-mono text-xs tracking-[0.2em] uppercase">Highlights</span>
                </div>

                <div className="flex flex-col gap-4 relative z-10">
                  {c.points.map((point, ptIdx) => (
                    <div key={ptIdx} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shadow-[0_0_8px_rgba(249,115,22,0.8)] flex-shrink-0" />
                      <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle: Tilted Images */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[50vw] h-[45vh] md:h-[65vh] z-10 pointer-events-none">
        {/* "tilted towards left from bottom and towards right from top" -> positive clockwise rotation */}
        <div className="w-full h-full relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-[8deg] transition-transform duration-700">
          {components.map((c, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeIndex === i ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                }`}
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
