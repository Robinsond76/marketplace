import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='teal darken-4'>
        <div className='container'>
          <div className='nav-wrapper'>
            <a href='/' className='brand-logo'>
              Marketplace
            </a>
            <a href='#!' data-target='mobile-menu' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <a
                  className='btn waves-effect green btn-small'
                  href='/placard/new'
                >
                  Create Ad
                </a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='#!'>Login</a>
              </li>
              <li>
                <a href='#!'>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-menu'>
        <li>
          <a href='/placard/new'>Create Ad</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='#!'>Login</a>
        </li>
        <li>
          <a href='#!'>Register</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
