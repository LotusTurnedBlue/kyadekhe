"use client";

import { Sparkles } from "lucide-react";

import type { Content } from "@/types/content";
import SectionHeader from "@/components/home/SectionHeader";
import ContentPickCard from "@/components/content/ContentPickCard";

type TopPicksSectionProps = {
  content: Content[];
};

export default function TopPicksSection({ content }: TopPicksSectionProps) {
  return (
    <section className="pt-8">
      <SectionHeader
        icon={Sparkles}
        title="Top Picks for You"
        subtitle="Based on what most people are loving right now"
        badge="Hot"
        accent="text-pink-400"
        href="/top-picks"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {content.map((item) => (
          <ContentPickCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}