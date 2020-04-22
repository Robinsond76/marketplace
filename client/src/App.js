import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import About from './components/pages/About';
import Home from './components/pages/Home';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Import Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
        ;
      </Fragment>
    </Router>
  );
};

export default App;
