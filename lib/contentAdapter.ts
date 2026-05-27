import type { Content } from "@/types/content";
import type { TmdbMovieDetails } from "@/lib/tmdb";
import { getTmdbImageUrl } from "@/lib/tmdb";

export function mergeContentWithTmdb(
  content: Content,
  tmdb?: TmdbMovieDetails | null
): Content {
  if (!tmdb) return content;

  const directors = tmdb.credits.crew
    .filter((person) => person.job === "Director")
    .slice(0, 4)
    .map((person) => ({
      name: person.name,
      image:
        getTmdbImageUrl(person.profile_path, "w185") ||
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    }));

  const writers = tmdb.credits.crew
    .filter((person) =>
      ["Writer", "Screenplay", "Story"].includes(person.job)
    )
    .slice(0, 5)
    .map((person) => ({
      name: person.name,
      image:
        getTmdbImageUrl(person.profile_path, "w185") ||
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    }));

  const starCast = tmdb.credits.cast.slice(0, 10).map((person) => ({
    name: person.name,
    characterName: person.character || "—",
    image:
      getTmdbImageUrl(person.profile_path, "w185") ||
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  }));

  return {
    ...content,
    title: tmdb.title || content.title,
    rating: tmdb.vote_average
      ? tmdb.vote_average.toFixed(1)
      : content.rating,
    img:
      getTmdbImageUrl(tmdb.poster_path, "w500") ||
      content.img,
    plot: tmdb.overview || content.plot,
    releasedOn:
      tmdb.release_date?.slice(0, 4) || content.releasedOn,
    runtime: tmdb.runtime
      ? `${Math.floor(tmdb.runtime / 60)}h ${tmdb.runtime % 60}m`
      : content.runtime,
    storyline: tmdb.overview || content.storyline,
    tags:
      tmdb.genres.length > 0
        ? tmdb.genres.map((genre) => genre.name)
        : content.tags,
    starCast:
      starCast.length > 0 ? starCast : content.starCast,
    directors:
      directors.length > 0 ? directors : content.directors,
    writers:
      writers.length > 0 ? writers : content.writers,
  };
}