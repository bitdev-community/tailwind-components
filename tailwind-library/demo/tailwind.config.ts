import { Plugin, type Config } from '@frontend/tailwind.plugin';

const bitPlugin = new Plugin({
  components: ['@learnbit-react/tailwind-library.ui.**'],
  content: ['./**/*.{js,jsx,ts,tsx}'],
  cwd: __dirname,
});

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comic Sans MS', 'cursive', 'sans-serif'], // Default sans-serif font
      },
      colors: {
        'blue-500': '#00d1ff', // Fluorescent blue
        'blue-700': '#0094cc', // Darker fluorescent blue
        'bg-gray-200': '#0094cc',
        'gray-200': '#ccff00', // Fluorescent green for background
        'blue-300': '#33ccff', // Fluorescent blue for focus ring
        'blue-800': '#ff00ff', // Fluorescent pink for dark mode focus ring
        'blue-600': '#00ffcc', // Fluorescent teal for checked background
      },
      ringColor: {
        'blue-300': '#33ccff', // Matching focus ring with fluorescent blue
      }
    },
  },
  plugins: [bitPlugin.apply()],
};

export default config;
