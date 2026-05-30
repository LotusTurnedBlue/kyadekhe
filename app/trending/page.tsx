export const revalidate = 86400;

import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";

import { getTmdbIndianMovieContent } from "@/lib/tmdbContent";

export default async function TrendingPage() {
  const content = await getTmdbIndianMovieContent();

  return (
    <AppShell>
      <ContentGridPage
        title="Trending Today"
        subtitle="What India is watching right now."
        content={content}
        enableTypeFilter
      />
    </AppShell>
  );
}