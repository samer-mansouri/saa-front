import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid } from '@mui/material';
import Modal from "@mui/material/Modal";
import { MenuItem, TextField  } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #555",
  boxShadow: 24,
  p: 4,
  // backgroundColor : 'powderblue    '
};


const lvl =[
  {
      value : '1',
      label : 'Not Approved',
  },
  {
      value : '2',
      label : 'Approved',
  },
  {
      value : '3',
      label : 'Recommended',
  },
  {
    value : '3',
    label : 'Highly Recommended',
  },

]

export default function FeedbackModal(props) {
  console.log(props);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => props.setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div>
            
          <TextField id="outlined-basic" label="Strenght" variant="outlined" fullWidth multiline margin="normal" />

          <TextField id="outlined-basic" label="Weakness" variant="outlined" fullWidth multiline margin="normal" />

          <TextField id="outlined-basic" label="Feedback" variant="outlined" fullWidth multiline margin="normal"  />

            <TextField item
                            id="outlined-select"
                            select
                            label="Decision"                                             
                            fullWidth
                            margin="normal" 
                    >  

                        {lvl.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}

                        </TextField>
              <Grid item xs='6'>
                <Button variant='contained' size='small'> Save</Button>
             </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
