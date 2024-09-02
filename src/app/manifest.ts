import { MetadataRoute } from "next";
import colors from "tailwindcss/colors";

import narrow from "../../public/form_factor-narrow.webp";
import wide from "../../public/form_factor-wide.webp";
import android192 from "../../public/icons/android-chrome-192x192.png";
import android384 from "../../public/icons/android-chrome-384x384.png";
import android512 from "../../public/icons/android-chrome-512x512.png";
import {
  firstName,
  profileName,
} from "../lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profileName}'s site`,
    short_name: `${firstName} site`,
    icons: [
      {
        src: android192.src,
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: android192.src,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: android384.src,
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: android512.src,
        sizes: "512x512",
        type: "image/png"
      }
    ],
    start_url: ".",
    display: "minimal-ui",
    display_override: ["window-controls-overlay"],
    background_color: colors.gray[50],
    theme_color: colors.gray[50],
    screenshots: [
      {
        "form_factor": "narrow",
        src: narrow.src,
        sizes: "430x932",
        type: "image/webp"
      },
      {
        "form_factor": "wide",
        src: wide.src,
        sizes: "1280x800",
        type: "image/webp"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: remove "as any" when screenshots type supports form_factor
      } as any
    ]
  };
};