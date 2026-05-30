export const revalidate = 86400;

import { notFound } from "next/navigation";
import type { Content } from "@/types/content";

import AppShell from "@/components/layout/AppShell";
import PlatformContentGrid from "@/components/ott-platforms/PlatformContentGrid";

import { getPlatformBySlug } from "@/lib/ott-platforms";
import { getTmdbContentByPlatform } from "@/lib/tmdbContent";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlatformDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const platform = getPlatformBySlug(slug);

  if (!platform) {
    notFound();
  }

  let content: Content[] = [];

  try {
    content = await getTmdbContentByPlatform(
      platform.tmdbWatchProviderId
    );
  } catch (error) {
    console.error(
      "TMDB platform fetch failed:",
      error
    );
  }

  return (
    <AppShell>
      <PlatformContentGrid
        platform={platform.name}
        content={content}
      />
    </AppShell>
  );
}