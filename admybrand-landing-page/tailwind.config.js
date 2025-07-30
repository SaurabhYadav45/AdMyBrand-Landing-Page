// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      transitionDuration: {
        '1000': '1000ms',
      },
      translate: {
        '10': '2.5rem',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -20px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-20px, 20px)" },
        },
        aurora: {
          "0%, 100%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(180deg)" },
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        floatReverse: "floatReverse 12s ease-in-out infinite",
        aurora: "aurora 15s linear infinite",

        // ✅ Combined animations
        floatAurora: "float 10s ease-in-out infinite, aurora 15s linear infinite",
        floatReverseAurora: "floatReverse 12s ease-in-out infinite, aurora 15s linear infinite",
      }
    }
  },
  plugins: [],
};
