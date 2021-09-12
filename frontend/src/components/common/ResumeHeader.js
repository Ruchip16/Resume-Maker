import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Chip from '@material-ui/core/Chip';
import ProgressBar from './ProgressBar';
import SwitchBtn from './SwitchBtn.js';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
 
  },
}));

export default function AutoGrid({active,setActive,clearEntries}) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };


   const StyledChip = withStyles({
       root: {
           boxSizing: '50px',
           margin: '10px',
           borderRadius: "26px",
           backgroundColor: "#00416A",
           color : "#fff",
           padding: "26px",
           height: "52px",
           textTransform: "none",
           fontWeight:"600",
           boxShadow: "0 2px 2px 2px rgb(20 25 24 / 30%)",
           cursor : 'pointer',
       "&:hover": {
         backgroundColor: "#A3C1AD",
         color: '#000',
      boxShadow: '0 1px 1px 1px rgb(20 25 24 / 30%)'
    }
  }
})(Chip);


  const history = useHistory();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        style={{
          boxShadow: "none",
        }}
      >
        <Grid item xs style={{ backgroundColor: "none" }}>
          <Paper className={classes.paper}>
          <h3
              className="logo me-auto"
              onClick={() => {
                history.push("/");
              }}
              style={{ cursor: "pointer" }}
              >
              Resume Maker
            </h3>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="none"
              variant="scrollable"
              scrollButtons="auto"
            >
              <StyledChip
                size="Large"
                label="Personal Details"
                onClick={() => setActive("details")}/>

              <StyledChip 
              size="Large" 
              label="Summary" clickable  
              onClick={() => setActive("summary")} />

              <StyledChip
                size="Large"
                label="Education"
                component="a"
                href="#chip"
                clickable
                onClick={() => setActive("education")}/>

              <StyledChip size="Large" label="Technical Skills" clickable onClick={() => setActive("technicalSkills")} />

              <StyledChip
                size="Large"
                label="Projects"
                clickable
                onClick={() => setActive("projects")}/>
                
              <StyledChip size="Large" label="Responsibilities" clickable onClick={() => setActive("responsibilities")}/>
              <StyledChip size="Large" label="Blogs" clickable onClick={() => setActive("blogs")} />
              <StyledChip size="Large" label="Experience" clickable onClick={() => setActive("experience")}/>
              <StyledChip size="Large" label="Certifications" clickable onClick={() => setActive("certifications")}/>
              <StyledChip size="Large" label="Achievements" clickable   onClick={() => setActive("achievements")}/>
              <StyledChip size="Large" label="Hobbies" clickable onClick={() => setActive("hobbies")}/>
              <StyledChip size="Large" label="Workshops" clickable onClick={() => setActive("workshops")}/>
              <StyledChip size="Large" label="Add-ons" clickable onClick={() => setActive("addons")} />
              

              
              
              

              {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <SwitchBtn clearBtn={clearEntries}/>
          </Paper>
        </Grid>
      </Grid>
      <ProgressBar />
    </div>
  );
}
