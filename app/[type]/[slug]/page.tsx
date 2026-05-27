import { notFound } from "next/navigation";

import { getTmdbMovieDetails } from "@/lib/tmdb";

import AppShell from "@/components/layout/AppShell";
import ContentHero from "@/components/content/ContentHero";
import SimilarContent from "@/components/content/SimilarContent";
import ContentWhereToWatch from "@/components/content/ContentWhereToWatch";
import ContentPeopleSection from "@/components/content/ContentPeopleSection";
import ContentFacts from "@/components/content/ContentFacts";
import ContentWhyWatch from "@/components/content/ContentWhyWatch";
import { mergeContentWithTmdb } from "@/lib/contentAdapter";

import {
  getContentBySlug,
  getSimilarContent,
} from "@/lib/content";

type PageProps = {
  params: Promise<{
    type: string;
    slug: string;
  }>;
};

export default async function ContentDetailPage({
  params,
}: PageProps) {
  const { type, slug } = await params;

  const content = getContentBySlug(slug);

  if (!content || content.type !== type) {
    notFound();
  }

  let tmdb = null;

  try {
    tmdb =
      content.tmdbId && content.type === "movie"
        ? await getTmdbMovieDetails(content.tmdbId)
        : null;
  } catch (error) {
    console.error("TMDB fetch failed:", error);
  }

  const displayContent = mergeContentWithTmdb(content, tmdb);
    
  return (
    <AppShell
      showBottomNav={false}
      showCategoryNav={false}
    >
      
      <ContentHero content={displayContent} />

      <ContentWhereToWatch content={displayContent} />
      <ContentWhyWatch content={displayContent} />
      <ContentFacts content={displayContent} />

      <ContentPeopleSection
        title="Star Cast"
        people={displayContent.starCast}
        type="cast"
      />

      <ContentPeopleSection
        title="Directors"
        people={displayContent.directors}
        type="crew"
      />

      <ContentPeopleSection
        title="Writers"
        people={displayContent.writers}
        type="crew"
      />

      <SimilarContent content={getSimilarContent(slug)} />
    </AppShell>
  );
}