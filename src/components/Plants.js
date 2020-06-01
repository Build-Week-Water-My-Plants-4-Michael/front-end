import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Plant from './Plant'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { array } from 'yup'
import { getAllPlants } from '../actions';
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';

const Plants = (props) => {
    const [ plants, setPlants ] = useState([])
    const [ results, setResults ] = useState([])
    const [ term, setTerm ] = useState("")

    const filterResults = (e) => {
        setTerm(e.target.value)
    }

    const history = useHistory();

    const handleLogout = (props) => {
        localStorage.removeItem('token')
        history.push("/")
        window.location.reload()
      }


    useEffect(() => {
        axiosWithAuth()
            .get("https://waterplants.herokuapp.com/plants")
            .then(res => {
                console.log(res.data)
                setPlants(res.data)
                setResults(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        const res = plants.filter(_plant => _plant.nickname.toLowerCase().includes(term))
        setResults(res)
    }, [term])
    
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
        <div className="all-plants">
            <h1>Plants</h1>
            <div className="row">
                <div className="input-field col s4 m4fs">
                    <input id="filter" type="text" onChange={filterResults}/>
                    <label htmlFor="filter">Filter Results</label>
                </div>
            </div>
            <div className="row">
                {results.map(plant => {
                    return (
                        <div className="col s4 m4" key={plant.id}>
                            <Plant
                                key={plant.id}
                                id={plant.id}
                                nickname={plant.nickname}
                                species={plant.species}
                                h2oFrequency={plant.h2oFrequency}
                                image={plant.image}
                        />
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    userPlant: state.userPlant
})


const mapDispatchToProps = {
    getAllPlants
}




export default connect(mapStateToProps, mapDispatchToProps)(Plants)