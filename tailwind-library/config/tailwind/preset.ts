import { globSync } from 'glob';

// get the TSX and JSX files from the project without using the built-in glob matcher of tailwind
// to reduce the number of files Tailwind will try to scan
const content = globSync(['**/*.{jsx,tsx}'], {
  ignore: ['**/node_modules/**'],
});

/** @type {import('tailwindcss').Config} */
export default {
  content: [...content],
};
