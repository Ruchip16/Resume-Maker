import {
    Button,
    TextField,
    Grid,
    Paper,
  } from "@material-ui/core";
  import React, {useState} from "react";
  
  const TechnicalSkills = (props) => {
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
    const [inputList, setInputList] = useState([
      {
        school: "",
        batch: "",
      },
    ]);

    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
    const handleAddClick = () => {
      setInputList([...inputList, { school: "", batch: "" }]);
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
  