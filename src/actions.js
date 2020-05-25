import { axiosWithAuth } from "./axiosWithAuth/axiosWithAuth"

const CREATE_USER_START = 'CREATE_USER_START'
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const CREATE_USER_FAILED = 'CREATE_USER_FAILED'

const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILED = 'LOGIN_FAILED'

const GET_ACCOUNT_START = 'GET_DATA_START'
const GET_ACCOUNT_SUCCESS = 'GET_DATA_SUCCESS'
const GET_ACCOUNT_FAILED = 'GET_DATA_FAILED'

const ADD_PLANT_START = 'ADD_PLANT_START'
const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS'
const ADD_PLANT_FAILED = 'ADD_PLANT_FAILED'

const GET_PLANT_START = 'GET_PLANT_START'
const GET_PLANT_SUCCESS = 'GET_PLANT_SUCCESS'
const GET_PLANT_FAILED = 'GET_PLANT_FAILED'

const UPDATE_PLANT_START = 'UPDATE_PLANT_START'
const UPDATE_PLANT_SUCCESS = 'UPDATE_PLANT_SUCCESS'
const UPDATE_PLANT_FAILED = 'UPDATE_PLANT_FAILED'

const DELETE_PLANT_START = 'DELETE_PLANT_START'
const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS'
const DELETE_PLANT_FAILED = 'DELETE_PLANT_FAILED'

const PLANT_ID ='PLANT_ID'




const createUser = (username, password) => {
    return(dispatch) => {
        dispatch({type: CREATE_USER_START})

        return axios.post('', {username, password}) //insert end point for creating a new user account
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            dispatch({type: CREAT_USER_SUCCESS})
        })
        .catch((err) => {
            const payload = err.response? err.response.data : err
            dispatch({type: CREATE_USER_FAILED, payload})
        })
    }
}


const login = (username, password) => {
return(dispatch) => {
    dispatch({type: LOGIN_START})
    return axios.post('', {username, password}) //insert end point for creating a new user account
     .then((res) => {
         localStorage.setItem('token', res.data.token)
     })
     .catch((err) => {
         const payload = err.response ? err.response.data : err
         dispatch({ type: LOGIN_FAILED, payload})
     })
}
}

const getAccount = () => {
    return(dispatch) => {
        dispatch({type: GET_ACCOUNT_START})

        const headers = {
            Authorization: localStorage.getITem('token'),
        }

        axios.get('', {headers}) //insert URL
        .then((res) => {
            dispatch ({type: GET_ACCOUNT_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: GET_ACCOUNT_FAILED, payload: err.response.data})
        })
    }
}

const addPlant = (payload) => {
return(dispatch) => {
    dispatch({type: ADD_PLANT_START})

    const headers = {
        Authorization: localStorage.getItem('token'),
    }
    console.log(payload)

    axios.post('', payload, {headers}) //insert URL
    .then((res) => {
        dispatch ({type: ADD_PLANT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: ADD_PLANT_FAILED, payload: err})
    })
}
}


const getPlant = (id) => {
    return (dispatch) => {
        dispatch ({ type: GET_PLANT_START })

        const headers = {
            Authorzation: localStorage.getItem('token'),
        }
        
        axios.get('', {headers}) //insert URL
        .then((res) => {
            dispatch({ type: GET_PLANT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ rtpe: GET_PLANT_FAILED, payload: err.response.data })
        })
    }
}


const updatePLant = (payload, id) => {
    return(dispatch) => {
        dispatch({ type: UPDATE_PLANT_START })

        const headers = {
            Authorization: localStorage.getItem('token'),
        }
        console.log(payload)
        axios.put('', payload, { headers }) //inset URL
        .then((res) => {
            dispatch({ type: UPDATE_PLANT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: UPDATE_PLANT_FAILED })
        })
    }
}



const deletePlant = (id) => {
    return(dispatch) => {
        dispatch({ type: DELETE_PLANT_START })

        const headers = {
            Authorization : localStorage.getItem('token'),
        }

        axios.delete('', { headers }) //insert URL
        .then((res) => {
            console.log(res)
            dispatch({ type: DELETE_PLANT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ tyoe: DELETE_PLANT_FAILED, payload: err.response })
        })
    }
}


const plantID = () => {
    return{
        type: PLANT_ID,
        payload: id
    }
}