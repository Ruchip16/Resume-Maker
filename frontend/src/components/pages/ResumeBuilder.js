import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Template from './Template';
import AutoGrid from '../common/ResumeHeader';
import { useState } from 'react';
import Details from './sections/Details';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Summary from './sections/Summary';
import Experience from './sections/Experience';
import Blogs from './sections/Blogs';
import TechnicalSkills from './sections/TechnicalSkills'
import Addons from './sections/Add-ons';

import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Workshops from './sections/Workshops';
import Hobbies from './sections/Hobbies';
import Responsibilities from './sections/Responsibilities'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ResumeBuilder() {
  const classes = useStyles();
  const [active, setActive] = useState("details");

  // Education section
  const [degree, setDegree] = useState('');
  const [college, setCollege] = useState('');
  const [major, setMajor] = useState('');
  const [school, setSchool] = useState('');
  const [schoolAgg, setSchoolAgg] = useState('');
  const [collegeAgg, setCollegeAgg] = useState('');
  const [batch, setBatch] = useState('');
  const [schoolBatch, setSchoolBatch] = useState('');


  

  const setEdu = (e) => {
    if (e.degree !== undefined)
      setDegree(e.degree);

    else if (e.college !== undefined)
      setCollege(e.college);

    else if (e.major !== undefined)
      setMajor(e.major);

    else if (e.school !== undefined)
      setSchool(e.school)

    else if (e.schoolAgg !== undefined)
      setSchoolAgg(e.schoolAgg)

    else if (e.collegeAgg !== undefined)
      setCollegeAgg(e.collegeAgg)

    else if (e.batch !== undefined)
      setBatch(e.batch)

    else if (e.schoolBatch !== undefined)
      setSchoolBatch(e.schoolBatch)
  }

  //End of Education section

  // Technical Skills Sections
  const [programminglanguages, setProgramming] = useState('');
  const [dbms, setDBMS] = useState('');
  const [datamodelling, setDataModelling] = useState('');
  const [platforms, setPlatforms] = useState('');

  const setTechnicalSkills = (e) => {
    if (e.programminglanguages !== undefined)
      setProgramming(e.programminglanguages);

    else if (e.dbms !== undefined)
      setDBMS(e.dbms);

    else if (e.datamodelling !== undefined)
      setDataModelling(e.datamodelling);

    else if (e.platforms !== undefined)
      setPlatforms(e.platforms)
  }

  //Personal Details Section

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [addons, setAddons] = useState('');

  const setDetails = (e) => {
    if (e.name !== undefined)
      setName(e.name)

    else if (e.email !== undefined)
      setEmail(e.email)

    else if (e.phone !== undefined)
      setPhone(e.phone)

    else if (e.github !== undefined)
      setGithub(e.github)

    else if (e.linkedin !== undefined)
      setLinkedIn(e.linkedin)

    else if (e.addons !== undefined)
      setAddons(e.addons)
  }

  // Projects Section

  const [projectname, setProjName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [techstack, setTools] = useState('');

  const setProject = (e) => {
    if (e.projectname !== undefined)
      setProjName(e.projectname);

    else if (e.description !== undefined)
      setDescription(e.description);

    else if (e.link !== undefined)
      setLink(e.link);

    else if (e.techstack !== undefined)
      setTools(e.techstack)
  }
  // End of projects section

  // Summary Section 
   const [summary, setSummary] = useState('');
   const setSummaryDes = (e) => {
    if (e.summary !== undefined) 
    setSummary(e.summary);
  };
   

  // Experience section 

  const [company1, setCompany1] = useState('');
  const [jobtitle, setJobTitle] = useState('');
  const [city, setCity] = useState('');
  const [descriptionn, setDes] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [employer, setEmployer] = useState('');
  const [role, setRole] = useState('');
  const [state, setState] = useState('');
  const [work, setWork] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');


  const setExperience = (e) => {
    if (e.company1 !== undefined)
      setCompany1(e.company1);

    else if (e.jobtitle !== undefined)
      setJobTitle(e.jobtitle);

    else if (e.city !== undefined)
      setCity(e.city);

    else if (e.descriptionn !== undefined)
      setDes(e.descriptionn);

    else if (e.startdate !== undefined)
      setStartDate(e.startdate)

    else if (e.enddate !== undefined)
      setEndDate(e.enddate)

    else if (e.employer !== undefined)
      setEmployer(e.employer)

    else if (e.role !== undefined)
      setRole(e.role)

    else if (e.state !== undefined)
      setState(e.state)

    else if (e.work !== undefined)
      setWork(e.work)

    else if (e.start !== undefined)
      setStart(e.start)

    else if (e.end !== undefined)
      setEnd(e.end)
  }

  // Posiition of responsibility section
  const [positionofresponsibility, setPosition] = useState('');
  const [organization, setOrganization] = useState('');
  const [describe, setDescribe] = useState('');

  const setPositionofResponsibility = (e) => {
    if (e.positionofresponsibility !== undefined)
      setPosition(e.positionofresponsibility);

    else if (e.organization !== undefined)
      setOrganization(e.organization);

    else if (e.describe !== undefined)
      setDescribe(e.describe);
  }

  // Blogs Section

  const [linkforblog, setLinkforBlog] = useState('');
  const [topicforblog, setTopicforBlog] = useState('');

  const setBlogs = (e) => {
    if (e.linkforblog !== undefined)
      setLinkforBlog(e.linkforblog);

    else if (e.topicforblog !== undefined)
      setTopicforBlog(e.topicforblog);
  }

  //  Certifications section
  const [certifyname, setCertifyName] = useState('');
  const [issuingorg, setIssuingorg] = useState('');
  const [addcertify, setAddCertify] = useState('');
  const [addorg, setAddorg] = useState('');

  const setCertifications = (e) => {
    if (e.certifyname !== undefined)
      setCertifyName(e.certifyname);

    else if (e.issuingorg !== undefined)
      setIssuingorg(e.issuingorg);

    else if (e.addcertify !== undefined)
      setAddCertify(e.addcertify);

    else if (e.addorg !== undefined)
      setAddorg(e.addorg);
  }

  // Achievements
  const [achievement1, setAchievement1] = useState('');
  const [achievement2, setAchievement2] = useState('');
  const [addmoree, setAddMoree] = useState('');


  const setAchievements = (e) => {
    if (e.achievement1 !== undefined)
      setAchievement1(e.achievement1);

    else if (e.achievement2 !== undefined)
      setAchievement2(e.achievement2);

    else if (e.addmoree !== undefined)
      setAddMoree(e.addmoree);
  }

  // Workshops

  const [workshop1, setWorkshop1] = useState('');
  const [workshop2, setWorkshop2] = useState('');


  const setWorkshops = (e) => {
    if (e.workshop1 !== undefined)
      setWorkshop1(e.workshop1);

    else if (e.workshop2 !== undefined)
      setWorkshop2(e.workshop2);
  }

  const clearResume = () => {
    console.log("click")
    //if (active === "details") {
      //Personal Detail
      setName('');
      setEmail('');
      setPhone('');
      setGithub('');
      setLinkedIn('');
      setAddons('');
    //}

    //if (active === "technicalSkills") {
      // Technical Skills
      setProgramming('');
      setDBMS('');
      setDataModelling('');
      setPlatforms('');
   // }


    //if (active === "education") {

      // Education section
      setDegree('');
      setCollege('');
      setMajor('');
      setSchool('');
      setSchoolAgg('');
      setCollegeAgg('');
      setBatch('');
      setSchoolBatch('');
   // }

    //if (active === "projects") {
      // Projects Section
      setProjName('');
      setDescription('');
      setLink('');
      setTools('');
   // }

    //if (active === "experience") {
      // Experience section 
      setCompany1('');
      setJobTitle('');
      setCity('');
      setDes('');
      setStartDate('');
      setEndDate('');
      setEmployer('');
      setRole('');
      setState('');
      setWork('');
      setStart('');
      setEnd('');
    //}

   // if (active === "responsibilities") {
      // Posiition of responsibility section
      setPosition('');
      setOrganization('');
      setDescribe('');
   // }

    //if (active === "blogs") {
      // Blogs Section
      setLinkforBlog('');
      setTopicforBlog('');
    //}

   // if (active === "certifications") {
      //  Certifications section
      setCertifyName('');
      setIssuingorg('');
      setAddCertify('');
      setAddorg('');
    //}

    //if (active === "achievements") {
      // Achievements
      setAchievement1('');
      setAchievement2('');
      setAddMoree('');
    //}

    //if (active === "workshops") {
      // Workshops
      setWorkshop1('');
      setWorkshop2('');
    //}
  }
 

  return (
    <div className={classes.root}>
      <AutoGrid active={active} setActive={setActive} clearEntries={() => clearResume()} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {active === "details" &&
            <Details
              name={name}
              email={email}
              phone={phone}
              github={github}
              linkedin={linkedin}
              addons={addons}
              setDetails={setDetails}
            />}
          {active === "education" &&
            <Education
              college={college}
              degree={degree}
              major={major}
              school={school}
              schoolAgg={schoolAgg}
              collegeAgg={collegeAgg}
              batch={batch}
              schoolBatch={schoolBatch}
              setEdu={setEdu} />
          }
          {active === "projects" &&
            <Projects
              projectname={projectname}
              description={description}
              link={link}
              techstack={techstack}
              setProject={setProject} />
          }
          {active === "summary" && <Summary
          summary={summary} 
          setSummaryDes={setSummaryDes}/>}
          {active === "experience" &&
            <Experience
              company1={company1}
              jobtitle={jobtitle}
              city={city}
              descriptionn={descriptionn}
              startdate={startdate}
              enddate={enddate}
              employer={employer}
              role={role}
              state={state}
              work={work}
              start={start}
              end={end}
              setExperience={setExperience} />
          }
          {active === "blogs" &&
            <Blogs
              linkforblog={linkforblog}
              topicforblog={topicforblog}
              setBlogs={setBlogs} />}

          {active === "technicalSkills" &&
            <TechnicalSkills
              programminglanguages={programminglanguages}
              dbms={dbms}
              datamodelling={datamodelling}
              platforms={platforms}
              setTechnicalSkills={setTechnicalSkills} />
          }
          {active === "addons" && <Addons />}
          {active === "achievements" &&
            <Achievements
              achievement1={achievement1}
              achievement2={achievement2}
              addmoree={addmoree}
              setAchievements={setAchievements}
            />}
          {active === "certifications" &&
            <Certifications
              certifyname={certifyname}
              issuingorg={issuingorg}
              addcertify={addcertify}
              addorg={addorg}
              setCertifications={setCertifications} />
          }

          {active === "workshops" &&
            <Workshops
              workshop1={workshop1}
              workshop2={workshop2}
              setWorkshops={setWorkshops}
            />}
          {active === "hobbies" && <Hobbies
            linkforblog={linkforblog}
            topicforblog={topicforblog}
            setBlogs={setBlogs} />}

          {active === "responsibilities" &&
            <Responsibilities
              positionofresponsibility={positionofresponsibility}
              organization={organization}
              describe={describe}
              setPositionofResponsibility={setPositionofResponsibility} />}
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Template
              college={college}
              degree={degree}
              major={major}
              school={school}
              schoolAgg={schoolAgg}
              collegeAgg={collegeAgg}
              batch={batch}
              schoolBatch={schoolBatch}
              name={name}
              email={email}
              phone={phone}
              github={github}
              linkedin={linkedin}
              addons={addons}
              projectname={projectname}
              description={description}
              link={link}
              techstack={techstack}
              company1={company1}
              jobtitle={jobtitle}
              city={city}
              descriptionn={descriptionn}
              startdate={startdate}
              enddate={enddate}
              employer={employer}
              role={role}
              state={state}
              work={work}
              start={start}
              end={end}
              programminglanguages={programminglanguages}
              dbms={dbms}
              datamodelling={datamodelling}
              platforms={platforms}
              positionofresponsibility={positionofresponsibility}
              organization={organization}
              describe={describe}
              linkforblog={linkforblog}
              topicforblog={topicforblog}
              certifyname={certifyname}
              issuingorg={issuingorg}
              achievement1={achievement1}
              achievement2={achievement2}
              workshop1={workshop1}
              workshop2={workshop2}
              addmoree={addmoree}
              addcertify={addcertify}
              addorg={addorg}
              summary={summary}

            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResumeBuilder;
