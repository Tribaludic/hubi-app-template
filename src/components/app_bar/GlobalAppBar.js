import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import LeftMenu from '../left_menu/LeftMenu';
import { auth, login, getUserDisplayName } from '../../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPopup from '../loading_popup/LoadingPopup';
var checkSession = false;
var i = 0;
const GlobalAppBar = ({ title }) => {
    const [leftDrawer, setLeftDrawerState] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [loadingPopup, setLoadingPopup] = useState(true);
    //const [checkSession, setCheckSession] = useState(false);

    // console.log(userEmail());


    // useEffect(()=>{
    //     setTimeout(() => {
    //         console.log(i);
    //         i++;
    //       }, 1000);
    // },[]);


    // if(!checkSession){
    //     checkSession = true;
    //     setTimeout(() => {
    //         if(user === null){
    //             console.log(userEmail());
    //             login().then((result)=>{
    //                 if(result !== null){
    //                     setLoadingPopup(false);
    //                 }
    //             });
    //         }else{
    //             setLoadingPopup(false);
    //         }
    //     }, 2000);
    // }



    useEffect(() => {
        console.log('useEffect 1');
        setLoadingPopup(loading);
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

    // useEffect(()=>{
    //     console.log('useEffect 2');
    //     console.log(userEmail());
    // },[]);

    function userEmail() {
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
            {loadingPopup && <LoadingPopup />}
        </div>
    )
}

export default GlobalAppBar