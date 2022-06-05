import * as React from 'react'
import { Alert, CircularProgress, Divider, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Input } from '@mui/material';
import './ReqProceed.css'
import { useFormik, validateYupSchema } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const field = {
    width : '80%',
}

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


const validationSchema = yup.object({
    firstname : yup.string().required('First Name is required'),
    lastname : yup.string().required('Last Name is required'),
    phone : yup.number().typeError('you must specify a number').min('10000000', 'Must be exactly 8 digits')
        .max('99999999', 'Must be exactly 8 digits')    
    .required('Phone Number is required'),
    email : yup.string().required('Email is required'),
    nationality: yup.string().required('Nationality is required'),
    adress: yup.string().required('Adress is required'),
    birthdate: yup.string().required('Birth Date is required'),
    currfunction: yup.string().required('Current Function is required'),
    speciality: yup.string().required('Speciality is required'),
    experince: yup.number().typeError('you must specify a number').min('0', 'Minimum of experiance years is 0').required('Experience is required'),
    currsalary: yup.number().typeError('you must specify a number').required('Current Salary is required'),
    mobility: yup.string().required('Mobility is required'),
    training: yup.string().required('Training is required'),
    proexperience: yup.string().required('Professional Experience is required'),
    perso: yup.string().required('Personality is required'),
    extrnal: yup.string().required('External is required'),
    /*technical: yup.string().required('Technical is required'),
    proactivity: yup.string().required('Professional Activity is required'),
    professional: yup.string().required('Professional is required'),
    personality: yup.string().required('Personality is required'),
    teamwork: yup.string().required('Teamwork is required'),
    oral: yup.string().required('Oral is required'),
    economic: yup.string().required('Economic is required'),
    leadership: yup.string().required('Leadership is required'),
    flexibility: yup.string().required('Flexibility is required'),
    learningcapacity: yup.string().required('Learning Capacity is required'),
    resilience: yup.string().required('Resilience is required'),
    conflict: yup.string().required('Conflict is required'),
    timemanagement: yup.string().required('Time Management is required'),
    clientfocus: yup.string().required('Client Focus is required'),
    english: yup.string().required('English is required'),
    french: yup.string().required('French is required'),
    global: yup.string().required('Global is required'),
    notes: yup.string().required('Notes is required'), */
    
  });




