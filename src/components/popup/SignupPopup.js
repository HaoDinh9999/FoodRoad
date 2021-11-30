import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import './SignupPopup.css';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
      <Dialog
       open={props.open}
       TransitionComponent={Transition}
       keepMounted
       onClose={props.onClose}
       maxWidth="xs"
       fullWidth
       PaperProps={{
        style: {
          backgroundColor: 'white',
          borderStyle: "solid",
          borderColor: "#808080",
          borderWidth: 2,
          borderRadius: 30
        },
      }}
       >
        <DialogTitle>
          <Typography 
            variant="subtitle1" 
            align="center"
            style={{color: "#808080", fontWeight: "bold"}}
            >
            
          </Typography>
          <Typography 
            variant="h5"
            align="center"
            style={{color: "black", fontWeight: "bold", fontSize: "24px", paddingBottom: "10px", paddingTop: "10px"}}
          >
          Create your account!
           </Typography>
        </DialogTitle>
        <DialogContent>
          <div class="textinput" style={{display: "flex", justifyContent: "space-between"}}>
            <div class="nameinput">
                <Typography
                    style={{color: "black", paddingBottom: "5px", fontSize: "15px"}}
                >
                    First Name
                </Typography>
                <input type="text" id="name" name="FirstName" placeholder="Mark"></input>
            </div>
            <div class="nameinput">
                <Typography
                    style={{color: "black", paddingBottom: "5px", fontSize: "15px"}}
                >
                    Last Name
                </Typography>
                <input type="text" id="name" name="FirstName" placeholder="Zuckerberg"></input>
            </div>
          </div>
          <div class="textinput">
          <Typography
            style={{color: "black", paddingBottom: "5px", fontSize: "15px"}}
          >
            Username
          </Typography>
          <input type="text" id="username" name="Username" placeholder="foodroad8000"></input>
          </div>

          <div class="textinput">
          {/* <TextField
            variant="outlined"
            margin="dense"
            id="username"
            label="E-Mail"
            type="email"
            fullWidth
          /> */}
          <Typography
            style={{color: "black", paddingBottom: "5px", fontSize: "15px"}}
          >
            E-mail
          </Typography>
          <input type="email" id="Email" name="Email" placeholder="foodroad@gmail.com"></input>
          </div>

          <div class="textinput">
          <Typography
            style={{color: "black", paddingBottom: "5px", fontSize: "15px"}}
          >
            Password
          </Typography>
          <input type="password" id="Password" name="Password" placeholder="Enter a password"></input>
          </div>

          <FormControlLabel  
                control={
                  <Checkbox
                    checked = {checked}
                    onChange={handleChange}
                    style ={{
                      color: "#42b72a",
                    }}
                  />
                }
                label={<Typography variant="subtitle6" style={{ color: '#808080', fontSize: '13px' }}>I've read and agree with Terms of Service and our Privacy Policy</Typography>}
                style={{paddingRight:"10px", paddingLeft:"10px"}}
              />

          <div class="textinput">
            {checked ? (
              <Button
                variant="contained" 
                fullWidth
                style={{height:'50px', textTransform: 'none', fontSize: '20px', fontWeight: 'bold', borderRadius: "24px", backgroundColor: "#42b72a"}}
                >
                Sign Up
              </Button>
            ) : (
              <Button
                disabled
                variant="contained" 
                fullWidth
                style={{height:'50px', textTransform: 'none', fontSize: '20px', fontWeight: 'bold', borderRadius: "24px", backgroundColor: "rgba(0, 0, 0, 0.12)"}}
                >
                Sign Up
              </Button>
            )}
          </div>

          {/* <Divider
              sx={{ bgcolor: (theme) => theme.palette.divider }}
              style={{
                border: "none",
                height: 1,
                margin: 0,
                backgroundColor: "#404040"
              }}
            />

          <div style={{padding: '10px'}}>
            <Typography variant="subtitle5" style={{color: "#808080"}}>
              Already had an account?
            </Typography>
          </div> */}
        </DialogContent>
        
      </Dialog>
  );
}