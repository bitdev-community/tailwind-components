// eslint-disable-next-line import/no-unresolved
import bitPreset from './preset.js';

/** @type {import('tailwindcss').Config} */
export default {
  // use the basic preset to get the files from the workspace
  content: [...bitPreset.content],
  theme: {
    extend: {},
  },
  plugins: [],
};
