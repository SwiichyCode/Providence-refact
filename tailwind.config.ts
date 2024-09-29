import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        oswald: ['var(--font-oswald)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
