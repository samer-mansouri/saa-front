
import * as React from 'react'


import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Menu,MenuItem } from '@mui/material';
import { Link as RouterLink, BrowserRouter } from "react-router-dom";
import { Badge } from '@mui/material';
import { UserContext } from '../UserContext';
import { useContext } from 'react';





const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '0.3%',
            marginBottom : '2%'
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '1%',
            '*': {
                marginRight: '1%',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '320px',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
        disc: {
            marginRight: '5%',
        },
        avatar : {
            // width : 25,
        },

    };

    const {user,setUser} = useContext(UserContext);

    const [profileMenu, setProfileMenu] = React.useState(null);
    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>

                
                <IconButton aria-haspopup="true" aria-controls="profile-menu" onClick={e => setProfileMenu(e.currentTarget)} ><Avatar style={headerStyles.avatar} >F</Avatar></IconButton>
                <Menu
                    id="profile-menu"
                    open={Boolean(profileMenu)}
                    anchorEl={profileMenu}
                    onClose={() => setProfileMenu(null)}
                    disableAutoFocusItem  
                    >
                        <MenuItem
                            component={RouterLink}
                            onClick={() => setProfileMenu(null)}
                            to="account" 
                            >
                                 Account
                        </MenuItem>
                        
                        <MenuItem
                            onClick={() => {
                                localStorage.clear();
                                window.location.reload(false);
                            }}
                        >
                                 Disconnect
                        </MenuItem>
                </Menu>
            </Box>
            {/* <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>

                    <Tooltip
                        title="Help"
                    >
                        <div
                            color="white"
                            sx={headerStyles.helpIcon}
                        >
                            <HelpIcon />
                        </div>
                    </Tooltip>
                </Box>
            </Box> */}
        </Box>
    )
}

export default Header