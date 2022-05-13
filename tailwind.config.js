module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  }, daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#939393",
          border: "#CFCFCF",
          gray1: "#E6E6E6",
          "base-100": "#ffffff",
        },
      },
      "white",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}