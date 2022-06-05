import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { Stack } from "@mui/material";
import { borderRadius, textAlign } from "@mui/system";
import { TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Moment from 'react-moment';



const profStyle = {
  backgroundColor: "white",
  justifyContent: "center",
  width: "100%",
  borderRadius: "11px",
  padding: "5%",

  pad: {
    backgroundColor: "white",
    justifyContent: "center",
    width: "100%",
    borderRadius: "11px",
    padding: "2%",
    textAlign: "center",
  },
};

function Profile() {

  const [profile, setProfile] = React.useState({});

  const { id } = useParams();

  const fetchData = async () => {
    axios.get(`http://localhost:4000/api/profile/${id}`).then((res) => {
      console.log(res.data);
      setProfile(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid
      item
      container
      md={8}
      justifyContent="space-evenly"
      // alignContent="center"
      // columnSpacing={1}
      rowSpacing={3}
    >
      {/* <Grid container md={4} item >
           <Grid item style={profStyle} > <h1>Profile</h1></Grid> 
         </Grid> 
         <Grid container md={8} item >
          <Grid container md={12} style={{maxHeight : '80px'}} item >
             <Grid item style={profStyle}> <h1>Profile</h1></Grid>
          </Grid> 
         </Grid>    */}

      <Grid item container xs={6} md={12} lg={12} >
        <Grid item container  md={6}>
          <Grid  item container style={profStyle} mr={0.5}>
            <Grid item lg={12} >             
                Full Name : {profile.firstname} {profile.lastname}    
            </Grid>
            <Grid item lg={12}>
              Phone Number : {profile.phone}
            </Grid>
            <Grid item lg={12}>
              Email : {profile.email}
            </Grid>
            <Grid item lg={12}>
              Nationality : {profile.nationality}
            </Grid>
            <Grid item lg={12}>
              Adresse : {profile.adress}
            </Grid>
            <Grid item lg={12}>
              Birth date: <Moment format="DD/MM/YYYY">{profile.birthdate}</Moment>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container md={6} >
          <Grid item container  style={profStyle} ml={0.5} >
            <Grid item lg={12}>
              Current Function : {profile.currfunction}
            </Grid>
            <Grid item lg={12}>
              Speciality : {profile.speciality}
            </Grid>
            <Grid item lg={12}>
              Years of Experiance : {profile.experince}
            </Grid>
            <Grid item lg={12}>
              Current Salary : {profile.currsalary}
            </Grid>
            <Grid item lg={12}>
              Mobility : {profile.mobility}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

     

      <Grid item container md={12}>
        <Grid item container style={profStyle.pad} rowSpacing={2}>
          <Grid item lg={4}>
            <InputLabel>Technical Skills :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.technical ? profile.technical : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
              
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Proactivity :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.proactivity ? profile.proactivity : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Professional Maturity :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.professional ? profile.professional : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>RelationShip/Personality :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.personality ? profile.personality : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>TeamWork :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.teamwork ? profile.teamwork : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Oral Communication :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.oral ? profile.oral : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Economic Adequacy :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.economic ? profile.economic : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Leadership :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.leadership ? profile.leadership : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Adaptation & Flexibility :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.flexibility ? profile.flexibility : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>English :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.english ? profile.english : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Resilience :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.resilience ? profile.resilience : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Conflict Management :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.conflict ? profile.conflict : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>French :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.french ? profile.french : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Client Focus :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.clientfocus ? profile.clientfocus : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Learning & Analytical capacity :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.learningcapacity ? profile.learningcapacity : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Organization & Time Management :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.timemanagment ? profile.timemanagment : "Not Specified"}
              InputProps={{ readOnly: true, inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel>Global Evaluation :</InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              defaultValue={profile?.global ? profile.global : "Not Specified"}
              InputProps={{  inputProps: {
                style: { textAlign: "center" },
              }, }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container md={12}>
        <Grid style={profStyle.pad} container rowSpacing={2}>
          <Grid md={12} item textAlign={'start'} >
            <InputLabel>Trainnig/University:(Course, subjects, Other Experiences) :</InputLabel>
            <Typography >{profile.training}</Typography>
          </Grid> 
          <Grid md={12} item textAlign={'start'} >
          <InputLabel >Professional Experiance /Life Expectations : </InputLabel>
          <Typography> {profile.proexperience} </Typography>
          </Grid> 
          <Grid md={12} item textAlign={'start'}>
          <InputLabel>Relationship with colleagues / Personality : </InputLabel>
          <Typography >{profile.perso} </Typography>
          </Grid> 
          <Grid md={12} item textAlign={'start'}>
          <InputLabel>Other External Recruitment Process : </InputLabel>
          <Typography >{profile.extrnal}</Typography> 
          </Grid>  
        </Grid>       
      </Grid>
    </Grid>
  );
}

export default Profile;
