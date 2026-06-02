"use client";

import { useEffect, useState } from "react";
import AppShell from "@/components/layout/AppShell";

const moods = [
  "Mind Fresh",
  "Dimaag Hila Dene Wali",
  "Dost Aaye Hue Hain",
  "Sunday Wali Movie",
  "Pura Suspense",
  "Dimaag Mat Lagana",
];

const platforms = ["Netflix", "Prime Video", "Hotstar", "JioCinema", "SonyLIV", "Zee5"];

const languages = ["Hindi", "English", "Punjabi", "Tamil", "Telugu", "Malayalam"];

type PreferenceKey = "moods" | "platforms" | "languages";

export default function PreferencesPage() {
  useEffect(() => {
    const stored = localStorage.getItem("kyadekhe-preferences");

    if (!stored) return;

    try {
      setSelected(JSON.parse(stored));
    } catch {
      localStorage.removeItem("kyadekhe-preferences");
    }
  }, []);

  const [selected, setSelected] = useState<Record<PreferenceKey, string[]>>({
    moods: [],
    platforms: [],
    languages: [],
  });

  const [saved, setSaved] = useState(false);

  function toggle(key: PreferenceKey, value: string) {
    setSaved(false);

    setSelected((prev) => {
      const exists = prev[key].includes(value);

      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value],
      };
    });
  }

  function savePreferences() {
    localStorage.setItem("kyadekhe-preferences", JSON.stringify(selected));
    setSaved(true);
  }

  return (
    <AppShell>
      <main className="min-h-screen bg-[#050505] px-4 py-24 text-white md:px-10">
        <section className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-medium text-orange-400">
            Personalize your picks
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            Your KyaDekhe Preferences
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 md:text-base">
            Choose what you usually like watching. Later, KyaDekhe will use this
            to recommend better movies, shows and web series for your mood.
          </p>

          <div className="mt-10 space-y-8">
            <PreferenceBlock title="Moods you like">
              {moods.map((mood) => (
                <Chip
                  key={mood}
                  active={selected.moods.includes(mood)}
                  onClick={() => toggle("moods", mood)}
                >
                  {mood}
                </Chip>
              ))}
            </PreferenceBlock>

            <PreferenceBlock title="OTT platforms you use">
              {platforms.map((platform) => (
                <Chip
                  key={platform}
                  active={selected.platforms.includes(platform)}
                  onClick={() => toggle("platforms", platform)}
                >
                  {platform}
                </Chip>
              ))}
            </PreferenceBlock>

            <PreferenceBlock title="Preferred languages">
              {languages.map((language) => (
                <Chip
                  key={language}
                  active={selected.languages.includes(language)}
                  onClick={() => toggle("languages", language)}
                >
                  {language}
                </Chip>
              ))}
            </PreferenceBlock>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={savePreferences}
              className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-[1.02]"
            >
              Save preferences
            </button>

            {saved && (
              <p className="text-sm font-medium text-green-400">
                Saved locally
              </p>
            )}
          </div>
        </section>
      </main>
    </AppShell>
  );
}

function PreferenceBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">{title}</h2>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "rounded-full border border-orange-400/70 bg-orange-500/15 px-4 py-2 text-sm text-white shadow-lg shadow-orange-500/20 transition"
          : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-orange-400/60 hover:bg-orange-500/10 hover:text-white"
      }
    >
      {children}
    </button>
  );
}