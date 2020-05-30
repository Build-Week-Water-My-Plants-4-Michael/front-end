import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import Plant from './Plant'

const ViewPlant = () => {

    const { id } = useParams()
    const [ plant, setPlant ] = useState([])

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
                    
    )
}

export default ViewPlant