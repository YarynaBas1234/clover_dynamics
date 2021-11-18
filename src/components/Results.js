import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import TextButton from './elements/TextButton';

const useStyles = makeStyles({
    img: {
        width: '50% !important',
        margin: '0 auto',
    },

    container: {
        maxWidth: 1840,
        margin: '0 auto',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    cardContainer: {
        margin: 10,
        width: '33%',
    },

    imgStyles: {
        width: '100%',
        height: '100%',
    },
})

export default function Results({ url, imgToShow, setImgToShow }) {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.container}>
                {url.map((item, id) => {
                    if (id < imgToShow) {
                        return <Card key={item + id} sx={{ width: 245, heigth: 245 }} className={classes.cardContainer}>
                            <CardMedia
                                className={classes.imgStyles}
                                component="img"
                                image={item.img_src}
                                alt={item.name}
                            />
                        </Card>
                    }
                })}
            </Box>
            <TextButton
                setImgToShow={setImgToShow}
                imgToShow={imgToShow}
                url={url}
            />
        </>
    );
}