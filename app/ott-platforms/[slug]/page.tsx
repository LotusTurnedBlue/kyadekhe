import { notFound } from "next/navigation";

import AppShell from "@/components/layout/AppShell";
import PlatformContentGrid from "@/components/ott-platforms/PlatformContentGrid";

import {
  getContentByPlatform,
  getPlatformBySlug,
} from "@/lib/content";

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

  return (
    <AppShell>
      <PlatformContentGrid
        platform={platform}
        content={getContentByPlatform(platform)}
      />
    </AppShell>
  );
}