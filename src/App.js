import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch,Router}from 'react-router-dom'
import SignIn from './modules/SignIn';
import SignUp from './modules/SignUp';
import UserHome from './modules/UserHome';
import history from './history'; 
import Album from './modules/Album';
import { AppBar } from '@material-ui/core';

function App() {
  return (
    <div className="App">
    {/* <AppBar/> */}
      <Router history={history}>
   <Switch>
    <Route index={1} exact={true} component={SignIn} path={"/SignIn"}/>
    <Route index={2} exact={true} component={SignUp} path={"/SignUp"}/>
    <Route index={3} exact={true} component={UserHome} path={"/UserHome"}/>
    <Route index={4} exact={true} component={Album} path={"/Album"}/>
  </Switch>
 </Router>
    </div>
  );
}

export default App;

