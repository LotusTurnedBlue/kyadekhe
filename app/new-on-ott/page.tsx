"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";
import ContentTypeTabs from "@/components/content/ContentTypeTabs";
import { newOtt } from "@/data/homeContent";
import type { ContentFilterType } from "@/types/content";

export default function NewOnOttPage() {
  const [type, setType] = useState<ContentFilterType>("all");

  const content = useMemo(() => {
    return type === "all"
      ? newOtt
      : newOtt.filter((item) => item.type === type);
  }, [type]);

  return (
    <AppShell>
      <ContentGridPage
        title="New on OTT"
        subtitle="Fresh releases across streaming platforms."
        content={content}
      >
        <ContentTypeTabs value={type} onChange={setType} />
      </ContentGridPage>
    </AppShell>
  );
}