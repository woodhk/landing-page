import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'dynamic-blue': '#234BFF',
        'deep-dynamic-blue': '#1A38BF',
        'bright-cherry': '#FF244C',
        
        // Supporting Brand Colors
        'tropical-teal': '#00B8D9',
        'deep-azure': '#415CD5',
        'neon-violet': '#8A24FF',
        'solar-gold': '#FFC824',
        'deep-ocean-blue': '#1E3FD4',
        'navy': '#142B91',
        
        // Neutral Brand Colors
        'dark': {
          DEFAULT: '#1C2530',
          '2': '#273046',
          '3': '#333E54',
        },
        'medium': {
          DEFAULT: '#4A5768',
          '2': '#586675',
          '3': '#667583',
        },
        'light': {
          DEFAULT: '#C9D2E5',
          '2': '#DEE4F1',
          '3': '#F4F7FB',
        },
        
        // Functional Colors
        'functional': {
          'success': '#28C76F',
          'error': '#FF4D4F',
          'pending': '#FFC107',
          'neutral': '#EFF9FC',
        },
        
        // Supporting Functional Colors
        'supp': {
          'success': {
            DEFAULT: '#E6F9F0',
            'text': '#1E8B59',
          },
          'error': {
            DEFAULT: '#FDECEA',
            'text': '#C0392B',
          },
          'pending': {
            DEFAULT: '#C0392B',
            'text': '#A36B00',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;