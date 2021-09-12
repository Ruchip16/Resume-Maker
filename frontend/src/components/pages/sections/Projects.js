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
 import { useState } from 'react';
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
  const [inputList, setInputList] = useState([
    {
      projectName: "",
      projectDes: "",
      link: "",
      techStack: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { projectName: "", projectDes: "", link: "", techStack: "" },
    ]);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };


  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Projects</h2>
        </Grid>
        {inputList.map((item, i) => {
          return (
            <div>
              <TextField
                label="Project Name"
                onChange={(e) => handleInputChange(e, i)}
                value={item.projectName}
                name="projectName"
                fullWidth
                required
              />
              <TextField
                label="Project Description"
                name="projectDes"
                fullWidth
                required
                onChange={(e) => handleInputChange(e, i)}
                value={item.projectDes}
              />
              <TextField
                label="Link to Project"
                name="link"
                onChange={(e) => handleInputChange(e, i)}
                value={item.link}
                fullWidth
                required
              />
              <TextField
                label="Tech Stack"
                name="techStack"
                fullWidth
                onChange={(e) => handleInputChange(e, i)}
                value={item.techStack}
              />

              <Button style={btnStyle} onClick={handleAddClick}>
                Add Project
              </Button>

              <Button style={btnStyle} onClick={() => handleRemoveClick(i)}>
                Remove Project
              </Button>
            </div>
          );
        })}
      </Paper>
    </Grid>
  );
};

export default Projects;
