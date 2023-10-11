import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {
    AccountBox,
    Group,
    Home,
    ModeNight,
    Pages,
    Person,
    Settings,
    Storefront
} from "@mui/icons-material";

const Sidebar = ({setMode, mode}) => {
    return (
        <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}, p:{sm:0, md:2}, top:"20px", height:"500px"}} position="sticky">
            {/*<Box >*/}
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon  sx={{minWidth:{sm:"25px", md:"50px"}}} >
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon sx={{minWidth:{sm:"25px", md:"50px"}}} >
                                <Pages/>
                            </ListItemIcon>
                            <ListItemText primary="Pages"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon sx={{minWidth:{sm:"25px", md:"50px"}}}>
                                <Group/>
                            </ListItemIcon>
                            <ListItemText primary="Groups"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon sx={{minWidth:{sm:"25px", md:"50px"}}}>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Marketplace"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon sx={{minWidth:{sm:"25px", md:"50px"}}}>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Friends"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon sx={{minWidth:{sm:"25px", md:"50px"}}}>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon sx={{minWidth:{sm:"25px", md:"50px"}}}>
                                <AccountBox/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" sx={{padding:{sm:"5px", md:"15px"}}}>
                            <ListItemIcon sx={{minWidth:{sm:"25px", md:"50px"}}}>
                                <ModeNight/>
                            </ListItemIcon>
                            <Switch onChange={e=>setMode(mode=== "light" ? "dark" : "light")} defaultChecked />
                        </ListItemButton>
                    </ListItem>
                </List>
            {/*</Box>*/}
        </Box>
    );
};

export default Sidebar;
