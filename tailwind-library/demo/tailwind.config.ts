import { Plugin, type Config } from '@frontend/tailwind.plugin';

const bitPlugin = new Plugin({
  components: ['@frontend/tailwind.examples.button'],
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
