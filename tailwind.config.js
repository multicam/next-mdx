/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                "tgds-blue": {
                    50: '#cee2f8',
                    100: '#b1a4f1',
                    200: '#a39af6',
                    250: '#411bde',
                    300: '#4216f7',
                    400: '#310dc6',
                    500: '#22088f',
                    600: '#1e0777',
                    700: '#180660',
                    800: '#120440',
                    850: '#0f0538',
                    900: '#080220',
                    950: '#040110',
                },
                "tgds-yellow": {
                    500: '#ffe900',
                    700: '#dda81a'
                },
            },
            lineHeight: {
                none: '1',
                tight: '1.25',
                snug: '1.375',
                normal: '1.618',
                relaxed: '1.75',
                loose: '2',
                2.5: '2.5vw',
                3: '3vw',
                4: '4vw',
                4.5: '4.5vw',
                5: '5vw',
                6: '6vw',
                7: '7vw',
                8: '8vw',
                9: '9vw',
                10: '10vw',
            },
            spacing: {
                0: '0px',
                .125: '0.125vw',
                .25: '0.25vw',
                .5: '0.5vw',
                .75: '0.75vw',
                1: '1vw',
                1.5: '1.5vw',
                2: '2vw',
                2.5: '2.5vw',
                3: '3vw',
                3.5: '3.5vw',
                4: '4vw',
                4.5: '4.5vw',
                5: '5vw',
                6: '6vw',
                7: '7vw',
                8: '8vw',
                9: '9vw',
                10: '10vw',
                11: '11vw',
                12: '12vw',
                14: '14vw',
                16: '16vw',
                20: '20vw',
                24: '24vw',
                26: '26vw',
                28: '28vw',
                32: '32vw',
                36: '36vw',
                40: '40vw',
                44: '44vw',
                48: '48vw',
                50: '50vw',
                52: '52vw',
                56: '56vw',
                60: '60vw',
                64: '64vw',
                72: '72vw',
                80: '80vw',
                96: '96vw',
            },
            borderRadius: {
                none: '0',
                sm: '0.25vw',
                md: '0.75vw',
                lg: '1vw',
                DEFAULT: '1.75vw',
                xl: '1.75vw',
                '2xl': '2vw',
                '3xl': '3vw',
                full: '9999px',
            }
        },
    },
    plugins: [],
}

