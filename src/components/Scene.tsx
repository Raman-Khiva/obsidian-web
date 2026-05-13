"use client";

import ImageSequence from "./ImageSequence";
import GridOverlay from "./GridOverlay";
import ComponentShowcase from "./ComponentShowcase";

export default function Scene() {
  return (
    <div className="w-[100vw]  bg-black">{/* Page 1: Hero */}
      <section className="h-screen relative  flex items-center justify-between px-8 md:pl-36 md:pr-8 overflow-hidden pb-20">
        {/* Expanded Background Image */}
        <div className="absolute transition translate-y-20 flex items-center justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-section-3disometric-keyboard..png"
            alt="Obsidian Keyboard 3D Isometric View"
            className="object-contain drop-shadow-2xl origin-right w-[80%]"
          />
        </div>

        <div className="flex w-full max-w-7xl z-10 pl-16 pb-24">
          <div className="w-full md:w-[60%] text-left">
            <p className="text-zinc-400 tracking-[0.3em] text-sm uppercase mb-4 font-medium">Introducing the flagship</p>
            <h1 className="text-7xl md:text-8xl font-[600] tracking-tight text-white drop-shadow-2xl">
              OBSIDIAN
            </h1>
            <p className="text-zinc-300 mt-7 text-xl md:text-xl max-w-lg tracking-tight leading-tight font-light drop-shadow-lg">
              A paradigm shift in acoustic engineering and typing feel.
              Machined from a solid block of aluminum.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 md:gap-5 text-zinc-400 text-sm tracking-widest uppercase font-semibold drop-shadow-md">
              <span>65% Layout</span>
              <span className="hidden md:inline">•</span>
              <span>Gasket Mount</span>
              <span className="hidden md:inline">•</span>
              <span>Tri-Mode</span>
            </div>
            <div className="mt-10 flex items-center justify-between bg-[#1a1a1a] rounded-full p-1.5 max-w-80 border border-white/10 shadow-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent w-36 text-zinc-300 placeholder:text-zinc-500 outline-none pl-2 pr-2 text-sm font-light "
              />
              <button className="bg-white text-black font-medium text-sm px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-colors whitespace-nowrap">
                Book a Demo
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-36 animate-bounce text-zinc-500 text-xs tracking-widest uppercase w-full text-center left-0 z-10">
          Scroll to discover
        </div>

        <div className="absolute bottom-16 left-0 w-full z-10 flex flex-col items-center opacity-80">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-zinc-100 font-bold text-xs md:text-lg tracking-widest">
            <span className="hover:text-zinc-300  transition-colors cursor-pointer">THE VERGE</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">WIRED</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">TECHCRUNCH</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">ENGADGET</span>
          </div>
        </div>
      </section>

      {/* Page 2: The Frame Sequence */}
      <ImageSequence
        frameCount={178}
        factor={70}
        folder="second-section-frames"
        containerClassName="h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden relative"
      >
        <GridOverlay />
      </ImageSequence>

      {/* Page 3: The Explosion (Detailed Labels) */}
      <ImageSequence frameCount={160} folder="exploded-view-frames" extension=".png">
        <div className="absolute inset-0 flex items-center justify-between px-6 md:px-[8vw] pointer-events-none z-10">
          
          {/* Left Column */}
          <div className="flex flex-col gap-[12vh] max-w-[280px] md:max-w-xs">
            {/* Card 1 */}
            <div className="relative group pointer-events-auto">
              {/* Connector */}
              <div className="absolute top-1/2 right-0 w-8 md:w-16 h-[1px] bg-gradient-to-r from-white/20 to-orange-500/50 translate-x-full -translate-y-1/2" />
              <div className="absolute top-1/2 -right-8 md:-right-16 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] -translate-y-1/2 translate-x-1/2 animate-pulse" />
              
              <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-medium text-white tracking-wide group-hover:text-orange-400 transition-colors">Double-shot PBT</h3>
                    <span className="text-[10px] font-mono text-orange-400 border border-orange-400/30 bg-orange-400/10 px-1.5 py-0.5 rounded-full">01</span>
                  </div>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed text-right">
                    Crisp, non-fading legends with a textured finish that resists shine over years of heavy use.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group pointer-events-auto">
              {/* Connector */}
              <div className="absolute top-1/2 right-0 w-8 md:w-16 h-[1px] bg-gradient-to-r from-white/20 to-orange-500/50 translate-x-full -translate-y-1/2" />
              <div className="absolute top-1/2 -right-8 md:-right-16 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] -translate-y-1/2 translate-x-1/2 animate-pulse" style={{ animationDelay: '150ms' }} />
              
              <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-medium text-white tracking-wide group-hover:text-orange-400 transition-colors">Custom Switches</h3>
                    <span className="text-[10px] font-mono text-orange-400 border border-orange-400/30 bg-orange-400/10 px-1.5 py-0.5 rounded-full">02</span>
                  </div>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed text-right">
                    Factory-lubricated stems and springs provide an ultra-smooth travel with a satisfying, rounded bump.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[12vh] max-w-[280px] md:max-w-xs mt-[20vh]">
            {/* Card 3 */}
            <div className="relative group pointer-events-auto">
              {/* Connector */}
              <div className="absolute top-1/2 left-0 w-8 md:w-16 h-[1px] bg-gradient-to-l from-white/20 to-orange-500/50 -translate-x-full -translate-y-1/2" />
              <div className="absolute top-1/2 -left-8 md:-left-16 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] -translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '300ms' }} />
              
              <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono text-orange-400 border border-orange-400/30 bg-orange-400/10 px-1.5 py-0.5 rounded-full">03</span>
                    <h3 className="text-lg md:text-xl font-medium text-white tracking-wide group-hover:text-orange-400 transition-colors">Polycarbonate Plate</h3>
                  </div>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed text-left">
                    Precision-cut PC material offers a soft, flexible typing experience with uniform bottom-out resonance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group pointer-events-auto">
              {/* Connector */}
              <div className="absolute top-1/2 left-0 w-8 md:w-16 h-[1px] bg-gradient-to-l from-white/20 to-orange-500/50 -translate-x-full -translate-y-1/2" />
              <div className="absolute top-1/2 -left-8 md:-left-16 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] -translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '450ms' }} />
              
              <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono text-orange-400 border border-orange-400/30 bg-orange-400/10 px-1.5 py-0.5 rounded-full">04</span>
                    <h3 className="text-lg md:text-xl font-medium text-white tracking-wide group-hover:text-orange-400 transition-colors">Hot-Swap PCB</h3>
                  </div>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed text-left">
                    Custom designed 1.2mm PCB featuring per-key RGB and QMK/VIA support. Solder-free switch swapping.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </ImageSequence>

      {/* Page 4: Component Showcase */}
      <ComponentShowcase />

      {/* Page 6: Interactive Finale */}
      <section className="h-screen flex flex-col items-center justify-center pb-32 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Make it yours.</h2>
        <p className="text-zinc-400 mb-10 text-lg font-light">Pre-order the Obsidian today.</p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold tracking-wide hover:bg-zinc-200 transition-colors shadow-xl shadow-white/10">
          Secure Your Pre-order
        </button>
      </section>
    </div>
  );
}
