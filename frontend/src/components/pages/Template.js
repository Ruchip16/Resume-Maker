import React, { useState } from 'react'
import { Container,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    color: "#fff",
    backgroundColor: "#00416A",
    margin: "10px",
    padding: "15px 35px;",
    borderRadius: "20px",
    textAlign: "center",
},
}));

function Template( props) {
    const classes = useStyles();
   
    const [bgColor,setBg]=useState("fff")
    const changeTheme=(color)=>{
        setBg(color);
    }

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

            position: "relative",
          }}
        >
          <Container
            maxWidth="sm"
            style={{
              border: "1px solid gray",
              lineHeight: "5px",
              fontSize: "smaller",
            }}
          >
            <center>
              <p style={{ fontSize: "1rem", paddingTop: "10px" }}>
                <h2> {props.name == "" ? "Name" : props.name}</h2>
              </p>
              <p>
                {props.email == "" ? "Email id" : props.email} |{" "}
                {props.phone == "" ? "Phone" : props.phone}{" "}
              </p>
              <p>
                {props.github == "" ? "Github Link" : props.github} |{" "}
                {props.linkedin == "" ? "LinkedIn" : props.linkedin}{" "}
              </p>
              <p>{props.addons == "" ? "" : props.addons}</p>
            </center>
            <hr />
            <div className={classes.root}>
              <Grid container spacing={2} style={{ backgroundColor: bgColor }}>
                <Grid item xs>
                  <Paper
                    className={classes.paper}
                    style={{ whiteSpace: "normal" }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Education
                      </h5>
                      <br />
                      <div id="degree" style={{ textAlign: "left" }}>
                        {/* <p style={{fontWeight:"500", marginTop: '10px'}}>Degree</p> */}
                        <p>
                          {props.degree == "" ? "<Degree>" : props.degree} |{" "}
                          {props.college == ""
                            ? "<Name of College>"
                            : props.college}
                        </p>
                        <p>{props.major == "" ? "<Major>" : props.major}</p>
                        <p>
                          Year : {props.batch == "" ? "<Batch>" : props.batch}
                        </p>
                        <p>
                          CGPA :{" "}
                          {props.collegeAgg == ""
                            ? "<Aggregate>"
                            : props.collegeAgg}
                        </p>
                      </div>
                      <div id="inter" style={{ textAlign: "left" }}>
                        <br />

                        {/* <p style={{ fontWeight: "500" }}>Intermediate</p> */}
                        <p>
                          {props.school == ""
                            ? "<Name of School>"
                            : props.school}
                        </p>
                        <p>
                          {props.schoolBatch == ""
                            ? "<Batch>"
                            : props.schoolBatch}{" "}
                        </p>
                        {/* <p>{ (props.schoolAgg == '') ? '<Aggregate>' : props.schoolAgg }</p> */}
                      </div>
                      {/* <div id="tenth" style={{textAlign:"left"}}>
                                        <p style={{fontWeight:"500"}}>10th</p>
                                        <p>Holy Cross School(2017 passout)</p>
                                        <p>Board: CBSE</p>
                                        <p>Cgpa: 10</p>
                                    </div> */}
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{ textAlign: "left", whiteSpace: "normal" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Technical Skills
                      </h5>
                      <div style={{ whiteSpace: "normal", lineHeight: "20px" }}>
                        <ul>
                          <li>
                            <p>
                              {props.programminglanguages == ""
                                ? "<Programming Languages>"
                                : props.programminglanguages}
                            </p>
                          </li>
                          <li>
                            <p>{props.dbms == "" ? "<DBMS>" : props.dbms}</p>
                          </li>
                          <li>
                            <p>
                              {props.datamodelling == ""
                                ? "<Data Modelling>"
                                : props.datamodelling}
                            </p>
                          </li>
                          <li>
                            <p>
                              {props.platforms == ""
                                ? "<Platforms>"
                                : props.platforms}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div
                      style={{
                        textAlign: "left",
                        whiteSpace: "normal",
                        lineHeight: "20px",
                      }}
                    >
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Projects
                      </h5>
                      <div>
                        <p style={{ fontWeight: "350" }}>
                          {props.projectname == ""
                            ? "<Name of Project>"
                            : props.projectname}
                        </p>
                        <p>
                          {props.description == ""
                            ? "<Description>"
                            : props.description}
                        </p>
                        <p>{props.link == "" ? "<Link>" : props.link}</p>
                        <p>
                          {props.techstack == ""
                            ? "<Tech Stack>"
                            : props.techstack}
                        </p>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{ textAlign: "left", lineHeight: "20px" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Blogs
                      </h5>
                      <p>
                        • Blog website :{" "}
                        {props.linkforblog == ""
                          ? "<Link for Blog>"
                          : props.linkforblog}
                      </p>
                      <p>
                        {props.topicforblog == ""
                          ? "<Blog Topic>"
                          : props.topicforblog}
                      </p>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <div style={{ textAlign: "left", lineHeight: "20px" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Experience
                      </h5>
                      <div>
                        <p style={{ fontWeight: "350" }}>
                          {props.company1 == "" ? "<Company1>" : props.company1}{" "}
                          |{" "}
                          {props.jobtitle == ""
                            ? "<Job Title>"
                            : props.jobtitle}
                        </p>
                        <ul>
                          {/* <li>
                                                <p>{(props.city== '') ? '<City/State>' : props.city}</p>
                                            </li>  */}
                          <li>
                            <p>
                              {props.descriptionn == ""
                                ? "<Description>"
                                : props.descriptionn}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p style={{ fontWeight: "350" }}>
                          {props.employer == "" ? "<Company2>" : props.employer}{" "}
                          | {props.role == "" ? "<Job Title>" : props.role}
                        </p>
                        <ul>
                          {/* <li>
                                                <p>{(props.state== '') ? '<City/State>' : props.state}</p>
                                            </li>  */}
                          <li>
                            <p>
                              {props.work == "" ? "<Description>" : props.work}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{ textAlign: "left", lineHeight: "20px" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Achievements
                      </h5>
                      <ul>
                        <li>
                          <p>
                            {props.achievement1 == ""
                              ? "<Achievement1>"
                              : props.achievement1}
                          </p>
                        </li>
                        <p>{props.addmoree == "" ? "" : props.addmoree}</p>
                      </ul>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{ textAlign: "left", lineHeight: "20px" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Workshops
                      </h5>
                      <ul>
                        <li>
                          <p>
                            {props.workshop1 == ""
                              ? "<Workshop1>"
                              : props.workshop1}
                          </p>
                        </li>
                        <li>
                          <p>
                            {props.workshop2 == ""
                              ? "<Workshop2>"
                              : props.workshop2}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{ textAlign: "left", whiteSpace: "normal" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Position of Responsibility
                      </h5>
                      <div style={{ textAlign: "left", lineHeight: "20px" }}>
                        <p style={{ fontWeight: "350" }}>
                          {props.positionofresponsibility == ""
                            ? "<Your Role 1>"
                            : props.positionofresponsibility}{" "}
                          |{" "}
                          {props.organization == ""
                            ? "<Organization>"
                            : props.organization}
                        </p>
                        <ul>
                          <li>
                            <p>
                              {props.describe == ""
                                ? "<Description>"
                                : props.describe}
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* <div style={{textAlign:"left",lineHeight:"20px"}}>
                                    <p style={{fontWeight:"350"}}>{(props.company1 == '') ? '<Your Role 2>' : props.company1} | {(props.jobtitle== '') ? '<Organization>' : props.jobtitle}</p>
                                        <ul>  
                                            <li>
                                                <p>{(props.descriptionn == '') ? '<Description>' : props.descriptionn}</p>
                                            </li>   
                                        </ul>
                                    </div> */}
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{ textAlign: "left", whiteSpace: "normal" }}>
                      <h5 style={{ textAlign: "left", color: bgColor }}>
                        Certifications
                      </h5>
                      <div style={{ whiteSpace: "normal", lineHeight: "20px" }}>
                        <ul>
                          <li>
                            <p>
                              {" "}
                              {props.certifyname == ""
                                ? "<Certfication Name>"
                                : props.certifyname}{" "}
                              |{" "}
                              {props.issuingorg == ""
                                ? "<Organization>"
                                : props.issuingorg}
                            </p>
                          </li>
                          <p>
                            {" "}
                            {props.addcertify == ""
                              ? ""
                              : props.addcertify}{" "}
                            {props.addorg == "" ? "" : props.addorg}
                          </p>
                        </ul>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
              <br />
              <br />
            </div>
          </Container>
          <button className={classes.button} onClick={() => props.setvalue(2)}>
            Next
          </button>
          <button className={classes.button}>Download</button>
        </Container>
      </div>
    );
}

export default Template;

