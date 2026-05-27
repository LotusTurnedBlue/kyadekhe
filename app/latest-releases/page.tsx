"use client";

import { useMemo, useState } from "react";

import AppShell from "@/components/layout/AppShell";
import ContentGridPage from "@/components/content/ContentGridPage";
import ContentTypeTabs from "@/components/content/ContentTypeTabs";
import { allContent } from "@/lib/content";
import type { ContentFilterType } from "@/types/content";

export default function LatestReleasesPage() {
  const [type, setType] = useState<ContentFilterType>("all");

  const content = useMemo(() => {
    return type === "all"
      ? allContent
      : allContent.filter((item) => item.type === type);
  }, [type]);

  return (
    <AppShell>
      <ContentGridPage
        title="Latest Releases"
        subtitle="Recently added titles on KyaDekhe?"
        content={content}
      >
        <ContentTypeTabs value={type} onChange={setType} />
      </ContentGridPage>
    </AppShell>
  );
}