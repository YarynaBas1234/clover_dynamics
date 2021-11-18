import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import backgroundImage from '../images/nasa_background.jpg';
import { showDefaultImgCount } from '../constants/global';
import NoResults from './NoResults';
import SearchContainer from './SearchContainer';
import Results from './Results';

const useStyles = makeStyles({
    topSection: {
        backgroundImage: `url( ${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
})

function Main() {
    const classes = useStyles();
    const [rover, setRover] = useState();
    const [camera, setCamera] = useState();
    const [sol, setSol] = useState();
    const [url, setUrl] = useState();
    const [imgToShow, setImgToShow] = useState(showDefaultImgCount);

    return (
        <main>
            <section className={classes.topSection}>
                <Box className={classes.container}>
                    <SearchContainer
                        setRover={setRover}
                        setCamera={setCamera}
                        setSol={setSol}
                        camera={camera}
                        rover={rover}
                        sol={sol}
                        setUrl={setUrl}
                        setImgToShow={setImgToShow}
                    />
                </Box>
            </section>
            <article>
                {
                    url &&
                    <>
                        <Results
                            url={url}
                            imgToShow={imgToShow}
                            setImgToShow={setImgToShow}
                        />
                        {url.length === 0 && <NoResults />}
                    </>
                }
            </article>
        </main >
    );
}

export default Main;
