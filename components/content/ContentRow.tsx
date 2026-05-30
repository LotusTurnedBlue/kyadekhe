import type React from "react";

import type { Content } from "@/types/content";
import SectionHeader from "@/components/home/SectionHeader";
import ContentPosterCard from "@/components/content/ContentPosterCard";

type ContentRowProps = {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  content: Content[];
  badge?: string;
  compact?: boolean;
  accent?: string;
  href?: string;
};

export default function ContentRow({
  icon,
  title,
  subtitle,
  content,
  badge,
  compact = false,
  accent,
  href,
}: ContentRowProps) {
  return (
    <section className="pt-6 md:pt-7">
      <SectionHeader
        icon={icon}
        title={title}
        subtitle={subtitle}
        badge={badge}
        accent={accent}
        href={href}
      />

      <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] md:grid md:grid-cols-6 md:overflow-visible [&::-webkit-scrollbar]:hidden">
        {content.map((item) => (
          <ContentPosterCard
            key={`${title}-${item.slug}`}
            item={item}
            compact={compact}
          />
        ))}
      </div>
    </section>
  );
}