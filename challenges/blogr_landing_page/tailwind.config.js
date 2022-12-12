module.exports = {
  content: ['./challenges/blogr_landing_page/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'light-red': 'hsl(356, 100%, 66%)',
        'very-light-red': 'hsl(355, 100%, 74%)',
        'very-dark-blue': 'hsl(208, 49%, 24%)',
        'grayish-blue': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'very-dark-black-blue': 'hsl(240, 10%, 16%)',
        'very-light-red-2': 'hsl(13, 100%, 72%)',
        'lighter-red': 'hsl(353, 100%, 62%)',
        'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
        'extreme-gray': 'hsl(240, 0%, 56%)',
        'light-gray': 'hsl(0, 26%, 96%)',
      },
      backgroundSize: {
        massive: '109%',
      },
      screens: {
        desktop: '1200px',
        mobile: { min: '370px', max: '700px' },
        largescreen: '1800px',
      },
      fontFamily: {
        Overpass: ['Overpass'],
        Ubuntu: ['Ubuntu'],
      },
    },
  },
  plugins: [],
  variants: {},
}
