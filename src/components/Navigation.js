import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

function Nav(props) {

    const token = localStorage.getItem('token')
    const history = useHistory()

    const [ isAuthed, setAuth ] = useState()

    useEffect(() => {
      if (token) {
          let elems = document.querySelectorAll('.dropdown-trigger');
          M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
          setAuth(true)
      }
    })

    const handleLogout = (props) => {
      localStorage.removeItem('token')
      history.push("/")
      window.location.reload()
    }

    if (isAuthed) {

      return (
        <div>
          <ul id="dropdown1" className="dropdown-content teal white-text">
            <li><Link to="/plants">All Plants</Link></li>
            <li><Link to="/add">Add</Link></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo right">Plant Parenthood</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Plants</a></li>
                <li><a href="#" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          </nav>
        </div>
    )

    } else {

      return (
        <div>
          <ul id="dropdown1" className="dropdown-content teal white-text">
            <li><Link to="/plants">All Plants</Link></li>
            <li><Link to="/add">Add</Link></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo right">Plant Parenthood</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
              </ul>
            </div>
          </nav>
        </div>
    )

    }
}

export default Nav