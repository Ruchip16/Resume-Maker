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
import LockIcon from "@material-ui/icons/Lock";
import React, {useState} from "react";

const Education = (props) => {
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
          <h2>EDUCATION</h2>
        </Grid>
        {/* <p>DEGREES</p> */}
        {/* <h4 style={{ marginTop: '20px', marginBottom: '25px', textDecoration: 'underline'}}>Graduation:</h4> */}
        <h5><strong>GRADUATION</strong></h5>
        <TextField
          label="Degree/Course"
          onChange={(e) => props.setEdu({ degree: e.target.value })}
          value={props.degree} 
          fullWidth
          required
        />
        <TextField label="College/University"
          onChange={(e) => props.setEdu({college: e.target.value })}
          value={props.college}
          fullWidth
          required />
         <TextField label='Major' required
          onChange={(e) => props.setEdu({ major: e.target.value })}
          value={props.major}
          fullWidth
          required />
        <TextField label='Batch' required
          onChange={(e) => props.setEdu({ batch: e.target.value })}
          value={props.batch}
        />
        <br/>
        <TextField label="Aggregate"
          onChange={(e) => props.setEdu({ collegeAgg: e.target.value })}
          value={props.collegeAgg} type= 'number'
          required />

        <h5 style={{ marginTop: '20px', marginBottom: '5px'}}><strong>SCHOOL</strong></h5>
        <TextField label="High School"
          onChange={(e) => props.setEdu({ school: e.target.value })}
          value= {props.school}
          fullWidth  />
        <br />
        <TextField label='Batch' onChange={(e) => props.setEdu({ schoolBatch: e.target.value })}
        value= {props.schoolBatch}
        />
        {/* <TextField label="Aggregate"
          onChange={(e) => props.setEdu({ schoolAgg: e.target.value })}
          value = {props.schoolAgg}
        type="number"
         fullWidth/> */}
        {/* <p>Start Date</p>
        <TextField type="date" fullWidth required />
        <p>End Date</p>
        <TextField type="date" fullWidth required /> */}
        <br/>
        <Button variant="contained" style={btnStyle}>
          Add School
        </Button>
        <Button variant="contained" style={btnStyle}>
          Remove School
        </Button>
      </Paper>
    </Grid>
  );
};

export default Education;