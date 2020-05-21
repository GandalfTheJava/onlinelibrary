import userActionTypes from './userActionTypes';

export function setUser(payload) {
    return { type: userActionTypes.SET_CURRENT_USER, payload }
};