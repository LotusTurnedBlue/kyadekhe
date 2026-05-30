import { contentPool, topPicks, moodRows } from "@/data/homeContent";
import type { Content } from "@/types/content";

export const allContent: Content[] = Array.from(
  new Map(
    [
      ...contentPool,
      ...topPicks,
      ...moodRows.flatMap((row) => row.content),
    ].map((item) => [item.slug, item])
  ).values()
);

export function getContentBySlug(slug: string) {
  return allContent.find((item) => item.slug === slug);
}

export function searchContent(query: string) {
  const q = query.trim().toLowerCase();

  if (!q) return [];

  return allContent.filter((item) =>
    [
      item.title,
      item.platform,
      item.type,
      item.releasedOn,
      item.runtime,
      item.plot,
      item.storyline,
      item.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}

export function getSimilarContent(slug: string) {
  const current = getContentBySlug(slug);

  if (!current) return [];

  return allContent
    .filter((item) => item.slug !== slug)
    .map((item) => {
      let score = 0;

      const matchingTags = item.tags.filter((tag) =>
        current.tags.includes(tag)
      );

      score += matchingTags.length * 3;

      if (item.platform === current.platform) score += 2;
      if (item.type === current.type) score += 1;

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

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