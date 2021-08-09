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
  
  const TechnicalSkills = (props) => {
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
            <h2>Technical Skills</h2>
          </Grid>
          <TextField
            label="Programming Languages"
            onChange={(e) => props.setTechnicalSkills({ programminglanguages: e.target.value })}
            value={props.programminglanguages}
            fullWidth required />
          {/* <p>Database Management</p> */}
          <TextField label="Database Management" 
            onChange={(e) => props.setTechnicalSkills({ dbms: e.target.value })}
            value={props.dbms}
            fullWidth />
          {/* <p>Database Modelling</p> */}
          <TextField label="Data Modelling"
           onChange={(e) => props.setTechnicalSkills({ datamodelling: e.target.value })}
           value={props.datamodelling}
           fullWidth />
          {/* <p>Platform</p> */}
          <TextField label="Platform" 
           onChange={(e) => props.setTechnicalSkills({ platforms: e.target.value })}
           value={props.platforms}
           fullWidth />
          <Button style={btnStyle}>Add Skills</Button>
          <Button style={btnStyle}>Remove Skills</Button>
        </Paper>
      </Grid>
    );
  };
  
  export default TechnicalSkills;
  