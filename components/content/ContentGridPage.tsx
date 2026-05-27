"use client";

import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";
import type { Content } from "@/types/content";


type ContentGridPageProps = {
  title: string;
  subtitle: string;
  content: Content[];
  children?: React.ReactNode;
};

export default function ContentGridPage({
  title,
  subtitle,
  content,
  children,
}: ContentGridPageProps) {
  return (
    <div className="relative z-10 mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
      <h1 className="text-3xl font-black md:text-5xl">{title}</h1>

      <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>

      {children}

      {content.length === 0 ? (
        <EmptyState
          title="Nothing found"
          description="Try changing the filter or checking another section."
        />
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
          {content.map((item) => (
            <ContentPosterCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}