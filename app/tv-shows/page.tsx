export const revalidate = 86400;

import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import Pagination from "@/components/ui/Pagination";

import type { Content } from "@/types/content";
import { getTmdbIndianTvContent } from "@/lib/tmdbContent";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function TvShowsPage({
  searchParams,
}: PageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(Number(page ?? "1"), 1);

  let content: Content[] = [];

  try {
    content = await getTmdbIndianTvContent(currentPage);
  } catch (error) {
    console.error("TMDB TV shows fetch failed:", error);
  }

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">
          TV Shows
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Browse Indian TV shows powered by TMDB.
        </p>

        {content.length === 0 ? (
          <EmptyState
            title="No TV shows found"
            description="Try another page."
          />
        ) : (
          <>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
              {content.map((item, index) => (
                <ContentPosterCard
                  key={`${item.type}-${item.tmdbId ?? item.slug}-${index}`}
                  item={item}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              basePath="/tv-shows"
            />
          </>
        )}
      </div>
    </AppShell>
  );
}