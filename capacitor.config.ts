import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kyadekhe.app",
  appName: "KyaDekhe?",
  webDir: "public",
  server: {
    url: "https://kyadekhein.vercel.app",
    cleartext: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      backgroundColor: "#020412",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    },
  },
};

export default config;