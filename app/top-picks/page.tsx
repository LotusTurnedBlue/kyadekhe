import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";

import { topPickTmdbIds } from "@/data/homeCuration";
import { getCuratedMoviesByIds } from "@/lib/tmdbCuration";

export default async function TopPicksPage() {
  const content = await getCuratedMoviesByIds(topPickTmdbIds);

  return (
    <AppShell>
      <ContentGridPage
        title="Top Picks"
        subtitle="Handpicked titles worth watching."
        content={content}
        enableTypeFilter
      />
    </AppShell>
  );
}