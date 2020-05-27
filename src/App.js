import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import { Route, Switch, Link } from "react-router-dom"

import Login from './components/Login'
import Register from './components/Register'
import Nav from './components/Navigation'
import Plants from './components/Plants'

function App() {
  return (
    <div className="App">
        
        <Nav />

        <div className="container">
          <div className="to-do">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/plants" component={Plants} /> 
              {
                // should be a private route ^^^^^^^^
                // Literally only using it for testing, currently.
              }
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