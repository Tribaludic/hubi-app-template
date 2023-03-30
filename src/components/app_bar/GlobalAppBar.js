import { Avatar, Button, Grid, Menu, MenuItem, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import LeftMenu from '../left_menu/LeftMenu';
import { auth, login, logout } from '../../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPopup from '../loading_popup/LoadingPopup';
import dragon from '../../images/dragon.png';
import { useNavigate } from 'react-router-dom';
var i = 0;
const GlobalAppBar = ({ title }) => {
    const navigate = useNavigate();
    const [leftDrawer, setLeftDrawerState] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [loadingPopup, setLoadingPopup] = useState(true);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [profileUrl, setProfileUrl] = useState(dragon);
    const [displayName, setDisplayName] = useState('');
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
   
    useEffect(() => {
        console.log('useEffect 1');
        setLoadingPopup(loadingPopup);
        console.log(userEmail());
        if (userEmail() === '') {
            i++;
            if (i == 2) {
                login().then((result) => {
                    if (result !== null) {
                        setLoadingPopup(false);
                    }
                });
            }
        }

    }, [i]);

    useEffect(() => {
        if(user !== null){
            setLoadingPopup(false);
            setDisplayName(user.displayName);
            setProfileUrl('https://ws.usfq.edu.ec/UserImage.aspx?key='+user.email.toLowerCase());
        }      
    }, [user]);



    const userEmail = () => user !== null ? user.email : '';

    const handleLogout = async () => {
        await logout();
        setLoadingPopup(true);
        i=0;
        window.location.reload(false);
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
                        {/* <Button color="inherit">{userEmail()}</Button> */}
                        <Typography textAlign="right" pr={1}>{displayName}</Typography>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={profileUrl} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                               <MenuItem key={'Logout'} onClick={handleLogout}>
                                        <Typography textAlign="center">{'Cerrar Sessi\u00F3n'}</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {loadingPopup && <LoadingPopup />}
        </div>
    )
}

export default GlobalAppBar