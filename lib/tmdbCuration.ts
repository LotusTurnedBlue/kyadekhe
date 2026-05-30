import type { Content } from "@/types/content";
import { getTmdbMovieDetails } from "@/lib/tmdb";
import { tmdbMovieToContent, mergeContentWithTmdb } from "@/lib/contentAdapter";

export async function getCuratedMoviesByIds(ids: string[]): Promise<Content[]> {
  const results = await Promise.allSettled(
    ids.map(async (id) => {
      const tmdb = await getTmdbMovieDetails(id);

      const baseContent = tmdbMovieToContent({
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

      return mergeContentWithTmdb(baseContent, tmdb);
    })
  );

  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
}

export async function getCuratedMoodRows(
  rows: {
    title: string;
    tmdbIds: string[];
  }[]
) {
  const results = await Promise.all(
    rows.map(async (row) => ({
      title: row.title,
      content: await getCuratedMoviesByIds(row.tmdbIds),
    }))
  );

  return results;
}