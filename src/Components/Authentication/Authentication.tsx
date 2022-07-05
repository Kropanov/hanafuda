import Box from '@mui/material/Box';
import React from 'react';
import Tabs from "./Tabs/Tabs";
import {makeStyles} from "@mui/material";

const useStyles: any = makeStyles({
    authentication: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function Authentication() {
    const classes = useStyles();
    return (
        <Box className={classes.authentication}>
            <Tabs/>
        </Box>
    )
}

export default Authentication;