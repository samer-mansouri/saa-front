import * as React from 'react'
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './form.css'

const Spec =[
    {
        value : 'java',
        label : 'Java',
    },
    {
        value : 'php',
        label : 'PHP',
    },
    {
        value : 'react',
        label : 'React',
    },
    {
        value : 'mongo',
        label : 'Mongo',
    },
];




function Form() {

const [speciality, setspec] = React.useState('');
const [value, setValue] = React.useState(new Date());


const handleChange =(event) => {
    setspec(event.target.value);
};

  return (
    
        <Grid className='form' item xs ={8} container   alignContent='center' rowSpacing={0}  > 
          <Grid container justifyContent="space-evenly" rowSpacing={2} columnSpacing={1} >
            <Grid item md={12} textAlign='center' margin={'1%'}>
               <Typography variant='h3'>
                   Vacant Job Request
               </Typography>
            </Grid>
            <Grid item md={4}>
               <TextField item id='outlined-textarea' label='Function' multilane fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField item
                    id="outlined-select"
                    select
                    label="Select Specialtiy"
                    value={speciality}
                    onChange={handleChange}
                    helperText="Select Speciality Needed"
                    fullWidth 
            >  

                {Spec.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}

                </TextField>    
            </Grid >
            <Grid item md={4}>
                 <TextField id='outlined-textarea' label='Number Needed' multilane fullWidth />
            </Grid>
            <Grid item md={4}>
              {/* <TextField id='outlined-textarea' label='Deadline ' multilane /> */}
              <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DatePicker
                    disablePast
                    label="Responsive"
                    openTo="month"
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => { setValue(newValue);  }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item md={4}>
              <TextField id='outlined-textarea' label='Experiance needed' multilane fullWidth  />
            </Grid>
            <Grid item md={4}>
              <TextField id='outlined-textarea' label='Preferred Adress' multilane fullWidth />
            </Grid>
            
            <Grid item md={12} textAlign={'end'}>
                 <Button variant='contained'   >Submit</Button>
            </Grid>
            

        </Grid>

            
        </Grid>

    
  )
}

export default Form