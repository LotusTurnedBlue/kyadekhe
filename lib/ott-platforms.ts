export const ottPlatforms = [
  {
    name: "Netflix",
    slug: "netflix",
    tmdbWatchProviderId: 8,
  },
  {
    name: "Prime Video",
    slug: "prime-video",
    tmdbWatchProviderId: 119,
  },
  {
    name: "Disney+ Hotstar",
    slug: "disney-hotstar",
    tmdbWatchProviderId: 122,
  },
  {
    name: "JioHotstar",
    slug: "jiohotstar",
    tmdbWatchProviderId: 122,
  },
  {
    name: "SonyLIV",
    slug: "sonyliv",
    tmdbWatchProviderId: 237,
  },
  {
    name: "ZEE5",
    slug: "zee5",
    tmdbWatchProviderId: 232,
  },
  {
    name: "Apple TV+",
    slug: "apple-tv-plus",
    tmdbWatchProviderId: 350,
  },
];

export function getPlatformBySlug(slug: string) {
  return ottPlatforms.find((platform) => platform.slug === slug);
}