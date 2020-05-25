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

const reducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state;
    }
}




export default reducer