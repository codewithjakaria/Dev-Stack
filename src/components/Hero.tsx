import heroImage from '../assets/banner-stack.png';

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        {/* Left side text */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
            Explore frontend, backend, database, and tooling options. Compare
            them side by side and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Development stack illustration"
            className="w-full max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
