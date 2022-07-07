import Box from '@mui/material/Box';
import React from 'react';
import {Button, IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import {Props} from "../../Types/Types";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Authorization = (props: Props) => {

    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => (!prev));
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                    id="login"
                    label="Email / Login"
                    variant="outlined"
                />
                <OutlinedInput
                    sx={{ marginTop: '20px'}}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    placeholder="Пароль"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Box>
            <Button
                sx={{float: 'right', margin: '20px 0'}}
                variant="outlined"
                // onClick={}
            >
                Отправить
            </Button>
        </Box>
    )
}

export default Authorization