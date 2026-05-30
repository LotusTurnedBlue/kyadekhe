import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import Pagination from "@/components/ui/Pagination";

import type { Content } from "@/types/content";
import { getTmdbIndianWebSeriesContent } from "@/lib/tmdbContent";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function WebSeriesPage({
  searchParams,
}: PageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(Number(page ?? "1"), 1);

  let content: Content[] = [];

  try {
    content = await getTmdbIndianWebSeriesContent(
      currentPage
    );
  } catch (error) {
    console.error("TMDB web series fetch failed:", error);
  }

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">
          Web Series
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Discover Indian web series powered by TMDB.
        </p>

        {content.length === 0 ? (
          <EmptyState
            title="No web series found"
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
              basePath="/web-series"
            />
          </>
        )}
      </div>
    </AppShell>
  );
}