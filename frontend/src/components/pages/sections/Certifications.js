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
import React, {useState} from "react";

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
   const [inputList, setInputList] = useState([
     {
       certification: "",
       org: "",
     },
   ]);

   const handleInputChange = (e, index) => {
     const { name, value } = e.target;
     const list = [...inputList];
     list[index][name] = value;
     setInputList(list);
   };
   const handleAddClick = () => {
     setInputList([...inputList, { certification: "", org: "" }]);
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
          <h2>Certifications</h2>
        </Grid>
         
         {inputList.map((item, i) => {
          return (
            <div>
              <TextField
                label="Certification Name"
                onChange={(e) => handleInputChange(e, i)}
                name="certification"
                value={item.certification}
                fullWidth
                required
              />
              <TextField
                label="Issuing organization"
                onChange={(e) => handleInputChange(e, i)}
                name="org"
                value={item.org}
                fullWidth
              />

              <Button style={btnStyle} onClick={handleAddClick}>
                Add Certification
              </Button>

              <Button style={btnStyle} onClick={() => handleRemoveClick(i)}>
                Remove Certification
              </Button>
            </div>
          );})}
        </Paper>
      </Grid>
    );
  };

  export default Certifications;
