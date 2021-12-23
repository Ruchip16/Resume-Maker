import {
  Button,
  TextField,
  Grid,
  Paper,
} from "@material-ui/core";
import React from "react";

const Workshops = (props) => {
  const paperStyle = {
    padding: 20,
    width: 720,
    marginTop: "110px",
    marginLeft: '20px',
    backgroundColor: "rgb(221 221 228)",
  // boxShadow: '-10px 25px 50px rgba(0, 0, 0, .2)',
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
          <h2>Workshop Attended</h2>
        </Grid>
         <TextField label="Workshop Name" 
         onChange={(e) => props.setWorkshops({ workshop1: e.target.value })}
         value={props.workshop1}
         fullWidth required />
        <TextField label="Summary" 
         onChange={(e) => props.setWorkshops({ workshop2: e.target.value })}
         value={props.workshop2}
         fullWidth required />
        <Button style={btnStyle}>Add workshops</Button>
        <Button style={btnStyle}>Remove workshops</Button>
      </Paper>
    </Grid>
  );
};

export default Workshops;
