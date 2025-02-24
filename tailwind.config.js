/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/signup.html",
    "./pages/signin.html",
    "./pages/selfie-upload.html",
    "./pages/password-reset.html",
    "./pages/send-otp.html",
    "./pages/enter-otp.html",
    "./pages/new-password.html",
    "./pages/home-feed.html",
    "./pages/selfie-upload-successful.html",
    "./pages/post-house.html",
    "./pages/upload-house-media.html",
    "./pages/post-review.html",
    "./pages/request.html",
    "./pages/search-result.html",
    "./pages/search-result-empty.html",
    "./pages/chat.html",
    "./pages/profile.html",
    "./pages/edit-profile-picture.html",
    "./pages/edit-profile-name.html",
    "./pages/share.html",
    "./pages/desktop-signin.html",
    "./pages/desktop-signup.html",
    "./pages/desktop-selfie-upload.html",
    "./pages/desktop-selfie-upload-successful.html",
    "./pages/desktop-send-otp.html",
    "./pages/desktop-enter-otp.html",
    "./pages/desktop-new-password.html",
    "./pages/switch-screen.html",
    "./pages/email-template.html",
    "./pages/404.html",
    "./src/script.js",
  ],
  theme: {
    extend: {
      screens: {
        mobilexxs: "345px",
        mobilexs: "375px",
        mobilesm: "480px",
        mobilemd: "567px",
        sm: "640px",
        mobilelg: "767px",
        md: "768px",
        tabletmd: "800px",
        tabletlg: "992px",
        lg: "1024px",
        laptopmd: "1200px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "zamella-primary": "#01A6FB",
        "zamella-primary--200": "#0874ab",
        "zamella-secondary-200": "#FF8732",
        "zamella-secondary-100": "#FFF2E933",
        "zamella-secondary-outline": "#FF873233",
        "zamella-accent": "#fdefb2",
        "zamella-black-200": "#26292B",
        "zamella-black-100": "#1E1E1E",
        "zamella-grey-300": "#26292B99",
        "zamella-grey-200": "#B6B3B3",
        "zamella-grey-100": "#26292BBF",
        "zamella-grey-50": "#F1F0F0",
        "zamella-grey-25": "#B6B3B3",
        "zamella-grey-text": "#26292B80",
        "zamella-white": " #ffffff",
        "zamella-error-500": " #BC0202",
        "zamella-error-100": " #E30404",
      },
      fontFamily: {
        proxima: ["Proxima Nova", "sans-serif"],
        manrope: ["Manrope", "serif"],
      },
      fontSize: {
        sm: "0.8125rem",
        base: "0.93",
        xl: "1.0625rem",
        "2xl": "1.25rem",
        "3xl": "1.375rem",
      },
      borderRadius: {
        sm: "0.6257rem",
        lg: "1.5rem",
      },
    },
  },
  plugins: [],
};
