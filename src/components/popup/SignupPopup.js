import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import './SignupPopup.css';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  
  const [username, setUsername] = React.useState(null);
  const [usernameValidate, setUsernameValidate] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [emailValidate, setEmailValidate] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordValidate, setPasswordValidate] = React.useState(null);

  React.useEffect(() => {
    if (username == null) {
      setUsernameValidate(true);
      return;
    }
    if (
      String(username).length > 0
    ) 
      setUsernameValidate(true);
    else setUsernameValidate(false);
  }, [username])

  React.useEffect(() => {
    if (password == null) {
      setPasswordValidate(true);
      return;
    }
    if (
      String(password).length >= 6 &&
      String(password).length <= 20
    ) 
      setPasswordValidate(true);
    else setPasswordValidate(false);
  }, [password])
  React.useEffect(() => {
    if (email == null) {
      setEmailValidate(true);
      return;
    }
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      setEmailValidate(true);
    else setEmailValidate(false);
  }, [email])

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };



  function HandleClick() {
    Swal.fire({
      position: 'mid-center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }

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
                    style={{ color: "black", paddingBottom: "5px", fontSize: "16px" , fontWeight: "bold"}}
                >
                    First Name
                </Typography>
                <input class="signupinput" type="text" id="name" name="FirstName" placeholder="Mark"></input>
            </div>
            <div class="nameinput">
                <Typography
                    style={{ color: "black", paddingBottom: "5px", fontSize: "16px" , fontWeight: "bold"}}
                >
                    Last Name
                </Typography>
                <input class="signupinput" type="text" id="name" name="FirstName" placeholder="Zuckerberg"></input>
            </div>
          </div>
          <div class="textinput">
          <Typography
            style={{ color: "black", paddingBottom: "5px", fontSize: "16px" , fontWeight: "bold"}}
          >
            Username
          </Typography>
          <input class="signupinput" type="text" id="username" name="Username" placeholder="foodroad8000"
          value = {username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          ></input>
          {usernameValidate==false &&
            <Box pt={1}>
              <Typography fontSize={15} color="red">Username cannot be blank!</Typography>
            </Box>
          }
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
            style={{ color: "black", paddingBottom: "5px", fontSize: "16px" , fontWeight: "bold"}}
          >
            E-mail
          </Typography>
          <input class="signupinput" type="email" id="Email" name="Email" placeholder="foodroad@gmail.com"
          value = {email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          ></input>
          {emailValidate==false &&
            <Box pt={1}>
              <Typography fontSize={15} color="red">Example: Foodroad@gmail.com</Typography>
            </Box>
          }
          </div>

          <div class="textinput">
          <Typography
            style={{ color: "black", paddingBottom: "5px", fontSize: "16px" , fontWeight: "bold"}}
          >
            Password
          </Typography>
          <input class="signupinput" type="password" id="Password" name="Password" placeholder="Enter a password"
          value = {password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          ></input>
          {passwordValidate==false &&
            <Box pt={1}>
              <Typography fontSize={15} color="red">Password must be between 6-20 characters</Typography>
            </Box>
          }
          </div>
          <Box pt={1}>
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
          </Box>

          <div class="textinput">
            {checked ? (
              <Button
                variant="contained" 
                fullWidth
                onClick={() =>
                  {
                    if (emailValidate && passwordValidate && usernameValidate && email != null && password != null && username != null)
                    {
                      props.onClose();
                      Swal.fire({
                        title: 'SUCCESS',
                        text: 'Your account has been created.',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false,
                      });
                    }
                  }
                }
               
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