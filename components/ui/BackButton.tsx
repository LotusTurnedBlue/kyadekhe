"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/[0.09]"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}