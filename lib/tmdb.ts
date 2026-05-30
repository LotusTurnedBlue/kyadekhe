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

/* -----------------------------
   SHARED TYPES
----------------------------- */

export type TmdbGenre = {
  id: number;
  name: string;
};

export type TmdbCastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type TmdbCrewMember = {
  id: number;
  name: string;
  job: string;
  profile_path: string | null;
};

export type TmdbVideo = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};

export type TmdbPaginatedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

/* -----------------------------
   MOVIE TYPES
----------------------------- */

export type TmdbMovieListItem = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  origin_country?: string[];
};

export type TmdbMovieDetails = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number | null;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: TmdbGenre[];
  original_language: string;
  origin_country?: string[];
  credits: {
    cast: TmdbCastMember[];
    crew: TmdbCrewMember[];
  };
  videos: {
    results: TmdbVideo[];
  };
  "watch/providers"?: {
    results?: Record<
      string,
      {
        link?: string;
        flatrate?: {
          provider_id: number;
          provider_name: string;
          logo_path: string | null;
        }[];
        rent?: {
          provider_id: number;
          provider_name: string;
          logo_path: string | null;
        }[];
        buy?: {
          provider_id: number;
          provider_name: string;
          logo_path: string | null;
        }[];
      }
    >;
  };
};

/* -----------------------------
   TV / WEB SERIES TYPES
----------------------------- */

export type TmdbTvListItem = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  origin_country?: string[];
};

export type TmdbTvDetails = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  episode_run_time: number[];
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: TmdbGenre[];
  original_language: string;
  origin_country?: string[];
  credits: {
    cast: TmdbCastMember[];
    crew: TmdbCrewMember[];
  };
  videos: {
    results: TmdbVideo[];
  };
  "watch/providers"?: {
    results?: Record<
      string,
      {
        link?: string;
        flatrate?: {
          provider_id: number;
          provider_name: string;
          logo_path: string | null;
        }[];
        rent?: {
          provider_id: number;
          provider_name: string;
          logo_path: string | null;
        }[];
        buy?: {
          provider_id: number;
          provider_name: string;
          logo_path: string | null;
        }[];
      }
    >;
  };
};

/* -----------------------------
   DETAILS FETCHERS
----------------------------- */

export async function getTmdbMovieDetails(tmdbId: string) {
  return tmdbFetch<TmdbMovieDetails>(
    `/movie/${tmdbId}?append_to_response=credits,videos,watch/providers`
  );
}

export async function getTmdbTvDetails(tmdbId: string) {
  return tmdbFetch<TmdbTvDetails>(
    `/tv/${tmdbId}?append_to_response=credits,videos,watch/providers`
  );
}

/* -----------------------------
   INDIAN MOVIES
----------------------------- */

export async function getIndianMovies(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?with_origin_country=IN&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianHindiMovies(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?with_original_language=hi&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianTamilMovies(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?with_original_language=ta&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianTeluguMovies(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?with_original_language=te&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianMalayalamMovies(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?with_original_language=ml&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianKannadaMovies(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?with_original_language=kn&sort_by=popularity.desc&page=${page}`
  );
}

/* -----------------------------
   INDIAN TV / WEB SERIES
----------------------------- */

export async function getIndianTvShows(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?with_origin_country=IN&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianHindiTvShows(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?with_original_language=hi&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianTamilTvShows(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?with_original_language=ta&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianTeluguTvShows(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?with_original_language=te&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianMalayalamTvShows(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?with_original_language=ml&sort_by=popularity.desc&page=${page}`
  );
}

export async function getIndianKannadaTvShows(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?with_original_language=kn&sort_by=popularity.desc&page=${page}`
  );
}

/* -----------------------------
   TRENDING INDIA-FOCUSED
----------------------------- */

export async function getTrendingIndianMovies(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/trending/movie/week?region=IN&page=${page}`
  );
}

export async function getTrendingIndianTvShows(page = 1) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/trending/tv/week?region=IN&page=${page}`
  );
}

/* -----------------------------
   IMAGES
----------------------------- */

export function getTmdbImageUrl(path?: string | null, size = "w500") {
  if (!path) return null;

  return `https://image.tmdb.org/t/p/${size}${path}`;
}

/* -----------------------------
   WATCH PROVIDERS
----------------------------- */

export async function getMoviesByProvider(
  providerId: number,
  page = 1
) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?watch_region=IN&with_watch_providers=${providerId}&page=${page}&sort_by=popularity.desc`
  );
}

export async function getTvByProvider(
  providerId: number,
  page = 1
) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?watch_region=IN&with_watch_providers=${providerId}&page=${page}&sort_by=popularity.desc`
  );
}

export async function getMoviesByGenre(
  genreId: number,
  page = 1
) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbMovieListItem>>(
    `/discover/movie?with_genres=${genreId}&watch_region=IN&page=${page}&sort_by=popularity.desc`
  );
}

export async function getTvByGenre(
  genreId: number,
  page = 1
) {
  return tmdbFetch<TmdbPaginatedResponse<TmdbTvListItem>>(
    `/discover/tv?with_genres=${genreId}&watch_region=IN&page=${page}&sort_by=popularity.desc`
  );
}

export type TmdbPersonSearchItem = {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department: string;
};

export type TmdbPersonSearchResponse = {
  results: TmdbPersonSearchItem[];
};

export async function searchTmdbPerson(query: string) {
  return tmdbFetch<TmdbPersonSearchResponse>(
    `/search/person?query=${encodeURIComponent(query)}&include_adult=false`
  );
}

export async function getTmdbPersonCombinedCredits(personId: number) {
  return tmdbFetch<{
    cast: (TmdbMovieListItem | TmdbTvListItem)[];
    crew: ((TmdbMovieListItem | TmdbTvListItem) & {
      job?: string;
      department?: string;
    })[];
  }>(`/person/${personId}/combined_credits`);
}

export async function searchTmdbMulti(query: string) {
  return tmdbFetch<{
    results: any[];
  }>(
    `/search/multi?query=${encodeURIComponent(query)}&include_adult=false`
  );
}

export async function getSimilarMovies(id: string) {
  return tmdbFetch<{
    results: TmdbMovieListItem[];
  }>(`/movie/${id}/similar`);
}

export async function getSimilarTv(id: string) {
  return tmdbFetch<{
    results: TmdbTvListItem[];
  }>(`/tv/${id}/similar`);
}

export async function searchMultiTmdb(
  query: string
) {
  return tmdbFetch(
    `/search/multi?query=${encodeURIComponent(
      query
    )}`
  );
}