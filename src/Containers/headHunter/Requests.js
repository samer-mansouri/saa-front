import React from 'react'
import { Grid,Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate,Link } from 'react-router-dom';
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


// const handleClick = (param, event) => {
//     navigate('requestProceed');
//   };





function Requests() {
    
  const navigate = useNavigate()

  const columns = [
    { field: 'id', headerName: 'ID', width: 15, hide : true
  
  },
    {
      field: 'teamleader',
      headerName: 'Team Leader',
      width: 120,
      editable: false,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 150,
      editable: false,
    },
    {
      field: 'function',
      headerName: 'Function',      
      width: 140,
      editable: false,
    },
    {
      field: 'start',
      headerName: 'Request Date',
      width: 110,
      editable: false,
    },
    {
      field: 'deadline',
      headerName: 'deadline',
      width: 110,
      editable: false,
    },
    {
        field: "action1",
        headerName: "",
        width : 120,
        sortable: false,
        renderCell: (cellValues) => {
            return (
              <Button
                variant="outlined"
                color="info"
                onClick={(event) => {
                  handleClick(event, cellValues);
                  
                }}
              >
                Proceed
              </Button>
            );
          }
          
    },
    {
        field: "action",
        headerName: "",
        width : 120,
        sortable: false,
        renderCell: (cellValues) => {
            return (
              <Button
                variant="outlined"
                color="error"
                onClick={(event) => {
                 
                  

                }}
              >
                Reject
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
  //       `${params.row.department || ''} ${params.row.lastName || ''}`,
  //   },
  ];

  const handleClick = (param, event) => {
    console.log(event);
    navigate(`reqproceed/${event.row.id}`)
    
  };

  const rows = [
    { id: 1, teamleader: 'Snow', department : 'departement embed', function:'System embarqué' ,deadline:'15/07/2022'},
    { id: 2, lastName: 'Lannister', department: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', department: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', department: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', department: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', department: null, age: 150 },
    { id: 7, lastName: 'Clifford', department: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', department: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 13, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 14, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 15, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 16, lastName: 'Roxie', department: 'Harvey', age: 65 },
    { id: 17, lastName: 'Roxie', department: 'Harvey', age: 65 },

  ];

  return (
    <Grid item xs={8} style={{ height: 400, width: '100%' }}  >
 
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
  )
}

export default Requests