//import React from 'react'
import { Divider, Grid, Paper } from '@mui/material'
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import './PosKanban.css'
import Ticket from '../teamLeader/Ticket'


const board = {
  columns: [
    {
      id: 1,
      title: 'HR Interview',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
      ]
    },
    {
      id: 2,
      title: 'Technical',
      cards: [
        {
          id: 2,
          title: 'TEST 2',
          description: 'Move a card between the columns'
        },
      ]
    }  ,
    {
      id: 3,
      title: 'HR Negotiation',
      cards: [
        {
          id: 3,
          title: 'TEST 3',
          description: ''
          

        },
      ]
    }  ,
    {
      id: 4,
      title: 'Client',
      cards: [
        {
          id: 4,
          title: 'TEST 4 ',
          description: 'Move a card between the columns'
        },
      ]
    }
  ]
}

const ticket = {   fullName : 'Foulent El Fouleni', 
nationality :'Tunisian' ,
phone : '23645872',
email : 'HAmma@gmail.com',
yExp : '2 years',
birthday : '15/09/2000',
key : 0,
};

function PosKanban() {
  return (
    <Grid item container   md={8} >
        <Board  disableColumnDrag  disableCardDrag 
        
        renderCard={({ content }, { removeCard, dragging }) => (
          <Ticket dragging={dragging} ticket={ticket}>
            {content}
            <button type="button" onClick={removeCard}>Remove Card</button>
          </Ticket>
        )}
        
        
        >
          {board}
        </Board>
     </Grid>

//     <Grid container md={8}>
//     <Grid item xs>
//       <div>dgfdfgdgf</div>
//     </Grid>
//     <Divider orientation="vertical" style={{width:'100%',color :}} >
//       VERTICAL
//     </Divider>
//     <Grid item xs>
//     <div>dgfdfgdgf</div>
//     </Grid>
//   </Grid>

  )
}

export default PosKanban