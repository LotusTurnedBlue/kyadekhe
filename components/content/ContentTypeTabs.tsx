"use client";

import type { ContentFilterType } from "@/types/content";

type ContentTypeTabsProps = {
  value: ContentFilterType;
  onChange: (value: ContentFilterType) => void;
};

const tabs: {
  label: string;
  value: ContentFilterType;
}[] = [
  { label: "All", value: "all" },
  { label: "Movies", value: "movie" },
  { label: "TV Shows", value: "tv-show" },
  { label: "Web Series", value: "web-series" },
];

export default function ContentTypeTabs({
  value,
  onChange,
}: ContentTypeTabsProps) {
  return (
    <div className="relative z-50 mt-6 flex items-center gap-6 overflow-x-auto border-b border-[#101827] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {tabs.map((tab) => {
        const active = value === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`relative shrink-0 cursor-pointer pb-3 text-sm font-bold transition ${
              active
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {tab.label}

            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all ${
                active ? "w-full bg-orange-500" : "w-0 bg-transparent"
              }`}
            />
          </button>
          
        );
      })}
    </div>
  );
}