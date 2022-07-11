import { createTheme, ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#7654df',
    },
    secondary: {
      main: '#449bed',
    },
  },
  typography: {
    fontFamily: 'Albert Sans',
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  }
})