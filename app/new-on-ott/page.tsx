import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";

import {
  getTmdbIndianMovieContent,
  getTmdbIndianWebSeriesContent,
  getTmdbIndianTvContent,
} from "@/lib/tmdbContent";

export default async function LatestReleasesPage() {
  const [movies, webSeries, tvShows] = await Promise.all([
    getTmdbIndianMovieContent(),
    getTmdbIndianWebSeriesContent(),
    getTmdbIndianTvContent(),
  ]);

  const content = [...movies, ...webSeries, ...tvShows].sort(
    (a, b) => Number(b.releasedOn) - Number(a.releasedOn)
  );

  return (
    <AppShell>
      <ContentGridPage
        title="New on OTT"
        subtitle="Fresh releases across streaming platforms."
        content={content}
        enableTypeFilter
      />
    </AppShell>
  );
}