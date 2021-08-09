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

const Achievements = (props) => {
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
          <h2>Achievements</h2>
        </Grid>
         <TextField label="Achievement 1" 
         onChange={(e) => props.setAchievements({ achievement1: e.target.value })}
         value={props.achievement1}
         fullWidth required />
        <br/>
        <TextField label="Add-more" fullWidth onChange= {(e) => props.setAchievements({addmoree: e.target.value})} value={props.addmoree} />

        <Button style={btnStyle}>Add Achievement</Button>
        <Button style={btnStyle}>Remove Achievement</Button>
      </Paper>
    </Grid>
  );
};

export default Achievements;
