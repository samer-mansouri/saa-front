import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Grid} from '@mui/material'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import { getRowIdFromRowModel as getRowId }  from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';
import {
   GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }




  
  const rows = [
    { id: 19, lastName: 'Snow', firstName: 'Jon', age: 35, speciality:'System embarqué' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 20, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
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


function Profiles() {

  const [data, setData] = React.useState([]);
  
  const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/profile');
    setData(response.data);
  };
  
const columns = [
  { field: 'id', headerName: 'Reference', width: 300,disableColumnMenu : true },

  {
    field: 'firstName',
    headerName: 'First name',
    width: 200,
    editable: false,
    disableColumnMenu: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 200,
    editable: false,
    disableColumnMenu : true,
  },
  {
    field: 'speciality',
    headerName: 'Speciality',
    width: 200,
    editable: false,
    disableColumnMenu : true,
  },
  {
      field: "action",
      headerName: "",
      width : 200,
      sortable: false,
      disableColumnFilter : true,

      renderCell: (cellValues) => {
          return (
            <Button
              variant="outlined"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
                
              }}
            >
              View profile
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

const tab = {
  rows: data.map(item => ({
    id: item._id,
    firstName: item.firstname,
    lastName: item.lastname,
    speciality: item.speciality,
  })),
}


  const navigate = useNavigate();

  const handleClick = (param, event) => {
    console.log(event.row)
    navigate(`profile/${event.row.id}`)  
  };

  React.useEffect(() => {
    fetchData();
  }, []);



  return (
    <Grid item xs={8} style={{ height: 400, width: '100%' }}  >
      <Grid container>
      <Grid item container   justifyContent={'right'} style={{marginBottom : '1%'}}>
      <Button variant='contained'  alignItem='right' style={{backgroundColor : '#0070AD'}} component={Link} to='addprofile'> <AddCircleIcon style={{marginRight :'10px'}} />  Add Profile </Button>
      </Grid>
      <Grid container>
      <DataGrid
        rows={tab.rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
        disableSelectionOnClick
        disableColumnMenu 
        // hideFooter
        disableColumnSelector
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

export default Profiles