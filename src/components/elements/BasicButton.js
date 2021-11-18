import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { API_KEY } from '../../constants/API_KEY';
import { showDefaultImgCount } from '../../constants/global';

const useStyles = makeStyles({
    btnContainer: {
        marginTop: 20,
        '@media (max-width: 900px)': {
            marginTop: 10,
            width: '100%',
        },
    },
    btn: {
        '&.css-sghohy-MuiButtonBase-root-MuiButton-root': {
            padding: '16px 60px !important',
            background: 'linear-gradient(to bottom, #000099 0%, #000066 100%)',
            '@media (max-width: 900px)': {
                width: '100%',
            },
        },
    },
    errorStyles: {
        color: 'red',
        margin: 0,
        fontSize: 12,
        textAlign: 'center'
    },
})

export default function BasicButton({ camera, setCamera, rover, sol, setUrl, setImgToShow }) {
    const classes = useStyles();
    const [error, setError] = useState('');

    useEffect(() => {
        if (camera === 'Rear') {
            setCamera('RHAZ');
        }
        else if (camera === 'Front') {
            setCamera('FHAZ');
        }
    }, [camera, setCamera]);

    const sendValues = () => {
        if (rover !== undefined && camera !== undefined && sol !== undefined) {
            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&rover=${rover}&api_key=${API_KEY}`)
                .then((response) => {
                    setError('');
                    setUrl(response.data.photos);
                    setImgToShow(showDefaultImgCount);
                })
                .catch(() => {
                    return false;
                })
        }
        else {
            setError('Form has empty field');
        }
    }

    return (
        <Box className={classes.btnContainer}>
            <Button className={classes.btn} onClick={sendValues} variant="contained">Send</Button>
            {error.length > 0 && <p className={classes.errorStyles}>{error}</p>}
        </Box>
    );
}