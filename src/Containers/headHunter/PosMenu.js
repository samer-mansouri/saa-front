import React from 'react'
import { Grid, Typography } from '@mui/material'
import PosCard from './PosCard';


const positions =[
  {   department : 'Embedded Systems', 
      function :'Senior Developer' ,
      remaining : 3,
      teamleader : 'Brahim',
      deadline : '15/09/2000',
      key : 0,
   },
   {   department : 'Embedded Systems', 
      function :'Junior Developer' ,
      remaining : '3',
      teamleader : 'Brahim',
      deadline : '15/09/2000',
      key : 0,
   },
   {   department : 'Embedded Systems', 
      function :'Senior Developer' ,
      remaining : '3',
      teamleader : 'Brahim',
      deadline : '15/09/2000',
      key : 0,
   },
   {   department : 'Embedded Systems', 
      function :'Junior Developer' ,
      remaining : '3',
      teamleader : 'Brahim',
      deadline : '15/09/2000',
      key : 0,
   },
   {   department : 'Embedded Systems', 
      function :'Senior Developer' ,
      remaining : '3',
      teamleader : 'Brahim',
      deadline : '15/09/2000',
      key : 0,
   },
   
   
  ];

function PosMenu() {
  return (
    <Grid container item xs={8} rowSpacing={4}>
         <Grid item container justifyContent={'center'} >
            {/* <Typography variant='h3' color={'#0070AD'} > Open Positions</Typography> */}
         </Grid>
        <Grid item container direction={'row'} rowSpacing={2} columnSpacing={2}>
        {positions.map((pos) => <Grid item xs='6'md='4' >
                                <PosCard pos={pos} /> 
                                </Grid>
                                
    )}
        </Grid>
        
    </Grid>
  )
}

export default PosMenu