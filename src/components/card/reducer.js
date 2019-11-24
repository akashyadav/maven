import {GET_USER_DATA} from './action';


export const UserData = (state={}, action) => {
    switch(action.type){
        case GET_USER_DATA:
            return{...state, userData: action.payload}
        default:
            return state;    
    }
}
