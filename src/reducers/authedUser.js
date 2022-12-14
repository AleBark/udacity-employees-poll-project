import {LOG_AUTHED_USER_OUT, SET_AUTHED_USER} from "../actions/authedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                ...action.authedUser
            };
        case LOG_AUTHED_USER_OUT:
            return {};

        default:
            return state;
    }
}