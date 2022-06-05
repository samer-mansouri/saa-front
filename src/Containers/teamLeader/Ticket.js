import * as React from 'react'
import { Button, Grid,Typography } from '@mui/material'
import { Card,CardContent } from '@mui/material'
import { CardActions } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Ticket.css'



function Ticket(props) {

  const navigate = useNavigate();

  const id = props.ticket.key

  const handleclick = () => {
    navigate(`../profiles/profile/${id}`)
  }

  return (
    // <Grid container className='ticket'>
    //     <Grid item xs='6'>
    //         <p>Full Name : {props.ticket.fullName} </p>
    //     </Grid>
    //     <Grid item xs='6'>
    //         <p>Nationality : {props.ticket.nationality} </p>
    //     </Grid>
    //     <Grid item xs='6'>
    //         <p>Phone : {props.ticket.phone} </p>
    //     </Grid>
    //     <Grid item xs='6'>
    //         <p>E-mail : {props.ticket.email} </p>
    //     </Grid>
    //     <Grid item xs='6'>
    //         <p> Year of experiance : {props.ticket.yExp}</p>
    //     </Grid>
    //     <Grid item xs='6'>
    //         <p>Birthday : {props.ticket.birthday}</p>
    //     </Grid>
    //     <Grid item xs='6'>
    //         <p>Status : </p>
    //     </Grid>
    //     <Grid item xs='6'>
    //         <Button variant='contained' size='small'>Profile</Button>
    //     </Grid>
    // </Grid>

    <Card sx={{ minWidth: 50 }}>
      <CardContent>

      <Typography sx={{ mb : 1}} variant="h6" component="div">
          {props.ticket.fullName}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          Email : {props.ticket.email}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Phone : {props.ticket.phone}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Experiance : {props.ticket.yExp}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined' onClick={() => handleclick()} >View Profile</Button>
      </CardActions>
    </Card>
    
  )
}

export default Ticket