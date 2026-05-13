import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-black tracking-widest text-xl uppercase drop-shadow-md">Obsidian</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="#features" className="text-zinc-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#design" className="text-zinc-400 hover:text-white transition-colors">
            Design
          </Link>
          <Link href="#specs" className="text-zinc-400 hover:text-white transition-colors">
            Specs
          </Link>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold tracking-wide hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
            Pre-order
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-zinc-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
