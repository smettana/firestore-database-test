import * as firebase from "firebase";
import { FETCH_USERS, ADD_USER, UPDATE_USER, CHANGE_FILTER } from '../constants';
import { usersRef } from "../fbconfig";

export const fetchUsers = () => async dispatch => {
    usersRef.on("value", snapshot => {
        dispatch({
            type: FETCH_USERS,
            payload: snapshot.val() === null || undefined ? [] : Object.values(snapshot.val())
        });
    });
};

// export const addUser = (id, firstName, lastName, phone, isActive) => ({
//     type: ADD_USER,
//     id,
//     firstName,
//     lastName,
//     phone,
//     isActive
// });

// export const updateUser = (id, firstName, lastName, phone, isActive) => ({
//     type: UPDATE_USER,
//     id,
//     firstName,
//     lastName,
//     phone,
//     isActive
// });


export const addUser = (newUser) => async dispatch => {
    usersRef.child(newUser.id).set(newUser)
    // usersRef.on('child_added', (snapshot) => {
    //     const users = Object.values(snapshot.val());
    //     const usersLength = users.length;
    //     const lastItem = users[usersLength-1];
    //     dispatch({
    //         type: ADD_USER,
    //         payload: {}
    //     });
    // });
};

export const updateUser = (newInfo) => async dispatch => {
    const {id, firstName, lastName, phone, isActive} = newInfo;
    let userInfo = firebase.database().ref(`users/${newInfo.id}`);
    userInfo.update({id, firstName, lastName, phone, isActive});
};


export const changeFilter = (activeFilter) => ({
    type: CHANGE_FILTER,
    activeFilter
});

