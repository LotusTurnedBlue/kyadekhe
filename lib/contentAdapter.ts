import type { Content } from "@/types/content";
import type {
  TmdbMovieDetails,
  TmdbMovieListItem,
  TmdbTvDetails,
  TmdbTvListItem,
} from "@/lib/tmdb";
import { getTmdbImageUrl } from "@/lib/tmdb";
import { createSlug } from "@/lib/content";

const fallbackPersonImage = "/fallbackPersonImage.png";
const fallbackPosterImage = "/fallbackPosterImage.png";

function getYoutubeTrailerUrl(tmdb?: {
  videos?: {
    results?: {
      key: string;
      site: string;
      type: string;
      official?: boolean;
    }[];
  };
}) {
  const videos = tmdb?.videos?.results ?? [];

  const trailer =
    videos.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official
    ) ||
    videos.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    ) ||
    videos.find((video) => video.site === "YouTube");

  return trailer
    ? `https://www.youtube.com/watch?v=${trailer.key}`
    : undefined;
}

function uniqueByName<T extends { name: string }>(people: T[]) {
  const seen = new Set<string>();

  return people.filter((person) => {
    const key = person.name.toLowerCase();

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function formatRuntime(minutes?: number | null) {
  if (!minutes) return "—";

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) return `${mins}m`;

  return `${hours}h ${mins}m`;
}

export function mergeContentWithTmdb(
  content: Content,
  tmdb?: TmdbMovieDetails | TmdbTvDetails | null
): Content {
  if (!tmdb) return content;

  const isMovie = "title" in tmdb;

  const title = isMovie ? tmdb.title : tmdb.name;
  const releaseYear = isMovie
    ? tmdb.release_date?.slice(0, 4)
    : tmdb.first_air_date?.slice(0, 4);

  const runtime = isMovie
    ? formatRuntime(tmdb.runtime)
    : tmdb.number_of_seasons
      ? `${tmdb.number_of_seasons} season${tmdb.number_of_seasons > 1 ? "s" : ""}`
      : content.runtime;

  const directors = uniqueByName(
    tmdb.credits.crew.filter((person) => person.job === "Director")
  )
    .slice(0, 4)
    .map((person) => ({
      name: person.name,
      image: getTmdbImageUrl(person.profile_path, "w185") || fallbackPersonImage,
    }));

  const writers = uniqueByName(
    tmdb.credits.crew.filter((person) =>
      ["Writer", "Screenplay", "Story", "Creator"].includes(person.job)
    )
  )
    .slice(0, 5)
    .map((person) => ({
      name: person.name,
      image: getTmdbImageUrl(person.profile_path, "w185") || fallbackPersonImage,
    }));

  const starCast = uniqueByName(tmdb.credits.cast)
    .slice(0, 10)
    .map((person) => ({
      name: person.name,
      characterName: person.character || "—",
      image: getTmdbImageUrl(person.profile_path, "w185") || fallbackPersonImage,
    }));

    const indiaProviders = tmdb["watch/providers"]?.results?.IN;

    const watchProviders = [
      ...(indiaProviders?.flatrate ?? []).map((provider) => ({
        name: provider.provider_name,
        logo: getTmdbImageUrl(provider.logo_path, "w92"),
        type: "stream" as const,
      })),
      ...(indiaProviders?.rent ?? []).map((provider) => ({
        name: provider.provider_name,
        logo: getTmdbImageUrl(provider.logo_path, "w92"),
        type: "rent" as const,
      })),
      ...(indiaProviders?.buy ?? []).map((provider) => ({
        name: provider.provider_name,
        logo: getTmdbImageUrl(provider.logo_path, "w92"),
        type: "buy" as const,
      })),
    ];

    const trailerUrl = getYoutubeTrailerUrl(tmdb);

  return {
    ...content,
    title: title || content.title,
    rating: tmdb.vote_average ? tmdb.vote_average.toFixed(1) : content.rating,
    img: getTmdbImageUrl(tmdb.poster_path, "w500") || content.img,
    plot: tmdb.overview || content.plot,
    releasedOn: releaseYear || content.releasedOn,
    runtime,
    storyline: tmdb.overview || content.storyline,
    tags:
      tmdb.genres.length > 0
        ? tmdb.genres.map((genre) => genre.name)
        : content.tags,
    starCast: starCast.length > 0 ? starCast : content.starCast,
    directors: directors.length > 0 ? directors : content.directors,
    writers: writers.length > 0 ? writers : content.writers,
    watchProviders,
    providerLink: indiaProviders?.link,
    trailerUrl: trailerUrl || content.trailerUrl,
  };
}

export function tmdbMovieToContent(movie: TmdbMovieListItem): Content {
  return {
    slug: `${createSlug(movie.title)}-tmdb-${movie.id}`,
    title: movie.title,
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : "—",
    platform: "TMDB",
    img: getTmdbImageUrl(movie.poster_path, "w500") || fallbackPosterImage,
    type: "movie",
    plot: movie.overview || "",
    releasedOn: movie.release_date?.slice(0, 4) || "—",
    runtime: "—",
    storyline: movie.overview || "",
    tags: [],
    starCast: [],
    writers: [],
    directors: [],
    tmdbId: String(movie.id),
  };
}

export function tmdbTvToContent(
  show: TmdbTvListItem,
  type: "tv-show" | "web-series" = "web-series"
): Content {
  return {
    slug: `${createSlug(show.name)}-tmdb-${show.id}`,
    title: show.name,
    rating: show.vote_average ? show.vote_average.toFixed(1) : "—",
    platform: "TMDB",
    img: getTmdbImageUrl(show.poster_path, "w500") || fallbackPosterImage,
    type,
    plot: show.overview || "",
    releasedOn: show.first_air_date?.slice(0, 4) || "—",
    runtime: "—",
    storyline: show.overview || "",
    tags: [],
    starCast: [],
    writers: [],
    directors: [],
    tmdbId: String(show.id),
    season: 1,
    episode: 1,
  };
}

export function getTmdbIdFromSlug(slug: string) {
  const match = slug.match(/-tmdb-(\d+)$/);

  return match ? match[1] : null;
}