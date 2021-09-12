import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { Redirect } from 'react-router';
import { Router } from 'react-router-dom';

const Navbar = () => {
    
    const history = useHistory();
    
    return (
        <div>
            {/* <!-- ======= Header ======= --> */ }
            <Router>

            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="/">Resume Maker</a></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Button className="getstarted scrollto" onClick={() => {history.push("/");}}>Home</Button></li>
                    {/* <li><Button className="getstarted scrollto" onClick={() => {window.location.href = "/"}}>Home</Button></li> */}
                    {/* <li><a href="/"> <Button className="getstarted scrollto" > Home</Button> </a> </li> */}

                    {/* <li><Button className="getstarted scrollto" onClick={() => history.push('/resumeBuilder')}>Resume Builder</Button></li> */}
                    <li><Button className="getstarted scrollto" onClick={() => {window.location.href = "/resumeBuilder"}}>Resume Builder</Button></li>
                    {/* <li><Button className="getstarted scrollto" component={Link} to = "/hr">HR</Button></li> */}
                    
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}

                </div>
            </header>    
            </Router>
        </div>
  

  );
};

export default Navbar;
