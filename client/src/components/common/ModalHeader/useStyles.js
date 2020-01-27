import { makeStyles } from '@material-ui/core';
import theme from '../../../theme';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.primary.light,
    padding: '10px',
  },
  link: {
    fontSize: '24px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: theme.palette.primary.dark,
  },
  linkActive: {
    fontSize: '24px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: theme.palette.primary.dark,
    transform: 'scale(1.3)',
  },
});

export default useStyles;
