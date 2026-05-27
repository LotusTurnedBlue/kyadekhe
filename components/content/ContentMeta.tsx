import { Star } from "lucide-react";

import type { Content } from "@/types/content";

type ContentMetaProps = {
  content: Content;
};

export default function ContentMeta({
  content,
}: ContentMetaProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-300">
      <span className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        {content.rating}
      </span>

      <span>{content.releasedOn}</span>
      <span>{content.runtime}</span>

      {content.tags.map((tag) => (
        <a
          key={tag}
          href={`/genre/${tag.toLowerCase().replaceAll(" ", "-")}`}
          className="rounded-full border border-blue/40 bg-white/10 px-2.5 py-1 text-xs font-semibold text-blue-400 transition hover:border-orange-500 hover:text-white"
        >
          {tag}
        </a>
      ))}
    </div>
  );
}