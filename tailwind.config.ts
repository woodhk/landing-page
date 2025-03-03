import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		keyframes: {
  			blob: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)',
  				},
  				'33%': {
  					transform: 'translate(30px, -50px) scale(1.1)',
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.9)',
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)',
  				},
  			},
  			zigzagFlow: {
  				'0%': {
  					transform: 'translateX(0) translateY(0)',
  				},
  				'100%': {
  					transform: 'translateX(-100px) translateY(100px)',
  				},
  			},
  			underline: {
  				'0%': {
  					width: '0%',
  					left: '0',
  				},
  				'100%': {
  					width: '100%',
  					left: '0',
  				},
  			},
  		},
  		animation: {
  			'blob': 'blob 7s infinite',
  			'zigzag': 'zigzagFlow 20s linear infinite',
  			'underline': 'underline 1s ease-out forwards',
  		},
  		utilities: {
  			'.animation-delay-2000': {
  				'animation-delay': '2s',
  			},
  			'.animation-delay-4000': {
  				'animation-delay': '4s',
  			},
  		},
  		colors: {
  			'dynamic-blue': '#234BFF',
  			'deep-dynamic-blue': '#1A38BF',
  			'bright-cherry': '#FF244C',
  			'tropical-teal': '#00B8D9',
  			'deep-azure': '#415CD5',
  			'neon-violet': '#8A24FF',
  			'solar-gold': '#FFC824',
  			'deep-ocean-blue': '#1E3FD4',
  			navy: '#142B91',
  			dark: {
  				'2': '#273046',
  				'3': '#333E54',
  				DEFAULT: '#1C2530'
  			},
  			medium: {
  				'2': '#586675',
  				'3': '#667583',
  				DEFAULT: '#4A5768'
  			},
  			light: {
  				'2': '#DEE4F1',
  				'3': '#F4F7FB',
  				DEFAULT: '#C9D2E5'
  			},
  			functional: {
  				success: '#28C76F',
  				error: '#FF4D4F',
  				pending: '#FFC107',
  				neutral: '#EFF9FC'
  			},
  			supp: {
  				success: {
  					DEFAULT: '#E6F9F0',
  					text: '#1E8B59'
  				},
  				error: {
  					DEFAULT: '#FDECEA',
  					text: '#C0392B'
  				},
  				pending: {
  					DEFAULT: '#C0392B',
  					text: '#A36B00'
  				}
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
      require("tailwindcss-animate")
],
};

export default config;