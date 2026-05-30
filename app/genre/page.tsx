import Link from "next/link";

import AppShell from "@/components/layout/AppShell";
import EmptyState from "@/components/ui/EmptyState";
import { tmdbGenres } from "@/lib/genres";

export default function GenrePage() {
  const genres = [...tmdbGenres].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-black md:text-5xl">
              Genres
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Browse movies, TV shows and web series by genre.
            </p>
          </div>

          <div className="rounded-full border border-[#162338] bg-[#07101d] px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
            {genres.length} Genres
          </div>
        </div>

        {genres.length === 0 ? (
          <EmptyState
            title="No genres found"
            description="Genres will appear here soon."
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {genres.map((genre) => (
              <Link
                key={genre.slug}
                href={`/genre/${genre.slug}`}
                className="group rounded-2xl border border-[#162338] bg-[#07101d] p-5 transition duration-200 hover:border-orange-500 hover:bg-[#0b1627]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-white transition group-hover:text-orange-400">
                    {genre.name}
                  </span>

                  <span className="text-xs text-zinc-600 transition group-hover:text-orange-300">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}