module.exports = {
  content: ['./**/index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },
      fontFamily: {
        karla: ['Karla'],
      },
      fontWeight: {
        light: 200,
        regular: 400,
        bold: 800,
      },
    },
  },
  plugins: [],
}
