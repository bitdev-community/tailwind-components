import { Plugin, type Config } from '@frontend/tailwind.plugin';

const bitPlugin = new Plugin({
  components: ['@learnbit-react/tailwind-library.ui.**'],
  content: ['./**/*.{js,jsx,ts,tsx}'],
  cwd: __dirname,
});

const config: Config = {
  theme: {
    extend: {},
  },
  plugins: [bitPlugin.apply()],
};

export default config;
