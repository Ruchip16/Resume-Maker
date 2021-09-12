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

const Responsibilities = (props) => {
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
      responsibility: "",
      org: "",
      description: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleAddClick = () => {
    setInputList([...inputList, { responsibility: "", org: "", description:"" }]);
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
          <h2>Responsibilities</h2>
        </Grid>
         {inputList.map((item, i) => {
           return (
             <div>
               <TextField
                 label="Position of Responsibility Name"
                 onChange={(e) =>
                   props.setPositionofResponsibility({
                     positionofresponsibility: e.target.value,
                   })
                 }
                 name="responsibility"
                 value={item.responsibility}
                 fullWidth
                 required
               />
               <TextField
                 label="Organization"
                 onChange={(e) =>
                   props.setPositionofResponsibility({
                     organization: e.target.value,
                   })
                 }
                 name="org"
                 value={item.org}
                 fullWidth
                 required
               />
               <TextField
                 label="Summary about that Position of Responsibility"
                 onChange={(e) =>
                   props.setPositionofResponsibility({
                     describe: e.target.value,
                   })
                 }
                 name="description"
                 value={item.description}
                 fullWidth
                 required
               />
               <Button
                 variant="contained"
                 style={btnStyle}
                 onClick={handleAddClick}
               >
                 Add Responsibilities
               </Button>

               <Button
                 variant="contained"
                 style={btnStyle}
                 onClick={() => handleRemoveClick(i)}
               >
                 Remove Responsibilities
               </Button>
             </div>
           );
        })}
      </Paper>
    </Grid>
  );
};

export default Responsibilities;
