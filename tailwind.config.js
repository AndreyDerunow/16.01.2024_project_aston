/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'bounce-x1': 'bounceLoader 1s ease-in infinite',
                'bounce-x2': 'bounceLoader 1s ease-in .1s infinite',
                'bounce-x3': 'bounceLoader 1s ease-in .2s infinite'
            },
            keyframes: {
                bounceLoader: {
                    '0%, 100%': { transform: 'translateY(-50%)' },
                    '40%': { transform: 'translateY(50%)' },
                    '55%': { transform: 'translateY(10%)' },
                    '70%': { transform: 'translateY(50%)' }
                }
            }
        }
    },
    plugins: []
};
