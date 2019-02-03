const colors = {
  white: '#fff',
  primary: '#F79401',
  dark: '#333',
  greyBluey: '#8c94a0',
  transparent: 'transparent'
}

const theme = {
  flexboxgrid: {
    outerMargin: 1,
    gutterWidth: 2,
    container: {
      xs: false,
      sm: false,
      md: false,
      lg: 78.4
    },
    breakpoints: {
      lg: 80.25
    }
  },
  colors: colors,
  fonts: {
    primary:
      '"Helvetica Neue", Helvetica, Arial, sans-serif',
    headings: '"Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontSize: {
    primary: '16px',
    lead: '18px',
    h1: '60px',
    h2: '48px',
    h3: '38px',
    h4: '24px',
    h5: '18px',
  },
  boxShadow: {
    card: '0 0 24px 0 rgba(0,0,0,.22);'
  },
  transition: {
    primary: '.3s ease',
    spinner: '1s linear infinite'
  }
};

export default theme;
