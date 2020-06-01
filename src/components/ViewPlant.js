import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import Plant from './Plant'

const ViewPlant = () => {

    const { id } = useParams()
    const [ plant, setPlant ] = useState([])

const history = useHistory()

const handleLogout = (props) => {
    localStorage.removeItem('token')
    history.push("/")
    window.location.reload()
  }

    useEffect(() => {
        axiosWithAuth()
            .get(`https://waterplants.herokuapp.com/plants/${id}`)
            .then(res => {
                console.log(res.data)
                setPlant(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
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
        <div className="plants row">
            <div className="col s8 m8 offset-s2 offset-m2">
                <Plant
                    key={plant.id}
                    id={plant.id}
                    nickname={plant.nickname}
                    species={plant.species}
                    h2oFrequency={plant.h2oFrequency}
                    image={plant.image}
                />
            </div>
        </div>
                    </>
    )
}

export default ViewPlant