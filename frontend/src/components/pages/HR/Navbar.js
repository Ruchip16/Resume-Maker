import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {

    const history = createBrowserHistory();

    return (
        <div>
            {/* <!-- ======= Header ======= --> */ }
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="index.html">Resume Maker</a></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Button className="getstarted scrollto" onClick={() => history.push('/')}>Home</Button></li>
                            <li><Button className="getstarted scrollto" onClick={() => history.push('/resumeBuilder')}>Resume Builder</Button></li>
                    {/* <li><Button className="getstarted scrollto" component={Link} to = "/hr">HR</Button></li> */}
                    
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}

                </div>
            </header>    
        </div>
    );
};

export default Navbar;