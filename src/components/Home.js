import React from 'react'
import Nav from './Navigation'
import { Link } from 'react-router-dom'

import Plants from './Plants'

export default function Home() {
    const token = localStorage.getItem('token')

    if (token) {
        return (
            <div className="home-main">
            <Nav/>
                <h1>Plant Parenthood</h1>
                Welcome back, user.
                <hr />
                    <div className="plantList">
                        <Plants/>
                    </div>
            </div>
        )
    } else {
        return (
            <div className="home-main">
                <Nav/>
                <h1>Plant Parenthood</h1>
                <p className="sign-me-up">Welcome! To sign up for a free account to manage your flowers, click right below!</p>
                <Link to="/register"><span className="home-sign-up"><a href="#">Sign me up!</a></span></Link>
            </div>
        )
    }
}