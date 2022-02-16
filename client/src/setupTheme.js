import { createTheme } from '@material-ui/core/styles';

let theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        primary: {
            main: '#2C387E',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#F73378',
            contrastText: '#000000',
        },
    },
});

export default theme;
