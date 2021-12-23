import {
    Button,
    TextField,
    Grid,
    Paper,
  } from "@material-ui/core";
  
  import React, {useState} from "react";
  
  const Experience = (props) => {
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
        employer: "",
        role: "",
        state: "",
         work:"",
         start:"",
         end:"",
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
            <h2>Experience</h2>
          </Grid>
          <p>
            <strong>JOBS</strong>
          </p>
          <TextField
            label="Company"
            onChange={(e) => props.setExperience({ company1: e.target.value })}
            value={props.company1}
            fullWidth
            required
          />

          <TextField
            label="Job Title"
            onChange={(e) => props.setExperience({ jobtitle: e.target.value })}
            value={props.jobtitle}
            fullWidth
            required
          />

          <TextField
            label="City/State"
            onChange={(e) => props.setExperience({ city: e.target.value })}
            value={props.city}
            fullWidth
            required
          />

          <TextField
            label="Description"
            onChange={(e) =>
              props.setExperience({ descriptionn: e.target.value })
            }
            value={props.descriptionn}
            fullWidth
            required
          />

          {/* <p>Start Date</p> */}
          <TextField
            type="date"
            onChange={(e) => props.setExperience({ startdate: e.target.value })}
            value={props.startdate}
            fullWidth
          />

          {/* <p>End Date</p> */}
          <TextField
            type="date"
            onChange={(e) => props.setExperience({ enddate: e.target.value })}
            value={props.enddate}
            fullWidth
          />
          <br />
          <br />
          {inputList.map((item, i) => {
            return (
              <div>
                <p>
                  <strong>INTERNSHIPS</strong>
                </p>

                <TextField
                  label="Employer"
                  onChange={(e) => handleInputChange(e, i)}
                  name="employer"
                  value={item.employer}
                  fullWidth
                />

                <TextField
                  label="Job Title"
                  onChange={(e) => handleInputChange(e, i)}
                  name="role"
                  value={item.role}
                  fullWidth
                />

                <TextField
                  label="City/State"
                  onChange={(e) => handleInputChange(e, i)}
                  name="state"
                  value={item.state}
                  fullWidth
                />

                <TextField
                  label="Description"
                  onChange={(e) => handleInputChange(e, i)}
                  name="work"
                  value={item.work}
                  fullWidth
                />

                {/* <p>Start Date</p> */}
                <TextField
                  type="date"
                  onChange={(e) => handleInputChange(e, i)}
                  name="start"
                  value={item.start}
                  fullWidth
                />

                {/* <p>End Date</p> */}
                <TextField
                  type="date"
                  onChange={(e) => handleInputChange(e, i)}
                  name="end"
                  value={item.end}
                  fullWidth
                />
                <Button
                  variant="contained"
                  style={btnStyle}
                  onClick={handleAddClick}
                >
                  Add Experience
                </Button>

                <Button
                  variant="contained"
                  style={btnStyle}
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove Experience
                </Button>
              </div>
            );
          })}
        </Paper>
      </Grid>
    );
  };
  
  export default Experience;
  