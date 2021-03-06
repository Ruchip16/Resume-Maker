import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogData } from "./blogImg";
import BlogSlider from "./BlogSlider";
import contatct from "../../images/contact.jpeg";
import ContactForm from "./ContactForm";
import SignInOutContainer from "../common/popup";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { UserContext } from "../../App";
 


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
  },
}));

const LandingPage = () => {
  const {state} = useContext(UserContext);
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const RenderLogin=()=>{
    console.log("Navbar login button ",state);
    if(state){
      return(
        

<ul>
<div class="dropdown">
  <button class="dropbtn">MENU</button>
  <div class="dropdown-content">
    <a href="#hero">Home</a>
    <a href="#about">About US</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Blogs</a>
    <a href="#team">Our Team</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<li>
  <Button
    className="getstarted scrollto"
    component={Link}
    to="/resumeBuilder"
  >
    Resume Builder
  </Button>
</li>
<li>
  <Button
    className="getstarted scrollto"
    component={Link}
    to="/hr"
  >
    ATS
  </Button>
</li>
<li>
<Button className="getstarted scrollto" href="/logout">
        Logout
  </Button>
  
  
</li>

</ul>
      )
    }
    else{
      return(
      
      <ul>
      <div class="dropdown">
        <button class="dropbtn">MENU</button>
        <div class="dropdown-content">
          <a href="#hero">Home</a>
          <a href="#about">About US</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Blogs</a>
          <a href="#team">Our Team</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      
      <li>
        <Button
          className="getstarted scrollto"
          component={Link}
          to="/resumeBuilder"
        >
          Resume Builder
        </Button>
      </li>
      <li>
        <Button
          className="getstarted scrollto"
          component={Link}
          to="/hr"
        >
          ATS
        </Button>
      </li>
      <li>
      <Button className="getstarted scrollto" onClick={handleOpen}>
          Login
      </Button>
        
        
      </li>
      
      </ul>


      )
    }
  }
  

  return (
    <div>
      <div className="common-color">
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="fixed-top ">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="index.html">Resume Maker</a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

            <nav id="navbar" className="navbar">
              
              {RenderLogin()}
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            {/* <!-- .navbar --> */}
          </div>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>Build And Test Your Resume Interview-Ready</h1>
                <h2>
                  Get your resume created in a hassle free manner and get it
                  tested here!
                </h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" className="btn-get-started scrollto">
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                    className="glightbox btn-watch-video"
                  >
                    <i className="bi bi-play-circle"></i>
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="assets/img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <svg
              className="waves"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#2774ae" />
                  <stop offset="100%" stop-color="#00356B" />
                </linearGradient>
              </defs>
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
                fill=" url(#linear)"
                fill-opacity="1"
              ></path>
            </svg>
          </div>
        </section>
      </div>

      {/* <!-- End Hero --> */}

      <main id="main">
        {/* Pop Up  */}
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <SignInOutContainer />
              </div>
            </Fade>
          </Modal>
        </div>
        {/* =========== */}

        {/* <!-- ======= About Us Section ======= --> */}
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Resume Maker is a free web application designed to help
                  students and professionals create and test it using the ATS
                  Parser.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Create Your Resume
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Check your score
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Make your resume
                    ATS friendly
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h5 strong>
                  {" "}
                  Wondering if your resume is ATS friendly or not?
                </h5>
                <p>You can check it here!</p>
                <Button to="/HR" component={Link} className="btn-learn-more">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Us Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          {/* <div className="quarter">
            <img src="./assets/img/vector1.svg" />
  </div>*/}
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Services</h2>
            </div>
            <div className="flex-container">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h2>Resume Builder</h2>
                  </div>
                  <div class="flip-card-back">
                    <h1>Steps</h1>
                    <p>1.Pick a professionally designed resume template</p>
                    <p>
                      2.Fill in all your details, skills, projects, work
                      experience etc
                    </p>
                    <p>3.Preview Changes</p>
                    <p>4.Download Resume</p>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h2>ATS System</h2>
                  </div>
                  <div class="flip-card-back">
                    <h1>Steps</h1>
                    <p>1.Upload your resume in pdf/.doc/.png format</p>
                    <p>2.Upload the Job description</p>
                    <p>3.Get score</p>
                    <p>4.Fetch summary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Resume-Builder Section ======= --> */}
        <section id="Resume-Builder" className="Resume-Builder section-bg">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content">
                  <h3>Build Your Resume ATS Friendly</h3>
                  <ul>
                    <li>
                      <p>
                        The purpose of a resume is to make a good first
                        impression on a potential employer.{" "}
                        <strong>
                          Build a professional resume that catches the
                          recruiter's eye.
                        </strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        After being processed, about 75% of resumes are
                        discarded, and many employers miss out on competent
                        individuals who are unaware of how ATS works.{" "}
                        <strong>
                          You can use our ATS to check your resume.
                        </strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        To avoid mistakes, keep an eye on your resume while you
                        put in the data. Our resume builder ensures that your
                        resume is properly aligned and formatted, making it
                        appear to be a masterpiece. <br />
                        <strong>Build a flawless and excellent Resume.</strong>
                      </p>
                    </li>
                  </ul>
                  <Button
                    data-bs-target="#accordion-list-4"
                    class="btn"
                    to="/resumebuilder"
                    component={Link}
                  >
                    Build Resume
                  </Button>
                </div>
              </div>
              <div
                className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                style={{
                  backgroundImage: "url(" + "assets/img/why-us.png" + ")",
                  width: "632px",
                  backgroundColor: "rgba(19,104,235,0.4)",
                  borderRadius: "67% 33% 36% 64% / 49% 35% 65% 51% ",
                  height: "628px",
                }}
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Why Us Section --> */}

        {/* <!-- ======= ATS Section ======= --> */}
        <section id="ATS" className="ATS">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img src="assets/img/skills.png" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>Applicant Tracking System</h3>
                <div className="accordion-list">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target="#accordion-list-1"
                      >
                        <span style={{ color: "#FEBE10" }}>01</span>Upload
                        Resume<i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Students or Recruiters can upload the resume to be
                          scanned. The format of the resume should be .doc or
                          .pdf or .png
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target="#accordion-list-2"
                      >
                        <span style={{ color: "#FEBE10" }}>02</span>
                        Upload Job Description
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Students or Recruiters can upload company specific job
                          description. The format of the job description should
                          be .doc or .pdf or .png
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        className="collapsed"
                      >
                        <span style={{ color: "#FEBE10" }}>03</span>Check Your
                        Score<i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-3"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          ATS scores your resume on the key criteria recruiters
                          and hiring managers look for.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-4"
                        className="collapsed"
                      >
                        <span style={{ color: "#FEBE10" }}>04</span> View Result
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-4"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          ATS will parse the information given in resume and
                          display it as a short summary including the specific
                          keywords in the resume.
                        </p>
                      </div>
                    </li>
                    <li>
                      <Button
                        data-bs-target="#accordion-list-4"
                        className="btn"
                        to="/HR"
                        component={Link}
                        style={{ color: "fff" }}
                      >
                        Get Started
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End ATS Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Blogs</h2>
              <p>
                If you have any questions, you may check out our posts on resume
                building or ATS!
              </p>
              <br />

              {/* <div className="searchbar">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search a keyword"
                  style={{
                    width: "40vw",
                    backgroundColor: "rgb(48,109,159,0.5)",
                    borderRadius: "10px",
                    height: "2rem",
                    border: "none",
                  }}
                />
              </div> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <BlogSlider slides={BlogData} />

            {/* <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                    </ul>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/></div>
                        <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div> */}

            {/* </div> */}
          </div>
        </section>
        {/* /* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#A2D2FF"
              fill-opacity="1"
              d="M0,160L48,138.7C96,117,192,75,288,101.3C384,128,480,224,576,250.7C672,277,768,235,864,202.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <section
          id="team"
          className="team"
          style={{ backgroundColor: "#A2D2FF" }}
        >
          <div
            className="container team-container"
            data-aos="fade-up"
            style={{ borderRadius: "20px" }}
          >
            <div className="section-title" style={{ color: "white" }}>
              <h2 style={{ color: "white" }}>Meet Our Team</h2>
            </div>

            <div className="row">
              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/Suyash_Jamdade.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Suyash Jamdade</h4>
                    <span> Developer</span>
                    <div className="social">
                      {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                      <a href="https://www.linkedin.com/in/suyash-jamdade-5aa1221a3/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/Prerna_Jajodia.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Prerna Jajodia</h4>
                    <span>Front-end Developer</span>
                    <div className="social">
                      {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                      <a href="https://www.linkedin.com/in/prerna-jajodia-58bb0a1b7/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/Ruchi2.jpeg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Ruchi Pakhle</h4>
                    <span>Front-end Developer </span>
                    <div className="social">
                      {/* <a href="https://twitter.com/Ruchicodess"><i className="ri-twitter-fill"></i></a> */}
                      <a href="https://www.linkedin.com/in/ruchi-pakhle-a0a5311b0/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/Aarushi_Shanker.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Aarushi Shanker</h4>
                    <span>Front-end Developer</span>
                    <div className="social">
                      {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                      <a href="https://www.linkedin.com/in/aarushi-shanker-0b19181a5">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/Bhakti_Trivedi.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Bhakti Trivedi</h4>
                    <span>Developer</span>
                    <div className="social">
                      {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                      <a href="https://www.linkedin.com/in/bhaktitrivedi/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/Priyanshi.jpeg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Priyanshi Sinha</h4>
                    <span>Designer</span>
                    <div className="social">
                      {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                      <a href="https://www.linkedin.com/in/priyanshisinha/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/Aastha_Sharma1.jpeg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Aastha Sharma</h4>
                    <span>Designer</span>
                    <div className="social">
                      {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="member-info">
                    <div className="pic">
                      <img
                        src="assets/img/team/ShreyaMBiradar.jpeg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Shreya M Biradar</h4>
                    <span>Frontend Developer</span>
                    <div className="social">
                      {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                      <a href="https://www.linkedin.com/in/shreya-biradar/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p></p>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    Should we write our resume in past tense or present tense?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      It is advisable to write the resume in past tense, but
                      there can be exceptions where the present tense may be
                      more appropriate
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    {" "}
                    How do we know that our resume is ATS friendly or not?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The first step of your application is Resume shortlisting
                      and it is an automatic process done by ATS. It finds
                      specific keywords related to the job description,it
                      searches for the keywords in your resume and shortlist
                      accordingly.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Should we include soft skills in our resume?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, you can demonstrate your skills like leadership,
                      teamwork, communication in resume
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    How to list volunteer work on our resume?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Volunteer work can be a great addition to your resume and
                      if demonstrated properly it can give you a edge amongst
                      the other candidates. You can check our blog for the same.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    {" "}
                    Is it necessary to include resume header?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes you should,infact it is the first thing recruiters and
                      hiring managers will see, so make sure it is unique and it
                      catches the attention of the recruiter.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- End Frequently Asked Questions Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="section-title">
            <h2>Drop us a line!</h2>
          </div>
          <div className="container contact-sec" data-aos="fade-up">
            <img
              src={contatct}
              style={{ width: "30vw", height: "auto", marginBottom: "4rem" }}
            />

            <div>
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <ContactForm />
                {/* <div className="row">
                  <div className="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div> */}
              </form>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer
        id="footer"
        style={{
          background: "linear-gradient(to right, #2774AE,#00356B)",
          borderTopLeftRadius: "100px",
        }}
      >
        <div
          className="footer-top"
          style={{
            background: "linear-gradient(to right, #2774AE,#00356B)",
            borderTopLeftRadius: "100px",
            color: "white",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3 style={{ color: "whitesmoke" }}>Resume Maker</h3>
                <p style={{ color: "whitesmoke" }}>
                  India <br />
                  <strong>Email:</strong> resume@diyintern.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4 style={{ color: "whitesmoke" }}>Useful Links</h4>
                <ul style={{ color: "whitesmoke" }}>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white" }}>
                      Home
                    </a>
                  </li>
                  <li style={{ color: "white" }}>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white" }}>
                      About us
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white" }}>
                      What we offer
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white" }}>
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4 style={{ color: "whitesmoke" }}>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white" }}>
                      Resume Builder
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white" }}>
                      Applicant Tracking System
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4 style={{ color: "whitesmoke" }}>Our Social Networks</h4>
                <p style={{ color: "white" }}>
                  Reach out to us incase of any query
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>DIYIntern</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="#" style={{ color: "whitesmoke" }}>
              DIYIntern
            </a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <div id="preloader"></div> */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>TOP
      </a>
    </div>
  );
};

export default LandingPage;