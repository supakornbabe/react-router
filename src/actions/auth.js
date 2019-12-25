export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

// Action Types
const _logIn = (response) => ({ type: LOGIN, payload: response });
const _logOut = () => ({ type: LOGOUT });

export const logIn = (data) => {
    return (dispatch) => {
        return dispatch(_logIn(data));
    };
};

export const logOut = () => {
    return (dispatch) => {
        return dispatch(_logOut());
    };
};
