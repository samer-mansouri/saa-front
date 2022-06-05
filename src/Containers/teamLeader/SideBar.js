import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { useParams, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarStyles } from '../barComps/SideBarStyle';
import { navbaritems } from './listitem';
import logo from '../../Assets/logo-cap.png';

import Header from '../barComps/hedar';

import { useLocation } from 'react-router-dom';

function SideBar() {
    const [title, setTitle] = useState(null);
    const location = useLocation();

    const navigate = useNavigate()

    const logoStyle = {

        width : '100%',
        margin :'0',
        padding : '13%'
    };

    return (

        <>

            <Header title={title} />


            <Drawer
                sx={navbarStyles.drawer}
                variant="permanent"
                anchor="left"
            > 
               <a href="/Tlhome">
            <img src={logo} style={logoStyle} />
          </a>

                {/* <Toolbar /> */}
                <Divider />
                <List>
                    {navbaritems.map((item, index) => (
                        <ListItem button key={item.id}
                            onClick={() => {
                                navigate(item.route);

                            }}



                        >
                            <ListItemIcon
                                sx={
                                    navbarStyles.icons
                                }
                            >
                                {item.icons}
                            </ListItemIcon>
                            <ListItemText primary={item.label} sx={
                                navbarStyles.text
                            } />
                        </ListItem>
                    ))}
                </List>


            </Drawer>

        </>

    )
}

export default SideBar

