import React ,{useState} from 'react'
import { Grid } from '@mui/material';
import SideBar from './SideBar.js';
import { Outlet } from 'react-router-dom';
import Calendar from 'react-calendar';




export default function TechnicalInterviewer() {


 
  return (
    <Grid container >
        <SideBar/> 
        <Outlet/>
    </Grid>     
  )
}

