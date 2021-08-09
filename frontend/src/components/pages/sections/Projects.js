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
// import { useState } from 'react';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";
// import Template from "./Template";

const Projects = (props) => {
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
    width: "650px",
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
          <h2>Projects</h2>
          
        </Grid>

        <TextField
          label="Project Name"
          onChange={(e) => props.setProject({ projectname: e.target.value })}
          value={props.projectname} 
          fullWidth
          required
        />
        <TextField label="Project Description" fullWidth required
        onChange={(e) => props.setProject({ description: e.target.value })}
        value={props.description} 
         />
        <TextField label="Link to Project" 
        onChange={(e) => props.setProject({ link: e.target.value })}
        value={props.link}
        fullWidth required  
         />
        <TextField label="Tech Stack" fullWidth
          onChange={(e) => props.setProject({ techstack: e.target.value })}
          value={props.techstack}
          />

        <Button style={btnStyle}>Add Project</Button>
        <Button style={btnStyle}>Remove Project</Button>
      </Paper>
    </Grid>
  );
};

export default Projects;
