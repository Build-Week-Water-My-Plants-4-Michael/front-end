import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { login } from '../actions'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})
const Login = props => {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: loginSchema
    })

    let history = useHistory()

    const onSubmit = data => {     
        console.log(data)
        props.login(data)
        history.push("/")
    }

    // to try and see why we get the 401
    const sample = () => {
        axiosWithAuth()
        .get("/plants")
        .then(res => {
            console.log(res)
            //BUT YOU KNOW, LETS NOT GET HERE CUS 401 UNAUTHORIZED EVEN THOUGH THE TOKEN EXISTS :) THANKS AXIOS
        })
        .catch(err => {
            console.log(err)
        })
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
            <br/>
            <div className="card teal darken-3">
                <form className="login-form" onSubmit={handleSubmit(sample)}>
                    
                    <button type="submit">
                        Test GET /plants
                    </button>
                </form>
            </div>
        </div>

                   
                    

    )
}

export default connect(null,{login})(Login)