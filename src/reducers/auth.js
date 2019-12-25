import { LOGIN, LOGOUT } from '../actions/auth'

// Reducer
var initialState = {
    currentUser: ""
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, currentUser: action.payload }
        case LOGOUT:
            return { ...state, currentUser: null }
        default:
            return state
    }
}

export default authReducer;