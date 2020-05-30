import React from 'react'
import { Link } from 'react-router-dom'

import Plants from './Plants'

export default function Home() {
    const token = localStorage.getItem('token')

    if (token) {
        return (
            <div className="home-main">
                <h1>Plant Parenthood</h1>
                Welcome back, user.
                <hr />
                    <span className="left">
                        Plants
                    </span><br />
                    <div className="plantList">
                        <Plants />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="home-main">
                <h1>Plant Parenthood</h1>
                <Link to="/register"><span className="home-sign-up"><a href="#">Sign me up!</a></span></Link>
            </div>
        )
    }
}