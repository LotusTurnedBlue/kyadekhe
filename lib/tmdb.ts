const TMDB_BASE_URL = "https://api.themoviedb.org/3";

function getTmdbToken() {
  const token = process.env.TMDB_READ_ACCESS_TOKEN;

  if (!token) {
    throw new Error("TMDB_READ_ACCESS_TOKEN is missing");
  }

  return token;
}

export async function tmdbFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${TMDB_BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${getTmdbToken()}`,
      accept: "application/json",
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status}`);
  }

  return res.json();
}

export type TmdbMovieDetails = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: { id: number; name: string }[];
  credits: {
    cast: {
      id: number;
      name: string;
      character: string;
      profile_path: string | null;
    }[];
    crew: {
      id: number;
      name: string;
      job: string;
      profile_path: string | null;
    }[];
  };
  videos: {
    results: {
      id: string;
      key: string;
      name: string;
      site: string;
      type: string;
    }[];
  };
};

export async function getTmdbMovieDetails(tmdbId: string) {
  return tmdbFetch<TmdbMovieDetails>(
    `/movie/${tmdbId}?append_to_response=credits,videos`
  );
}

export function getTmdbImageUrl(path?: string | null, size = "w500") {
  if (!path) return null;

  return `https://image.tmdb.org/t/p/${size}${path}`;
}