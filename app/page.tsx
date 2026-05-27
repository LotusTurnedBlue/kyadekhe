"use client";

import { Flame, Clapperboard } from "lucide-react";
import { topPicks, trending, newOtt, moodRows } from "@/data/homeContent";

import AppShell from "@/components/layout/AppShell";

import HeroSection from "@/components/home/HeroSection";
import TopPicksSection from "@/components/home/TopPicksSection";
import ContentRow from "@/components/content/ContentRow";
import WhyKyaDekhe from "@/components/home/WhyKyaDekhe";
import SurpriseBanner from "@/components/home/SurpriseBanner";

export default function KyaDekheHomepage() {
  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 md:px-10 md:pb-10">
        <HeroSection />

        <section id="top-picks">
          <TopPicksSection content={topPicks} />
        </section>

        <section id="trending">
          <ContentRow
            icon={Flame}
            title="Trending Today"
            subtitle="What India is watching right now"
            content={trending}
            accent="text-orange-400"
            href="/trending"
          />
        </section>

        <section id="new-on-ott">
          <ContentRow
            icon={Clapperboard}
            title="New on OTT"
            subtitle="Fresh releases across platforms"
            content={newOtt}
            badge="New"
            compact
            accent="text-orange-400"
            href="/new-on-ott"
          />
        </section>

        {moodRows.map((row) => (
          <ContentRow
            key={row.title}
            icon={row.icon}
            title={row.title}
            subtitle={row.subtitle}
            content={row.content}
            accent={row.accent}
          />
        ))}

        <WhyKyaDekhe />

        <SurpriseBanner />
      </div>
    </AppShell>
  );
}