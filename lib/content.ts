import type { Content } from "@/types/content";

export function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replaceAll("+", "")
    .replaceAll("&", "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function createPersonSlug(name: string) {
  return createSlug(name);
}

export function getVidkingEmbedUrl(content: Content) {
  const providerId = content.vidkingId || content.tmdbId;

  if (!providerId) return null;

  if (content.type === "movie") {
    return `https://www.vidking.net/embed/movie/${providerId}?color=ffa500&autoPlay=true`;
  }

  return `https://www.vidking.net/embed/tv/${providerId}/${content.season ?? 1}/${content.episode ?? 1}?color=ffa500&autoPlay=true&nextEpisode=true&episodeSelector=true`;
}