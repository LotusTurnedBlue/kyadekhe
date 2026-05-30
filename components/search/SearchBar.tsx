"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search actors, movies, TV shows, web series, genre..."
        className="w-full rounded-2xl border border-white/10 bg-[#030811] px-12 py-4 text-base font-medium text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500/60 focus:bg-[#030811]"
      />
    </div>
  );
}