"use client";

import { useEffect } from "react";
import {
  saveContinueWatchingProgress,
  saveContinueWatchingSlug,
  type ContinueWatchingType,
} from "@/lib/continueWatching";

type PlayerMessage = {
  type?: string;
  data?: {
    event?: string;
    currentTime?: number;
    duration?: number;
    progress?: number;
  };
};

export default function SaveContinueWatching({
  slug,
  type,
}: {
  slug: string;
  type?: ContinueWatchingType;
}) {
  useEffect(() => {
    saveContinueWatchingSlug(slug, type);

    function handleMessage(event: MessageEvent) {
      let message: PlayerMessage | null = null;

      try {
        message =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }

      if (message?.type !== "PLAYER_EVENT") return;

      const data = message.data;
      if (!data) return;

      const progress =
        typeof data.progress === "number"
          ? data.progress
          : data.duration && data.currentTime
            ? (data.currentTime / data.duration) * 100
            : 0;

      saveContinueWatchingProgress({
        slug,
        type,
        progress,
        currentTime: data.currentTime ?? 0,
        duration: data.duration ?? 0,
      });
    }

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [slug, type]);

  return null;
}