"use client";

import { Shuffle } from "lucide-react";

export default function SurpriseBanner() {
  return (
    <section className="hidden pt-6 md:block">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-7">
        <div className="flex items-center gap-7">
          <div className="text-7xl font-black text-orange-500">?</div>

          <div>
            <h2 className="text-3xl font-black">
              Not sure what to watch?
            </h2>

            <p className="text-xl text-zinc-300">
              We’ve got you.
            </p>
          </div>
        </div>

        <button className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 px-10 py-5 text-lg font-bold">
          Surprise Me
          <Shuffle className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}