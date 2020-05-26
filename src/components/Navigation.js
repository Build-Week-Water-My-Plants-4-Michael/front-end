import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    

    return (
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
    )
}

export default Nav