import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Busqueda from '../pages/Busqueda';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Router>
          <Switch>
              <Route exact path='/busqueda' component={Busqueda} />
              <Route path='/' component={Home} />
              <Redirect to='/' />
          </Switch>
      </Router>
    )
}

export default AppRouter
