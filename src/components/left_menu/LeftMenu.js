import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export default function LeftMenu({ state, setState }) {
    const navigate = useNavigate();
    return (
        <div>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={() => setState(false)}
                
            >
                <Box
                    sx={{ width: 250 }}
                    
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemText>
                                <Typography align='center' >
                                    MENU
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                        <ListItem key={'opcion_0'} disablePadding>
                            <ListItemButton  onClick={() => navigate('/')}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'opcion_1'} disablePadding>
                            <ListItemButton  onClick={() => navigate('/page1')}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Page 1'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'sd'} disablePadding>
                            <ListItemButton  onClick={() => navigate('/sd')}>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Service Dek'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                   
                </Box>
            </Drawer>
        </div>
    );
}