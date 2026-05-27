"use client";

import { useEffect } from "react";

export default function InspectBlocker() {
  useEffect(() => {
    const redirect = () => {
      window.location.replace("about:blank");
    };

    const blockContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      redirect();
    };

    const blockKeys = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      const blocked =
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey &&
          ["i", "j", "c"].includes(key)) ||
        (event.ctrlKey && key === "u") ||
        (event.metaKey && event.altKey && key === "i");

      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        redirect();
      }
    };

    window.addEventListener(
      "contextmenu",
      blockContextMenu,
      true
    );

    document.addEventListener(
      "contextmenu",
      blockContextMenu,
      true
    );

    window.addEventListener(
      "keydown",
      blockKeys,
      true
    );

    document.addEventListener(
      "keydown",
      blockKeys,
      true
    );

    return () => {
      window.removeEventListener(
        "contextmenu",
        blockContextMenu,
        true
      );

      document.removeEventListener(
        "contextmenu",
        blockContextMenu,
        true
      );

      window.removeEventListener(
        "keydown",
        blockKeys,
        true
      );

      document.removeEventListener(
        "keydown",
        blockKeys,
        true
      );
    };
  }, []);

  return null;
}