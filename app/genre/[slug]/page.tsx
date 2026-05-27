import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import { getContentByGenre, getGenres } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatGenre(slug: string) {
  return slug.replaceAll("-", " ");
}

export default async function GenreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const genre = formatGenre(slug);

  const validGenre = getGenres().find(
    (item) => item.toLowerCase() === genre.toLowerCase()
  );

  const content = validGenre ? getContentByGenre(validGenre) : [];

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black capitalize md:text-5xl">
          {validGenre ?? genre}
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Explore {validGenre ?? genre} titles on KyaDekhe?
        </p>

        {content.length === 0 ? (
          <EmptyState
            title={`No ${validGenre ?? genre} titles found`}
            description="Content added to this genre will appear here."
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
            {content.map((item) => (
              <ContentPosterCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
} 