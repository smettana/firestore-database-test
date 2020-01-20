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

export const addUser = (newUser) => async dispatch => {
    usersRef.child(newUser.id).set(newUser)
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

