// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  '../style.css';

const Header = () => {
  return (
    <nav className={"bg-white navbar navbar-expand-sm bg-light navbar-dark py-3"}>
      <div className='container w-100 px-4'>
        <div className='col-4'>
          <Link to={'/'} className="navbar-brand" >
            <img className='logo-brand' src={require('../images/HawkGlide_logo.png')} style={{ width: '360px' }} alt="Your Logo"/>
          </Link>
        </div>
        <div className='col-8 d-flex justify-content-end' >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent : 'end'}}>
            <ul className='unstyled list-unstyled d-flex mb-0 py-1 align-items-center'>
              <li className='responsive-menu-data'>
                <Link to={'/'} className={'p-2 menu-item px-3 text-black fs-6 text-decoration-none d-block branding1 red-hover'}>Our Product</Link>
              </li>
              <li className='responsive-menu-data'>
                <Link to={'/'} className={'p-2 menu-item px-3 text-black fs-6 text-decoration-none d-block branding1 red-hover'}>Pricing</Link>
              </li>
              <li className='responsive-menu-data'>
                <Link to={'/'} className={'p-2 menu-item px-3 text-black fs-6 text-decoration-none d-block branding1 red-hover'}>Resources</Link>
              </li>
              <li className='responsive-menu-data'>
                <Link to={'/'} className={'p-2 menu-item px-3 text-black fs-6 text-decoration-none d-block branding1 red-hover'}>Signin</Link>
              </li>
              <li className='responsive-menu-data'>
                <Link style={{backgroundColor : '#ff914d', color : '#fff' , borderRadius : 35}} to={'/'} className={'button-branding-1 menu-item text-black fs-6 text-decoration-none d-block branding1 red-hover border-rounded font-weight-bold'}>Get Started for Free</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
