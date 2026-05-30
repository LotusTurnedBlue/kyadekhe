export const revalidate = 86400;

import { notFound } from "next/navigation";
import {
  Clapperboard,
  MonitorPlay,
  Sparkles,
  UserRound,
} from "lucide-react";

import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";
import EmptyState from "@/components/ui/EmptyState";

import { getTmdbContentByPerson } from "@/lib/tmdbContent";

type PageProps = {
  params: Promise<{
    role: string;
    slug: string;
  }>;
};

function isValidRole(
  role: string
): role is "cast" | "director" | "writer" {
  return (
    role === "cast" ||
    role === "director" ||
    role === "writer"
  );
}

function formatRole(role: string) {
  if (role === "cast") return "Actor";
  if (role === "director") return "Director";
  return "Writer";
}

function getTopValue(values: string[]) {
  const counts = values.reduce<Record<string, number>>(
    (acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "Mixed"
  );
}

export default async function PersonPage({
  params,
}: PageProps) {
  const { role, slug } = await params;

  if (!isValidRole(role)) {
    notFound();
  }

  const { personName, personImage, content } =
    await getTmdbContentByPerson(role, slug);

  const formattedRole = formatRole(role);

  const platforms = Array.from(
    new Set(content.map((item) => item.platform))
  );

  const topGenres = content.flatMap((item) => item.tags);

  const knownFor = content
    .slice(0, 3)
    .map((item) => item.title)
    .join(", ");

  const stats = [
    {
      label: "Titles",
      value: content.length.toString(),
      icon: Clapperboard,
    },
    {
      label: "Top Genre",
      value: getTopValue(topGenres),
      icon: Sparkles,
    },
    {
      label: "Top Platform",
      value: getTopValue(platforms),
      icon: MonitorPlay,
    },
    {
      label: "Role",
      value: formattedRole,
      icon: UserRound,
    },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <section className="rounded-[28px] border border-white/10 bg-[#07101d] p-5 md:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex gap-5">
              <img
                src={personImage}
                alt={personName}
                className="h-32 w-32 rounded-2xl object-cover md:h-40 md:w-40"
              />

              <div>
                <h1 className="text-4xl font-black text-white md:text-6xl">
                  {personName}
                </h1>

                <p className="mt-1 text-sm font-black text-orange-400">
                  {formattedRole}
                </p>

                {knownFor && (
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                    Known for{" "}
                    <span className="font-bold text-zinc-200">
                      {knownFor}
                    </span>
                    .
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-[#030811] px-4 py-3"
                >
                  <Icon className="mb-2 h-4 w-4 text-orange-400" />
                  <p className="text-[10px] font-bold uppercase text-zinc-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-black capitalize text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-white">
            Titles with {personName}
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Browse TMDB-powered credits connected to this{" "}
            {formattedRole.toLowerCase()}.
          </p>

          {content.length === 0 ? (
            <EmptyState
              title="No credits found"
              description="TMDB did not return matching titles for this person yet."
            />
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
              {content.map((item) => (
                <ContentPosterCard
                  key={`${item.slug}-${item.tmdbId ?? item.title}`}
                  item={item}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </AppShell>
  );
}