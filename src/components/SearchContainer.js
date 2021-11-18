import React from 'react';
import { makeStyles } from '@material-ui/core';
import BasicSelect from './elements/BasicSelect';
import BasicButton from './elements/BasicButton';
import Box from '@mui/material/Box';
import InputNumber from './elements/InputNumber';

const useStyles = makeStyles({
    searchWrapper: {
        padding: '0 20px',
        minHeight: 100,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        '@media (max-width: 900px)': {
            flexDirection: 'column',
        },
    },

    selectWrapper: {
        display: 'flex',
        '@media (max-width: 900px)': {
            width: '100%',
        },
        '@media (max-width: 550px)': {
            flexDirection: 'column',

        },
    },

    containerSelect: {
        width: '100%',
        marginRight: 3,
        minWidth: 200,
        '@media (max-width: 700px)': {
            minWidth: 150,
        },
    },

    label: {
        color: 'white',
        fontSize: 16,
    },

    inputContainer: {
        backgroundColor: '#ffffff',
        opacity: 0.9,
        borderRadius: 4,
        '& .MuiTextField-root': {
            width: '100%',
        }
    },
})

export default function SearchContainer({ setRover, setCamera, setSol, camera, rover, sol, setUrl, setImgToShow }) {
    const classes = useStyles();

    return (
        <Box className={classes.searchWrapper}>
            <Box className={classes.selectWrapper}>
                <Box className={classes.containerSelect}>
                    <label className={classes.label}>Rover</label>
                    <Box className={classes.inputContainer}>
                        <BasicSelect handleValue={(value) => setRover(value)} values={['Curiosity', 'Opportunity', 'Spirit']} />
                    </Box>
                </Box>
                <Box className={classes.containerSelect}>
                    <label className={classes.label}>Camera</label>
                    <Box className={classes.inputContainer}>
                        <BasicSelect handleValue={(value) => setCamera(value)} values={['Front', 'Rear']} />
                    </Box>
                </Box>
                <Box className={classes.containerSelect}>
                    <label className={classes.label}>Mars day</label>
                    <Box className={classes.inputContainer}>
                        <InputNumber handleValue={(value) => setSol(value)} />
                    </Box>
                </Box>
            </Box>
            <BasicButton
                camera={camera}
                setCamera={setCamera}
                rover={rover}
                sol={sol}
                setUrl={setUrl}
                setImgToShow={setImgToShow}
            />
        </Box>
    );
}