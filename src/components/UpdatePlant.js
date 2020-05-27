import { useForm, ErrorMessage } from 'react-hook-form'
import * as yup from 'yup'
import React from 'react'

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

    const onSubmit = data => {
        console.log(data)
    }

    //

    return (
        <div className="add-plant">
            <div className="card teal darken-3">
                <h1>Update your plant</h1>
                <form className="add-plant-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input name="name" ref={register({ required: true })} />
                    {
                        errors.name && <p>Name is a required field</p>
                    }
                    <label>Species</label>
                    <input name="species" ref={register({ required: true })} />
                    {
                        errors.name && <p>Species is a required field</p>
                    }
                    <label>H20 Frequency</label>
                    <input name="h20" ref={register({ required: true })} />
                    {
                        errors.h20 && <p>H20 Frequency is a required field</p>
                    }
                    <label>Image URL</label>
                    <input name="image" ref={register({ required: true })} />
                    {
                        errors.image && <p>Image URL is a required field</p>
                    }
                    <button type="submit">
                        Add Plant
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePlant