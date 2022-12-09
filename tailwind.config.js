/* eslint-disable no-unused-expressions */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  theme: {
    fontWeight: {
      light: 100,
      regular: 300,
      bold: 800,
    },
    colors: {
      deepDark: '#0A0D14',
      dark60: 'rgba(10, 13, 20, 0.6)',
      bgTransitions: 'rgba(28, 50, 69, 0.6)',

      dark: '#1C3245',
      white: '#ffffff',

      tint: '#00FFE0',
      darkTint: '#008D96',
      deepDarkTint: '#005656',

      purple: '#D355FF',
      darkPurple: '#4C0071',
      pink: '#FF00F5',
      yellow: '#FFC700',
      orange: '#FF5C00',
      brown: '#933500',
      danger: '#FF0000',
    },
    screens: {
      mobile: { max: '375px' },
      // => @media (min-width: 375px) { ... }
      desktop: { max: '1440px' },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        h2: {
          // fontFamily: 'cwTeXYen',
          fontSize: '32px',
          lineHeight: '48px',
          fontWeight: '800',
          letterSpacing: '5%',
        },
        h3: {
          // fontFamily: 'cwTeXYen',
          fontSize: '24px',
          lineHeight: '44px',
          fontWeight: '300',
          letterSpacing: '5%',
        },
        p: {
          // fontFamily: 'cwTeXYen',
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: '300',
          letterSpacing: '5%',
        },
      }),
        addComponents({
          '.highlight': {
            color: theme('colors.tint'),
          },
          // '.btn': {
          //   background:
          //     'linear-gradient(0deg, rgba(0, 255, 224, 0) 0%, #00FFE0 100%), #008D96;',
          //   color: theme('colors.white'),
          //   fontSize: '20px',
          //   fontWeight: '800',
          //   letterSpacing: '0.2em',
          //   padding: '12px 48px',
          //   borderRadius: '100px',
          // },
        });
    }),
  ],
};
