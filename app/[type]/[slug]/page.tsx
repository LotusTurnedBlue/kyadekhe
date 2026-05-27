import { notFound } from "next/navigation";

import AppShell from "@/components/layout/AppShell";
import ContentHero from "@/components/content/ContentHero";
import SimilarContent from "@/components/content/SimilarContent";
import ContentWhereToWatch from "@/components/content/ContentWhereToWatch";
import ContentPeopleSection from "@/components/content/ContentPeopleSection";
import ContentFacts from "@/components/content/ContentFacts";
import ContentWhyWatch from "@/components/content/ContentWhyWatch";

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

  return (
    <AppShell
      showBottomNav={false}
      showCategoryNav={false}
    >
      
      <ContentHero content={content} />

      <ContentWhereToWatch content={content} />
      <ContentWhyWatch content={content} />
      <ContentFacts content={content} />

      <ContentPeopleSection
        title="Star Cast"
        people={content.starCast}
        type="cast"
      />

      <ContentPeopleSection
        title="Directors"
        people={content.directors}
        type="crew"
      />

      <ContentPeopleSection
        title="Writers"
        people={content.writers}
        type="crew"
      />

      <SimilarContent content={getSimilarContent(slug)} />
    </AppShell>
  );
}