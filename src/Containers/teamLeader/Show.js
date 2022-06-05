import React from 'react'
import Ticket from './Ticket';
import { Grid } from '@mui/material';

const tickets =[
    {   fullName : 'Foulent El Fouleni', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     
     {   fullName : 'Foulent', 
     nationality :'Tunisian' ,
     phone : '23645872',
     email : 'HAmma@nahjla3me.com',
     yExp : '2 years',
     birthday : '15/09/2000',
     key : 1,
  },
  {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
     {   fullName : 'Foulent', 
        nationality :'Tunisian' ,
        phone : '23645872',
        email : 'HAmma@nahjla3me.com',
        yExp : '2 years',
        birthday : '15/09/2000',
        key : 0,
     },
    ];

function Show() {
  return ( <Grid item xs={8} >
     <Grid container direction='row' rowSpacing={3} columnSpacing={3}> 
     {tickets.map((ticket) => <Grid item xs='6'md='4' >
                                <Ticket ticket={ticket} /> 
                                </Grid>
                                
    )}
    </Grid>
    </Grid>
  )
}

export default Show