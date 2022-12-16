export const SAVE_AUTHED_USER_QUESTION_ANSWER = "SAVE_AUTHED_USER_QUESTION_ANSWER";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOG_AUTHED_USER_OUT = "LOG_AUTHED_USER_OUT";
export const REMOVE_AUTHED_USER_QUESTION_ANSWER = "REMOVE_AUTHED_USER_QUESTION_ANSWER";

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

export function removeAuthedUserQuestionAnswer({ authedUser, qid, answer }){
    return {
        type: REMOVE_AUTHED_USER_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function saveAuthedUserQuestionAnswer({ authedUser, qid, answer }){
    return {
        type: SAVE_AUTHED_USER_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}