"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";
import ContentTypeTabs from "@/components/content/ContentTypeTabs";
import { topPicks } from "@/data/homeContent";
import type { ContentFilterType } from "@/types/content";
  
export default function TopPicksPage() {
  const [type, setType] = useState<ContentFilterType>("all");

  const content = useMemo(() => {
    return type === "all"
      ? topPicks
      : topPicks.filter((item) => item.type === type);
  }, [type]);

  return (
    <AppShell>
      <ContentGridPage
        title="Top Picks"
        subtitle="Handpicked titles worth watching."
        content={content}
      >
        <ContentTypeTabs value={type} onChange={setType} />
      </ContentGridPage>
    </AppShell>
  );
}