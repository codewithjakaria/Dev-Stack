import heroImage from '../assets/banner-stack.png';

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-5 py-14 text-center md:grid-cols-2 md:gap-10 md:py-24 md:text-left">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-text">Development Stack</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 md:mx-0">
            Explore frontend, backend, database, and tooling options. Compare
            them side by side and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex gap-4 md:justify-start">
            <button className="brand-gradient flex-1 rounded-lg px-3 py-3 text-sm font-semibold text-white md:flex-none md:px-5">
              Explore Technologies
            </button>

            <button className="flex-1 rounded-lg border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-600 md:flex-none md:px-6">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Development stack illustration"
            className="w-full max-w-[350px] md:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
