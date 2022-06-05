import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Grid} from '@mui/material'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Modal,Paper,Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  GridToolbarContainer,
 GridToolbarColumnsButton,
 GridToolbarFilterButton,
 GridToolbarExport,
} from '@mui/x-data-grid';
import axios from 'axios';


function CustomToolbar() {
   return (
     <GridToolbarContainer>
       <GridToolbarFilterButton />
       <GridToolbarExport />
     </GridToolbarContainer>
   );
 }


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

 

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email : 'hammadi@gmail.com', username : 'Hammadi' , department : 'HR', role:'HR' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];





export default function Accounts() {

  const [rows, setRows] = useState([]);
    // let rows = [];

 

  const fetchUser = async () => {
  
    const res = await axios.get( "http://localhost:4000/api/user");
     setRows(res.data)
    
  }


  const  handleDelete = async (id) =>{
    console.log(id)
      const res = await axios.delete(`http://localhost:4000/api/user/${id}`)
        console.log(res);

        fetchUser();

        handleClose();
  }
  

  useEffect(() => {
    fetchUser();
  }, []);



  const columns = [
    { field: '_id', headerName: '', width: 1 ,hide:true},
    {
      field: 'firstname',
      headerName: 'First name',
      width: 120,
      editable: false,
    },
    {
      field: 'lastname',
      headerName: 'Last name',
      width: 120,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 180,
      editable: true,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 110,
      editable: true,
    },
    {
      field: 'position',
      headerName: 'Role',
      width: 110,
      editable: true,
    },
    {
      field: "action",
      headerName: "",
      width : 170,
      sortable: false,
      renderCell: (cellValues) => {
          return (
            <Grid>
            <Button
              variant="outlined"
              color="primary"
              // component={Link}
              // to='../account'
              onClick={(event) => {
                handleClick(event, cellValues);
               
              }}
            >
              View profile
            </Button>
            </Grid>
          );
        }
  },
    
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  ];

const [user, setUser] = React.useState({
  name : '',
  role : '',
  email : '',
  dep:'',
  birth:'',
});


  const handleClick = (param, event) => {
    console.log(event.row);
    setUser({
      id : event.row._id,
      name : event.row.firstname+' '+event.row.lastname,
      role : event.row.position,
      email : event.row.email,
      dep : event.row.department,
      age : event.row.birthdate,
    })
    handleOpen();
  };

  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (

    <Grid item xs={8} style={{ height: 400, width: '100%' }}>
      {/* <Grid item container  columnGap={1} justifyContent={'right'} style={{marginBottom : '1%'}}>
      <Button variant='contained'  alignItem='right' style={{backgroundColor : '#0070AD'}} component={Link} to='addprofile'>   Modify </Button>
      <Button variant='contained'  alignItem='right' style={{backgroundColor : '#0070AD'}} component={Link} to='addprofile'>   Delete </Button>
      
      </Grid> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Paper sx={style}>

          <Grid conatienr rowGap={2}> 

            <Grid item mb={3} textAlign={'center'}>
              <Typography variant='h4'>Profile</Typography>
            </Grid>

            <Grid item container rowSpacing={2} columnSpacing={1}>

                <Grid container  item md={6}>
                  <Grid item md={4}>
                    <Typography variant='body1'>Name : </Typography>
                  </Grid>
                  <Grid item md={8}>
                    <Typography variant='body1'> {user.name} </Typography> 
                  </Grid> 
                </Grid>
                <Grid container  item md={6}>
                  <Grid item md={4}>
                    <Typography variant='body1'>Email : </Typography>
                  </Grid>
                  <Grid item md={8}>
                    <Typography variant='body1'> {user.email} </Typography> 
                  </Grid> 
                </Grid>
                <Grid container  item md={6}>
                  <Grid item md={4}>
                    <Typography variant='body1'>Role : </Typography>
                  </Grid>
                  <Grid item md={8}>
                    <Typography variant='body1'> {user.role} </Typography> 
                  </Grid> 
                </Grid>
                <Grid container  item md={6}>
                  <Grid item md={4}>
                    <Typography variant='body1'>Departement : </Typography>
                  </Grid>
                  <Grid item md={8}>
                    <Typography variant='body1'> {user.dep} </Typography> 
                  </Grid> 
                </Grid>
                <Grid container  item md={6}>
                  <Grid item md={4}>
                    <Typography variant='body1'>Birthdate : </Typography>
                  </Grid>
                  <Grid item md={8}>
                    <Typography variant='body1'> {user.age} </Typography> 
                  </Grid> 
                </Grid>
                
               
            </Grid>   
          
            <Grid  item conatainer  textAlign={'end'}>
                <Button variant='contained' sx={{ '&:hover' : {backgroundColor : 'blue'}, mt : 2, mr: 2}}>Modify</Button> 
                <Button variant='contained' sx={{'&:hover' : {backgroundColor : 'red'}, mt : 2}} onClick={() => handleDelete(user.id)} >Delete</Button> 
            </Grid>  
          </Grid>    
        </Paper>

      </Modal>
      <Grid container>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        density={'confortable'}
        disableSelectionOnClick
        disableMultipleSelection
        disableColumnMenu
        style={{background : 'white'}}
        autoHeight
        components={{
          Toolbar: CustomToolbar,
        }}
      />
      </Grid>
      
    </Grid>
  );
}