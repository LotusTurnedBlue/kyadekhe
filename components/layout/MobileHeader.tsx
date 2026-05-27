"use client";

import { useEffect, useState } from "react";
import { Menu, User } from "lucide-react";

import BrandLogo from "@/components/branding/BrandLogo";
import MobileMenu from "@/components/layout/MobileMenu";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#101827] bg-[#030811] md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-white"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 justify-center">
            <BrandLogo />
          </div>

          <button className="rounded-full bg-gradient-to-br from-orange-400 to-pink-600 p-3">
            <User className="h-3 w-3 text-white" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}