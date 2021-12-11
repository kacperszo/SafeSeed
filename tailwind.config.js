module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                beige: "#F5F2EC",
                haps: "#F76E64",
                govtech: "#E54E42",
                "deep-purple": "#3E1741",
                katowice: "#796C7A",
                relish: "#0C442D",
            },
            fontFamily: {
                quirky: "noto-serif",
                inter: "Inter",
                mont: "Montserrat",
            },
        },
    },
    plugins: [],
};
