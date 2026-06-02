"use client";

import Link from "next/link";
import { User, Heart, Settings, LogIn, History } from "lucide-react";
import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-orange-400/60 hover:bg-white/10"
        aria-label="User menu"
      >
        <User size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/95 shadow-2xl backdrop-blur-xl">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="text-sm font-semibold text-white">Welcome</p>
            <p className="text-xs text-white/50">Sign in coming soon</p>
          </div>

          <div className="p-2">
            <Link
              href="/watchlist"
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              <Heart size={16} />
              Watchlist
            </Link>

            <Link
              href="/history"
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              <History size={16} />
              Watch History
            </Link>

            <Link
              href="/preferences"
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              <Settings size={16} />
              Preferences
            </Link>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
              <LogIn size={16} />
              Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}