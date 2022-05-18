module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#e64b4a",
          orangehover: "#ce4441",
        },
        neutral: {
          light: "#30353c",
          dark: "#1a1c23",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
