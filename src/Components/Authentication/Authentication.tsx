import Box from '@mui/material/Box';
import React, {useState} from 'react';
import Tabs from "./Tabs/Tabs";
import classes from './Authentication.module.scss'
import {Props} from "../Types/Types";

function Authentication(props: Props) {
    return (
        <Box className={classes.Authentication}>
            <Tabs path={props.path} setPath={props.setPath}/>
        </Box>
    )
}

export default Authentication;