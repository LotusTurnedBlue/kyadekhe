import { NextResponse } from "next/server";

import {
  getTmdbMovieDetails,
  getTmdbTvDetails,
} from "@/lib/tmdb";

import {
  getTmdbIdFromSlug,
  tmdbMovieToContent,
  tmdbTvToContent,
} from "@/lib/contentAdapter";

export async function POST(request: Request) {
  const { slugs } = await request.json();

  if (!Array.isArray(slugs)) {
    return NextResponse.json([]);
  }

  const results = await Promise.allSettled(
    slugs.map(async (slug: string) => {
      const tmdbId = getTmdbIdFromSlug(slug);

      if (!tmdbId) return null;

      try {
        const movie = await getTmdbMovieDetails(tmdbId);

        return tmdbMovieToContent({
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          overview: movie.overview,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          poster_path: movie.poster_path,
          backdrop_path: movie.backdrop_path,
          genre_ids: movie.genres.map((genre) => genre.id),
          original_language: movie.original_language,
          origin_country: movie.origin_country,
        });
      } catch {
        const tv = await getTmdbTvDetails(tmdbId);

        return tmdbTvToContent(
          {
            id: tv.id,
            name: tv.name,
            original_name: tv.original_name,
            overview: tv.overview,
            first_air_date: tv.first_air_date,
            vote_average: tv.vote_average,
            poster_path: tv.poster_path,
            backdrop_path: tv.backdrop_path,
            genre_ids: tv.genres.map((genre) => genre.id),
            original_language: tv.original_language,
            origin_country: tv.origin_country,
          },
          "web-series"
        );
      }
    })
  );

  const content = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .filter(Boolean);

  return NextResponse.json(content);
}