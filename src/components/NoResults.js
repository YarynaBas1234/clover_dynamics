import React from 'react';
import noResults from '../images/no_results.png';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';

const useStyles = makeStyles({
    img: {
        width: '50% !important',
        margin: '0 auto',
    }
})

export default function NoResults() {
    const classes = useStyles();

    return (
        <CardMedia
            className={classes.img}
            component="img"
            image={noResults}
            alt="no results"
        />
    );
}