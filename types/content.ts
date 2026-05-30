import type React from "react";

export type ContentType = "movie" | "tv-show" | "web-series";

export type ContentFilterType = "all" | ContentType;

export type CastMember = {
  name: string;
  image: string;
  characterName: string;
};

export type CrewMember = {
  name: string;
  image: string;
};

export type WatchProvider = {
  name: string;
  logo: string | null;
  type: "stream" | "rent" | "buy";
};

export type Content = {
  slug: string;
  title: string;
  rating: string;
  platform: string;
  img: string;
  type: ContentType;

  plot: string;
  releasedOn: string;
  runtime: string;
  storyline: string;
  tags: string[];

  starCast: CastMember[];
  writers: CrewMember[];
  directors: CrewMember[];

  watchOnKyaDekhe?: boolean;
  kyadekheWatchUrl?: string;
  kyadekheVideoUrl?: string;
  platformUrl?: string;
  trailerUrl?: string;

  tmdbId?: string;
  vidkingId?: string;
  season?: number;
  episode?: number;
  vidkingUrl?: string;

  watchProviders?: WatchProvider[];
  providerLink?: string;
};

export type MoodRow = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: string;
  content: Content[];
};