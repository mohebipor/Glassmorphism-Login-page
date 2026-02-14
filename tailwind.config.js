/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // این خط حتماً باشه تا فایل‌های React اسکن بشن
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}