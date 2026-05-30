import {
  getIndianHindiMovies,
  getIndianMovies,
  getIndianHindiTvShows,
  getIndianTvShows,
  getMoviesByGenre,
  getTvByGenre,
  getMoviesByProvider,
  getTvByProvider,
  searchTmdbPerson,
  getTmdbPersonCombinedCredits,
} from "@/lib/tmdb";

import type { Content } from "@/types/content";

import {
  tmdbMovieToContent,
  tmdbTvToContent,
} from "@/lib/contentAdapter";

function getTwoTmdbPages(page: number) {
  const safePage = Math.max(page, 1);

  return {
    firstPage: safePage * 2 - 1,
    secondPage: safePage * 2,
  };
}

export async function getTmdbIndianMovieContent(
  page = 1
): Promise<Content[]> {
  const { firstPage, secondPage } = getTwoTmdbPages(page);

  const [pageOne, pageTwo] = await Promise.all([
    getIndianMovies(firstPage),
    getIndianMovies(secondPage),
  ]);

  return [...pageOne.results, ...pageTwo.results]
    .filter((movie) => movie.poster_path)
    .map(tmdbMovieToContent);
}

export async function getTmdbHindiMovieContent(
  page = 1
): Promise<Content[]> {
  const { firstPage, secondPage } = getTwoTmdbPages(page);

  const [pageOne, pageTwo] = await Promise.all([
    getIndianHindiMovies(firstPage),
    getIndianHindiMovies(secondPage),
  ]);

  return [...pageOne.results, ...pageTwo.results]
    .filter((movie) => movie.poster_path)
    .map(tmdbMovieToContent);
}

export async function getTmdbIndianTvContent(
  page = 1
): Promise<Content[]> {
  const { firstPage, secondPage } = getTwoTmdbPages(page);

  const [pageOne, pageTwo] = await Promise.all([
    getIndianTvShows(firstPage),
    getIndianTvShows(secondPage),
  ]);

  return [...pageOne.results, ...pageTwo.results]
    .filter((show) => show.poster_path)
    .map((show) => tmdbTvToContent(show, "tv-show"));
}

export async function getTmdbIndianWebSeriesContent(
  page = 1
): Promise<Content[]> {
  const { firstPage, secondPage } = getTwoTmdbPages(page);

  const [pageOne, pageTwo] = await Promise.all([
    getIndianHindiTvShows(firstPage),
    getIndianHindiTvShows(secondPage),
  ]);

  return [...pageOne.results, ...pageTwo.results]
    .filter((show) => show.poster_path)
    .map((show) => tmdbTvToContent(show, "web-series"));
}

export async function getTmdbContentByPlatform(
  providerId: number,
  page = 1
): Promise<Content[]> {
  const [movies, tv] = await Promise.all([
    getMoviesByProvider(providerId, page),
    getTvByProvider(providerId, page),
  ]);

  return [
    ...movies.results
      .filter((item) => item.poster_path)
      .map(tmdbMovieToContent),

    ...tv.results
      .filter((item) => item.poster_path)
      .map((item) =>
        tmdbTvToContent(item, "web-series")
      ),
  ];
}

export async function getTmdbContentByGenre(
  genreId: number,
  page = 1
): Promise<Content[]> {
  const [movies, tv] = await Promise.all([
    getMoviesByGenre(genreId, page),
    getTvByGenre(genreId, page),
  ]);

  return [
    ...movies.results
      .filter((item) => item.poster_path)
      .map(tmdbMovieToContent),

    ...tv.results
      .filter((item) => item.poster_path)
      .map((item) => tmdbTvToContent(item, "web-series")),
  ];
}

function unslug(value: string) {
  return value.replaceAll("-", " ");
}

function isMovie(item: any) {
  return item.media_type === "movie" || "title" in item;
}

export async function getTmdbContentByPerson(
  role: "cast" | "director" | "writer",
  slug: string
): Promise<{
  personName: string;
  personImage: string;
  content: Content[];
}> {
  const personSearch = await searchTmdbPerson(unslug(slug));
  const person = personSearch.results[0];

  if (!person) {
    return {
      personName: unslug(slug),
      personImage: "/fallbackPersonImage.png",
      content: [],
    };
  }

  const credits = await getTmdbPersonCombinedCredits(person.id);

  const selectedCredits =
    role === "cast"
      ? credits.cast
      : credits.crew.filter((item) => {
          const job = item.job?.toLowerCase() ?? "";

          if (role === "director") {
            return job === "director";
          }

          return (
            job.includes("writer") ||
            job.includes("screenplay") ||
            job.includes("story")
          );
        });

  const content = selectedCredits
    .filter((item) => item.poster_path)
    .map((item) =>
      isMovie(item)
        ? tmdbMovieToContent(item as any)
        : tmdbTvToContent(item as any, "web-series")
    );

  return {
    personName: person.name,
    personImage: person.profile_path
      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
      : "/fallbackPersonImage.png",
    content,
  };
}