// In Nav.js
import './nav.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../Components/images/logo.png';
import bell from '../Components/images/bell.png';
import profile from '../Components/images/profile.png';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="center-section">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <ScrollLink
          to="service"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className={location.pathname === '/service' ? 'active' : ''}
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="contactUs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={location.pathname === '/contactus' ? 'active' : ''}
        >
          Contact Us
        </ScrollLink>
      </div>

      <div className="right-section">
        <div className="loginbtn">
          <a href="/login">Log In</a>
        </div>

        <img src={bell} alt="Logo" className="bell" />

        <img src={profile} alt="User Profile" className="profile" />
      </div>
    </nav>
  );
};

export default Nav;
