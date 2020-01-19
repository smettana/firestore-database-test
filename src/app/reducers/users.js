import { ADD_USER, UPDATE_USER } from '../constants';

const USERS = [
    {
        id: 44444,
        firstName: 'Sasha',
        lastName: 'Bikovsky',
        phone: '384512313',
        isActive: true
    }
] 

const users = (state = USERS, {id, firstName, lastName, phone, isActive, type}) => {
    switch(type){
        case ADD_USER: 
            return [
                ...state, {
                    id,
                    firstName,
                    lastName,
                    phone,
                    isActive
                }
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
        default:
            return state;
    }
}

export default users;