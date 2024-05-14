/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#D87D4A",
        "primary-2": "#FBAF85",
        gray1: "#F1F1F1",
        gray2: "#FAFAFA",
        black1: "#000000",
        black2: "#101010",
      },
      fontFamily: {
        Manrope: ['"Manrope"', "sans-serif"],
      },
      backgroundImage: {
        "header-image-mobile": "url('/assets/home/mobile/image-header.jpg')",
        "header-image-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "header-image-desktop": "url('/assets/home/desktop/image-hero.jpg')",
        "header-zx7-mobile": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "header-zx7-tablet": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        "header-zx7-deskop":
          "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        "header-yx1-mobile":
          "url('/assets/home/mobile/image-earphones-yx1.jpg')",
        "header-yx1-tablet":
          "url('/assets/home/tablet/image-earphones-yx1.jpg')",
        "header-yx1-desktop":
          "url('/assets/home/desktop/image-earphones-yx1.jpg')",
        "header-bestgear-mobile":
          "url('/assets/shared/mobile/image-best-gear.jpg')",
        "header-bestgear-tablet":
          "url('/assets/shared/tablet/image-best-gear.jpg')",
        "header-bestgear-desktop":
          "url('/assets/shared/desktop/image-best-gear.jpg')",
      },
    },
  },
  plugins: [],
};
