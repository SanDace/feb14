module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Using class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        light: {
          primary: '#3490dc', // Light mode primary color
          secondary: '#ffed4a',
          background: '#ffffff',
          text: '#333333',
        },
        dark: {
          primary: '#1d4ed8', // Dark mode primary color
          secondary: '#fbbf24',
          background: '#121212',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
