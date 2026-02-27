/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow:    'spin 6s linear infinite',
                shimmer:      'shimmer 6s linear infinite',
                fadeInUp:     'fadeInUp 0.75s ease-out both',
                floatY:       'floatY 6s ease-in-out infinite',
                orbPulse:     'orbPulse 5s ease-in-out infinite',
                gradientShift:'gradientShift 4s ease infinite',
                scrollBounce: 'scrollBounce 1.4s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%':   { backgroundPosition: '0% center' },
                    '100%': { backgroundPosition: '400% center' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(28px)' },
                    to:   { opacity: '1', transform: 'translateY(0)' },
                },
                floatY: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':      { transform: 'translateY(-14px)' },
                },
                orbPulse: {
                    '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
                    '50%':      { opacity: '0.65', transform: 'scale(1.12)' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%':      { backgroundPosition: '100% 50%' },
                },
                scrollBounce: {
                    '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
                    '50%':      { transform: 'translateY(6px)', opacity: '0.5' },
                },
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover:  '#2a004a',
                darkTheme:  '#11001F',
                primary:    '#b820e6',
                secondary:  '#da7d20',
            },
            boxShadow: {
                'black':      '4px 4px 0 #000',
                'white':      '4px 4px 0 #fff',
                'glow-sm':    '0 0 12px rgba(184,32,230,0.35)',
                'glow':       '0 0 25px rgba(184,32,230,0.45)',
                'glow-lg':    '0 0 50px rgba(184,32,230,0.45)',
                'glow-orange':'0 0 25px rgba(218,125,32,0.4)',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #b820e6, #da7d20)',
            },
        },
    },
    darkMode: 'selector',
    plugins: [],
}