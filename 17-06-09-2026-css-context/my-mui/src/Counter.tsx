import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div
      className="mx-auto my-10 w-[min(320px,90vw)] rounded-2xl border border-slate-200 px-7 py-8 text-center font-sans shadow-[0_1px_2px_rgb(15_23_42/0.04),0_12px_32px_rgb(15_23_42/0.08)] transition-[transform,box-shadow] duration-250 ease-in-out [background:radial-gradient(120%_80%_at_0%_0%,#ccfbf1_0%,transparent_55%),radial-gradient(100%_70%_at_100%_100%,#e0f2fe_0%,transparent_50%),#f8fafc] hover:-translate-y-[3px] hover:shadow-[0_4px_8px_rgb(15_23_42/0.06),0_20px_40px_rgb(15_23_42/0.1)]"
    >
      <h1 className="mb-2 text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
        Counter
      </h1>
      <p
        key={count}
        className="mb-6 mt-1 text-[clamp(3rem,10vw,4.5rem)] font-bold leading-none text-slate-900 tabular-nums animate-pop"
      >
        {count}
      </p>
      <button
        onClick={handleClick}
        className="cursor-pointer appearance-none rounded-full border-none bg-gradient-to-br from-teal-600 to-teal-700 px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_8px_20px_color-mix(in_srgb,#0d9488_25%,transparent)] transition-[transform,box-shadow,filter] duration-150 ease-in-out hover:-translate-y-px hover:brightness-105 active:translate-y-px active:scale-[0.98] active:shadow-[0_4px_10px_color-mix(in_srgb,#0d9488_25%,transparent)]"
      >
        Increment
      </button>
    </div>
  );
}
