import { FETCH_USERS, ADD_USER, UPDATE_USER } from '../constants';

const USERS = [

] 

// const users = (state = [], {id, firstName, lastName, phone, isActive, type}) => {
//     switch(type){
//         case FETCH_USERS:
//             return [];
//             break;
//         case ADD_USER: 
//             return [
//                 ...state, {
//                     id,
//                     firstName,
//                     lastName,
//                     phone,
//                     isActive
//                 }
//             ];
//             break;
//         case UPDATE_USER:
//             return state = state.map(user => {
//                 if(user.id === id){
//                     return {
//                         id,
//                         firstName,
//                         lastName,
//                         phone,
//                         isActive
//                     }
//                 }else{
//                     return user
//                 }
//             });
//             break;   
//         default:
//             return state;
//     }
// }

const users = (state = [], action) => {
    switch(action.type){
        case FETCH_USERS:
            return [...action.payload];
            break;
        case ADD_USER: 
        // console.log([
        //     ...state, action.payload
        // ])
            return [
                ...state, action.payload
            ];
            break;
        case UPDATE_USER:
            return state = state.map(user => {
                if(user.id === id){
                    return {
                        id,
                        firstName,
                        lastName,
                        phone,
                        isActive
                    }
                }else{
                    return user
                }
            });
            break;   
        default:
            return state;
    }
}


export default users;