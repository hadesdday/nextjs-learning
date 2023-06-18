import { Heebo } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const heebo = Heebo({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: {
            main: '#FF6464',
        },
        secondary: {
            light: "#EDF7FA",
            main: '#00A8CC',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: "#21243D"
        }
    },
    typography: {
        fontFamily: heebo.style.fontFamily,
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'md'
            },
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',
                    '@media (min-width:600px)': {
                        maxWidth: '680px'
                    }
                },
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media (min-width:900px)': {
                        maxWidth: '860px'
                    }
                }
            },
        },
        MuiLink: {
            defaultProps: {
                underline: "hover",
            },
            styleOverrides: {
                root: {
                    color: 'black',
                    transition: 'all 0.3s ease',
                    '&:hover, &.active': {
                        color: '#FF6464'
                    }
                }
            },
        },
        MuiButton: {
            variants: [
                {
                    //when button has variant contained and primary this will be applied
                    props: { variant: "contained", color: "primary" },
                    style: {
                        color: "white"
                    }
                },
                {
                    props: { about: "toggleDrawer" },
                    style: {
                        color: "black"
                    }
                },
            ]
        }
    }
});

// theme.typography.h3 = {
//     fontSize: '2rem',
//     [theme.breakpoints.up('md')]: {
//         fontSize: '3rem'
//     }
// }

theme = responsiveFontSizes(theme);

export default theme;
