import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import { Route, Switch, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Water My Plants</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Sign Up</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="to-do">
            <h3>The project begins</h3>
          </div>
        </div>
    </div>
  );
}

export default App;