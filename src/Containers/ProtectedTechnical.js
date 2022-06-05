import React from 'react'
import useAuth from '../Hooks/useAuth'
import SideBar from './barComps/SideBar'
import { Outlet,useLocation,Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';

function ProtectedTechnical() {
  const isAuth = localStorage.getItem("user");
  const role = localStorage.getItem("role");
    const location = useLocation();

  return (
     role == 'Technical'? <Grid container style={{justifyContent : 'center'}}>
                        <SideBar/> 
                        <Outlet  />
                     </Grid>
                   : isAuth ? <Navigate to='unauth' state={{from: location}} replace />
                   :  <Navigate to='/' state={{from: location}} replace />
  )
}

export default ProtectedTechnical