function AddProfile() {

    const [englevel, setlvl] = React.useState('');
// const [frlevel, setfrlvl] = React.useState('');
const [value, setValue] = React.useState(new Date());

const handleChange =(event) => {
    setlvl(event.target.value);
};

const [err, setErr] = React.useState('');
const [success, setSuccess] = React.useState('');
const [loading, setLoading] = React.useState(false);

const sendProfile = (values) => {
    console.log(values)
    setLoading(true);
    axios.post('http://localhost:4000/api/profile', values)
    .then(res =>  {
        setErr('')
        console.log(res.data)
        setSuccess('Profile added successfully')
    
    })
    .catch(err => {
        setSuccess('')
        setErr(err.response.data.msg)
    }).finally(() => {
        setLoading(false)
    })
}


const formik = useFormik({
    initialValues: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        nationality: '',
        adress: '',
        birthdate: '',
        currfunction: '',
        speciality: '',
        experince: '',
        currsalary: '',
        mobility: '',
        training: '',
        proexperience: '',
        perso: '',
        extrnal: '',
        technical: '',
        proactivity: '',
        professional: '',
        personality: '',
        teamwork: '',
        oral: '',
        economic: '',
        leadership: '',
        flexibility: '',
        learningcapacity: '',
        resilience: '',
        conflict: '',
        timemanagement: '',
        clientfocus: '',
        english: '',
        french: '',
        global: '',
        notes: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
        const newValues = Object.keys(values).reduce((acc, key) => {
            if (values[key] !== '') {
                acc[key] = values[key];
            }
            return acc;
        }, {});
        sendProfile(newValues);
    },
});






  return (
    <Grid className='form' item xs ={8} container  justifyContent="space-evenly" alignContent='center' rowSpacing={3} marginTop={'2%'} > 
        
            <Grid item xs={12} textAlign={'center'}>
                <h2>Add Profile</h2>
                <Grid item xs={12}  display="flex" alignItems="center" justifyContent="center">
                 {
                     err.length > 0 ? 
                     <Alert severity="error">{err}</Alert> : ''
                 }
                 {
                     success.length > 0 ? 
                     <Alert severity="success">{success}</Alert> : ''
                 }
                </Grid>
            </Grid>
               <form onSubmit={formik.handleSubmit}>
               <Grid item sx={{mb: 2 }}>
                Basic Information
            </Grid>
            <Grid item container   rowSpacing={2} columnSpacing={1}>
                <Grid item md={4}>
                <TextField 
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
                item id='outlined-textarea' label='First Name' multilane fullWidth />
                </Grid>

                <Grid item md={4}>
                <TextField 
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
                item id='outlined-textarea' label='Last Name' multilane fullWidth />
                </Grid>

                <Grid item md={4}>
                    <TextField 
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    id='outlined-textarea' label='Phone Number' multilane fullWidth  />
                </Grid>

                <Grid item md={4}>
                    <TextField 
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    id='outlined-textarea' label='Email' multilane fullWidth  />
                </Grid>

                <Grid item md={4}>
                    <TextField 
                    name='nationality'
                    value={formik.values.nationality}
                    onChange={formik.handleChange}
                    error={formik.touched.nationality && Boolean(formik.errors.nationality)}
                    helperText={formik.touched.nationality && formik.errors.nationality}
                    id='outlined-textarea' label='Nationality' multilane fullWidth  />
                </Grid>

                <Grid item md={4}>
                    <TextField 
                    name='adress'
                    value={formik.values.adress}
                    onChange={formik.handleChange}
                    error={formik.touched.adress && Boolean(formik.errors.adress)}
                    helperText={formik.touched.adress && formik.errors.adress}
                    id='outlined-textarea' label='Adresse' multilane fullWidth  />
                </Grid>
            
                <Grid item md={4}>
                {/* <TextField id='outlined-textarea' label='Deadline ' multilane /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DatePicker
                        label="Birth Date"
                        openTo="month"
                        name='birthdate'
                        views={['year', 'month', 'day']}
                        value={formik.values.birthdate}
                        onChange={(date) => formik.setFieldValue('birthdate', date)}
                        format="MM/dd/yyyy"
                        error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
                        helperText={formik.touched.birthdate && formik.errors.birthdate}
                        renderInput={(params) => <TextField {...params} fullWidth/>}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item md={4}>
                <TextField 
                name='currfunction'
                value={formik.values.currfunction}
                onChange={formik.handleChange}
                error={formik.touched.currfunction && Boolean(formik.errors.currfunction)}
                helperText={formik.touched.currfunction && formik.errors.currfunction}
                item id='outlined-textarea' label='Current Function' multilane fullWidth />
                </Grid>
                
                <Grid item md={4}>
                    <TextField  
                    name='speciality'
                    value={formik.values.speciality}
                    onChange={formik.handleChange}
                    error={formik.touched.speciality && Boolean(formik.errors.speciality)}
                    helperText={formik.touched.speciality && formik.errors.speciality}
                    label='Speciality' multiline fullWidth  />
                </Grid >
                
                <Grid item md={4}>
                <TextField 
                name='experince'
                value={formik.values.experince}
                onChange={formik.handleChange}
                error={formik.touched.experince && Boolean(formik.errors.experince)}
                helperText={formik.touched.experince && formik.errors.experince}
                id='outlined-textarea' label='Years of Experiance' multilane fullWidth />
                </Grid>
                <Grid item md={4}>
                <TextField 
                name='currsalary'
                value={formik.values.currsalary}
                onChange={formik.handleChange}
                error={formik.touched.currsalary && Boolean(formik.errors.currsalary)}
                helperText={formik.touched.currsalary && formik.errors.currsalary}
                id='outlined-textarea' label='Current Salary' multilane fullWidth/>
                </Grid>
                <Grid item md={4}>
                <TextField 
                name='mobility'
                value={formik.values.mobility}
                onChange={formik.handleChange}
                error={formik.touched.mobility && Boolean(formik.errors.mobility)}
                helperText={formik.touched.mobility && formik.errors.mobility}
                id='outlined-textarea' label='Mobility' multilane fullWidth/>
                </Grid>
            </Grid>

            <Grid item sx={{mb: 2, mt:2 }}>
                Detailed Information
            </Grid>
            <Grid item container rowSpacing={2} columnSpacing={1}>
                <Grid item md={6}>
                    <TextField 
                    name='training'
                    value={formik.values.training}
                    onChange={formik.handleChange}
                    error={formik.touched.training && Boolean(formik.errors.training)}
                    helperText={formik.touched.training && formik.errors.training}
                    item id='outlined-textarea' label='Trainnig/University:(Course, subjects, Other Experiences) : ' multiline fullWidth  rows={4} />
                </Grid>
                <Grid item md={6}>
                    <TextField 
                    name='proexperience'
                    value={formik.values.proexperience}
                    onChange={formik.handleChange}
                    error={formik.touched.proexperience && Boolean(formik.errors.proexperience)}
                    helperText={formik.touched.proexperience && formik.errors.proexperience}
                    item id='outlined-textarea' label='Professional Experiance /Life Expectations : ' multiline fullWidth  rows={4} />
                </Grid>
                <Grid item md={6}>
                    <TextField 
                    name='perso'
                    value={formik.values.perso}
                    onChange={formik.handleChange}
                    error={formik.touched.perso && Boolean(formik.errors.perso)}
                    helperText={formik.touched.perso && formik.errors.perso}
                    item id='outlined-textarea' label='Relationship with colleagues / Personality : ' multiline fullWidth  rows={4} />
                </Grid>
                <Grid item md={6}>
                    <TextField 
                    name='extrnal'
                    value={formik.values.extrnal}
                    onChange={formik.handleChange}
                    error={formik.touched.extrnal && Boolean(formik.errors.extrnal)}
                    helperText={formik.touched.extrnal && formik.errors.extrnal}
                    item id='outlined-textarea' label='Other External Recruitment Process : ' multiline fullWidth  rows={4} />
                </Grid>
            </Grid>
            <Grid item sx={{mb: 2, mt:2 }}>
                Evalutation
            </Grid>
            <Grid item container rowSpacing={2} columnSpacing={1}>
                    <Grid item md={4}>
                    <TextField item
                            id="outlined-select"
                            select
                            label="Technical Skills"
                            name="technical"
                            value={formik.values.technical}
                            onChange={formik.handleChange}
                            error={formik.touched.technical && Boolean(formik.errors.technical)}
                            helperText={formik.touched.technical && formik.errors.technical}
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
                            label="Proactivity"
                            name="proactivity"
                            value={formik.values.proactivity}
                            onChange={formik.handleChange}
                            error={formik.touched.proactivity && Boolean(formik.errors.proactivity)}
                            helperText={formik.touched.proactivity && formik.errors.proactivity}
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
                            label="Professional Maturity"
                            name="professional"
                            value={formik.values.professional}
                            onChange={formik.handleChange}
                            error={formik.touched.professional && Boolean(formik.errors.professional)}
                            helperText={formik.touched.professional && formik.errors.professional}               
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
                            label="RelationShip/Personality"
                            name="personality"
                            value={formik.values.personality}
                            onChange={formik.handleChange}
                            error={formik.touched.personality && Boolean(formik.errors.personality)}
                            helperText={formik.touched.personality && formik.errors.personality}              
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
                            label="TeamWork"
                            name="teamwork"
                            value={formik.values.teamwork}
                            onChange={formik.handleChange}
                            error={formik.touched.teamwork && Boolean(formik.errors.teamwork)}
                            helperText={formik.touched.teamwork && formik.errors.teamwork}             
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
                            label="Oral Communication"
                            name="oral"
                            value={formik.values.oral}
                            onChange={formik.handleChange}
                            error={formik.touched.oral && Boolean(formik.errors.oral)}
                            helperText={formik.touched.oral && formik.errors.oral}        
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
                            label="Economic Adequacy"
                            value={formik.values.economic}
                            onChange={formik.handleChange}
                            error={formik.touched.economic && Boolean(formik.errors.economic)}
                            helperText={formik.touched.economic && formik.errors.economic}            
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
                            label="Leadership"
                            value={formik.values.leadership}
                            onChange={formik.handleChange}
                            error={formik.touched.leadership && Boolean(formik.errors.leadership)}
                            helperText={formik.touched.leadership && formik.errors.leadership}         
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
                            label="Adaptation & Flexibility"
                            name="flexibility"
                            value={formik.values.flexibility}
                            onChange={formik.handleChange}
                            error={formik.touched.flexibility && Boolean(formik.errors.flexibility)}   
                            helperText={formik.touched.flexibility && formik.errors.flexibility}           
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
                            label="Learning & Analytical capacity"
                            name="learningcapacity"
                            value={formik.values.learningcapacity}
                            onChange={formik.handleChange}
                            error={formik.touched.learningcapacity && Boolean(formik.errors.learningcapacity)}  
                            helperText={formik.touched.learningcapacity && formik.errors.learningcapacity}            
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
                            label="Resilience"
                            name="resilience"
                            value={formik.values.resilience}
                            onChange={formik.handleChange}
                            error={formik.touched.resilience && Boolean(formik.errors.resilience)}    
                            helperText={formik.touched.resilience && formik.errors.resilience}            
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
                            label="Conflict Management"
                            name="conflict"
                            value={formik.values.conflict}
                            onChange={formik.handleChange}
                            error={formik.touched.conflict && Boolean(formik.errors.conflict)} 
                            helperText={formik.touched.conflict && formik.errors.conflict}              
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
                            label="Organization & Time Management"
                            name="timemanagement"
                            value={formik.values.timemanagement}
                            onChange={formik.handleChange}
                            error={formik.touched.timemanagement && Boolean(formik.errors.timemanagement)}      
                            helperText={formik.touched.timemanagement && formik.errors.timemanagement}       
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
                            label="Client Focus"
                            name="clientfocus"
                            value={formik.values.clientfocus}
                            onChange={formik.handleChange}
                            error={formik.touched.clientfocus && Boolean(formik.errors.clientfocus)}       
                            helperText={formik.touched.clientfocus && formik.errors.clientfocus}     
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
                            label="English "
                            name='english'
                            value={formik.values.english}
                            onChange={formik.handleChange}
                            error={formik.touched.english && Boolean(formik.errors.english)}  
                            helperText={formik.touched.english && formik.errors.english}               
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
                            label="French "
                            name='french'
                            value={formik.values.french}
                            onChange={formik.handleChange}
                            error={formik.touched.french && Boolean(formik.errors.french)}
                            helperText={formik.touched.french && formik.errors.french}
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
                            label="Global Evaluation"    
                            name='global'
                            value={formik.values.global}
                            onChange={formik.handleChange}
                            error={formik.touched.global && Boolean(formik.errors.global)}  
                            helperText={formik.touched.global && formik.errors.global}                                       
                            fullWidth
                    >  

                        {lvl.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}

                        </TextField>
                    </Grid>
                    {/* <Grid item md={4}>
                    <select class="" >
                        <option selected>Open this select menu</option>
                             {lvl.map((option) => (
                                <option value={option.label}>   {option.label}</option>
                                                 ))}
                    </select>
                    </Grid> */}

                    
            </Grid>
            <Grid item container rowSpacing={2}  alignItems={'center'} sx={{mt: 2 }} >
                <Grid item md={12} alignText={'center'}>
                <TextField  
                name="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
                error={formik.touched.notes && Boolean(formik.errors.notes)}
                helperText={formik.touched.notes && formik.errors.notes}
                item id='outlined-textarea' label='Detailed Experiance / Notes / Explanations(if needed) : ' multiline fullWidth  rows={4} />
                </Grid>
            </Grid>
            <Grid item container rowSpacing={2}  alignItems={'center'} justifyContent='center' sx={{mt: 1.5 }}>
                <Grid item md={4}  alignItems='center'>
                    <Button variant='contained' fullWidth type="submit" disabled={loading}>
                        {
                            loading ? <CircularProgress color="inherit" size={24} /> : 'Submit'
                        }
                    </Button>
                </Grid>
            </Grid>
               </form>
        
       
    </Grid>
   
  )
}

export default AddProfile