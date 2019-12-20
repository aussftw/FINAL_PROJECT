import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    paragraph: {
        textDecoration: 'none',
        textAlign: 'left',
        color: '#989898',
    },
    title: {
        color: '#000000',
    }
}));


export default function TextBlock() {
    const classes = useStyles();

    return (
        <div className={classes.paragraph}>
        <p>New Collection 2020</p>
        <h4 className={classes.title}>House Shape Plant</h4>
            <Box display={{ xs: 'none', md: 'block' }}>
                <p>Casual multifunctional sofabeds head elevation comfortable sofa at daytime transforms into changes to a very comfortable bed at night.</p>
            </Box>

    <a href = "#" className={classes.paragraph}>Shop now &#8594; </a>
            </div>
    )
}
