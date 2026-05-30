"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  User,
  Clapperboard,
  Tv,
  Film,
} from "lucide-react";

import BrandLogo from "@/components/branding/BrandLogo";
import SearchPill from "@/components/ui/SearchPill";
import { ottPlatforms } from "@/lib/ott-platforms";

const navItems = [
  ["Movies", "/movies", Clapperboard],
  ["TV Shows", "/tv-shows", Tv],
  ["Web Series", "/web-series", Film],
] as const;

const preferredPlatformSlugs = [
  "netflix",
  "prime-video",
  "disney-hotstar",
];

function sortPlatforms() {
  const primary = ottPlatforms.filter((platform) =>
    preferredPlatformSlugs.includes(platform.slug)
  );

  const rest = ottPlatforms.filter(
    (platform) => !preferredPlatformSlugs.includes(platform.slug)
  );

  return { primary, rest };
}

export default function DesktopHeader() {
  const pathname = usePathname();
  const [openPlatforms, setOpenPlatforms] =
    useState(false);

  const { primary: primaryPlatforms, rest: morePlatforms } =
    sortPlatforms();

  return (
    <header className="sticky top-0 z-50 hidden border-b border-white/5 bg-[#030811]/85 backdrop-blur-xl md:block">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between px-10 py-5">
        <BrandLogo />

        <nav className="flex items-center gap-8 text-sm font-semibold">
          {navItems.map(([label, href, Icon]) => {
            const active =
              pathname === href ||
              pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 transition ${
                  active
                    ? "text-orange-400"
                    : "text-white hover:text-orange-400"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            );
          })}

          {primaryPlatforms.map((platform) => {
            const href = `/ott-platforms/${platform.slug}`;
            const active = pathname === href;

            return (
              <Link
                key={platform.slug}
                href={href}
                className={`transition ${
                  active
                    ? "text-orange-400"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {platform.name}
              </Link>
            );
          })}

          {morePlatforms.length > 0 && (
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenPlatforms((value) => !value)
                }
                className="flex items-center gap-1 text-white transition hover:text-orange-400"
              >
                and more
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    openPlatforms
                      ? "rotate-180 text-orange-400"
                      : ""
                  }`}
                />
              </button>

              {openPlatforms && (
                <div className="absolute left-0 top-full z-[999] mt-4 w-56 rounded-2xl border border-[#162338] bg-[#07101d] p-2 shadow-2xl">
                  {morePlatforms.map((platform) => (
                    <Link
                      key={platform.slug}
                      href={`/ott-platforms/${platform.slug}`}
                      onClick={() => setOpenPlatforms(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-[#0d1728] hover:text-white"
                    >
                      {platform.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

        <div className="flex items-center gap-6">
          <SearchPill />

          <button className="rounded-full bg-gradient-to-br from-orange-400 to-pink-600 p-3">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}