import type { Content } from "@/types/content";

import {
  getIndianHindiMovies,
  getIndianMovies,
  getIndianHindiTvShows,
  getIndianTvShows,
} from "@/lib/tmdb";

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