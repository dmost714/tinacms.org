module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'btnthumb': '4.5rem',
        'brandlogo': '105px'
      },
      zIndex: {
        '-bg': '-1000'
      },
      colors: {
        brand: {
          lighter: '#ffe599',
          DEFAULT: '#ffcb34',
          darker: '#997200'
        }
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out 2"
      }
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [],
}