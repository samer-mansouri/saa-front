import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';





function PosCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.pos.department}
        </Typography>
        <Typography variant="h5" component="div">
          {props.pos.function}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          remaining : {props.pos.remaining}
        </Typography>
        <Typography variant="body2">
          {props.pos.teamleader}
        </Typography>
        <Typography variant="body2">
          {props.pos.deadline}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined' component={Link} to='view' >Full View</Button>
      </CardActions>
    </Card>
  )
}

export default PosCard