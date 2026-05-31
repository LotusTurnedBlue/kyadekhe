"use client";

import { useState } from "react";
import {
  Search,
  Home,
  Grid3X3,
  Clapperboard,
  X,
  Tags,
  MonitorPlay,
  Flame,
  Sparkles,
  CalendarDays,
  Info,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  ["Home", "/", Home],
  ["Search", "/search", Search],
  ["Watchlist", "/watchlist", Clapperboard],
] as const;

const moreItems = [
  ["Genres", "/genre", Tags],
  ["OTT Platforms", "/ott-platforms", MonitorPlay],
  ["Trending", "/trending", Flame],
  ["Top Picks", "/top-picks", Sparkles],
  ["Latest Releases", "/latest-releases", CalendarDays],
  ["New on OTT", "/new-on-ott", Clapperboard],
  ["About to be named", "/about", Info],
] as const;

export default function BottomNav() {
  const pathname = usePathname();
  const [openMore, setOpenMore] = useState(false);

  return (
    <>
      {openMore && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setOpenMore(false)}
            className="absolute inset-0 h-full w-full"
          />

          <div className="absolute bottom-0 left-0 right-0 rounded-t-[32px] border-t border-white/10 bg-[#07101d] px-5 pb-8 pt-5 shadow-2xl">
            <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-white/30" />

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">
                  Explore
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Find more ways to discover what to watch.
                </p>
              </div>

              <button
                onClick={() => setOpenMore(false)}
                className="rounded-full border border-white/10 bg-white/[0.06] p-3 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {moreItems.map(([label, href, Icon]) => {
                const active =
                  pathname === href ||
                  pathname.startsWith(`${href}/`);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpenMore(false)}
                    className={`rounded-2xl border p-4 transition ${
                      active
                        ? "border-orange-500 bg-orange-500/10 text-orange-400"
                        : "border-white/10 bg-white/[0.04] text-white"
                    }`}
                  >
                    <Icon className="mb-3 h-5 w-5 text-orange-400" />
                    <span className="text-sm font-black">
                      {label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#07101d]/95 px-3 pb-5 pt-3 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-4 text-[11px] text-zinc-400">
          {navItems.map(([label, href, Icon]) => {
            const active = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={`flex flex-col items-center gap-1.5 transition ${
                  active ? "text-orange-500" : "text-zinc-400"
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${
                    active ? "fill-orange-500/25" : ""
                  }`}
                />
                <span>{label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setOpenMore(true)}
            className={`flex flex-col items-center gap-1.5 transition ${
              openMore ? "text-orange-500" : "text-zinc-400"
            }`}
          >
            <Grid3X3
              className={`h-6 w-6 ${
                openMore ? "fill-orange-500/25" : ""
              }`}
            />
            <span>More</span>
          </button>
        </div>

        <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-white" />
      </nav>
    </>
  );
}