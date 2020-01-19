import { ADD_USER, UPDATE_USER, CHANGE_FILTER } from '../constants';

export const addUser = (id, firstName, lastName, phone, isActive) => ({
    type: ADD_USER,
    id,
    firstName,
    lastName,
    phone,
    isActive
});

export const updateUser = (id, firstName, lastName, phone, isActive) => ({
    type: UPDATE_USER,
    id,
    firstName,
    lastName,
    phone,
    isActive
})

export const changeFilter = (activeFilter) => ({
    type: CHANGE_FILTER,
    activeFilter
});

