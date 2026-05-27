import Link from "next/link";

import AppShell from "@/components/layout/AppShell";
import EmptyState from "@/components/ui/EmptyState";
import { getGenres } from "@/lib/content";

export default function GenrePage() {
  const genres = getGenres();

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">Genres</h1>

        <p className="mt-2 text-sm text-zinc-400">
          Browse content by genre.
        </p>

        {genres.length === 0 ? (
          <EmptyState
            title="No genres found"
            description="Genres will appear here when content has tags."
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {genres.map((genre) => (
              <Link
                key={genre}
                href={`/genre/${genre.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-2xl border border-[#162338] bg-[#07101d] p-5 text-sm font-black text-white transition hover:border-orange-500"
              >
                {genre}
              </Link>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}