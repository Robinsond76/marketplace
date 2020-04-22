import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='teal darken-4'>
        <div className='container'>
          <div class='nav-wrapper'>
            <a href='/' class='brand-logo'>
              Marketplace
            </a>
            <a href='#!' data-target='mobile-menu' class='sidenav-trigger'>
              <i class='material-icons'>menu</i>
            </a>
            <ul class='right hide-on-med-and-down'>
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

      <ul class='sidenav' id='mobile-menu'>
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
