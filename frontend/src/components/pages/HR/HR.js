import React from 'react';
import { Grid } from '@material-ui/core';
import HR_Card from './HR_Card';
import { makeStyles } from '@material-ui/core';
import HRButton from './HR_button';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
  button: {
    backgroundColor: "blue",
    borderRadius: "50px",
  },
}));


function HR() {

  const classes = useStyles();

  const history = useHistory();
  return (
    <div>
      <div className={classes.body}>
        {/* Navigation Bar */}
        <div>

          <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
              <h1
                className="logo me-auto"
                onClick={() => {
                  history.push("/");
                }}
                style={{ cursor: "pointer" }}
              >
                Resume Maker
              </h1>
              {/* <!-- Uncomment below if you prefer to use an image logo --> */}
              {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Button
                      className="getstarted scrollto"
                      onClick={() => {
                        history.push("/");
                      }}
                    >
                      Home
                    </Button>
                  </li>

                  <li>
                    <Button
                      className="getstarted scrollto"
                      onClick={() => history.push("/resumeBuilder")}
                    >
                      Resume Builder
                    </Button>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
              {/* <!-- .navbar --> */}
            </div>
          </header>


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

          {/* Resume Summary Page */}

          {/*   <Link to="/resumeSummary">Check now</Link>*/}

          <HRButton
            buttonName="Check Now"
            btn
            onClick={() => {
              {
                history.push("/resumeSummary")
              }
            }}
            style={{ margin: " auto" }}
          >
            Resume Summary
          </HRButton>

        </div>
      </div>
    </div>
  );
}

export default HR
