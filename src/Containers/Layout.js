import React from 'react'
import useAuth from '../Hooks/useAuth'
import SideBar from './barComps/SideBar';
import { Outlet,useLocation,Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';

function Layout() {
  const isAuth = localStorage.getItem("user");
    const location = useLocation();

  return (
    isAuth? <Grid container style={{justifyContent : 'center'}}>
                        <SideBar/> 
                         <Outlet  /> 
                     </Grid>
                   :  <Navigate to='/' state={{from: location}} replace />
  )
}

export default Layout