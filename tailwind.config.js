module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridAutoColumns: {
        "40%": "40%",
        "80%": "80%",
        "55%": "55%",
        "33%": "33%",
        "15%": "15%",
        "20%": "20%",
      },
      colors: {
        graymain: "rgba(28, 48, 74, 0.5)",
        sidebarBorder: "rgba(28, 55, 90, 0.16)",
        gray: {
          50: "rgba(25, 59, 103, 0.02)",
          60: "rgba(26, 56, 96, 0.1)",
          75: "rgba(12, 12, 12, 0.2)",
          100: "rgba(28, 46, 69, 0.6)",
          200: "rgba(28, 48, 74, 0.5)",

          300: "rgba(237, 237, 237, 1)",
          400: "rgba(246, 246, 246, 1)",
          500: "rgba(226, 226, 226, 1)",
          600: "rgba(110, 111, 125, 1)",
          700: "rgba(26, 41, 61, 0.83)",
          800: "rgba(24, 39, 58, 0.94)",
          850: "rgba(25, 36, 52, 1)",
          900: "rgba(17, 19, 42, 1)",
        },
        sky: { 400: "rgba(20, 169, 249, 1)", 500: "rgba(2, 140, 213, 1)" },
        green: { 500: "rgba(21, 193, 93, 1)" },
      },
      spacing: {
        1.5: "0.375rem",
        4.5: "1.125rem",
        2.125: "0.5625rem",
        32.5: "8.5rem",
        15: "3.75rem",
        5.5: "1.375rem",
        18: "4.5rem",
      },
      fontSize: {
        "1.5xl": ["1.375rem", { lineHeight: "1.8rem" }],
        xssm: ["0.8125rem", { lineHeight: "1.2rem" }],
        xxs: ["0.625rem", { lineHeight: "1rem" }],
        28: ["1.75rem", { lineHeight: "2.2rem" }],
        64: ["4rem", { lineHeight: "4rem" }],
      },
      fontFamily: {
        serif: ['"Poppins"'],
      },
      borderWidth: {
        6: "6px",
      },
      width: {
        72: "18rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/custom-forms"),
  ],
};
