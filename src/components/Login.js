import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { login } from '../actions';

const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})
const Login = props => {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: loginSchema
    })
    const onSubmit = data => {     
        console.log(data)
        props.login(data)
    }
    return (
        <div className="login-div">
            <div className="card teal darken-3">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <label>Username</label>
                    <input name="username" className="username" ref={register({ required: true })}/>
                    {
                        errors.username && <p>username is a required field</p>
                    }
                    <label>Password</label>
                    <input name="password" className="password" type="password" ref={register({ required: true, minLength: 6 })} />
                    {
                        errors.password && <p>password is a required field</p>
                    }
                    <button type="submit">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default connect(null,{login})(Login)