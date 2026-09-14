function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-5 md:py-16">
    
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left">
         
          <div className="max-w-xs">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="brand-gradient flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white">
                DS
              </span>

              <h2 className="text-xl font-bold text-slate-900">
                Dev <span className="brand-text">Stack</span>
              </h2>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex justify-center gap-4 text-sm font-medium text-slate-600 md:justify-start">
              <a href="https://github.com">GitHub</a>
              <span>•</span>
              <a href="https://twitter.com">Twitter</a>
              <span>•</span>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>

        
          <div className="hidden md:block">
            <h3 className="text-sm font-bold text-slate-800">PRODUCT</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#home">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-bold text-slate-800">COMPANY</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#careers">Careers</a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-bold text-slate-800">LEGAL</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-400 md:mt-12 md:pt-7 md:text-sm">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-3 md:gap-5">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
