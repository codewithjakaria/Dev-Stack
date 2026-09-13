import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>


        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-violet-500 text-sm font-bold text-white">
            DS
          </span>

          <span className="text-xl font-extrabold text-slate-900">
            Dev
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {' '}
              Stack
            </span>
          </span>
        </a>

     
        <div className="hidden gap-7 md:flex">
          <a href="#home" className="text-sm text-pink-500">
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

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm text-white">
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t bg-white px-5 py-5 md:hidden">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
