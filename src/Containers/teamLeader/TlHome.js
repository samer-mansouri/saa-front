import { Grid, Paper, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
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

function TlHome() {
    const navigate= useNavigate();

  return (
    <Grid item md={8} container   columnSpacing={3} rowSpacing={3} justifyContent='center' alignItems='center' direction='row' >
    <Grid item xs={12} md={6}  >
    <Paper  sx={defStyle} elevation={4}  onClick={() =>  navigate('../form')} ><Typography variant='h4'  color={' #095473'}> Add position request</Typography></Paper>

    </Grid>
    <Grid item xs={12} md={6}  >
    <Paper  sx={defStyle} elevation={4}  onClick={() =>  navigate('../Ticket')} ><Typography variant='h4'  color={' #095473'}> View positions</Typography></Paper>

    </Grid>
  
    
</Grid>
  )
}

export default TlHome