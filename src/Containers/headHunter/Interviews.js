import React from 'react'
import { Grid,Button,Modal,Typography,Box,Paper,TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
  GridToolbarContainer,
 GridToolbarColumnsButton,
 GridToolbarFilterButton,
 GridToolbarExport,
} from '@mui/x-data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}



const handleClick = (param, event) => {
    event.stopPropagation();
  };

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


function Interviews() {

    
const columns = [
    { field: 'id', headerName: 'Reference', width: 100 },
    {
      field: 'firstName',
      headerName: 'Fullame',
      width: 160,
      editable: false,
    },
    {
      field: 'function',
      headerName: 'Function',
      width: 160,
      editable: false,
    },
     {
      field: 'date',
      headerName: 'Date',
      width: 160,
      editable: false,
    },
     {
      field: 'time',
      headerName: 'Time',
      width: 160,
      editable: false,
    },
    {
        field: "action",
        headerName: "",
        width : 170,
        sortable: false,
        renderCell: (cellValues) => {
            return (
              <Button
                variant="outlined"
                color="primary"
                // component={Link}
                // to='profile'
                onClick={(event) => {
                  handleOpen();
                }}
              >
                Feedback
              </Button>
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
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, speciality:'System embarqué' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 16, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 17, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

  ];


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <Grid container md={8} >
        <Grid container>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Paper sx={style}>

          <Grid conatienr rowGap={2}> 

            <Grid item mb={3} textAlign={'center'}>
              <Typography variant='h4'>Interview Feedback</Typography>
            </Grid>

            <Grid item container rowSpacing={2} columnSpacing={1}>

                <Grid item md={6}>
                    <TextField item id='outlined-textarea' label='Professional Experiance /Life Expectations : ' multiline fullWidth  rows={4} />
                </Grid>
                <Grid item md={6}>
                    <TextField item id='outlined-textarea' label='Relationship with colleagues / Personality : ' multiline fullWidth  rows={4} />
                </Grid>
                <Grid item md={6}>
                    <TextField item id='outlined-textarea' label='Other External Recruitment Process : ' multiline fullWidth  rows={4} />
                </Grid>
               
            </Grid>   
          
            <Grid  item conatainer  textAlign={'end'}>
                <Button variant='contained' sx={{ '&:hover' : {backgroundColor : 'red'}, mt : 2, mr: 2}}>Reject</Button> 
                <Button variant='contained' sx={{'&:hover' : {backgroundColor : 'green'}, mt : 2}}>Proceed</Button> 
            </Grid>  
          </Grid>    
        </Paper>

      </Modal>
        <Grid container>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
        disableSelectionOnClick
        disableColumnMenu 
        // hideFooter
        autoHeight
        autoPageSize
        style={{background : 'white',}}
        sx={{marginBottom:'2%'}}
        components={{
          Toolbar: CustomToolbar,
        }}

      />
      </Grid>

        </Grid>
    </Grid>
  )
}

export default Interviews