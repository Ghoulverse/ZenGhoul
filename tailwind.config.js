/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'ghoul-bg': '#f8f9fa',
        'ghoul-card': 'rgba(248, 249, 250, 0.9)',
        'ghoul-cyan': '#c4b5fd',
        'ghoul-purple': '#9ca3af',
        'ghoul-indigo': '#e5e7eb',
        'ghoul-text': '#374151',
        'ghoul-muted': '#6b7280',
        'ghoul-gold': '#c4b5fd',
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'glow': '0 0 20px rgba(196, 181, 253, 0.5), 0 0 40px rgba(156, 163, 175, 0.3)',
        'glow-intense': '0 0 30px rgba(196, 181, 253, 0.8), 0 0 60px rgba(156, 163, 175, 0.5)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "ghost-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "ghost-sway": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 10px #c4b5fd) drop-shadow(0 0 20px #9ca3af)" },
          "50%": { filter: "drop-shadow(0 0 20px #c4b5fd) drop-shadow(0 0 40px #9ca3af)" },
        },
        "glow-intense": {
          "0%, 100%": { filter: "drop-shadow(0 0 20px #c4b5fd) drop-shadow(0 0 40px #9ca3af)" },
          "50%": { filter: "drop-shadow(0 0 35px #c4b5fd) drop-shadow(0 0 70px #9ca3af)" },
        },
        "blink": {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
          "75%": { transform: "rotate(-6deg)" },
        },
        "float-up": {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "0.4" },
          "90%": { opacity: "0.1" },
          "100%": { transform: "translateY(-10vh) scale(1)", opacity: "0" },
        },
        "pulse-hint": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "screen-shake": {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-8px, -4px)" },
          "20%": { transform: "translate(8px, 4px)" },
          "30%": { transform: "translate(-6px, 2px)" },
          "40%": { transform: "translate(6px, -2px)" },
          "50%": { transform: "translate(-4px, 4px)" },
          "60%": { transform: "translate(4px, -4px)" },
          "70%": { transform: "translate(-2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "90%": { transform: "translate(-1px, 1px)" },
        },
        "flip": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(720deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "ghost-bob": "ghost-bob 3s ease-in-out infinite",
        "ghost-sway": "ghost-sway 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "glow-intense": "glow-intense 1.5s ease-in-out infinite",
        "blink": "blink 3s ease-in-out infinite",
        "wiggle": "wiggle 0.5s ease-in-out",
        "float-up": "float-up 12s ease-in-out infinite",
        "pulse-hint": "pulse-hint 2s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "screen-shake": "screen-shake 0.5s ease-in-out",
        "flip": "flip 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
