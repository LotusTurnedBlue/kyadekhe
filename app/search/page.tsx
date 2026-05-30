"use client";

import { useEffect, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import SearchBar from "@/components/search/SearchBar";
import ContentSearchResults from "@/components/search/ContentSearchResults";
import EmptyState from "@/components/ui/EmptyState";

import type { Content } from "@/types/content";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query.trim();

    if (!q) {
      setContent([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `/api/search?q=${encodeURIComponent(q)}`
        );

        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Search failed:", error);
        setContent([]);
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">
          Search KyaDekhe?
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Search TMDB-powered movies, TV shows and web series.
        </p>

        <div className="mt-6">
          <SearchBar
            value={query}
            onChange={setQuery}
          />
        </div>

        {query.trim() ? (
          loading ? (
            <EmptyState
              title="Searching..."
              description="Finding TMDB results for you."
            />
          ) : (
            <ContentSearchResults content={content} />
          )
        ) : (
          <EmptyState
            title="Start searching"
            description='Try "Kalki", "Netflix", "Thriller" or "Action".'
          />
        )}
      </div>
    </AppShell>
  );
}