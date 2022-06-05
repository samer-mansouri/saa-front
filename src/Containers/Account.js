import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import * as React from "react";
import { Divider } from "@mui/material";
import axios from "axios";

const profStyle = {
  backgroundColor: "white",
  justifyContent: "center",
  width: "100%",
  borderRadius: "15px",
  padding: "1%",
};

const imgStyle ={

    width : '60%',
    borderRadius : '60%'

}

function Account() {

const id = localStorage.getItem('id')
const [user,setUser] = React.useState({})

const getUser = async () => {
    const res = await axios.get(`http://localhost:4000/api/user/${id}`)
        setUser(res.data[0])
}

  React.useEffect(() => {
    getUser()
    console.log('here',id)
  }, []);



  const [password, setpass] = React.useState([]);
  const [cancel, btncancel] = React.useState([]);

  const changePass = (event) => {
    setpass(
      <Grid container md={12} style={profStyle} >
      <Grid container  columnSpacing={1}>
        <Grid item md={4}>
          <TextField variant="outlined" label="Old Password" fullWidth >
            {" "}
          </TextField>
        </Grid>
        <Grid item md={4}>
          <TextField variant="outlined" label="New Password" fullWidth>
            {" "}
          </TextField>
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="Confirm New Password"
            fullWidth
          >
            {" "}
          </TextField>
        </Grid>
      </Grid>
    </Grid>
    );
    btncancel(
      <Button variant="contained" sx={{'&:hover' : { bgcolor : 'red'}}} onClick={cancelpass}>
            Cancel
          </Button>
    );
  };

  const cancelpass = (event ) => {
    setpass(!password);
    btncancel(!cancel);
  };

  return (
    <Grid container md={8}>
      <Grid
        container
        md={12}
        rowSpacing={1}
        rowGap={1}
        
        justifyContent="space-evenly"
      >
        <Grid container  style={profStyle} >
          <Grid textAlign={'center'} md={12} mb={3}>
              <Typography variant='h2' m={1}>Account</Typography>
              <Divider></Divider>
          </Grid>
          <Grid item container md={5}  textAlign={'center'}> 
            <Grid md={12} p={2}>
            <Typography variant="h4"> {user.firstname+' '+user.lastname}</Typography>
            </Grid>
            <Grid md={12}p={4}>
            <Typography variant="subtitle1"> {user.birthdate}</Typography>
            </Grid>
          </Grid>

          <Grid item container md={7}  padding={3}>

            <Grid container  md={12}>
             <Grid item md={4}>
                    <Typography variant='body1'>Email : </Typography>
                  </Grid>
              <Grid item md={8}>
                    <Typography variant='body1'> {user.email} </Typography> 
              </Grid>            
           </Grid>

           <Grid container md={12}>
             <Grid item md={4}>
                    <Typography variant='body1'>Role : </Typography>
                  </Grid>
              <Grid item md={8}>
                    <Typography variant='body1'> {user.position} </Typography> 
              </Grid>            
           </Grid>

           <Grid container md={12}>
             <Grid item md={4}>
                    <Typography variant='body1'>Departement : </Typography>
                  </Grid>
              <Grid container  item md={8}>
                    <Typography variant='body1'> {user.department} </Typography> 
              </Grid>            
           </Grid>

          
           
          </Grid>
        </Grid>

        
        {password}
        <Grid item container justifyContent={"end"} columnGap={1} >
          {cancel}
          <Button variant="contained" onClick={changePass}>
            Change Password
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Account;
