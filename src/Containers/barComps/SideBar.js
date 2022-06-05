import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { useParams, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarStyles } from './SideBarStyle';
import logo from '../../Assets/logo-cap.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Header from '../barComps/hedar';
import { useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'

function SideBar() {
    
    const [title, setTitle] = useState(null);
    // const location = useLocation();

    const navigate = useNavigate()

    const logoStyle = {

        width : '100%',
        margin :'0',
        padding : '13%'
    };



    const tllist = [

        {
            id: 0,
            icons: <DashboardIcon />,
            label: "Home",
            route: "home",
        },
        {
            id: 1,
            icons: <DashboardIcon />,
            label: "Request ",
            route: "form",
        },
        {
            id: 2,
            icons: <DashboardIcon />,
            label: "Positions list",
            route: "positions",
        }
        
    
    ]
    
    const hrlist = [
    
        {
            id: 0,
            icons: <DashboardIcon />,
            label: "Home",
            route: "Hhome",
        },
        {
            id: 1,
            icons: <DashboardIcon />,
            label: "Manage postiions",
            route: "positions",
        },
        {
            id: 2,
            icons: <DashboardIcon />,
            
            label: "Manage Requests",
            route: "requests",
        },
         {
            id: 3,
            icons: <DashboardIcon />,
            label: "Manage profiles",
            route: "profiles",
        } ,
        {
            id: 4,
            icons: <DashboardIcon />,
            label: "Manage Interviews",
            route: "interviews",
        }
        
    
    ]
    
    const alist = [
    
        {
            id: 0,
            icons: <DashboardIcon />,
            label: "Home",
            route: "Ahome",
        },
        {
            id: 1,
            icons: <DashboardIcon />,
            label: "Create Account",
            route: "createAccount",
        },
        {
            id: 2,
            icons: <DashboardIcon />,
            label: "Manage Accounts",
            route: "manageAccount",
        },
         {
            id: 3,
            icons: <DashboardIcon />,
            label: "Statistics",
            route: "statistics",
        }
        
        
    
    ]
    
    const tclist = [
    
        // {
        //     id: 0,
        //     icons: <DashboardIcon />,
        //     label: "Home",
        //     route: "Tehome",
        // },
        {
            id: 1,
            icons: <DashboardIcon />,
            label: "Calendar ",
            route: "calendar",
        },
        {
            id: 2,
            icons: <DashboardIcon />,
            label: "Candidates Bookmark ",
            route: "bookmark",
        }
        
    
    ]
    
    const role = localStorage.getItem('role');

    console.log('role hne', role)
    
    var navbaritems = (role === 'Team Leader') ? tllist 
                            : (role === 'HR') ? hrlist 
                            : (role === 'Technical') ? tclist 
                            : (role === 'Admin') ? alist
                            : console.log('ghadikina')





    return (

        <>

            <Header title={title} />


            <Drawer
                sx={navbarStyles.drawer}
                variant="permanent"
                anchor="left"
            > 
               {/* <a href="/Tlhome"> */}
            <img src={logo} alt={'Logo'} style={logoStyle} />
          {/* </a> */}

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

