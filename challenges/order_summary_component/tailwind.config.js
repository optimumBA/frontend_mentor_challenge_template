module.exports = {
  content: ['./challenges/order_summary_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        red_hat: ['Red Hat Display'],
      },
      fontWeight: {
        extra_light: 200,
        regular: 500,
        light: 400,
        bold: 700,
        extra_bold: 900,
      },
      backgroundImage: {
        'mobile-pattern': "url('images/pattern-background-mobile.svg')",

        'bottom-pattern': "url('images/pattern-background-desktop.svg')",
        illustration: "url('images/illustration-hero.svg')",
      },
    },
  },
  plugins: [],
  variants: {},
}
