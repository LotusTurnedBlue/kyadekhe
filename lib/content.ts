import { contentPool, topPicks, moodRows } from "@/data/homeContent";
import type { Content, ContentType } from "@/types/content";

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

export function getContentByType(type: ContentType) {
  return allContent.filter((item) => item.type === type);
}

export function searchContent(query: string) {
  const q = query.trim().toLowerCase();

  if (!q) return [];

  return allContent.filter((item) =>
    `${item.title} ${item.platform} ${item.type} ${item.releasedOn} ${item.runtime} ${item.plot ?? ""} ${item.storyline} ${item.tags.join(" ")}`
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

      if (item.platform === current.platform) {
        score += 2;
      }

      if (item.type === current.type) {
        score += 1;
      }

      return {
        item,
        score,
      };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

export function getGenres() {
  return Array.from(
    new Set(allContent.flatMap((item) => item.tags))
  ).sort();
}

export function getContentByGenre(tag: string) {
  return allContent.filter((item) =>
    item.tags.some(
      (itemTag) => itemTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

export function createSlug(value: string) {
  return value
    .toLowerCase()
    .replaceAll("+", "")
    .replaceAll("&", "and")
    .replaceAll(" ", "-");
}

export function getPlatforms() {
  return Array.from(
    new Set(allContent.map((item) => item.platform))
  ).sort();
}

export function getPlatformBySlug(slug: string) {
  return getPlatforms().find(
    (platform) => createSlug(platform) === slug
  );
}

export function getContentByPlatform(platform: string) {
  return allContent.filter(
    (item) =>
      item.platform.toLowerCase() === platform.toLowerCase()
  );
}

export function createPersonSlug(name: string) {
  return name.toLowerCase().replaceAll(" ", "-");
}

export function getContentByPerson(
  role: "cast" | "director" | "writer",
  slug: string
) {
  if (role === "cast") {
    return allContent.filter((item) =>
      item.starCast.some(
        (person) => createPersonSlug(person.name) === slug
      )
    );
  }

  if (role === "director") {
    return allContent.filter((item) =>
      item.directors.some(
        (person) => createPersonSlug(person.name) === slug
      )
    );
  }

  return allContent.filter((item) =>
    item.writers.some(
      (person) => createPersonSlug(person.name) === slug
    )
  );
}

export function getPersonBySlug(
  role: "cast" | "director" | "writer",
  slug: string
) {
  const content = getContentByPerson(role, slug);

  if (content.length === 0) return null;

  if (role === "cast") {
    return content[0].starCast.find(
      (person) => createPersonSlug(person.name) === slug
    );
  }

  if (role === "director") {
    return content[0].directors.find(
      (person) => createPersonSlug(person.name) === slug
    );
  }

  return content[0].writers.find(
    (person) => createPersonSlug(person.name) === slug
  );
}

export function getVidkingEmbedUrl(content: Content) {
  if (!content.tmdbId) return null;

  if (content.type === "movie") {
    return `https://www.vidking.net/embed/movie/${content.tmdbId}?color=ffa500&autoPlay=true`;
  }

  return `https://www.vidking.net/embed/tv/${content.tmdbId}/${content.season ?? 1}/${content.episode ?? 1}?color=ffa500&autoPlay=true&nextEpisode=true&episodeSelector=true`;
}