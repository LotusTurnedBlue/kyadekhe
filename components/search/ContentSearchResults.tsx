"use client";

import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import type { Content } from "@/types/content";

type ContentResultsProps = {
  content: Content[];
};

export default function ContentResults({ content }: ContentResultsProps) {
  if (content.length === 0) {
    return (
      <EmptyState
        title="No results found"
        description="Try another movie, show, platform, genre or mood."
      />
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
      {content.map((item) => (
        <ContentPosterCard key={item.slug} item={item} />
      ))}
    </div>
  );
}