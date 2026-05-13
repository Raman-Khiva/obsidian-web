export default function GridOverlay() {
  return (
    <div className="absolute inset-0 grid grid-cols-11 grid-rows-5 pointer-events-none z-10 w-full h-full">
      {Array.from({ length: 55 }).map((_, i) => {
        const row = Math.floor(i / 11);
        const col = i % 11;
        
        // The main transparent box spanning rows 1 to 3 and cols 2 to 8
        const isCenter = row >= 1 && row <= 3 && col >= 2 && col <= 8;
        
        if (isCenter) {
          // Render a single transparent block for the main box, or nothing if we just want a hole
          // We can just return an empty div to leave the space blank
          return <div key={i} className="" />;
        }
        
        return (
          <div 
            key={i} 
            className="border-[0.5px] border-white/5 bg-[#0a0a0a] flex items-center justify-center relative backdrop-blur-sm"
          >
            {/* The small center dot for each cell */}
            <div className="w-1 h-1 rounded-full bg-white/10" />
            
            {/* Star Icons at specific positions */}
            {row === 0 && col === 2 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 scale-150">
                  <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" />
                </svg>
              </div>
            )}
            
            {row === 0 && col === 8 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 scale-150">
                  <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" />
                </svg>
              </div>
            )}

            {/* Spark/Orange Stars at the corners of the main box */}
            {/* Top-left corner of the main box is at the bottom-right corner of cell (0, 1) */}
            {row === 0 && col === 1 && (
              <div className="absolute -bottom-3 -right-3 z-20 w-6 h-6 text-orange-500 bg-black rounded-full border border-orange-500/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
            )}

            {/* Top-right corner of the main box is at the bottom-left corner of cell (0, 9) */}
            {row === 0 && col === 9 && (
              <div className="absolute -bottom-3 -left-3 z-20 w-6 h-6 text-orange-500 bg-black rounded-full border border-orange-500/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
            )}
          </div>
        );
      })}

      {/* Center Top Progress Slider */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pointer-events-none">
        <div className="mt-[20vh] z-20 pointer-events-auto">
          <div className="relative w-48 h-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-full shadow-sm flex items-center px-1">
             <div className="progress-handle w-4 h-4 rounded-full bg-zinc-200 shadow-sm flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-zinc-800" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
