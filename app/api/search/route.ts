import { NextResponse } from "next/server";

import { searchTmdbMulti } from "@/lib/tmdb";
import {
  tmdbMovieToContent,
  tmdbTvToContent,
} from "@/lib/contentAdapter";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const data = await searchTmdbMulti(query);

    const content = data.results
      .filter(
        (item) =>
          item.poster_path &&
          (item.media_type === "movie" ||
            item.media_type === "tv")
      )
      .map((item) =>
        item.media_type === "movie"
          ? tmdbMovieToContent(item)
          : tmdbTvToContent(item, "web-series")
      )
      .slice(0, 18);

    return NextResponse.json(content);
  } catch (error) {
    console.error("TMDB search failed:", error);
    return NextResponse.json([]);
  }
}