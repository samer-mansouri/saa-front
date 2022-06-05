import React from 'react'
import { Grid,Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate,Link } from 'react-router-dom';
import FeedbackModal from './feedbackModal';



// const handleClick = (param, event) => {
//     navigate('requestProceed');
//   };





function Bookmark() {
    
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);

  const handleShowModal = () => {
    console.log('test')
    setOpen(true);
  };

  const columns = [
    // { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'JobSeeker',
      headerName: 'Job Seeker',
      width: 200,
      editable: false,
    },
    {
      field: 'Position',
      headerName: 'Position',
      width: 250,
      editable: false,
    },
    {
      field: 'Applying',
      headerName: 'Applying',      
      width: 140,
      editable: false,
      format: ("DD/MM/YYYY"),
     },
    {
      field: 'Appointment',
      headerName: 'Appointment',
      width: 140,
      type: String,
      editable: false,
    },
    {
        field: 'action1',
        headerName: "",
        width : 170,
        sortable: false,
        renderCell: (cellValues) => {
            return (
              <Button
                variant="outlined"
                color="info"
                onClick={(event) => {
                handleShowModal();
                  
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
  //       `${params.row.department || ''} ${params.row.lastName || ''}`,
  //   },
  ];
  
  const rows = [
    { id: 1, JobSeeker: 'Hamid Hamden', Position: 'Automative', Applying: '25/03/2020'},
    { id: 3, JobSeeker: 'Mahmoud', Position: 'R&D', Applying: '01/03/2021' },
    { id: 4, JobSeeker: 'Louai', Position: 'Aeronitics', Applying: '14/03/2021' },
    { id: 5, JobSeeker: 'Christoph', Position: 'Electronics', Applying: '15/04/2021' },
    { id: 6, JobSeeker: 'Manuell', Position: 'Dev', Applying: '25/04/2021' },
    { id: 7, JobSeeker: 'Radhi', Position: 'Test', Applying: '05/05/2021' },
    { id: 8, JobSeeker: 'AbdelHamid', Position: 'Mechatronic', Applying: '16/06/2021' },
    { id: 9, JobSeeker: 'Sofien', Position: 'Infrastructure and Transport', Applying: '21/06/2021' },
    { id: 10, JobSeeker: 'Jhon', Position: 'Test', Applying: '11/06/2021' },
    { id: 11, JobSeeker: 'Donald', Position: 'Dev', Applying: '20/08/2021' },
    { id: 12, JobSeeker: 'Alex', Position: 'Human Resources', Applying: '22/09/2021' },
    { id: 13, JobSeeker: 'Leonard', Position: 'Finance and public sector', Applying: '30/09/2021' },
    { id: 14, JobSeeker: 'Ahlem', Position: 'Semiconductor ', Applying: '01/10/2021' },
    { id: 15, JobSeeker: 'Amelie', Position: 'Electronics', Applying: '12/10/2021' },
    { id: 16, JobSeeker: 'Juliette', Position: 'Electronics', Applying: '19/10/2021' },
    { id: 17, JobSeeker: 'Ahmad', Position: 'R&D', Applying: '22/01/2022' },
    { id: 18, JobSeeker: 'Rashed', Position: 'Dev', Applying: '14/03/2022' },

  ];

  return (
    <Grid item xs={8} style={{ height: 400, width: '100%' }}  >
      <FeedbackModal open={open} setOpen={setOpen} />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableSelectionOnClick
        disableColumnMenu 
        // hideFooter
        autoHeight
        autoPageSize
        style={{background : 'white',}}
        sx={{marginBottom:'2%'}}

      />
    </Grid>
  )
}

export default Bookmark