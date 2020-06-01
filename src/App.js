import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import { Route, Switch } from "react-router-dom"

import Login from './components/Login'
import Register from './components/Register'
import Nav from './components/Navigation'
import Plants from './components/Plants'
import ViewPlant from './components/ViewPlant'
import AddPlant from './components/AddPlant'
import Home from './components/Home'
import UpdatePlant from './components/UpdatePlant'

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
              <Route path='/add' component={AddPlant} />
              <Route path='/update/:id'>
                <UpdatePlant />
              </Route>
              <Route path="/view/:id">
                <ViewPlant />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;