import React ,{useState} from 'react'
import { Grid } from '@mui/material';
import SideBar from './SideBar.js';
import { Outlet } from 'react-router-dom';




export default function TeamLeader() {


 
  return (
    <Grid container >
        <SideBar/> 
        <Outlet/>
    </Grid>     
  )
}
