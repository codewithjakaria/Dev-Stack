function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="flex justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white">
                DS
              </span>

              <h2 className="text-lg font-bold text-slate-900">
                Dev <span className="brand-text">Stack</span>
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-5 text-sm font-medium text-slate-600">
              <a href="https://github.com">GitHub</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>

    
          <div>
            <h3 className="text-sm font-bold text-slate-800">PRODUCT</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#home">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
            </div>
          </div>


          <div>
            <h3 className="text-sm font-bold text-slate-800">COMPANY</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#careers">Careers</a>
            </div>
          </div>

   
          <div>
            <h3 className="text-sm font-bold text-slate-800">LEGAL</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>


        <div className="mt-12 flex justify-between border-t border-slate-100 pt-7 text-sm text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
