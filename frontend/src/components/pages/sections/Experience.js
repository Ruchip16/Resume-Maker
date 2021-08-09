import {
    Button,
    TextField,
    Grid,
    Paper,
    TextareaAutosize,
  } from "@material-ui/core";
  
  import React from "react";
  
  const Experience = (props) => {
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
            <h2>Experience</h2>
          </Grid>
          <p><strong>JOBS</strong></p>
          <TextField label="Company"
           onChange={(e) => props.setExperience({ company1: e.target.value })}
           value={props.company1} 
           fullWidth required/>

          <TextField label="Job Title" 
           onChange={(e) => props.setExperience({ jobtitle: e.target.value })}
           value={props.jobtitle} 
           fullWidth required/>

          <TextField label="City/State" 
           onChange={(e) => props.setExperience({ city: e.target.value })}
           value={props.city} 
           fullWidth required/>

          <TextField label="Description" 
           onChange={(e) => props.setExperience({ descriptionn: e.target.value })}
           value={props.descriptionn} 
           fullWidth required />

          {/* <p>Start Date</p> */}
          <TextField type="date" 
           onChange={(e) => props.setExperience({ startdate: e.target.value })}
           value={props.startdate} 
           fullWidth />

          {/* <p>End Date</p> */}
          <TextField type="date" 
           onChange={(e) => props.setExperience({ enddate: e.target.value })}
           value={props.enddate} 
           fullWidth />
          <br/>
          <br/>
          <p><strong>INTERNSHIPS</strong></p>
          <TextField label="Employer" 
            onChange={(e) => props.setExperience({ employer: e.target.value })}
            value={props.employer} 
            fullWidth />

           <TextField label="Job Title" 
           onChange={(e) => props.setExperience({ role: e.target.value })}
           value={props.role} 
           fullWidth />

          <TextField label="City/State" 
           onChange={(e) => props.setExperience({ state: e.target.value })}
           value={props.state} 
           fullWidth/>

          <TextField label="Description" 
           onChange={(e) => props.setExperience({ work: e.target.value })}
           value={props.work} 
           fullWidth />

          {/* <p>Start Date</p> */}
          <TextField type="date" 
           onChange={(e) => props.setExperience({ start: e.target.value })}
           value={props.start} 
           fullWidth />

          {/* <p>End Date</p> */}
          <TextField type="date" 
           onChange={(e) => props.setExperience({ end: e.target.value })}
           value={props.end} 
           fullWidth />
          <Button variant="contained" style={btnStyle}>
            Add Experience
          </Button>
          <Button variant="contained" style={btnStyle}>
            Remove Experience
          </Button>
        </Paper>
      </Grid>
    );
  };
  
  export default Experience;
  