/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "titulos":"Arima",
        "parrafos":"Mulish",
      },
      colors:{
        "verde":"#00A149",
        "blanco":"#fff",
        "rojo":"#881014",
        "oscuro":"#000",
      },
      screens:{
        "xs":"340px",
        "sm-md":"414px",
        "sm-mdd":"415px",
        "mdd":"532px",
      },
      backgroundImage:{
        "interseccion":"url('/assets/img/postres3.webp')"
      }
    },
  },
  plugins: [],
}

