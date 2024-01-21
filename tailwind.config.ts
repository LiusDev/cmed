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
                DEFAULT: "#3284c2",
                dark: "#1b76bb",
                light: "#7493bc",
            },
            secondary: {
                DEFAULT: "#ffffff",
                dark: "#f4fbff",
            },
            tertiary: {
                DEFAULT: "#3e4756",
                dark: "#000000",
                light: "#808080",
            }
        },
        fontFamily: {
            header: ["Quicksand"],
            body: ["Montserrat", "sans-serif"],
        },
        extend: {
            fontFamily: {
                primary: ["Noto Sans", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                intro: "url('/intro.png')",
                intro1: "url('/intro1.png')",
            },
            aspectRatio: {
                "4/3": "4 / 3",
                "21/9": "21 / 9",
                "4/1": "4 / 1",
            },
            boxShadow: {
                "custom": "0px 3px 5px rgba(0,0,0,0.24)",
            }
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
