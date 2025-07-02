import type { Config } from "tailwindcss"
import typography from '@tailwindcss/typography'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			// Apple-like color system
  			'void-bg': {
  				light: '#ffffff',
  				dark: '#000000'
  			},
  			'void-bg-secondary': {
  				light: '#f5f5f7',
  				dark: '#1d1d1f'
  			},
  			'void-text': {
  				primary: {
  					light: '#1d1d1f',
  					dark: '#f5f5f7'
  				},
  				secondary: {
  					light: '#86868b',
  					dark: '#a1a1a6'
  				}
  			},
  			'void-accent': {
  				blue: '#007aff',
  				'blue-hover': '#0056cc'
  			},
  			'void-border': {
  				light: '#d2d2d7',
  				dark: '#424245'
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.6s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			slideUp: {
  				'0%': { opacity: '0', transform: 'translateY(20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			}
  		},
  		backdropBlur: {
  			xs: '2px',
  		}
  	}
  },
  plugins: [
    typography,
    require("tailwindcss-animate")
],
} satisfies Config

export default config