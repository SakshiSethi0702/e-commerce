/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        "screen": "0px",
        "tab": "500px"
      },
      colors: {
        blue_gray_50: "#eceff1",
        blue_gray_100: "#CFD8DC",
        blue_gray_200: "#B0BEC5",
        blue_gray_300: "#90a4ae",
        blue_gray_400: "#78909C",
        blue_gray_500: "#607D8B",
        blue_gray_600: "#546E7A",
        blue_gray_700: "#455A64",
        blue_gray_800: "#37474F",
        blue_gray_900: "#263238",
        light_primary: "#f57e5d",
        extra_4: "#f6f8fa",
        extra_bg: "#fbfbfb",
        light_bg_paper: "#ffffff",
        light_other_rating_active: "#ffb400",
        light_secondary_contrast: "#ffffff",
        light_secondary_main: "#02a77d",
        light_secondary_shades_18p: "#02a77d",
        light_primary_shades_50p: "#f57efd80",
        light_primary_shades_4p: "#f57e5d0a",
        white: "#ffffff",
        text_custom: "#021635",
        dark_info_main: "#29b6f6",
        dark_warning_main: "#ffa726",
        light_error_main: "#d32f2f",
        light_info_main: "#0288d1",
        light_success_main: "#2e7d32",
        Light_Text_Secondary: "#00000099",
        light_text_secondary_shades_18p: "#0000002e",
        light_text_secondary_shades_4p: "#0000000a",
        light_text_secondary_shades_12p: "#0000001f",
        light_text_secondary_shades_60p: "#00000099",
        light_text_secondary_shades_54p: "#0000008a",
        light_text_secondary_shades_87p: "#000000de",
        hf_extra: "#fbfcfb",
        light_text_disabled: "#f2f5f6",
        light_warning_shades_30p: "#ed6c024d",
        light_warning_main: "#ED6C02",
        hf_image: "#dfe3e6",
        fill_gray_2: "#828d9e"
      }
    },
  },
  plugins: [],
}

