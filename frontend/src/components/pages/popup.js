import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabstyle = {
    color: "#00356B",
  };

  const paperStyle = {
    width: "460px",
    margin: "0px auto",
    textColor: "#00356B",
    color: "#00356B",
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  let postdata={
    email:""
}

const [email, setEmail]=useState("")

const handlesubmit=(e)=>{
    e.preventDefault();
    postdata.email=email;
    if(email==="")
    {
        window.alert("Enter valid inputs")
    }
    else{
  axios.post('https://agitated-euler-a0cf86.netlify.app/.netlify/functions/server/storeEmail',postdata)
  .then((response)=>{
      console.log(response.data.message)
      window.alert(response.data.message)
      setEmail("")
  })
}
}

  return (
    <Paper elevation={0} style={paperStyle}>
      <div style={{padding:"3rem"}}>
          <p>Enter your email address</p>
          <TextField
          id="standard-textarea"
          label="Your name"
          placeholder="Full name"
          multiline
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        <Button variant="contained" color="primary" onClick={handlesubmit}>
        Send
      </Button>
      </div>
    
      
    </Paper>
  );
};

export default SignInOutContainer;
