import React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import * as yup from "yup"
//import { connect } from 'react-redux'

const registerSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    phoneNumber: yup.number().required(),
})

export default function Register(props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: registerSchema
    })

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className="register-div">
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
                <input name="phoneNumber" className="phone-number" ref={register({ required: "Phone Number is a required field", minLength: {value: 10, message: "Must be 10 numbers in length"}, maxLength: {value: 10, message: "Must be 10 numbers in length"} })} />
                {
                    errors.phoneNumber && <p>{errors.phoneNumber.message}</p>
                }
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}