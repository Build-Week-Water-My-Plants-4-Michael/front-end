import { useForm, ErrorMessage } from 'react-hook-form'
import * as yup from 'yup'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { updatePlant } from '../actions'
import { connect } from 'react-redux'
import Plant from './Plant'

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
        props.updatePlant({
            'id': id,
            'nickname': data.name,
            'species': data.species,
            'h2oFrequency': data.h20,
            'image': data.image
        }, id)
    }

    //

    return (
        <div className="update-plant">
            <div className="card teal darken-3">
                <h1>Update plant</h1>
                <form className="add-plant-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input name="name" placeholder={plant.nickname} ref={register({ required: true })} />
                    {
                        errors.name && <p>Name is a required field</p>
                    }
                    <label>Species</label>
                    <input name="species" placeholder={plant.species}ref={register({ required: true })} />
                    {
                        errors.name && <p>Species is a required field</p>
                    }
                    <label>H20 Frequency</label>
                    <input name="h20" placeholder={plant.h2oFrequency}ref={register({ required: true })} />
                    {
                        errors.h20 && <p>H20 Frequency is a required field</p>
                    }
                    <label>Image URL</label>
                    <input name="image" placeholder={plant.image}ref={register({ required: true })} />
                    {
                        errors.image && <p>Image URL is a required field</p>
                    }
                    <button type="submit">
                        Update Plant
                    </button>
                </form>
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
        </div>
    )
}

export default connect(null, {updatePlant}) (UpdatePlant)