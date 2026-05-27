"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Flame,
  Sparkles,
  Clapperboard,
  Clock3,
  Trophy,
  Shapes,
  MonitorPlay,
} from "lucide-react";

const navItems = [
  ["Latest Releases", "/latest-releases", Clock3],
  ["Trending", "/trending", Flame],
  ["New on OTT", "/new-on-ott", Clapperboard],
  ["Top Picks", "/top-picks", Sparkles],
  ["Popular", "/popular", Trophy],
  ["OTT Platforms", "/ott-platforms", MonitorPlay],
  ["Genres", "/genre", Shapes],
] as const;

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[69px] z-40 border-b border-[#101827] bg-[#030811] md:top-[86px]">
      <div className="mx-auto max-w-[1540px] px-3 md:px-10">
        <nav className="flex items-center gap-7 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map(([label, href, Icon]) => {
            const active =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={label}
                href={href}
                className={`group relative flex shrink-0 items-center gap-1.5 text-[11px] font-semibold transition md:text-sm ${
                  active ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition ${
                    active
                      ? "text-orange-400"
                      : "text-zinc-600 group-hover:text-orange-400"
                  }`}
                />

                <span className="whitespace-nowrap">{label}</span>

                <span
                  className={`absolute -bottom-3 left-0 h-[2px] transition-all duration-300 ${
                    active
                      ? "w-full bg-orange-500"
                      : "w-0 bg-orange-500 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}