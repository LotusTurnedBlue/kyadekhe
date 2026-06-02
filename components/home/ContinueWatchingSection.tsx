"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

import ContentRow from "@/components/content/ContentRow";
import { getContinueWatchingItems } from "@/lib/continueWatching";

import type { Content } from "@/types/content";

type ContentWithProgress = Content & {
  progress?: number;
};

type ContinueWatchingSectionProps = {
  content: Content[];
};

export default function ContinueWatchingSection({
  content,
}: ContinueWatchingSectionProps) {
  const [items, setItems] = useState<ContentWithProgress[]>([]);

  useEffect(() => {
    const savedItems = getContinueWatchingItems();

    const watchedContent = savedItems
      .map((saved) => {
        const matched = content.find((item) => item.slug === saved.slug);

        if (!matched) return null;

        return {
          ...matched,
          progress: saved.progress,
        };
      })
      .filter(Boolean) as ContentWithProgress[];

    setItems(watchedContent);
  }, [content]);

  if (items.length === 0) return null;

  return (
    <ContentRow
      icon={Clock3}
      title="Continue Watching"
      subtitle="Pick up from where you left"
      content={items}
      accent="text-orange-400"
      cardHref={(item) => `/watch/${item.slug}?type=${item.type}`}
      cardProgress={(item) => (item as ContentWithProgress).progress}
    />
  );
}