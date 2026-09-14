import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
        <a href="#home" className="flex items-center gap-2">
          <span className="brand-gradient flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white">
            DS
          </span>

          <span className="text-xl font-extrabold text-slate-900">
            Dev <span className="brand-text">Stack</span>
          </span>
        </a>

        <div className="hidden gap-7 md:flex">
          <a href="#home" className="brand-text text-sm font-medium">
            Home
          </a>
          <a
            href="#technologies"
            className="text-sm text-slate-500 hover:text-pink-500"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-sm text-slate-500 hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-slate-500 hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-500 hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm text-slate-600">Sign In</button>

          <button className="brand-gradient rounded-full px-5 py-2 text-sm text-white">
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t bg-white px-5 py-5 md:hidden">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
