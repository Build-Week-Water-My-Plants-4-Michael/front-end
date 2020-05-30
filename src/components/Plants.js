import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Plant from './Plant'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { array } from 'yup'

const Plants = (props) => {

    const [ plants, setPlants ] = useState([])
    const [ allPlants, setAll ] = useState([])
    let filtered = []

    useEffect(() => {
        axiosWithAuth()
            .get("https://waterplants.herokuapp.com/plants")
            .then(res => {
                console.log(res.data)
                setPlants(res.data)
                setAll(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const filterResults = (e) => {
        console.log(e.target.value)
        plants.forEach((el) => {
            if (el.nickname.toLowerCase().includes(e.target.value.toLowerCase())) {
                console.log(el.nickname)
                if (!filtered.includes(el)) {
                    filtered.push(el)
                }
                console.log(filtered)
            } else {
                filtered.splice(el)
            }
        })
        setPlants(filtered)
        console.log(e.target.value.length)
        if (e.target.value.length == 0) {
            setPlants(allPlants)
        }
    }

    return (
        <div className="all-plants">
            <h1>Plants</h1>
            <div className="row">
                <div className="input-field col s4 m4fs">
                    <input id="filter" type="text" onChange={filterResults}/>
                    <label htmlFor="filter">Filter Results</label>
                </div>
            </div>
            <div className="row">
                {plants.map(plant => {
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
    )
}

export default Plants