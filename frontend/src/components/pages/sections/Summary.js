import {
    Button,
    Grid,
    Paper,
    TextareaAutosize,
} from "@material-ui/core";
import React from "react";
const Summary = () => {
    const paperStyle = {
        padding: 20,
        width: 720,
        marginTop: "110px",
        marginLeft: '20px',
        backgroundColor: "rgb(221 221 228)",
    };
      
    const btnStyle = {
        color: "#fff",
        backgroundColor: "#00416A",
        marginTop: "20px",
        marginRight: "30px",
        padding: "15px 35px 11px 35px;",
        borderRadius: '20px'
      };
    const textareaStyle = {
        marginTop: "10px",
        width: "650px",
        height: "300px",
    };

    return ( 
    <Grid >
        <Paper elevation = { 10 }
        style = { paperStyle } >
        <Grid align = "center" >
        <h2> Summary </h2>   
        </Grid >

        <TextareaAutosize label = "Summary"
        placeholder = "Summary"
        fullWidth style = { textareaStyle }
        />
        <Button variant="contained"  style={btnStyle}>
          Submit
        </Button>

        </Paper>     
        </Grid >
    );
};

export default Summary;