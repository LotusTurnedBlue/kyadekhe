"use client";

import { useMemo, useState } from "react";

import ContentGridPage from "@/components/content/ContentGridPage";
import ContentTypeTabs from "@/components/content/ContentTypeTabs";

import type {
  Content,
  ContentFilterType,
} from "@/types/content";

type PlatformContentGridProps = {
  content: Content[];
  platform: string;
};

export default function PlatformContentGrid({
  content,
  platform,
}: PlatformContentGridProps) {
  const [type, setType] =
    useState<ContentFilterType>("all");

  const filteredContent = useMemo(() => {
    return type === "all"
      ? content
      : content.filter(
          (item) => item.type === type
        );
  }, [content, type]);

  return (
    <ContentGridPage
      title={platform}
      subtitle={`Browse everything available on ${platform}.`}
      content={filteredContent}
    >
      <ContentTypeTabs
        value={type}
        onChange={setType}
      />
    </ContentGridPage>
  );
}