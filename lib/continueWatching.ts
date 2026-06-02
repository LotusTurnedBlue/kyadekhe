const KEY = "kyadekhe-continue-watching";

export type ContinueWatchingType = "movie" | "tv-show" | "web-series";

export type ContinueWatchingItem = {
  slug: string;
  type?: ContinueWatchingType;
  progress: number;
  currentTime: number;
  duration: number;
  updatedAt: number;
};

export function getContinueWatchingItems(): ContinueWatchingItem[] {
  if (typeof window === "undefined") return [];

  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");

    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => {
        if (typeof item === "string") {
          return {
            slug: item,
            progress: 0,
            currentTime: 0,
            duration: 0,
            updatedAt: Date.now(),
          };
        }

        return item;
      })
      .filter((item) => item.slug);
  } catch {
    return [];
  }
}

export function getContinueWatchingSlugs(): string[] {
  return getContinueWatchingItems().map((item) => item.slug);
}

export function saveContinueWatchingSlug(
  slug: string,
  type?: ContinueWatchingType
) {
  if (typeof window === "undefined") return;

  const existing = getContinueWatchingItems();
  const previous = existing.find((item) => item.slug === slug);

  const updatedItem: ContinueWatchingItem = {
    slug,
    type: type ?? previous?.type,
    progress: previous?.progress ?? 0,
    currentTime: previous?.currentTime ?? 0,
    duration: previous?.duration ?? 0,
    updatedAt: Date.now(),
  };

  const updated = [
    updatedItem,
    ...existing.filter((item) => item.slug !== slug),
  ].slice(0, 12);

  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function saveContinueWatchingProgress({
  slug,
  type,
  progress,
  currentTime,
  duration,
}: {
  slug: string;
  type?: ContinueWatchingType;
  progress: number;
  currentTime: number;
  duration: number;
}) {
  if (typeof window === "undefined") return;

  const existing = getContinueWatchingItems();
  const previous = existing.find((item) => item.slug === slug);

  const updatedItem: ContinueWatchingItem = {
    slug,
    type: type ?? previous?.type,
    progress: Math.max(0, Math.min(progress, 100)),
    currentTime,
    duration,
    updatedAt: Date.now(),
  };

  const updated = [
    updatedItem,
    ...existing.filter((item) => item.slug !== slug),
  ].slice(0, 12);

  localStorage.setItem(KEY, JSON.stringify(updated));
}