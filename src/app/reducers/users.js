import { FETCH_USERS, ADD_USER, UPDATE_USER } from '../constants';

const USERS = [

] 


const users = (state = [], action) => {
    switch(action.type){
        case FETCH_USERS:
            return [...action.payload];
            break;  
        default:
            return state;
    }
}


export default users;