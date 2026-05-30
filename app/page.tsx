import { Flame, Clapperboard } from "lucide-react";

import AppShell from "@/components/layout/AppShell";

import HeroSection from "@/components/home/HeroSection";
import TopPicksSection from "@/components/home/TopPicksSection";
import ContentRow from "@/components/content/ContentRow";
import WhyKyaDekhe from "@/components/home/WhyKyaDekhe";
import SurpriseBanner from "@/components/home/SurpriseBanner";

import { topPickTmdbIds } from "@/data/homeCuration";
import { moodCuration } from "@/data/homeCuration";
import {
  getCuratedMoviesByIds,
  getCuratedMoodRows,
} from "@/lib/tmdbCuration";

import type { Content } from "@/types/content";
import {
  getTmdbIndianMovieContent,
  getTmdbIndianWebSeriesContent,
} from "@/lib/tmdbContent";

export default async function KyaDekheHomepage() {
  let indianMovies: Content[] = [];
  let indianWebSeries: Content[] = [];

  try {
    indianMovies = await getTmdbIndianMovieContent();
    indianWebSeries = await getTmdbIndianWebSeriesContent();
  } catch (error) {
    console.error("TMDB homepage fetch failed:", error);
  }

  let tmdbTopPicks: Content[] = [];
  let curatedMoodRows: {
    title: string;
    content: Content[];
  }[] = [];

  try {
    tmdbTopPicks = await getCuratedMoviesByIds(topPickTmdbIds);
    curatedMoodRows =
    await getCuratedMoodRows(moodCuration);
  } catch (error) {
    console.error("TMDB top picks fetch failed:", error);
  }

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-5 md:px-10 md:pb-10">
        <HeroSection />

        <section id="top-picks">
          {tmdbTopPicks.length > 0 && (
            <TopPicksSection content={tmdbTopPicks} />
          )}
        </section>

        {indianMovies.length > 0 && (
          <section id="trending">
            <ContentRow
              icon={Flame}
              title="Trending Today"
              subtitle="What India is watching right now"
              content={indianMovies.slice(0, 12)}
              badge="Live"
              accent="text-orange-400"
              href="/trending"
            />
          </section>
        )}

        {indianWebSeries.length > 0 && (
          <section id="indian-web-series">
            <ContentRow
              icon={Clapperboard}
              title="Indian Web Series"
              subtitle="Shows and series from Indian languages"
              content={indianWebSeries.slice(0, 12)}
              badge="TMDB"
              compact
              accent="text-orange-400"
              href="/web-series"
            />
          </section>
        )}

        {curatedMoodRows.map((row, index) => (
          <ContentRow
            key={row.title}
            icon={moodCuration[index]?.icon}
            title={row.title}
            subtitle={moodCuration[index]?.subtitle}
            content={row.content}
            accent={moodCuration[index]?.accent}
          />
        ))}

        <WhyKyaDekhe />

        <SurpriseBanner />
      </div>
    </AppShell>
  );
}