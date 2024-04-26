// eslint-disable-next-line import/no-unresolved
import bitPreset from './preset.js';
import { theme } from '@learnbit-react/tailwind-library.theme'

/** @type {import('tailwindcss').Config} */
export default {
  // use the basic preset to get the files from the workspace
  content: [...bitPreset.content],
  theme: theme(),
  plugins: [],
};
