import technologies from '../data/technologies.json';

function TechnologyCard() {
  return (
    <section id="technologies" className="mx-auto max-w-[1200px] px-5 py-16">
      <h2 className="text-3xl font-bold text-slate-900">
        Explore the{' '}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="mt-2 text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map(technology => (
          <div
            key={technology.id}
            className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-10 w-10 object-contain"
              />

              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
                {technology.badge}
              </span>
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-800">
              {technology.name}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {technology.description}
            </p>

            <div className="mt-5 flex items-center justify-between text-xs">
              <span className="rounded bg-slate-100 px-2 py-1 text-slate-500">
                {technology.category}
              </span>

              <span className="text-slate-500">{technology.difficulty}</span>

              <span className="font-semibold text-slate-700">
                ⭐ {technology.rating}
              </span>
            </div>

            <button className="mt-5 w-full rounded-lg bg-slate-900 py-3 text-sm font-medium text-white">
              Add to Stack
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologyCard;
