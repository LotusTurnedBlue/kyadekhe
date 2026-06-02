"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import type { Content } from "@/types/content";

type ContentPosterCardProps = {
  item: Content;
  compact?: boolean;
  hrefOverride?: string;
  progress?: number;
};

export default function ContentPosterCard({
  item,
  compact = false,
  hrefOverride,
  progress,
}: ContentPosterCardProps) {
  const href = hrefOverride ?? `/${item.type}/${item.slug}`;
  const safeProgress =
    typeof progress === "number" ? Math.max(0, Math.min(progress, 100)) : 0;

  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`group relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-xl transition hover:border-pink-500/40 ${
          compact ? "w-[140px] md:w-full" : "w-[145px] md:w-full"
        }`}
      >
        <div className="relative">
          <img
            src={item.img}
            alt={item.title}
            className={`${
              compact
                ? "h-[170px] md:h-[190px]"
                : "h-[205px] md:h-[265px]"
            } w-full object-cover transition duration-500 group-hover:scale-105`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur md:text-xs">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {item.rating}
          </div>

          {item.tags[0] && (
            <div className="absolute right-2 top-2 hidden rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold text-white backdrop-blur md:block">
              {item.tags[0]}
            </div>
          )}

          <div className="absolute bottom-0 w-full p-3">
            <h3 className="line-clamp-2 text-sm font-black text-white md:text-base">
              {item.title}
            </h3>

            <p className="mt-2 text-xs font-black text-cyan-300">
              {item.platform}
            </p>
          </div>

          {safeProgress > 0 && safeProgress < 100 && (
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-white/20">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
                style={{ width: `${safeProgress}%` }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}