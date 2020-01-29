import { makeStyles } from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
  container: {
    marginTop: '25px',
    display: 'flex',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
});

export default useStyles;