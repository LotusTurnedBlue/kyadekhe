"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Clock3, Play, Star } from "lucide-react";

import { getContinueWatchingItems } from "@/lib/continueWatching";
import type { ContinueWatchingItem } from "@/lib/continueWatching";
import type { Content } from "@/types/content";

type HistoryClientProps = {
  content: Content[];
};

type HistoryItem = ContinueWatchingItem & {
  content?: Content;
};

export default function HistoryClient({ content }: HistoryClientProps) {
  const [items, setItems] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const history = getContinueWatchingItems();

    const merged = history.map((item) => ({
      ...item,
      content: content.find((contentItem) => contentItem.slug === item.slug),
    }));

    setItems(merged);
  }, [content]);

  if (items.length === 0) {
    return (
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <p className="text-white/70">No watch history yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-4">
      {items.map((item) => {
        const title = item.content?.title ?? item.slug;
        const poster = item.content?.img;
        const rating = item.content?.rating;
        const release = item.content?.releasedOn;

        return (
          <Link
            key={item.slug}
            href={`/watch/${item.slug}?type=${item.type ?? item.content?.type}`}
            className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-orange-400/50 hover:bg-white/[0.07]"
          >
            {poster && (
              <img
                src={poster}
                alt={title}
                className="h-28 w-20 shrink-0 rounded-2xl object-cover"
              />
            )}

            <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Clock3 size={14} />
                  {Math.round(item.progress)}% watched
                </div>

                <h2 className="mt-2 line-clamp-1 text-lg font-bold text-white">
                  {title}
                </h2>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-white/40">
                  {rating && (
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      {rating}
                    </span>
                  )}

                  {rating && release && <span>•</span>}

                  {release && <span>{release}</span>}
                </div>

                <div className="mt-4 h-1.5 w-52 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>

              <div className="hidden rounded-full bg-white/10 p-3 text-white md:block">
                <Play size={18} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}