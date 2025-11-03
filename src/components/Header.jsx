import { PawPrint, Book, Sun } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-yellow-200 text-yellow-700 group-hover:rotate-6 transition-transform">
            <PawPrint className="w-5 h-5" />
          </div>
          <span className="font-extrabold tracking-tight text-lg sm:text-xl">
            Kaizo at Dog Beach
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#story" className="hover:text-blue-600 transition-colors flex items-center gap-2">
            <Book className="w-4 h-4" />
            The Story
          </a>
          <a href="#gallery" className="hover:text-blue-600 transition-colors flex items-center gap-2">
            <Sun className="w-4 h-4" />
            Beach Gallery
          </a>
          <a href="#buy" className="px-3 py-1.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            Pre‑order
          </a>
        </nav>
      </div>
    </header>
  )
}
