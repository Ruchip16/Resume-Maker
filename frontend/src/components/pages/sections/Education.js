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
import React, { useState } from "react";

const Education = (props) => {
  const paperStyle = {
    padding: 20,
    width: 720,
    marginTop: "110px",
    marginLeft: "20px",
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
    borderRadius: "20px",
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
          <h2>EDUCATION</h2>
        </Grid>
        {/* <p>DEGREES</p> */}
        {/* <h4 style={{ marginTop: '20px', marginBottom: '25px', textDecoration: 'underline'}}>Graduation:</h4> */}
        <h5>
          <strong>GRADUATION</strong>
        </h5>
        <TextField
          label="Degree/Course"
          onChange={(e) => props.setEdu({ degree: e.target.value })}
          value={props.degree}
          fullWidth
          required
        />
        <TextField
          label="College/University"
          onChange={(e) => props.setEdu({ college: e.target.value })}
          value={props.college}
          fullWidth
          required
        />
        <TextField
          label="Major"
          required
          onChange={(e) => props.setEdu({ major: e.target.value })}
          value={props.major}
          fullWidth
          required
        />
        <TextField
          label="Batch"
          required
          onChange={(e) => props.setEdu({ batch: e.target.value })}
          value={props.batch}
        />
        <br />
        <TextField
          label="Aggregate"
          onChange={(e) => props.setEdu({ collegeAgg: e.target.value })}
          value={props.collegeAgg}
          type="number"
          required
        />

        {inputList.map((item, i) => {
          return (
            <div>
              <h5 style={{ marginTop: "20px", marginBottom: "5px" }}>
                <strong>SCHOOL</strong>
              </h5>
              <TextField
                label="High School"
                name="school"
                onChange={(e) => handleInputChange(e, i)}
                value={item.school}
                fullWidth
              />
              <br />
              <TextField
                label="Batch"
                name="batch"
                onChange={(e) => handleInputChange(e, i)}
                value={item.batch}
              />
              <br />
              <Button style={btnStyle} onClick={handleAddClick}>
                Add School
              </Button>

              <Button style={btnStyle} onClick={() => handleRemoveClick(i)}>
                Remove School
              </Button>
            </div>
          );
        })}
      </Paper>
    </Grid>
  );
};

export default Education;
