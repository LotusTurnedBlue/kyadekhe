"use client";

import { Sparkles } from "lucide-react";

import type { Content } from "@/types/content";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import SectionHeader from "@/components/home/SectionHeader";

type SimilarContentProps = {
  content: Content[];
};

export default function SimilarContent({
  content,
}: SimilarContentProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-6 pt-4">
      <SectionHeader
        icon={Sparkles}
        title="You May Like"
        subtitle="More picks you may like"
        accent="text-pink-400"
      />

      <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] md:grid md:grid-cols-5 md:overflow-visible [&::-webkit-scrollbar]:hidden">
        {content.slice(0, 5).map((item) => (
          <ContentPosterCard key={item.slug} item={item} compact />
        ))}
      </div>
    </section>
  );
}