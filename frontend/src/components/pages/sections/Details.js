import {
  TextField,
  Grid,
  Paper,
} from "@material-ui/core";
import React from "react";

const Details = (props) => {
  const paperStyle = {
    padding: 20,
    width: 720,
    marginTop: "110px",
    marginLeft: '20px',
    backgroundColor: "rgb(221 221 228)",
  // boxShadow: '-10px 25px 50px rgba(0, 0, 0, .2)',
  };
  
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2> Personal Details </h2>
        </Grid>
        <TextField
          label="Full Name"
          onChange={(e) => props.setDetails({ name: e.target.value })}
          value={props.name}
          fullWidth
          required
        />
        <TextField label="Email" type="email" fullWidth required
         onChange={(e) => props.setDetails({ email: e.target.value })}
          value={props.email}
        />
        <TextField label="Phone Number" type="number" fullWidth required
          onChange={(e) => props.setDetails({ phone: e.target.value })}
          value={props.phone}
        />
        {/* <TextareaAutosize
          label="Address"
          placeholder="Address"
          fullWidth
          style={textareaStyle}
          onChange={(e) => props.setDetails({ address: e.target.value })}
          value={props.address}
        /> */}
        <br/>
        <br/>
        <p style={{fontStyle: 'italic'}}>(Social media links)</p>
        <TextField label="Github" fullWidth onChange= {(e) => props.setDetails({github: e.target.value})} value={props.github} />
        <TextField label="Linkedin" fullWidth onChange= {(e) => props.setDetails({linkedin: e.target.value})} value={props.linkedin} />
        <TextField label="Add-on" fullWidth onChange= {(e) => props.setDetails({addons: e.target.value})} value={props.addons} />
      </Paper>
    </Grid>
  );
};

export default Details;
