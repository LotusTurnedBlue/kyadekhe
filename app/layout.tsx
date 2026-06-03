import type { Metadata } from "next";
import RegisterServiceWorker from "@/components/pwa/RegisterServiceWorker";
import { Geist, Geist_Mono } from "next/font/google";
import HideSplashScreen from "@/components/native/HideSplashScreen";

import "./globals.css";

import InspectBlocker from "@/components/layout/InspectBlocker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KyaDekhe?",
  description: "Jo mood, woh movie.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "KyaDekhe?",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <InspectBlocker />
        <RegisterServiceWorker />
        <HideSplashScreen />
        {children}
      </body>
    </html>
  );
}