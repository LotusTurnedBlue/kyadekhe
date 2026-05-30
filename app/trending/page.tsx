import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";

import type { Content } from "@/types/content";
import { trending } from "@/data/homeContent";
import { getTmdbIndianMovieContent } from "@/lib/tmdbContent";

export default async function TrendingPage() {
  let tmdbTrending: Content[] = [];

  try {
    tmdbTrending = await getTmdbIndianMovieContent();
  } catch (error) {
    console.error("TMDB trending fetch failed:", error);
  }

  const content =
    tmdbTrending.length > 0
      ? tmdbTrending
      : trending;

  return (
    <AppShell>
      <ContentGridPage
        title="Trending Today"
        subtitle="What India is watching right now."
        content={content}
      />
    </AppShell>
  );
}