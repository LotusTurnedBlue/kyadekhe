export const revalidate = 86400;

import AppShell from "@/components/layout/AppShell";
import HistoryClient from "@/components/history/HistoryClient";

import { topPickTmdbIds, moodCuration } from "@/data/homeCuration";
import {
  getCuratedMoviesByIds,
  getCuratedMoodRows,
} from "@/lib/tmdbCuration";
import {
  getTmdbIndianMovieContent,
  getTmdbIndianWebSeriesContent,
} from "@/lib/tmdbContent";

import type { Content } from "@/types/content";

export const metadata = {
  title: "Watch History | KyaDekhe?",
};

export default async function HistoryPage() {
  let indianMovies: Content[] = [];
  let indianWebSeries: Content[] = [];
  let tmdbTopPicks: Content[] = [];
  let curatedMoodRows: {
    title: string;
    content: Content[];
  }[] = [];

  try {
    indianMovies = await getTmdbIndianMovieContent();
    indianWebSeries = await getTmdbIndianWebSeriesContent();
    tmdbTopPicks = await getCuratedMoviesByIds(topPickTmdbIds);
    curatedMoodRows = await getCuratedMoodRows(moodCuration);
  } catch (error) {
    console.error("TMDB history fetch failed:", error);
  }

  const content = [
    ...tmdbTopPicks,
    ...indianMovies,
    ...indianWebSeries,
    ...curatedMoodRows.flatMap((row) => row.content),
  ];

  return (
    <AppShell>
      <main className="mx-auto min-h-screen max-w-[1540px] px-5 py-24 text-white md:px-10">
        <h1 className="text-3xl font-black md:text-5xl">Watch History</h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 md:text-base">
          Everything you started watching on KyaDekhe appears here.
        </p>

        <HistoryClient content={content} />
      </main>
    </AppShell>
  );
}