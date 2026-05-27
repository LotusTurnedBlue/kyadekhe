"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  X,
  Home,
  Clapperboard,
  Tv,
  Film,
  MonitorPlay,
  Info,
  ChevronDown,
} from "lucide-react";

import BrandLogo from "@/components/branding/BrandLogo";
import { createSlug, getPlatforms } from "@/lib/content";

const menuItems = [
  ["Home", "/", Home],
  ["Movies", "/movies", Clapperboard],
  ["TV Shows", "/tv-shows", Tv],
  ["Web Series", "/web-series", Film],
  ["About", "/about", Info],
] as const;

const preferredPlatforms = [
  "NETFLIX",
  "prime video",
  "Disney+ hotstar",
];

function sortPlatforms(platforms: string[]) {
  const primary = preferredPlatforms.filter((platform) =>
    platforms.includes(platform)
  );

  const rest = platforms.filter(
    (platform) => !preferredPlatforms.includes(platform)
  );

  return { primary, rest };
}

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [openPlatforms, setOpenPlatforms] = useState(false);

  const platforms = getPlatforms();

  const { primary: primaryPlatforms, rest: morePlatforms } =
    sortPlatforms(platforms);

  const orderedPlatforms = [
    ...primaryPlatforms,
    ...morePlatforms,
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-[2147483647] h-dvh w-dvw bg-[#030811] md:hidden">
      <div className="flex h-dvh flex-col overflow-y-auto">
        <div className="relative flex items-center border-b border-[#111c2e] px-4 py-3">
          <button
            onClick={onClose}
            className="z-10 flex h-10 w-10 items-center justify-center text-zinc-300"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex flex-1 justify-center">
              <BrandLogo />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center px-6 pb-10 pt-6">
          <nav className="flex w-full max-w-sm flex-col gap-1">
            {menuItems.map(([label, href, Icon]) => (
              <Link
                key={label}
                href={href}
                onClick={onClose}
                className="group flex items-center justify-between border-b border-[#111c2e] py-5 text-white"
              >
                <span className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-orange-400" />
                  <span className="text-xl font-black tracking-tight">
                    {label}
                  </span>
                </span>

                <span className="text-sm text-zinc-600 transition group-hover:text-orange-400">
                  →
                </span>
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setOpenPlatforms((value) => !value)}
              className="flex items-center justify-between border-b border-[#111c2e] py-5 text-white"
            >
              <span className="flex items-center gap-4">
                <MonitorPlay className="h-5 w-5 text-orange-400" />

                <span className="text-xl font-black tracking-tight">
                  OTT Platforms
                </span>
              </span>

              <ChevronDown
                className={`h-5 w-5 text-zinc-600 transition ${
                  openPlatforms ? "rotate-180 text-orange-400" : ""
                }`}
              />
            </button>

            {openPlatforms && (
              <div className="border-b border-[#111c2e] py-3 pl-9">
                {orderedPlatforms.map((platform) => (
                  <Link
                    key={platform}
                    href={`/ott-platforms/${createSlug(platform)}`}
                    onClick={onClose}
                    className="block py-3 text-base font-bold text-zinc-400 transition hover:text-white"
                  >
                    {platform}
                  </Link>
                ))}
              </div>
            )}
          </nav>
        </div>

        <div className="border-t border-[#111c2e] px-6 py-5 text-center">
          <p className="text-xs font-medium text-zinc-500">
            KyaDekhe? • Jo mood, woh movie.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}