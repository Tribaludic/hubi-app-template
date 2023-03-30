import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import LeftMenu from '../left_menu/LeftMenu';
import {checkSession, getUser} from '../../firebase/firebase';

const GlobalAppBar = ({ title }) => {
    const [leftDrawer, setLeftDrawerState] = React.useState(false);
    const [user, setUser] = useState(getUser());
    useEffect(()=>{
        checkSession().then(()=>{
            const authUser = getUser();
            if(authUser !== null){
                setUser(getUser);
            }
        });
    },[user]);

    function userEmail(){
        return user !== null ? user.email : '';
    }
    return (
        <div>
            <LeftMenu state={leftDrawer} setState={setLeftDrawerState} />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setLeftDrawerState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Button color="inherit">{userEmail()}</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default GlobalAppBar