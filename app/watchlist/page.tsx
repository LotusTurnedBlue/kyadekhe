"use client";

import { useEffect, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import { allContent } from "@/lib/content";
import EmptyState from "@/components/ui/EmptyState";

export default function WatchlistPage() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );
    setSavedSlugs(saved);
  }, []);

  const savedContent = allContent.filter((item) =>
    savedSlugs.includes(item.slug)
  );

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">
          My Watchlist
        </h1>

        {savedContent.length === 0 ? (
          <EmptyState
            title="Nothing in watchlist"
            description="Save movies, shows or web series and they’ll appear here."
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
            {savedContent.map((item) => (
              <ContentPosterCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}