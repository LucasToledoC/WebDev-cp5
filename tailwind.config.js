/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        // Remove todas as cores azuis e substitui por verde/laranja
        blue: {
          50: '#f7fee7',   // lime-50
          100: '#ecfccb',  // lime-100
          200: '#d9f99d',  // lime-200
          300: '#bef264',  // lime-300
          400: '#a3e635',  // lime-400
          500: '#84cc16',  // lime-500
          600: '#65a30d',  // lime-600
          700: '#4d7c0f',  // lime-700
          800: '#365314',  // lime-800
          900: '#1a2e05',  // lime-900
          950: '#0f1802', // lime-950
        },
        indigo: {
          50: '#fff7ed',   // orange-50
          100: '#ffedd5',  // orange-100
          200: '#fed7aa',  // orange-200
          300: '#fdba74',  // orange-300
          400: '#fb923c',  // orange-400
          500: '#f97316',  // orange-500
          600: '#ea580c',  // orange-600
          700: '#c2410c',  // orange-700
          800: '#9a3412',  // orange-800
          900: '#7c2d12',  // orange-900
          950: '#431407', // orange-950
        },
        sky: {
          50: '#f7fee7',   // lime-50
          100: '#ecfccb',  // lime-100
          200: '#d9f99d',  // lime-200
          300: '#bef264',  // lime-300
          400: '#a3e635',  // lime-400
          500: '#84cc16',  // lime-500
          600: '#65a30d',  // lime-600
          700: '#4d7c0f',  // lime-700
          800: '#365314',  // lime-800
          900: '#1a2e05',  // lime-900
          950: '#0f1802', // lime-950
        },
        cyan: {
          50: '#f7fee7',   // lime-50
          100: '#ecfccb',  // lime-100
          200: '#d9f99d',  // lime-200
          300: '#bef264',  // lime-300
          400: '#a3e635',  // lime-400
          500: '#84cc16',  // lime-500
          600: '#65a30d',  // lime-600
          700: '#4d7c0f',  // lime-700
          800: '#365314',  // lime-800
          900: '#1a2e05',  // lime-900
          950: '#0f1802', // lime-950
        },
        // Mantém verde e laranja mas com tons mais claros
        emerald: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
          950: '#0f1802',
        },
        green: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
          950: '#0f1802',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}