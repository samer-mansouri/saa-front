import { Typography,Grid } from '@mui/material'
import React from 'react'

function Unauthorized() {
  return (
    <Grid textAlign={'center'} sx={{top:'50%',left:'50%', position : 'fixed', transform: 'translate(-50%, -50%)' }}>
        <Typography variant='h2'> Unauthorized Access</Typography>
    </Grid>
  )
}

export default Unauthorized