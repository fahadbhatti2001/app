/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PoppinsThin: 'Poppins-Thin,  sans-serif',
        PoppinsThinItalic: 'Poppins-ThinItalic,  sans-serif',
        PoppinsExtraLight: 'Poppins-ExtraLight,  sans-serif',
        PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic,  sans-serif',
        PoppinsLight: 'Poppins-Light,  sans-serif',
        PoppinsLightItalic: 'Poppins-LightItalic,  sans-serif',
        PoppinsRegular: 'Poppins-Regular,  sans-serif',
        PoppinsItalic: 'Poppins-Italic,  sans-serif',
        PoppinsMedium: 'Poppins-Medium,  sans-serif',
        PoppinsMediumItalic: 'Poppins-MediumItalic,  sans-serif',
        PoppinsSemiBold: 'Poppins-SemiBold,  sans-serif',
        PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic,  sans-serif',
        PoppinsBold: 'Poppins-Bold,  sans-serif',
        PoppinsBoldItalic: 'Poppins-BoldItalic,  sans-serif',
        PoppinsExtraBold: 'Poppins-ExtraBold,  sans-serif',
        PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic,  sans-serif',
        PoppinsBlack: 'Poppins-Black,  sans-serif',
        PoppinsBlackItalic: 'Poppins-BlackItalic,  sans-serif',
       },
       colors: {
        primary: {
          1: '#ff928e',
          2: '#7d91f4',
          3: '#6987F3',
          4: '#DACC3E',
          5: '#FF8A5B',
        }
       }
    },
  },
  plugins: [],
}
