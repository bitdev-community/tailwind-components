import { Plugin, type Config } from '@frontend/tailwind.plugin';
import { theme } from '@learnbit-react/tailwind-library.theme'

const bitPlugin = new Plugin({
  components: ['@learnbit-react/tailwind-library.ui.**'],
  content: ['./**/*.{js,jsx,ts,tsx}'],
  cwd: __dirname,
});

const config: Config = {
  theme: theme(),
  plugins: [bitPlugin.apply()],
};

export default config;
