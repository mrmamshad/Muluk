/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                default: "#0d1117;",
                fontColor: "#848d97",
                sideColor: "#161b22",
                sectionColor: "#2429e",
            },
        },
    },
    plugins: [require("daisyui")],
};
