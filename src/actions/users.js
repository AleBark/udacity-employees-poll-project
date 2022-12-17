export const ADD_USER_QUESTION_ANSWER = "ADD_USER_QUESTION_ANSWER";
export const REMOVE_USER_QUESTION_ANSWER = "REMOVE_USERS_QUESTION_ANSWER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function saveUserQuestionAnswer({ authedUser, qid, answer }){
    return {
        type: ADD_USER_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function removeUserQuestionAnswer({ authedUser, qid, answer }){
    return {
        type: REMOVE_USER_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function saveUserQuestion({authedUser, questionObj}){
    return {
        type: ADD_USER_QUESTION,
        authedUser,
        questionObj
    }
}