import Box from '@mui/material/Box';
import React from 'react';
import {Button, TextField} from "@mui/material";

const Authorization = () => {
    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                    id="login"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    sx={{ marginTop: '20px'}}
                    id="password"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </Box>
            <Button sx={{float: 'right', margin: '20px 0'}} variant="outlined">Отправить</Button>
        </Box>
    )
}

export default Authorization