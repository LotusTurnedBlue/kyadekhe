"use client";

import {
  Search,
  Home,
  Grid3X3,
  Clapperboard,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  ["Home", "/", Home],
  ["Search", "/search", Search],
  ["Watchlist", "/watchlist", Clapperboard],
  ["More", "/more", Grid3X3],
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
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
      </div>

      <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-white" />
    </nav>
  );
}