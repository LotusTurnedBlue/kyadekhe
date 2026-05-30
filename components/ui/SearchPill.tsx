"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

import ContentSearchResults from "@/components/search/ContentSearchResults";
import EmptyState from "@/components/ui/EmptyState";
import type { Content } from "@/types/content";

export default function SearchPill() {
  const [open, setOpen] = useState(false);
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
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 transition hover:border-orange-500/30 hover:bg-white/[0.07] hover:text-white"
      >
        <span>Search</span>
        <Search className="h-4 w-4" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center bg-[#030811]/10 px-6 py-10">
          <div className="mt-12 w-full max-w-5xl rounded-[28px] border border-white/10 bg-[#030811] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.65)] md:p-6">
            <div className="rounded-[24px] border border-white/10 bg-[#030811] p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black text-white md:text-2xl">
                    Search KyaDekhe?
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    Find movies, tv shows, web series...
                  </p>
                </div>

                <button
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                    setContent([]);
                  }}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] p-3 text-white transition hover:bg-white/[0.12]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search actors, movies, tv shows, web series, genre..."
                  className="w-full rounded-2xl border border-white/10 bg-[#030811] px-4 py-4 text-base font-medium text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500/60 focus:bg-[#030811]"
                />
              </div>
            </div>

            <div className="mt-5 max-h-[58vh] overflow-y-auto rounded-[24px] border border-white/10 bg-[#030811] p-4 md:p-5">
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
                  title="Start typing to search"
                  description='Try "Kalki", "Netflix", "Thriller" or "Action".'
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}