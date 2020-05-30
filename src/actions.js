import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

export const CREATE_USER_START = 'CREATE_USER_START'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const ADD_PLANT_START = 'ADD_PLANT_START'
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS'
export const ADD_PLANT_FAILED = 'ADD_PLANT_FAILED'

export const GET_PLANT_START = 'GET_PLANT_START'
export const GET_PLANT_SUCCESS = 'GET_PLANT_SUCCESS'
export const GET_PLANT_FAILED = 'GET_PLANT_FAILED'

export const UPDATE_PLANT_START = 'UPDATE_PLANT_START'
export const UPDATE_PLANT_SUCCESS = 'UPDATE_PLANT_SUCCESS'
export const UPDATE_PLANT_FAILED = 'UPDATE_PLANT_FAILED'
 
export const DELETE_PLANT_START = 'DELETE_PLANT_START'
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS'
export const DELETE_PLANT_FAILED = 'DELETE_PLANT_FAILED'

export const PLANT_ID ='PLANT_ID'

export const createUser = (creds) => {
    return(dispatch) => {
        dispatch({type: CREATE_USER_START})

        return axios.post('https://waterplants.herokuapp.com/register', creds) //insert end point for creating a new user account
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            dispatch({type: CREATE_USER_SUCCESS})
        })
        .catch((err) => {
            const payload = err.response? err.response.data : err
            dispatch({type: CREATE_USER_FAILED, payload})
        })
    }
}


export const login = (creds) => {
return(dispatch) => {
    dispatch({type: LOGIN_START})
    return axios.post('https://waterplants.herokuapp.com/login', creds) //insert end point for creating a new user account
     .then((res) => {
         localStorage.setItem('token', res.data.token)
         dispatch({type: LOGIN_SUCCESS, payload: res.data})
     })
     .catch((err) => {
         const payload = err.response ? err.response.data : err
         dispatch({ type: LOGIN_FAILED, payload})
     })
}
}


export const addPlant = (payload) => {
return(dispatch) => {
    dispatch({type: ADD_PLANT_START})

    const headers = {
        Authorization: localStorage.getItem('token'),
    }
    console.log(payload)

    axios.post('https://waterplants.herokuapp.com/plants', payload, {headers})
    .then((res) => {
        dispatch ({type: ADD_PLANT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: ADD_PLANT_FAILED, payload: err})
    })
}
}


export const getPlant = (id) => {
    return (dispatch) => {
        dispatch ({ type: GET_PLANT_START })

        const headers = {
            Authorzation: localStorage.getItem('token'),
        }
        
        axios.get(`https://waterplants.herokuapp.com/plants/${id}`, {headers}) 
        .then((res) => {
            dispatch({ type: GET_PLANT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ rtpe: GET_PLANT_FAILED, payload: err.response.data })
        })
    }
}


export const updatePlant = (payload, id) => {
    return(dispatch) => {
        dispatch({ type: UPDATE_PLANT_START })

        const headers = {
            Authorization: localStorage.getItem('token'),
        }
        console.log(payload)
        axios.put(`https://waterplants.herokuapp.com/plants/${id}`, payload, { headers }) 
        .then((res) => {
            dispatch({ type: UPDATE_PLANT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: UPDATE_PLANT_FAILED, payload: err.response.data })
        })
    }
}



export const deletePlant = (id) => {
    return(dispatch) => {
        dispatch({ type: DELETE_PLANT_START })

        const headers = {
            Authorization : localStorage.getItem('token'),
        }

        console.log("delete")
        axios.delete(`https://waterplants.herokuapp.com/plants/${id}`, { headers })
        .then((res) => {
            console.log(res)
            dispatch({ type: DELETE_PLANT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ tyoe: DELETE_PLANT_FAILED, payload: err.response })
        })
    }
}


export const plantID = (id) => {
    return{
        type: PLANT_ID,
        payload: id
    }
}