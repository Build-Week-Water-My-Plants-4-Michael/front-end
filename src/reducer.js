import{
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    GET_ACCOUNT_START,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_FAILED,
    ADD_PLANT_START,
    ADD_PLANT_SUCCESS,
    ADD_PLANT_FAILED,
    GET_PLANT_START,
    GET_PLANT_SUCCESS,
    GET_PLANT_FAILED,
    UPDATE_PLANT_START,
    UPDATE_PLANT_SUCCESS,
    UPDATE_PLANT_FAILED,
    PLANT_ID,
} from './actions'


const initialState = {
    isLoading: false,
    error: null,
    userData: [],
    userPlant: {},
    plantChange: ''
}


const reducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state;

            case CREATE_USER_START:{
                return{
                    ...state,
                    isLoading: true,
                }
            }

            case CREATE_USER_SUCCES:{
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error:null,
                }
            }
            case CREATE_USER_FAILED: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error:action.payload.error
                }
            }
            case LOGIN_START: {
                return {
                    ...state,
                    isLoading: true,
                }
            }
            case LOGIN_SUCCESS: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: null,
                }
            }
            case LOGIN_FAILED: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: action.payload.error
                }
            }
            case GET_ACCOUNT_START: {
                return{
                    ...state,
                    isLoading: true,
                }
            }
            case GET_ACCOUNT_SUCCESS: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error:null,
                    userData: action.payload
                }
            }
            case GET_ACCOUNT_FAILED: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: action.payload.error
                }
            }
            case ADD_PLANT_START: {
                return {
                    ...state,
                    isLoading: true,
                }
            }
            case ADD_PLANT_SUCCESS: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: null,
                    plantChange: action.payload
                }
            }
            case ADD_PLANT_FAILED: {
                console.log(action.payload)
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload.error
                }
            }
            case UPDATE_PLANT_START: {
                return {
                    ...state,
                    isLoading: true,
                }
            }
            case UPDATE_PLANT_SUCCESS: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: null,
                    plantChange: action.payload
                }
            }
            case UPDATE_PLANT_FAILED: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: action.payload.error
                }
            }
            case GET_PLANT_START: {
                return {
                    ...state,
                    isLoading: true,
                }
            }
            case GET_PLANT_SUCCESS: {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: null,
                    userPlant: action.payload
                }
            }
            case GET_PLANT_FAILED: {
                console.log(aciton.payload)
                return{
                    ...state,
                    isLoading: false,
                    error: action.payload.error
                }
            }
    }
}
        





export default reducer