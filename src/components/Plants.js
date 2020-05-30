import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Plant from './Plant'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { array } from 'yup'

const Plants = (props) => {

    const [ plants, setPlants ] = useState([])
    const [ results, setResults ] = useState("")

    const filterResults = (e) => {
        setResults(e.target.value)
    }

    useEffect(() => {
        axiosWithAuth()
            .get("https://waterplants.herokuapp.com/plants")
            .then(res => {
                console.log(res.data)
                const _res = res.data.filter(plant => plant.nickname.toLowerCase().includes(results))
                setPlants(_res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [results])

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