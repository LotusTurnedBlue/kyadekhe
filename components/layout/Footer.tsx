import Image from "next/image";
import Link from "next/link";
import {
  Clapperboard,
  Flame,
  Heart,
  Search,
  Sparkles,
  Tv,
} from "lucide-react";

import BrandLogo from "@/components/branding/BrandLogo";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Movies", href: "/movies" },
      { label: "TV Shows", href: "/tv-shows" },
      { label: "Web Series", href: "/web-series" },
      { label: "OTT Platforms", href: "/ott-platforms" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Trending", href: "/trending" },
      { label: "Top Picks", href: "/top-picks" },
      { label: "New on OTT", href: "/new-on-ott" },
      { label: "Latest Releases", href: "/latest-releases" },
    ],
  },
  {
    title: "For You",
    links: [
      { label: "Mood Picks", href: "/mood" },
      { label: "Genres", href: "/genre" },
      { label: "Watchlist", href: "/watchlist" },
      { label: "Search", href: "/search" },
    ],
  },
];

const quickLinks = [
  {
    label: "Find a movie",
    href: "/search",
    icon: Search,
  },
  {
    label: "Trending now",
    href: "/trending",
    icon: Flame,
  },
  {
    label: "Mood picks",
    href: "/mood",
    icon: Heart,
  },
  {
    label: "OTT platforms",
    href: "/ott-platforms",
    icon: Tv,
  },
];

export default function Footer() {
  return (
    <footer className="mt-14 w-full border-white/10 bg-[#02040a]">
      <div className="mx-auto max-w-[1400px] pb-28 md:px-10 md:pb-10">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.075] via-white/[0.035] to-transparent p-5 shadow-2xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <BrandLogo />

              <h2 className="mt-5 max-w-xl text-2xl font-black leading-tight text-white md:text-4xl">
                Confused what to watch?
                <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  KyaDekhe? helps.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base md:leading-7">
                Discover movies, shows, web series, cast, creators, genres,
                OTT platforms and watch options in one premium entertainment
                experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.08]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-pink-600/20 text-orange-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-black text-white">
                      {item.label}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500 transition group-hover:text-zinc-300">
                      Explore now
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-orange-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  {group.title}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-zinc-400 sm:flex sm:flex-col">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl border border-white/5 bg-white/[0.025] px-3 py-2 transition hover:border-white/10 hover:bg-white/[0.06] hover:text-white sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-zinc-400 sm:flex">
                  <Clapperboard className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Powered by TheMovieDB
                  </p>

                  <Image
                    src="/tmdb_logo.png"
                    alt="TMDB"
                    width={273}
                    height={36}
                    className="h-auto w-[155px] py-1 opacity-85 md:w-[190px]"
                  />

                  <p className="mt-2 max-w-3xl text-xs leading-5 text-zinc-500">
                    This website uses TMDB and the TMDB APIs but is not
                    endorsed, certified, or otherwise approved by TMDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/10 pt-5 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} KyaDekhe?. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}