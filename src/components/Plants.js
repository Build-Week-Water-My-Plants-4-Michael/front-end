import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Plant from './Plant'

const Plants = (props) => {

    const { plants, setPlants } = useState([])

    useEffect(() => {
        axios
            .get("https://water-plants-be.herokuapp.com/plants")
            .then(res => {
                console.log(res)
                setPlants(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    })

    // This is gonna throw an error for trying to map undefined, unless the axios.get() goes through.
    // Basically, until we can have constant authorization throughout the app, I won't be able to proceed.
    // Hopefully we can get through some stuff today. :)

    return (
        <div className="plants">
            {plants.map(plant => {
                return (
                    <Plant
                        key={plant.id}
                        id={plant.id}
                        name={plant.name}
                        species={plant.species}
                        h20Frequency={plant.h20Frequency}
                        image={plant.image}
                    />
                )
            })}
        </div>
    )
}

export default Plants