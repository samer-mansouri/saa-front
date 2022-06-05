import { Grid, Paper, Typography } from '@mui/material'
import { textAlign } from '@mui/system'
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

function Ahome() {
    const navigate= useNavigate();

  return (

    <Grid item md={8} container   columnSpacing={3} rowSpacing={3} justifyContent='center' alignItems='center' direction='row' >
    <Grid item xs={12} md={6}  >
    <Paper  sx={defStyle} elevation={4}  onClick={() =>  navigate('../createAccount')} ><Typography variant='h4' color={' #095473'}> Create Account</Typography></Paper>

    </Grid>
    <Grid item xs={12} md={6}  >
    <Paper  sx={defStyle} elevation={4}  onClick={() =>  navigate('../manageAccount')} ><Typography variant='h4'  color={' #095473'}> Manage Account</Typography></Paper>

    </Grid>
  
    
</Grid>
  )
}

export default Ahome