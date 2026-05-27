"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";
import ContentTypeTabs from "@/components/content/ContentTypeTabs";
import { trending } from "@/data/homeContent";
import type { ContentFilterType } from "@/types/content";

export default function TrendingPage() {
  const [type, setType] = useState<ContentFilterType>("all");

  const content = useMemo(() => {
    return type === "all"
      ? trending
      : trending.filter((item) => item.type === type);
  }, [type]);

  return (
    <AppShell>
      <ContentGridPage
        title="Trending"
        subtitle="What people are watching right now."
        content={content}
      >
        <ContentTypeTabs value={type} onChange={setType} />
      </ContentGridPage>
    </AppShell>
  );
}