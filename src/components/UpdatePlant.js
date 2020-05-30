import { useForm, ErrorMessage } from 'react-hook-form'
import * as yup from 'yup'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

const schema = yup.object().shape({
    name: yup.string().required(),
    species: yup.string().required(),
    h20: yup.string().required(),
    image: yup.string().url("Must be a valid URL to an image").required()
})

const UpdatePlant = props => {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    })

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

    const onSubmit = data => {
        console.log(data)
    }

    //

    return (
        <div className="add-plant">
            <div className="card teal darken-3">
                <h1>Update plant</h1>
                <form className="add-plant-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input name="name" value={plant.nickname} ref={register({ required: true })} />
                    {
                        errors.name && <p>Name is a required field</p>
                    }
                    <label>Species</label>
                    <input name="species" value={plant.species}ref={register({ required: true })} />
                    {
                        errors.name && <p>Species is a required field</p>
                    }
                    <label>H20 Frequency</label>
                    <input name="h20" value={plant.h2oFrequency}ref={register({ required: true })} />
                    {
                        errors.h20 && <p>H20 Frequency is a required field</p>
                    }
                    <label>Image URL</label>
                    <input name="image" value={plant.image}ref={register({ required: true })} />
                    {
                        errors.image && <p>Image URL is a required field</p>
                    }
                    <button type="submit">
                        Update Plant
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePlant