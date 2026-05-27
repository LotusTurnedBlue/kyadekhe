"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import SearchBar from "@/components/search/SearchBar";
import ContentSearchResults from "@/components/search/ContentSearchResults";

import { allContent, searchContent } from "@/lib/content";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredContent = useMemo(() => {
    if (!query.trim()) return allContent;

    return searchContent(query);
  }, [query]);

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">
          Search KyaDekhe?
        </h1>

        <div className="mt-6">
          <SearchBar
            value={query}
            onChange={setQuery}
          />
        </div>

        <ContentSearchResults content={filteredContent} />
      </div>
    </AppShell>
  );
}