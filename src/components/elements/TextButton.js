import React from 'react';
import { makeStyles } from '@material-ui/core';
import { showDefaultImgCount } from '../../constants/global';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    btnShowMoreContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default function TextButton({ url, imgToShow, setImgToShow }) {
    const classes = useStyles();

    const showMore = () => {
        setImgToShow(prev => prev + showDefaultImgCount);
    }

    return (
        <Box className={classes.btnShowMoreContainer}>
            {url.length > imgToShow &&
                <Button variant="text" onClick={showMore}>Show more</Button>}
        </Box>
    );
}

