function cssVarRgbHelper(cssVariable) {
    return ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(--${cssVariable}), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
            return `rgba(var(--${cssVariable}), var(${opacityVariable}, 1))`;
        }
        return `rgb(var(--${cssVariable}))`;
    };
}

module.exports = {
    purge: ['src/**/**.js'],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: cssVarRgbHelper('primary_background'),
                    contrast: cssVarRgbHelper('primary_text'),
                    accent: cssVarRgbHelper('primary_accent'),
                    muted: cssVarRgbHelper('primary_secondary_accent'),
                    'light-contrast': cssVarRgbHelper('primary_text_light'),
                },
            },
            borderWidth: {
                '1/2': '0.5px',
            },
            fontSize: {
                sm: '0.875rem',
                xxs: '0.625rem',
                '1.5xl': '1.375rem',
                '7xl': '4.375rem',
            },
            spacing: {
                96: '24rem',
                104: '26rem',
                112: '28rem',
                128: '32rem',
                144: '36rem',
                160: '40rem',
                168: '42rem',
                200: '50rem',
                240: '60rem',
                280: '70rem',
                'full-20': '120%',
                '90p': '90%',
                '1/2-screen': '50vh',
                '2/3-screen': '66vh',
                '3/4-screen': '75vh',
            },
            maxWidth: {
                240: '60rem',
                400: '100rem',
            },
            inset: {
                '1/5': '20%',
                '1/6': '16.67%',
                '1/7': '0.14%',
                '1/10': '10%',
                '1/20': '5%',
                '2/5': '40%',
                unset: 'unset',
            },
            letterSpacing: {
                'std-wide': '2px',
                'std-wider': '4.2px',
                'std-lg-wide': '6px',
                'std-xl-wide': '7.5px',
            },
            lineHeight: {
                12: '3rem',
                14: '3.5rem',
                18: '4.5rem',
                22: '5.625rem',
            },
            transitionDuration: {
                1250: '1250ms',
                1500: '1500ms',
                1750: '1750ms',
                2000: '2000ms',
                2250: '2250ms',
                2500: '2500ms',
                2750: '2750ms',
                3000: '3000ms',
            },
            transitionDelay: {
                0: '0ms',
                1500: '1500ms',
                2000: '2000ms',
                2500: '2500ms',
                3000: '3000ms',
            },
            screens: {
                '2xl': '1536px',
                '3xl': '1600px',
            },
            minHeight: {
                112: '28rem',
                128: '32rem',
                144: '36rem',
                160: '40rem',
                168: '42rem',
                200: '50rem',
            },
            scale: {
                10: '.10',
                20: '.20',
                25: '.25',
                30: '.30',
                40: '.40',
                60: '.6',
                70: '.7',
                80: '.8',
            },
            minWidth: {
                40: '10rem',
            },
            boxShadow: {
                b: '0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
        },
    },
    variants: {
        extend: {
            brightness: ['hover'],
            ringWidth: ['focus-visible'],
        },
    },
    plugins: [],
};
