import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: theme.palette.primary.dark,
        height: '50px',
    },
    title: {
        flex: 1,
        cursor: 'pointer',
        fontSize: '1.2em',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
    },
    link: {
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    icon: {
        color: theme.palette.primary.contrastText,
    }
}));

export default useStyles;
