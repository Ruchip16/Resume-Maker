import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  resume: {
    width: "652px",
    height: "844.8px",
    display: "flex",
    margin: "50px auto",
    border: "1px solid",
  },
  resumeLeft: {
    width: "264px",
    backgroundColor: "#00416a",
  },
  resumeRight: {
    width: "388px",
    background: "#fff",
    padding: "25px",
  },
  resumeContent: {
    padding: "0px 25px",
  },
  resumeItem: {
    padding: "11px 0px",
    borderBottom: "2px solid #b1eaff",
  },
  bold: {
    fontWeight: "700",
    fontSize: "23px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  resumeLeftContent: {
    color: "white",
  },
  icon: {
    width: "35px",
    height: "35px",
    background: "#fff",
    color: "#0bb5f4",
    borderRadius: "50%",
    marginRight: "15px",
    fontSize: "16px",
    position: "relative",
  },
  list: {
    display: "flex",
    marginBottom: "5px",
    alignItems: "center",
  },
  data: {
    textAlign: "center",
    lineHeight: "20px",
    color: "#b1eaff",
  },
  fas: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  date: {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "15px",
  },
  alignLeft: {
    textAlign: "left",
    marginBottom: "0px",
  },
  p: {
    marginBottom: "0px",
  },
}));

function Template2(props) {
  const classes = useStyles();

  const [bgColor, setBg] = useState("fff");
  const changeTheme = (color) => {
    // setBg(color);
    // console.log(setBg)
    var bg = document.getElementById("resumeLeft");
    // console.log(bg)
    bg.style.backgroundColor = `${color}`;
  };

  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <span style={{ fontSize: "small" }}>Themes : </span>
      <FiberManualRecordIcon
        style={{ fontSize: "small", color: "black" }}
        onClick={() => {
          changeTheme("#00416a");
        }}
      />
      <FiberManualRecordIcon
        style={{ fontSize: "small", color: "blue" }}
        onClick={() => {
          changeTheme("blue");
        }}
      />
      <FiberManualRecordIcon
        style={{ fontSize: "small", color: "grey" }}
        onClick={() => {
          changeTheme("grey");
        }}
      />
      <FiberManualRecordIcon
        style={{ fontSize: "small", color: "#0080ff" }}
        onClick={() => {
          changeTheme("purple");
        }}
      />
      <div className={classes.resume}>
        <div className={classes.resumeLeft} id="resumeLeft">
          <div className={classes.resumeContent}>
            <div className={classes.resumeItem}>
              <div className={classes.title}>
                <p className={classes.bold} style={{ color: "white" }}>
                  {props.name == "" ? "Name" : props.name}
                </p>
                {/* <p style={{color: "#b1eaff"}}>Title</p> */}
              </div>
              <div className={classes.data}>
                {props.email == "" ? "Email id" : props.email} | {""}{" "}
                {props.phone == "" ? "Phone" : props.phone}
                <p></p>
                <p>
                  {props.github == "" ? "Github" : props.github} |{" "}
                  {props.linkedin == "" ? "LinkedIn" : props.linkedin}{" "}
                </p>
                <p> {props.addons == "" ? "" : props.addons}</p>
              </div>
            </div>
            <div className={classes.resumeItem}>
              <div className={classes.title}>
                <p className={classes.bold} style={{ color: "white" }}>
                  Technical Skills
                </p>
                <div>
                  <div className={classes.data}>
                    <p>
                      {props.programminglanguages == ""
                        ? "<Programming Languages>"
                        : props.programminglanguages}
                    </p>
                    <p>{props.dbms == "" ? "<DBMS>" : props.dbms}</p>
                    <p>
                      {props.datamodelling == ""
                        ? "<Data Modelling>"
                        : props.datamodelling}
                    </p>

                    <p>
                      {props.platforms == "" ? "<Platforms>" : props.platforms}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.resumeItem}>
              <div className={classes.title}>
                <p className={classes.bold} style={{ color: "white" }}>
                  Education
                </p>
                <div>
                  <div className={classes.data}>
                    <p>
                      {props.degree == "" ? "<Degree>" : props.degree} |{" "}
                      {props.college == ""
                        ? "<Name of College>"
                        : props.college}
                    </p>
                    <p>{props.major == "" ? "<Major>" : props.major}</p>
                    <p>Year : {props.batch == "" ? "<Batch>" : props.batch}</p>
                    <p>
                      CGPA :{" "}
                      {props.collegeAgg == ""
                        ? "<Aggregate>"
                        : props.collegeAgg}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.resumeItem}>
              <div className={classes.title}>
                <p className={classes.bold} style={{ color: "white" }}>
                  Responsibilities
                </p>
                <div className={classes.data}>
                  <p style={{ fontWeight: "350" }}>
                    {props.positionofresponsibility == ""
                      ? "<Your Role 1>"
                      : props.positionofresponsibility}{" "}
                  </p>
                  <p>
                    {props.organization == ""
                      ? "<Organization>"
                      : props.organization}{" "}
                  </p>

                  <p>
                    {props.describe == "" ? "<Description>" : props.describe}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.resumeRight}>
          <div className={classes.resumeItem}>
            <div className={classes.title}>
              <p className={classes.bold}>ABOUT</p>
            </div>
            <p className={classes.alignLeft}>
              {props.summary == "" ? "<Summary about yourself>" : props.summary}
            </p>
          </div>
          <div className={classes.resumeItem}>
            <b className={classes.bold}>Projects</b>
            <div>
              <p className={classes.alignLeft} style={{ fontWeight: "350" }}>
                {props.projectname == ""
                  ? "<Name of Project>"
                  : props.projectname}
              </p>
              <p className={classes.alignLeft}>
                {props.description == "" ? "<Description>" : props.description}
              </p>
              <p className={classes.alignLeft}>
                {props.link == "" ? "<Link>" : props.link}
              </p>
              <p className={classes.alignLeft}>
                {props.techstack == "" ? "<Tech Stack>" : props.techstack}
              </p>
            </div>
          </div>
          <div className={classes.resumeItem}>
            <b className={classes.bold}>Experience</b>
            <div>
              <p className={classes.alignLeft}>
                {props.company1 == "" ? "<Company1>" : props.company1}{" "}
              </p>
              <p className={classes.alignLeft}>
                {" "}
                {props.jobtitle == "" ? "<Job Title>" : props.jobtitle}
              </p>
              <p className={classes.alignLeft}>
                {props.descriptionn == ""
                  ? "<Description>"
                  : props.descriptionn}
              </p>
              <p></p>
              <p className={classes.alignLeft}>Internships - </p>
              <div>
                {" "}
                <p className={classes.alignLeft}>
                  {props.employer == "" ? "<Company Name>" : props.employer}
                </p>
                <p className={classes.alignLeft}>
                  {" "}
                  {props.role == "" ? "<Job Title>" : props.role}
                </p>
                <p className={classes.alignLeft}>
                  {props.work == "" ? "<Description>" : props.work}
                </p>
              </div>

              {/* <p className={classes.alignLeft}>
                {props.techstack == "" ? "<Tech Stack>" : props.techstack}
              </p> */}
            </div>
          </div>
          <div className={classes.resumeItem}>
            <div className={classes.title}>
              <p className={classes.bold}>Certifications</p>
              <div className={classes.alignLeft}>
                <p>
                  {" "}
                  {props.certifyname == ""
                    ? "<Certfication Name>"
                    : props.certifyname}
                </p>
                <p className={classes.alignLeft}>
                  {props.issuingorg == "" ? "<Organization>" : props.issuingorg}
                </p>
                <p className={classes.alignLeft}>
                  {" "}
                  {props.addcertify == "" ? "" : props.addcertify}{" "}
                </p>
                <p className={classes.alignLeft}>
                  {" "}
                  {props.addorg == "" ? "" : props.addorg}
                </p>
              </div>
            </div>
          </div>
          <div className={classes.resumeItem}>
            <div className={classes.title}>
              <p className={classes.bold}>Achievements</p>
              <div className={classes.alignLeft}>
                <p>
                  {props.achievement1 == ""
                    ? "<Achievement1>"
                    : props.achievement1}
                </p>
                <p className={classes.alignLeft}>
                  {props.addmoree == "" ? "" : props.addmoree}
                </p>
              </div>
            </div>
          </div>
          {/* <p className={classes.bold}>Hobbies</p> */}
        </div>
      </div>
    </div>
  );
}

export default Template2;
