module.exports = {
  content: ['./challenges/profile_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans'],
      },
      fontWeight: {
        extra_light: 200,
        light: 500,
        regular: 400,
        bold: 700,
        extra_bold: 800,
      },
      backgroundImage: {
        'pattern-top-bottom':
          "url('images/bg-pattern-top.svg'), url('images/bg-pattern-bottom.svg')",
        'card-pattern': "url('images/bg-pattern-card.svg')",
        'top-pattern': "url('images/bg-pattern-top.svg')",
      },
      backgroundPosition: {
        'custom-top-bottom': 'right 48vw bottom 40vh, left 45vw top 44vh',
      },
    },
  },
  plugins: [],
  variants: {},
}
