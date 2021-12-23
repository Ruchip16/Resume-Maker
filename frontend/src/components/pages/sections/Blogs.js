import {
    Button,
    TextField,
    Grid,
    Paper,
  } from "@material-ui/core";
  
  import React from "react";
  
  const Blogs = (props) => {
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
  
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Blogs</h2>
          </Grid>
          <h5><strong>Link for blog page</strong></h5>
          <TextField label="Link for blog page" 
           onChange={(e) => props.setBlogs({ linkforblog: e.target.value })}
           value={props.linkforblog}
           fullWidth/>
          <br/>
          <br/>
          <h5><strong>Topic for the blog</strong></h5>
          <TextField label="Topic for the blog" 
           onChange={(e) => props.setBlogs({ topicforblog: e.target.value })}
           value={props.topicforblog}
           fullWidth/>
           <Button variant="contained" style={btnStyle}>
            Search
          </Button>
          
        </Paper>
      </Grid>
    );
  };
  
  export default Blogs;
  