import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import {  useNavigate } from 'react-router-dom'



const defStyle = {
    backgroundColor : 'white' , 
textAlign : 'center',
   padding : '6%',
   margin : '6%',
   border : '1px solid #095473',

   '&:hover':{
       cursor : 'pointer', 
       elavation : 6,
       '& $Typography': {
           color : 'red',
       }
   
   
   }

}

function Hhome() {
    const navigate= useNavigate();
  return (
    <Grid container item md={8}>
        <Grid container columnSpacing={1} rowSpacing={1} padding={3} textAlign={'center'}>
            <Grid md={6}>
                <Paper  sx={defStyle} elevation={4}  onClick={() =>  navigate('../positions')} ><Typography variant='h4'  color={' #095473'}> Manage Positions</Typography></Paper>
            </Grid>
            <Grid md={6}>
            <Paper sx={defStyle} elevation={4} onClick={() =>  navigate('../requests')}> <Typography variant='h4'  color={' #095473'}> Manage Requests</Typography></Paper>
            </Grid>
            <Grid md={6}>
            <Paper sx={defStyle} elevation={4} onClick={() =>  navigate('../profiles')}><Typography variant='h4' color={' #095473'}> Manage Profiles</Typography></Paper>
            </Grid>
            <Grid md={6}>
            <Paper sx={defStyle} elevation={4} onClick={() =>  navigate('../interviews')} ><Typography variant='h4'  color={' #095473'}> Manage Interviews</Typography></Paper>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Hhome