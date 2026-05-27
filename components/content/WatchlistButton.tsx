"use client";

import { Plus, Check } from "lucide-react";
import { useEffect, useState } from "react";

type WatchlistButtonProps = {
  slug: string;
};

export default function WatchlistButton({ slug }: WatchlistButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
    setSaved(watchlist.includes(slug));
  }, [slug]);

  function toggleWatchlist() {
    const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

    const updated = saved
      ? watchlist.filter((item: string) => item !== slug)
      : [...watchlist, slug];

    localStorage.setItem("watchlist", JSON.stringify(updated));
    setSaved(!saved);
  }

  return (
    <button
      onClick={toggleWatchlist}
      className="inline-flex items-center text-md gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 font-bold"
    >
      {saved ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      {saved ? "Saved" : "Add to Watchlist"}
    </button>
  );
}