import type React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type SectionHeaderProps = {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  badge?: string;
  accent?: string;
  href?: string;
};

export default function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  badge,
  accent = "text-orange-400",
  href,
}: SectionHeaderProps) {
  return (
    <div className="relative mb-4 flex items-end justify-between pb-3 md:mb-5">
      <div>
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 md:h-6 md:w-6 ${accent}`} />

          <h2 className="text-[18px] font-black text-white md:text-[24px]">
            {title}
          </h2>

          {badge && (
            <span className="rounded-full bg-purple-500/80 px-2 py-0.5 text-[10px] font-bold text-white md:text-xs">
              {badge}
            </span>
          )}
        </div>

        {subtitle && (
          <p className="mt-1 text-sm text-zinc-400 md:block">
            {subtitle}
          </p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-xs text-zinc-300 transition hover:text-white md:text-sm"
        >
          View All <ChevronRight className="h-4 w-4" />
        </Link>
      )}

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-orange-500 to-pink-600" />
    </div>
  );
}