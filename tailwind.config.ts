import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        "41": "145px",
        "100dvw": "100dvw",
        "50dvw": "50dvw",
      },
      height: {
        "100dvh": "100dvh",
        "50dvh": "50dvh",
      },
      minHeight: {
        "screen-dynamic": "100dvh",
      },
      maxWidth: {
        "screen-dynamic": "100dvw",
      },
      screens: {
        xs: { max: "375px" },
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
      },
      keyframes: {
        "border-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.1)",
            borderColor: "rgba(59, 130, 246, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.5)",
            borderColor: "rgba(59, 130, 246, 0.6)",
          },
        },
      },
      animation: {
        "border-glow": "border-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".custom-blue-filter": {
          filter: "brightness(0%) saturate(50%) invert(100%) sepia(0%)",
        },
      });
    },
  ],
};

export default config;
