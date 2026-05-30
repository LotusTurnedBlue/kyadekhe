import { notFound } from "next/navigation";

import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";

import { getGenreBySlug } from "@/lib/genres";
import { getTmdbContentByGenre } from "@/lib/tmdbContent";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GenreDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const genre = getGenreBySlug(slug);

  if (!genre) {
    notFound();
  }

  const content = await getTmdbContentByGenre(genre.id);

  return (
    <AppShell>
      <ContentGridPage
        title={genre.name}
        subtitle={`Explore ${genre.name} titles on KyaDekhe?`}
        content={content}
        enableTypeFilter
      />
    </AppShell>
  );
}