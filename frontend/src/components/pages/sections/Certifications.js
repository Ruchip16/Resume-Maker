import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Avatar,
  Grid,
  Paper,
  TextareaAutosize,
} from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";

const Certifications = (props) => {
  const paperStyle = {
    padding: 20,
    width: 720,
    marginTop: "110px",
    marginLeft: '20px',
    backgroundColor: "rgb(221 221 228)",
  // boxShadow: '-10px 25px 50px rgba(0, 0, 0, .2)',
  };
  const avatarStyle = {
    backgroundColor: "black",
  };
  const textareaStyle = {
    marginTop: "10px",
    width: "720px",
    height: "100px",
  };

  const btnStyle = {
    color: "#fff",
    backgroundColor: "#00416A",
    marginTop: "20px",
    marginRight: "30px",
    padding: "15px 35px 11px 35px;",
    borderRadius: '20px'
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Certifications</h2>
        </Grid>

          <TextField label="Certification Name"
             onChange={(e) => props.setCertifications({ certifyname: e.target.value })}
             value={props.certifyname}
             fullWidth required
           />
          <TextField label="Issuing organization" 
           onChange={(e) => props.setCertifications({ issuingorg: e.target.value })}
           value={props.issuingorg}
           fullWidth />
          <br/>
          <TextField label="Add-more certification here" fullWidth onChange= {(e) => props.setCertifications({addcertify: e.target.value})} value={props.addcertify} />
          <TextField label="Organization" fullWidth onChange= {(e) => props.setCertifications({addorg: e.target.value})} value={props.addorg} />

          <Button style={btnStyle}>Add Certification</Button>
          <Button style={btnStyle}>Remove Certification</Button>
        </Paper>
      </Grid>
    );
  };

  export default Certifications;
