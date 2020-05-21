import userActionTypes from './userActionTypes';
const initialState = {
    currentUser: ["initial reducer redux"]
};

function userReducer(state = initialState, action) {
    if (action.type === userActionTypes.SET_CURRENT_USER) {
        return (
            Object.assign({}, state, {
                currentUser: state.currentUser.concat(action.payload)
            }));
    } else return { ...state };
};

export default userReducer;