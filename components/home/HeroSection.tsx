"use client";

import { ChevronRight, Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-5 md:pt-6">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.035] shadow-2xl md:rounded-2xl">
        <div className="relative min-h-[255px] bg-[linear-gradient(90deg,rgba(3,8,17,0.98)_0%,rgba(3,8,17,0.82)_37%,rgba(3,8,17,0.35)_67%,rgba(3,8,17,0.88)_100%),url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center p-5 md:min-h-[350px] md:p-12">
        <div className="max-w-[330px] md:max-w-[460px]">
            <div className="mb-3 inline-flex rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-zinc-300 md:mb-5 md:px-4 md:py-2 md:text-xs">
            What to watch today?
            </div>

            <h1 className="text-[32px] font-black leading-[1.05] tracking-tight md:text-[62px]">
            Jo mood,<br />woh{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                movie.
            </span>
            </h1>

            <p className="mt-3 max-w-[270px] text-[13px] leading-5 text-zinc-200 md:mt-5 md:max-w-[410px] md:text-xl md:leading-8">
            Browse mood-wise movies, trending picks and where to watch them across your favorite OTT platforms.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 md:mt-8">
            <button className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 text-sm font-bold shadow-xl shadow-pink-600/20 md:rounded-2xl md:px-8 md:py-4">
                Explore Picks <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="hidden rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10 md:inline-flex">
                Surprise Me
            </button>
            </div>
        </div>
        
        <div className="absolute right-10 top-8 hidden w-[255px] md:block">
            <p className="mb-4 text-center text-base font-semibold">Available on</p>
            <div className="grid grid-cols-2 gap-3">
            {["NETFLIX", "prime video", "JioHotstar", "SONY liv", "JioCinema", "ZEE5"].map((name) => (
                <div key={name} className="flex h-14 items-center justify-center rounded-lg border border-white/10 bg-black/45 text-sm font-black text-white">
                {name}
                </div>
            ))}
            
            </div>

            <button className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] text-sm text-white">
            <Plus className="h-4 w-4" /> More
            </button>
            </div>

        <ChevronRight className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70 md:hidden" />

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-5">
            <span className="h-1.5 w-5 rounded-full bg-orange-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
            </div>
            </div>
            </div>
    </section>
    );
}