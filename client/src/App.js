import React, { useEffect, Fragment } from 'react';
import Navbar from './components/layout/Navbar.js';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Import Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar />
      <div className='container'>My App</div>;
    </Fragment>
  );
};

export default App;
