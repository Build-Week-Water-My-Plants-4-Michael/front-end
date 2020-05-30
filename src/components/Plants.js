import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Plant from './Plant'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

const Plants = () => {

    const [ plants, setPlants ] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("https://waterplants.herokuapp.com/plants")
            .then(res => {
                console.log(res.data)
                setPlants(res.data) // can't do much here unless i know what the structure of the res is, res.data.results as a placeholder i guess?
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // This is gonna throw an error for trying to map undefined, unless the axios.get() goes through.
    // Basically, until we can have constant authorization throughout the app, I won't be able to proceed.
    // Hopefully we can get through some stuff today. :)

    return (
        <div className="row">
            {plants.map(plant => {
                return (
                    <div className="col s4 m4">
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
    )
}

export default Plants