/**
 * returns theme object
 */
export function theme() {
  return {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // Default sans-serif font
        serif: ['Georgia', 'Times New Roman', 'serif'], // Default serif font
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
  }
}
