
import React,{useState} from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios"
const Signup = ({ handleChange }) => {
  let postdata={
    name:"",
    email:"",
    phone:"",
    password:""
}

const [name,setname]=useState("");
const [email,setemail]=useState("");
const [phone,setphone]=useState("");
const [password,setpassword]=useState("");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    postdata.name=name;
    postdata.email=email;
    postdata.phone=phone;
    postdata.password=password;
    
    if(email===""||name===""||password==="")
    {
        window.alert("Please give valid input");
    }else if(password.length<4)
    {
        window.alert("Please enter a strong password");
    }else if(!validateEmail(email))
    {
        window.alert("Please enter a valid email Id");
    }
    else if(phone.length!==10)
    {
        window.alert("Please enter valid phone no.");
    }else{
        axios.post('/register',postdata)
            .then((response)=>{
                console.log(response);
                // if(response.status==201){
                //     console.log("Registration successful")
                // }
                // else if(response.status==400){
                //     console.log("User already exists")
                // }
                window.alert(response.data.message)
                window.location.href="/";
            })

    }
}
  const paperStyle = {
    padding: "20px",
    height: "70vh",
    width: "50vh",
    margin: "20px",
  };

  const btnstyle = {
    margin: "8px 0",
    backgroundColor: " #2774ae",
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
         
          <h2 style={{ color: " #2774ae" }}>Sign Up / Register</h2>
        </Grid>
        <TextField
          label="Name"
          placeholder="Enter name"
          fullWidth
          required
          value={name} onChange={(e)=>setname(e.target.value)}
        />
        <TextField
          label="Email"
          placeholder="Enter username"
          fullWidth
          required
          value={email} onChange={(e)=>setemail(e.target.value)}
        />
        <TextField
          label="Phone"
          placeholder="Enter mobile number"
          type="text"
          fullWidth
          required
          value={phone} onChange={(e)=>setphone(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={password} onChange={(e)=>setpassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
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
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Typography>
          <Link href="#" style={{ color: "#2774ae" }}>
            Forgot password ?
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
