import {
  Button,
  TextField,
  Grid,
  Paper,
} from "@material-ui/core";
import React,{useState} from "react";

const Achievements = (props) => {
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
      achievement: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleAddClick = () => {
    setInputList([...inputList, { achievement:""}]);
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
          <h2>Achievements</h2>
        </Grid>
        {inputList.map((item, i) => {
          return (
            <div>
              <TextField
                label="Achievement 1"
                onChange={(e) => handleInputChange(e, i)}
                name="achievement"
                value={item.achievement}
                fullWidth
                required
              />

              <Button style={btnStyle} onClick={() => handleAddClick(i)}>
                Add Achievement
              </Button>
              <Button style={btnStyle} onClick={() => handleRemoveClick(i)}>
                Remove Achievement
              </Button>
            </div>
          );})}
      </Paper>
    </Grid>
  );
};

export default Achievements;
