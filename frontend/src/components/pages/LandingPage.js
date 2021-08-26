import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import contatct from "../../images/contact.jpeg";
import ContactForm from "./ContactForm";

const LandingPage = () => {
  return (
    <div>
      <div>
        {/* <!-- ======= Header ======= --> */}
        <header
          id="header"
          className="fixed-top "
          style={{ background: "#43A0E7" }}
        >
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="index.html">GenMoney</a>
            </h1>

            <nav id="navbar" className="navbar">
              <ul>
                <div class="dropdown">
                  <button class="dropbtn">MENU</button>
                  <div class="dropdown-content">
                    <a href="#hero">Home</a>
                    <a href="#about">About US</a>
                    <a href="#services">What we offer</a>
                    <a href="#team">Our Team</a>
                    <a href="#contact">Contact</a>
                  </div>
                </div>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>

        {/* <!-- .navbar --> */}
        {/* </div> */}
        {/* </header> */}
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
                <h1>GenMoney</h1>
                <h2>The modern banking solution for the next generation!</h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" className="btn-get-started scrollto">
                    Get early access
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="assets/img/teen1.png"
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
                  <stop offset="0%" stop-color="#43A0E7" />
                  <stop offset="100%" stop-color="#74B9FF" />
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

        {/* <!-- End Hero --> */}

        <main id="main">
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
                      <i
                        className="ri-check-double-line"
                        style={{ color: "#FD79A8" }}
                      ></i>{" "}
                      Create Your Resume
                    </li>
                    <li>
                      <i
                        className="ri-check-double-line"
                        style={{ color: "#FD79A8" }}
                      ></i>{" "}
                      Check your score
                    </li>
                    <li>
                      <i
                        className="ri-check-double-line"
                        style={{ color: "#FD79A8" }}
                      ></i>{" "}
                      Make your resume ATS friendly
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

          {/* <!-- ======= Parents Section ======= --> */}
          <section id="services" className="services">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>For Parent</h2>
              </div>
              <div className="flex-container">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2> Made for Parents and Teens</h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        An app for helping parents to inculcate good financial
                        habits in their growing champ and prepare him for the
                        world in the early age.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2>Create your child's first account</h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        Create your child's first bank account in his teenage at
                        the tip of your fingers.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2 style={{ fontSize: "26px" }}>
                        Teach your child the value of hard-earned money
                      </h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        Give your champ daily tasks (like complete your hw) and
                        reward him on completion of the task.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2>Check your Champ</h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        Have track of your champ's financial actions without
                        actually controlling his/her financial habits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Services Section --> */}

          {/* <!-- ======= Parents Section ======= --> */}
          <section id="services" className="services">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>For Child</h2>
              </div>
              <div className="flex-container">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2>Payments with Virtual Card</h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        Every teen gets his/her own virtual card through which
                        he/she can send and receive payment from their parents
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2>Set personal saving goals</h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        Teenagers can set specific goals for themselves and save
                        money towards achieving the goal.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2>Earn Money from Daily Tasks</h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        Work on small tasks given by your parents and earn
                        money. Get paid for completing your homework or cleaning
                        your bed.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h2>Extra rewards for good work</h2>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        Earn extra reward from GenMoney for consistency
                        completing tasks, watching videos, playing games and
                        much more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Services Section --> */}

          {/* <!-- ======= Portfolio Section ======= --> */}

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
                    data-aos-delay="300"
                  >
                    <div className="member-info">
                      <div className="pic">
                        {/* <img
                        src="assets/img/team/Aastha_Sharma1.jpeg"
                        className="img-fluid"
                        alt=""
                      /> */}
                      </div>
                      <h4>Nikhil Agarwal</h4>
                      <span></span>
                      <div className="social">
                        <a href="https://www.linkedin.com/in/nikhila3/">
                          {" "}
                          <i className="ri-linkedin-box-fill"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col" style={{ alignContent: "center" }}>
                  <div
                    className="member d-flex align-items-start"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <div className="member-info">
                      <div className="pic">
                        {/* <img
                        src="assets/img/team/ShreyaMBiradar.jpeg"
                        className="img-fluid"
                        alt=""
                      /> */}
                      </div>
                      <h4>Aditya Vikram Jajodia</h4>
                      <span>Android Developer</span>
                      <div className="social">
                        {/* <a href=""><i className="ri-twitter-fill"></i></a> */}
                        <a href="https://www.linkedin.com/in/aditya-vikram-jajodia-83a49960/">
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
                      What is GenMoney?{" "}
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-1"
                      className="collapse show"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        GenMoney is a mobile application for teenagers between
                        13-18 years to understand the fundamentals of finance
                        and manage their own finances.
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
                      Will my child have his own bank account?{" "}
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-2"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Yes, a minor account for the child will be opened at our
                        partner bank.
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
                      Why should my child learn about financial literacy?
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-3"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Financial literacy is far more important than any other
                        skill. Learning about it at an early age would give your
                        child the edge to deal with real life situations.
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
                      Do I control my child's account?
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-4"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        No. The child controls the account by himself. The
                        motive of the application is to inculcate good financial
                        habits amongst the teenagers. However, the parent has
                        track of the activites of the child.
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
                  <h3 style={{ color: "whitesmoke" }}>GenMoney</h3>
                  <p style={{ color: "whitesmoke" }}>
                    India <br />
                    <strong>Email:</strong> askingnikhil@gmail.com
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
                    <li style={{ color: "black" }}>
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
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4 style={{ color: "whitesmoke" }}>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#" style={{ color: "white" }}>
                        For Parent
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#" style={{ color: "white" }}>
                        For Child
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4 style={{ color: "whitesmoke" }}>
                    Feel free to reach out to us{" "}
                  </h4>
                  <p style={{ color: "white" }}>askingnikhil@gmail.com</p>
                  <p style={{ color: "white" }}>+91-9765233031</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container footer-bottom clearfix">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>GenMoney</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by{" "}
              <a href="#" style={{ color: "whitesmoke" }}>
                GenMoney
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
    </div>
  );
};

export default LandingPage;
