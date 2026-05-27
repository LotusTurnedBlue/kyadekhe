"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";
import ContentTypeTabs from "@/components/content/ContentTypeTabs";
import { allContent } from "@/lib/content";
import type { ContentFilterType } from "@/types/content";

export default function PopularPage() {
  const [type, setType] = useState<ContentFilterType>("all");

  const content = useMemo(() => {
    const filtered =
      type === "all"
        ? allContent
        : allContent.filter((item) => item.type === type);

    return [...filtered].sort(
      (a, b) => Number(b.rating) - Number(a.rating)
    );
  }, [type]);

  return (
    <AppShell>
      <ContentGridPage
        title="Popular"
        subtitle="Highly rated titles across all content."
        content={content}
      >
        <ContentTypeTabs value={type} onChange={setType} />
      </ContentGridPage>
    </AppShell>
  );
}