import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
  },
  button: {
    color: "#fff",
    backgroundColor: "#00416A",
    margin: "10px",
    padding: "15px 35px;",
    borderRadius: "20px",
    textAlign: "center",
    bottom: "0",
  },
}));

function Template2(props) {
  const classes = useStyles();

  const [bgColor, setBg] = useState("fff");
  const changeTheme = (color) => {
    setBg(color);
  };

  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h3 style={{ textAlign: "center" }}>Your Resume</h3>
      <span style={{ fontSize: "small" }}>Themes : </span>
      <FiberManualRecordIcon
        style={{ fontSize: "small", color: "blue" }}
        onClick={() => {
          changeTheme("#318CE7");
        }}
      />
      <FiberManualRecordIcon
        style={{ fontSize: "small", color: "green" }}
        onClick={() => {
          changeTheme("#17B169");
        }}
      />
      <FiberManualRecordIcon
        style={{ fontSize: "small", color: "purple" }}
        onClick={() => {
          changeTheme("#800080");
        }}
      />

      <Container
        maxWidth="sm"
        style={{
          border: "1px solid gray",
          lineHeight: "5px",
          fontSize: "smaller",
          height: "520px",
          position: "relative",
        }}
      >
        <h1>Page 2</h1>
        <h5>Contents of page 2</h5>
        <button className={classes.button} onClick={() => props.setvalue(1)}>
          Back
        </button>
      </Container>
    </div>
  );
}

export default Template2;
