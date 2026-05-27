"use client";

import { Plus, Star } from "lucide-react";
import { motion } from "framer-motion";

import type { Content } from "@/types/content";
import Link from "next/link";

type PickCardProps = {
  item: Content;
};

export default function PickCard({ item }: PickCardProps) {
  return (
    <Link href={`/${item.type}/${item.slug}`} className="block">
      <motion.div
        whileHover={{ y: -5 }}
        className="flex min-w-[330px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-xl transition hover:border-pink-500/40 md:min-w-0"
      >
        <img
          src={item.img}
          alt={item.title}
          className="h-36 w-28 object-cover md:h-40 md:w-28"
        />

        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="text-base font-black text-white md:text-lg">
              {item.title}
            </h3>
            
            <p className="mt-1 flex items-center gap-1 text-[11px] text-zinc-400 md:text-xs">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{item.rating}</span>
            </p>

            <p className="mt-3 line-clamp-2 text-[11px] leading-5 text-zinc-400 md:text-xs">
              {item.plot}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs font-black text-cyan-300">{item.platform}</p>

            <button className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}