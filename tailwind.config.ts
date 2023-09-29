import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  lightMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(({ addUtilities }: { addUtilities: any }) => {
      addUtilities({
        ".no-overflow-anchoring": {
          "overflow-anchor": "none",
        },
      });
    }),
  ],
  daisyui: {
    themes: ["","light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    lightTheme: "light", // name of one of the included themes for light mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      animation: {
        blinkBorder: "blinkBorder 1s ease-in-out infinite",
        hoverBorder: "hoverBorder 1s ease-in-out infinite",
      },
      keyframes: {
        blinkBorder: {
          '0%, 49%': { borderColor: 'white' },
          '50%, 100%': { borderColor: 'transparent' }
        },
        hoverBorder: {
          '0%, 49%': { borderColor: 'gray' },
          '50%, 100%': { borderColor: 'transparent' }
        }
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        danger: "#160B0B",
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
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            h3: {
              position: "relative",
              padding: "0.5rem 1rem",
              backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity));",
              ".dark &" : {
                backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity));",
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                width: "4px",
                height: "100%",
                left: 0,
                top: 0,
                backgroundColor: "#3182ce",
              },
              a: {
                "&::after": {
                  display: "none",
                },
              },
            },
            h4: {
              position: "relative",
              paddingLeft: "1rem",
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                width: "4px",
                height: "100%",
                left: 0,
                top: 0,
                backgroundColor: "#3182ce",
              },
              a: {
                "&::after": {
                  display: "none",
                },
              },
            },
          },
        },
      }),
    },
  },
};
export default config;
