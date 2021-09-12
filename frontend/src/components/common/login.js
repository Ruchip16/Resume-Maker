import React,{useState,useContext} from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { UserContext } from "../../App";
import { useHistory } from 'react-router-dom';


const Login = () => {
  const paperStyle = {
    padding: "20px",
    height: "70vh",
    width: "50vh",
    margin: "20px",
  };
  const avatarStyle = { backgroundColor: "#000" };
  const btnstyle = {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "16px",
    letteSpacing: "1px",
    display: "inline-block",
    padding: "10px 28px 11px 28px",
    borderRadius: "50px",
    transition: "0.5s",
    margin: "10px 0 0 0",
    color: "black",
    background: "#86BDFD",
  };

  let postdata={
    email:"",
    password:""
}
const {state,dispatch} = useContext(UserContext);
const history=useHistory();

React.useEffect(()=>{
  console.log(state);
},[state]);

const [email,setemail]=useState("");
const [password,setpassword]=useState("");


const handlesubmit=(e)=>{
  e.preventDefault();
  postdata.email=email;
  postdata.password=password;
  if(email===""||password==="")
  {
      window.alert("Enter valid inputs")
  }
  else{
      axios.post('/login',postdata)
      .then((response)=>{
          console.log(response.data.message)
          if(response.status==201)
          {
              dispatch({type:"USER",payload:true})
              window.alert(response.data.message)
              //localStorage.setItem("loggedin",true);
              //localStorage.setItem("email",postdata.email);
              console.log("Login page ",state);
              history.push('/',{replace:true});
          }
          else{
            window.alert(response.data.message)
            setemail("");
            setpassword("");
          }
      })
      
  }
}
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter email"
          fullWidth
          required
          value={email} onChange={(e)=>setemail(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={password} onChange={(e)=>setpassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handlesubmit}
        >
          Sign in
        </Button>
        <Typography>
          <Link
            href="#"
            style={{ color: "#2774ae", textAlign: "center", margin: "10px" }}
          >
            Forgot password ?
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
