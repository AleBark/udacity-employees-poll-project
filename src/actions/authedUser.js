export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOG_AUTHED_USER_OUT = "LOG_AUTHED_USER_OUT";

export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser,
    }
}

export function logAuthedUserOut() {
    return {
        type: LOG_AUTHED_USER_OUT,
        authedUser: null,
    }
}