"use client";

import { useEffect, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";

import type { Content } from "@/types/content";

export default function WatchlistPage() {
  const [savedContent, setSavedContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWatchlist() {
      try {
        const savedSlugs = JSON.parse(
          localStorage.getItem("watchlist") || "[]"
        );

        if (!Array.isArray(savedSlugs) || savedSlugs.length === 0) {
          setSavedContent([]);
          return;
        }

        const response = await fetch("/api/watchlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            slugs: savedSlugs,
          }),
        });

        const content = await response.json();
        setSavedContent(content);
      } catch (error) {
        console.error("Watchlist fetch failed:", error);
        setSavedContent([]);
      } finally {
        setLoading(false);
      }
    }

    loadWatchlist();
  }, []);

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">
          My Watchlist
        </h1>

        {loading ? (
          <EmptyState
            title="Loading watchlist"
            description="Fetching your saved titles."
          />
        ) : savedContent.length === 0 ? (
          <EmptyState
            title="Nothing in watchlist"
            description="Save movies, shows or web series and they’ll appear here."
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
            {savedContent.map((item) => (
              <ContentPosterCard
                key={`${item.slug}-${item.tmdbId ?? item.title}`}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}