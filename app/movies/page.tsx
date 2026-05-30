import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import Pagination from "@/components/ui/Pagination";

import type { Content } from "@/types/content";
import { getTmdbIndianMovieContent } from "@/lib/tmdbContent";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function MoviesPage({
  searchParams,
}: PageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(Number(page ?? "1"), 1);

  let content: Content[] = [];

  try {
    content = await getTmdbIndianMovieContent(currentPage);
  } catch (error) {
    console.error("TMDB movies fetch failed:", error);
  }

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">
          Movies
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Browse Indian movies powered by TMDB.
        </p>

        {content.length === 0 ? (
          <EmptyState
            title="No movies found"
            description="Try another page."
          />
        ) : (
          <>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
              {content.map((item) => (
                <ContentPosterCard
                  key={`${item.slug}-${item.tmdbId ?? item.title}`}
                  item={item}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              basePath="/movies"
            />
          </>
        )}
      </div>
    </AppShell>
  );
}