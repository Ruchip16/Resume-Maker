import React from 'react';
import { Grid, Container } from '@material-ui/core';
import HR_Card from './HR_Card';
import { makeStyles } from '@material-ui/core';
import HRButton from './HR_button';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

import Popup from './Popup';
import { useState } from 'react';


// CSS
const useStyles = makeStyles((theme) => ({
    content: {
        alignItems: "center"
    },
    body: {
        height: "100%",
        backgroundColor: "#f3f5fa"
    },
    text: {
        margin: "20px auto",
        padding: "30px 115px",
        backgroundColor: "white",
    },
    // text,h3: {
    //     fontSize: "33px",
    //     color: "black",
    //     marginBottom: "20px"
    // },
    // text,p: {
    //     fontSize: "20px"
    // },
    // text,ol: {
    //     textAlign: "left",
    //     display: "inline-block"
    // }
}));


const HR = () => {
    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false);
    return (
      <div>
        <div className={classes.body}>
          {/* Navigation Bar */}
          <div>
            <Router>
              <Navbar />
            </Router>
            {/* <Router>
                        <Switch>
                            <Route path = '/' exact>
                                <LandingPage />
                                <Navbar />
                            </Route>
                        </Switch>
                    </Router> */}
          </div>

          {/* Main Content */}
          <div>
            <div
              className={classes.text}
              style={{
                background: "#f3f5fa",
                paddingTop: "100px",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "33px",
                  color: "#0F437A",
                  marginBottom: "20px",
                  textAlign: "center",
                  background: "#f3f5fa",
                }}
              >
                Are you unsure whether or not your resume is ATS-friendly?
              </h3>

              <p style={{ fontSize: "20px", textAlign: "center" }}>
                <h4>
                  We've found a solution! With just two easy clicks, you can see
                  if your resume is ATS-friendly.
                </h4>
              </p>

              <p style={{ display: "block", textAlign: "center" }}>
                <h5>1. Please upload your resume.</h5>
                <h5>2. Job description to be uploaded.</h5>
              </p>

              <p style={{ textAlign: "center" }}>
                <h4>
                  And to get a summary and score for your resume, simply click
                  Check Now.
                </h4>
              </p>
            </div>

            {/* <div> */}
            <Grid
              // spacing={3}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {/* Resume Uploader Card*/}
              <Grid item xs={6}>
                <HR_Card content="Upload Resume Here" button1="Upload" />
              </Grid>

              {/* Job Description Uploader Card*/}
              <Grid item xs={6}>
                <HR_Card
                  content="Upload Job Desription here"
                  button1="Upload"
                />
              </Grid>
            </Grid>
            {/* </div> */}

            {/* Pop-up button */}
            <HRButton
              buttonName="Check Now"
              onClick={() => setOpenPopup(true)}
            />
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
            <br />
          </div>
        </div>
      </div>
    );
}

export default HR
