export const revalidate = 86400;

import { notFound } from "next/navigation";

import {
  getTmdbMovieDetails,
  getTmdbTvDetails,
} from "@/lib/tmdb";

import {
  mergeContentWithTmdb,
  tmdbMovieToContent,
  tmdbTvToContent,
  getTmdbIdFromSlug,
} from "@/lib/contentAdapter";

import { getTmdbSimilarContent } from "@/lib/tmdbContent";

import AppShell from "@/components/layout/AppShell";
import ContentHero from "@/components/content/ContentHero";
import SimilarContent from "@/components/content/SimilarContent";
import ContentWhereToWatch from "@/components/content/ContentWhereToWatch";
import ContentPeopleSection from "@/components/content/ContentPeopleSection";
import ContentFacts from "@/components/content/ContentFacts";
import ContentWhyWatch from "@/components/content/ContentWhyWatch";

type PageProps = {
  params: Promise<{
    type: string;
    slug: string;
  }>;
};

export default async function ContentDetailPage({
  params,
}: PageProps) {
  const { type, slug } = await params;

  const tmdbIdFromSlug = getTmdbIdFromSlug(slug);

  if (!tmdbIdFromSlug) {
    notFound();
  }

  let tmdb = null;
  let content = null;

  try {
    if (type === "movie") {
      tmdb = await getTmdbMovieDetails(tmdbIdFromSlug);

      content = tmdbMovieToContent({
        id: tmdb.id,
        title: tmdb.title,
        original_title: tmdb.original_title,
        overview: tmdb.overview,
        release_date: tmdb.release_date,
        vote_average: tmdb.vote_average,
        poster_path: tmdb.poster_path,
        backdrop_path: tmdb.backdrop_path,
        genre_ids: tmdb.genres.map((genre) => genre.id),
        original_language: tmdb.original_language,
        origin_country: tmdb.origin_country,
      });
    }

    if (type === "tv-show" || type === "web-series") {
      tmdb = await getTmdbTvDetails(tmdbIdFromSlug);

      content = tmdbTvToContent(
        {
          id: tmdb.id,
          name: tmdb.name,
          original_name: tmdb.original_name,
          overview: tmdb.overview,
          first_air_date: tmdb.first_air_date,
          vote_average: tmdb.vote_average,
          poster_path: tmdb.poster_path,
          backdrop_path: tmdb.backdrop_path,
          genre_ids: tmdb.genres.map((genre) => genre.id),
          original_language: tmdb.original_language,
          origin_country: tmdb.origin_country,
        },
        type
      );
    }
  } catch (error) {
    console.error("TMDB detail fetch failed:", error);
  }

  if (!content || !tmdb || content.type !== type) {
    notFound();
  }

  const displayContent = mergeContentWithTmdb(content, tmdb);

  return (
    <AppShell
      showBottomNav={false}
      showCategoryNav={false}
    >
      <ContentHero content={displayContent} />

      <ContentWhereToWatch content={displayContent} />
      <ContentWhyWatch content={displayContent} />
      <ContentFacts content={displayContent} />

      <ContentPeopleSection
        title="Star Cast"
        people={displayContent.starCast}
        type="cast"
      />

      <ContentPeopleSection
        title="Directors"
        people={displayContent.directors}
        type="crew"
      />

      <ContentPeopleSection
        title="Writers"
        people={displayContent.writers}
        type="crew"
      />

      <SimilarContent
        content={await getTmdbSimilarContent(
          displayContent.tmdbId!,
          displayContent.type
        )}
      />
    </AppShell>
  );
}