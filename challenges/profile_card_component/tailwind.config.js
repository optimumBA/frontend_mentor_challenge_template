module.exports = {
  content: ['./challenges/profile_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        normal: 500,
        bold: 700,
      },
      backgroundImage: {
        'pattern-top-bottom':
          "url('images/bg-pattern-top.svg'), url('images/bg-pattern-bottom.svg')",
        'card-pattern': "url('images/bg-pattern-card.svg')",
        'top-pattern': "url('images/bg-pattern-top.svg')",
      },
      backgroundPosition: {
        'custom-top-bottom': 'right 48vw bottom 40vh, left 53vw top 40vh',
      },
    },
  },
  plugins: [],
  variants: {},
}
