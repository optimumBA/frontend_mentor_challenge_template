module.exports = {
  content: ['./challenges/stats_preview_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },

      backgroundColor: {
        'custom-blue': 'hsl(233, 47%, 7%)',
        'desaturated-blue': 'hsl(244, 38%, 16%)',
        'overlay-violet': 'hsl(277, 64%, 30%)',
      },

      textColor: {
        'heading-white': 'hsl(0, 0%, 100%)',
        'paragraph-white': ' hsla(0, 0%, 100%, 0.75)',
        'stats-white': 'hsla(0, 0%, 100%, 0.6)',
        'custom-violet': 'hsl(277, 64%, 61%)',
      },
    },
  },
  plugins: [],
  variants: {},
}
