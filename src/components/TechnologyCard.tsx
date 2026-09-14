import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function TechnologyCard() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then(response => response.json())
      .then(data => {
        setTechnologies(data);

        setTimeout(() => {
          setLoading(false);
        }, 200);
      });
  }, []);

  function handleAdd(technology: Technology) {
    const alreadyAdded = selectedStack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning('This technology is already added!');
      return;
    }

    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added to stack!`);
  }

  function handleRemove(id: string) {
    const newStack = selectedStack.filter(item => item.id !== id);

    setSelectedStack(newStack);
    toast.info('Technology removed!');
  }

  function handleRemoveAll() {
    setSelectedStack([]);
    toast.info('All technologies removed!');
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-violet-600"></div>

        <p className="mt-4 text-slate-500">Loading technologies...</p>
      </div>
    );
  }

  return (
    <section id="technologies" className="mx-auto max-w-[1200px] px-5 py-16">
      <ToastContainer />

      <h2 className="text-3xl font-bold text-slate-900">
        Explore the <span className="brand-text">Technologies</span>
      </h2>

      <p className="mt-2 text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[3fr_1fr]">
        {/* Technology Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map(technology => {
            const isAdded = selectedStack.some(
              item => item.id === technology.id,
            );

            return (
              <div
                key={technology.id}
                className={`rounded-xl border p-5 shadow-sm ${
                  isAdded
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-slate-100 bg-white'
                }`}
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

                  <span className="text-slate-500">
                    {technology.difficulty}
                  </span>

                  <span className="font-semibold text-slate-700">
                    ⭐ {technology.rating}
                  </span>
                </div>

                <button
                  onClick={() => handleAdd(technology)}
                  disabled={isAdded}
                  className={`mt-5 w-full rounded-lg py-3 text-sm font-medium text-white ${
                    isAdded
                      ? 'brand-gradient cursor-not-allowed'
                      : 'bg-slate-900 hover:bg-pink-500'
                  }`}
                >
                  {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Your Stack */}
        <div className="h-fit rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">Your Stack</h2>

          <p className="mt-2 text-sm text-slate-500">
            {selectedStack.length} Technology Selected
          </p>

          {selectedStack.length === 0 && (
            <div className="mt-5 rounded-lg border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
              Your stack is empty.
            </div>
          )}

          <div className="mt-5 space-y-3">
            {selectedStack.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-9 w-9 object-contain"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-500">{item.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-lg font-bold text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {selectedStack.length > 0 && (
            <div className="mt-5 text-center">
              <button
                onClick={handleRemoveAll}
                className="brand-gradient rounded-lg px-5 py-2 text-sm font-medium text-white"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechnologyCard;
