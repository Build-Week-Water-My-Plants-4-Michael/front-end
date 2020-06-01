import React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import * as yup from "yup"
import axios from 'axios'
import { createUser } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const registerSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    phoneNumber: yup.number().required(),
})

export function Register(props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: registerSchema
    })

    const onSubmit = (data) => {
        axios.post("https://waterplants.herokuapp.com/register", data)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="register-div">
            <div className="card teal darken-3">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Register</h1>
                    <label>Username</label>
                    <input name="username" className="username" ref={register({ required: "Username is a required field", minLength: {value: 6, message: "Username must be 6 or more characters"} })} />
                    {
                        errors.username && <p>{errors.username.message}</p>
                    }
                    <label>Password</label>
                    <input name="password" className="password" type="password" ref={register({ required: "Password is a required field", minLength: {value: 6, message: "Password must be 6 characters or more"} })}/>
                    {
                        errors.password && <p>{errors.password.message}</p>
                    }
                    <label>Phone Number</label>
                    <input name="phoneNumber" className="phone-number" ref={register({ required: "Phone Number is a required field" })} />
                    {
                        errors.phoneNumber && <p>Must be a number</p>
                    }
                    <button type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        isLoading: state.isLoading,
        error: state.error
    }
}

const mapDispatchToProps = {
    createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)


