import React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import * as yup from 'yup'
//import { connect } from 'react-redux'

const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})

export default function Login(props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: loginSchema
    })

    const onSubmit = (data) => {
        console.log(data)
        console.log(errors)
    }


    return (
        <div className="login-div">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <label>Username</label>
                <input name="username" className="username" ref={() => register({ name: 'username', required: true })}/>
                {
                    errors.username && errors.username.type === 'required' && (<p>This is a required field</p>)
                }
                <label>Password</label>
                <input name="password" className="password" type="password" ref={() => register({ name: 'password', required: true, minLength: 6 })} />
                {
                    errors.password && errors.password.type === 'required' && (<p>This is a required field</p>)
                }
                <button>
                    Log in
                </button>
            </form>
        </div>
    )
}