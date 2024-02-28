import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // siled: {
        //   'from': { transform: ' translateX(-100%)' },
        //   'to': { transform: 'translateX(0)' },
        // },
        
        wiggle: {
          'from': { transform: ' translateX(-100%)' },
          'to': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
