/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        // TeamMove Custom Colors
        "deep-navy": {
          DEFAULT: "oklch(0.08 0.02 240)",
          50: "oklch(0.15 0.05 240)",
          100: "oklch(0.12 0.03 240)",
          200: "oklch(0.20 0.03 240)",
        },
        "electric-blue": {
          DEFAULT: "oklch(0.55 0.25 240)",
          50: "oklch(0.60 0.20 240)",
          100: "oklch(0.50 0.20 240)",
          200: "oklch(0.45 0.15 240)",
        },
        "glow-cyan": {
          DEFAULT: "oklch(0.70 0.20 200)",
          50: "oklch(0.75 0.15 200)",
          100: "oklch(0.65 0.15 200)",
          200: "oklch(0.60 0.10 200)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
        gamja: ["var(--font-gamja)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 