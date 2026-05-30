"use client";

import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import type { Content } from "@/types/content";

type ContentResultsProps = {
  content: Content[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export default function ContentSearchResults({
  content,
  emptyTitle = "No results found",
  emptyDescription = "Try another movie, show, platform, genre or mood.",
}: ContentResultsProps) {
  if (content.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
      {content.map((item) => (
        <ContentPosterCard
          key={`${item.slug}-${item.tmdbId ?? item.title}`}
          item={item}
        />
      ))}
    </div>
  );
}