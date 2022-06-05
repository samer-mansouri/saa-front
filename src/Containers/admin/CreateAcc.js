import * as React from 'react'
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import './createAcc.css'


const Roles =[
    {
        value : 'admin',
        label : 'Admin',
    },
    {
        value : 'hr',
        label : 'Hr',
    },
    {
        value : 'technical',
        label : 'Technical',
    },
    {
        value : 'tl',
        label : 'Team Leader',
    },
];




function CreateAcc() {

const [role, setrole] = React.useState('');
const [fname, setfname ] = React.useState('');
const [lname, setlname ] = React.useState('');
const [email, setEmail ] = React.useState('');
const [pwd, sePwd ] = React.useState('');
const [dep, setdep ] = React.useState('');
const [value, setValue] = React.useState(new Date());

const handleChange =(event) => {
    setrole(event.target.value);
};

    const [user, setUser] = React.useState({

        firstname : '' ,
        lastname :'',
        email : '',
        password : '',
        department : '',
        position :'',
        birthdate : '',

    })
 
  return (
    
        <Grid className='form' item xs ={8} container  justifyContent="space-evenly" alignContent='center' rowSpacing={2} columnSpacing={2} > 
            
            <Grid md={12} textAlign={'center'}>
                <Typography variant='h3'  >
                    Create Account
                </Typography>
            </Grid>

            <Grid item md={4}>
            <TextField id='outlined-textarea' label='First Name'  value={fname} multilane   required fullWidth onChange={(v)=> {setfname(v.target.value) ; console.log(fname) }} />

            </Grid>
            <Grid item md={4}>
            <TextField id='outlined-textarea' label='Last Name'  value={lname} multilane  required fullWidth onChange={(v)=> {setlname(v.target.value) ; console.log(lname) }} />
            </Grid>
            <Grid item md={4} required>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DatePicker
                        disableFuture
                        label="Birth Date"
                        openTo="month"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => { setValue(newValue);  }}
                        renderInput={(params) => <TextField {...params} fullWidth/>}
                        />
                    </LocalizationProvider>
            </Grid>
            <Grid item md={4}>
            <TextField id='outlined-textarea' label='Email' multilane required fullWidth/>
            </Grid>
            <Grid item md={4}>
                 <TextField id='outlined-textarea' label='Password' multilane required fullWidth/>
            </Grid>
           
            <Grid item md={4}>
              <TextField id='outlined-textarea' label='Department' multilane required fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField item
                    
                    id="outlined-select"
                    select
                    label="Select Role"
                    fullWidth
                    required
                    value={role}
                    onChange={handleChange}
                    
                  
            >  

                {Roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}

                </TextField>    
            </Grid >
            <Grid item md={12} textAlign='end'>
                 <Button variant='contained'  >Submit</Button>
            </Grid>
        </Grid>
// onClick={() => handleCreate()}
    
  )
}

export default CreateAcc