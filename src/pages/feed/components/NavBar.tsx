import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'

const ButtonAppBar = () => {
    return (
        <NavLink to="/">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Genesis Tik Tok
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </NavLink>
    )
}

export default ButtonAppBar
