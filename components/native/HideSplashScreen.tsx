"use client";

import { useEffect } from "react";
import { SplashScreen } from "@capacitor/splash-screen";

export default function HideSplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}