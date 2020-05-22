import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reducer from './reducer'

import { Provider } from 'react-redux'
import { createStore } from "redux"

<<<<<<< HEAD

=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 2f90c3d5a41425526813bf54401fc46c46295e19



const store = createStore(reducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
