import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: "#2490eb",
                dark: "#14457b",
                light: "#d3e9fb",
            },
            secondary: {
                DEFAULT: "#fafafa",
                dark: "#f4f6f9",
            },
            tertiary: {
                DEFAULT: "#10101a",
                dark: "#0b0b13",
            },
        },
        fontFamily: {
            header: ["Quicksand"],
            body: ["Montserrat", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            aspectRatio: {
                "4/3": "4 / 3",
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        function ({ addComponents }: { addComponents: any }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "640px",
                    },
                    "@screen md": {
                        maxWidth: "768px",
                    },
                    "@screen lg": {
                        maxWidth: "1280px",
                    },
                    "@screen xl": {
                        maxWidth: "1400px",
                    },
                },
            })
        },
    ],
}
export default config
