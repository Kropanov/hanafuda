import Box from '@mui/material/Box';
import React from 'react';
import Tabs from "./Tabs/Tabs";
import classes from './Authentication.module.scss'

function Authentication() {
    return (
        <Box className={classes.Authentication}>
            <Tabs/>
        </Box>
    )
}

export default Authentication;