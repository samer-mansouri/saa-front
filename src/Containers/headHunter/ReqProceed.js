import * as React from 'react'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { flexbox } from '@mui/system';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './ReqProceed.css'



const pos ={
    function : 'Senior Development',
    speciality :'System embedded',
    num : 2,
    date : '12/15/2022',

}

const lvl =[
    {
        value : '1',
        label : 'Very Low',
    },
    {
        value : '2',
        label : 'Low',
    },
    {
        value : '3',
        label : 'Medium',
    },
    {
        value : '4',
        label : 'High',
    },
    {
        value : '5',
        label : 'Very High',
    },
]

function ReqProceed() {

const [englevel, setlvl] = React.useState('');
// const [frlevel, setfrlvl] = React.useState('');
const [value, setValue] = React.useState(Date.parse(pos.date));

const handleChange =(event) => {
    setlvl(event.target.value);
};

  return (
    <Grid className='form' item xs ={8} container  justifyContent="space-evenly" alignContent='center' rowSpacing={2} columnSpacing={1} > 
            
            <Grid item md={4}>
               <TextField item id='outlined-textarea' label='Function' multilane fullWidth defaultValue={pos.function} InputProps={{ readOnly: true, }}/>
            </Grid>
            <Grid item md={4}>
                <TextField  label='Speciality' multiline fullWidth defaultValue={pos.function} InputProps={{ readOnly: true, }} />
            </Grid >
            <Grid item md={4}>
                 <TextField id='outlined-textarea' label='Number Needed' multilane fullWidth defaultValue={pos.num} InputProps={{ readOnly: true, }} />
            </Grid>
            <Grid item md={4}>
              {/* <TextField id='outlined-textarea' label='Deadline ' multilane /> */}
              <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DatePicker
                    disablePast
                    label="Deadline"
                    openTo="month"
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => { setValue(newValue);  }}
                    renderInput={(params) => <TextField {...params} fullWidth/>}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item md={4}>
              <TextField id='outlined-textarea' label='Years of Experiance' multilane fullWidth />
            </Grid>
            <Grid item md={4}>
              <TextField id='outlined-textarea' label='Preferred Adress' multilane fullWidth/>
            </Grid>
            <Grid item md={4}>
            <TextField item
                    id="outlined-select"
                    select
                    label="French Level"
                    value={englevel}
                    onChange={handleChange}
                    fullWidth
            >  

                {lvl.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}

                </TextField>
            </Grid>
            <Grid item md={4}>
            <TextField item
                    id="outlined-select"
                    select
                    label="English Level"
                    value={englevel}
                    onChange={handleChange}                  
                    fullWidth
            >  

                {lvl.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}

                </TextField>
            </Grid>           
            <Grid item md={4}>
              <TextField id='outlined-textarea' label='Salary Range' multilane fullWidth/>
            </Grid>
            <Grid item md={12} textAlign={'end'} >
                 <Button variant='contained'   >Submit</Button>
            </Grid>
        </Grid>
  )
}

export default ReqProceed