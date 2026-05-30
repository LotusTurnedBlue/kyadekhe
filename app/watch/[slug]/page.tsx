import { notFound } from "next/navigation";

import { getTmdbMovieDetails, getTmdbTvDetails } from "@/lib/tmdb";
import {
  getTmdbIdFromSlug,
  tmdbMovieToContent,
  tmdbTvToContent,
} from "@/lib/contentAdapter";
import { getVidkingEmbedUrl } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getTypeFromSlug(slug: string) {
  if (slug.startsWith("tv-show-")) return "tv-show";
  if (slug.startsWith("web-series-")) return "web-series";
  return "movie";
}

export default async function WatchPage({ params }: PageProps) {
  const { slug } = await params;

  const tmdbId = getTmdbIdFromSlug(slug);
  const type = getTypeFromSlug(slug);

  if (!tmdbId) {
    notFound();
  }

  let content = null;

  try {
    if (type === "movie") {
      const tmdb = await getTmdbMovieDetails(tmdbId);

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
    } else {
      const tmdb = await getTmdbTvDetails(tmdbId);

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
    console.error("TMDB watch fetch failed:", error);
  }

  if (!content) {
    notFound();
  }

  const embedUrl = getVidkingEmbedUrl(content);

  if (!embedUrl) {
    notFound();
  }

  return (
    <main className="min-h-dvh bg-black">
      <div className="h-[100svh] w-full bg-black">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="no-referrer"
          className="h-full w-full border-0"
        />
      </div>
    </main>
  );
}