import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import { getContentByType } from "@/lib/content";

export default function WebSeriesPage() {
  const content = getContentByType("web-series");

  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">Web Series</h1>

        <p className="mt-2 text-sm text-zinc-400">
          Discover binge-worthy web series and episodic content on KyaDekhe?
        </p>

        {content.length === 0 ? (
          <EmptyState
            title="No web series found"
            description="Web series added to KyaDekhe will appear here."
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