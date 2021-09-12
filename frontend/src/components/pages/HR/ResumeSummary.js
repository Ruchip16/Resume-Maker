import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory} from "react-router";
import Popup from "./Popup";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  mainPage: {
    backgroundColor: "#f2f4f9",
    margin: "2rem"
  },
  scoreCard: {
    border: "1px solid black",
    width: "30%",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "18px",
    borderRadius: "10px",
    backgroundColor: "white",
  },
  scoreDisplay: {
    width: "300px",
    height: "220px",
    display: "block",
  },
  score: {
    color: "#0f4d85",
  },
  skillsGrid: {
    border: "1px solid",
    padding: "10px",
    textAlign: "center",
    margin: "10px auto",
  },
  summary: {
    marginTop: "100px",
    margin: "20px",
  },
  fields: {
    padding: "10px",
    fontWeight: "bold",
  },
  linearProgress: {
    width: "85%",
    margin: "5px auto",
  },
  content: {
    border: "1px solid",
    width: "75%",
    margin: "25px auto",
    padding: "20px",
    backgroundColor: "#d7ecff",
  },
}));

function ResumeSummary(props) {

  const [openPopup, setOpenPopup] = useState(true);
  let history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
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
          {/* {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>-->  */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Button
                  className="getstarted scrollto"
                  onClick={() => {
                    history.push("/")
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
          {/* // {/* <!-- .navbar -->  */}
        </div>
      </header>

      <div className={classes.summary}>
        <div className={classes.content}>
          <h1>Summary</h1>
          <Typography className={classes.fields}>
            Name: Bhakti Trivedi
          </Typography>
          <Typography className={classes.fields}>
            Role applied for: Web Development
          </Typography>
          <Typography className={classes.fields}>
            Match Percentage: 60%
          </Typography>
          <Typography className={classes.fields}>Work experience: 0</Typography>
          <Typography className={classes.fields}>
            Projects: Resume Maker
          </Typography>
        </div>
        <div className={classes.content}>
          <h1>Improve your resume</h1>
          <ul>
            <li>
              <Typography className={classes.fields}>
                You are missing 3 important high-value skills on your resume.
              </Typography>
            </li>
            <li>
              <Typography className={classes.fields}>
                The dates in your work experience section are poorly formatted.
              </Typography>
            </li>
            <li>
              <Typography className={classes.fields}>
                There are 1048 words in your resume. Consider reducing your
                resume length to under 1000 words to increase focus and for ease
                of reading by recruiters.
              </Typography>
            </li>
            <li>
              <Typography className={classes.fields}>
                We've found some negative phrases or cliches in your resume:
              </Typography>
            </li>
            <li>
              <Typography className={classes.fields}>
                Your document page size is non-standard - recruiters often print
                resumes for review, and non-standard page sizes could cause your
                resume to be cut off.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeSummary;
