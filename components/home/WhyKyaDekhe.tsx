"use client";

import {
  Bookmark,
  MonitorPlay,
  Compass,
  Sparkles,
} from "lucide-react";

const features = [
  [Compass, "Find What to Watch", "Mood-wise recommendations for Indian viewing habits."],
  [MonitorPlay, "Where to Watch", "Know exactly where movies & shows are streaming."],
  [Bookmark, "Save & Track", "Create watchlists and never lose track again."],
  [Sparkles, "New & Trending", "Stay updated with what is new and trending."],
] as const;

export default function WhyKyaDekhe() {
  return (
    <section className="hidden pt-8 md:block">
      <h2 className="mb-5 text-2xl font-black">Why to be named.</h2>

      <div className="grid grid-cols-4 gap-5">
        {features.map(([Icon, title, desc]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/5 bg-white/[0.035] p-6"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10">
              <Icon className="h-7 w-7 text-pink-500" />
            </div>

            <h3 className="font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}