import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import { Route, Switch, Link } from "react-router-dom"

import Login from './components/Login'
import Register from './components/Register'
import Nav from './components/Navigation'

function App() {
  return (
    <div className="App">
        
        <Nav />

        <div className="container">
          <div className="to-do">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/plants">

              </Route>
              <Route path="/">
                <div className="home-main">
                  <h1>Plant Parenthood</h1>
                  <Link to="/register"><span className="home-sign-up"><a href="#">Sign me up!</a></span></Link>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;