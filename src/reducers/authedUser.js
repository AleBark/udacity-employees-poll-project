import {
    LOG_AUTHED_USER_OUT,
    REMOVE_USER_QUESTION_ANSWER,
    SET_AUTHED_USER
} from "../actions/authedUser";
import {SAVE_USER_QUESTION_ANSWER} from "../actions/authedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                ...action.authedUser
            };
        case LOG_AUTHED_USER_OUT:
            return {};
        case SAVE_USER_QUESTION_ANSWER:
            return {
                ...state,
                answers: {
                   ...state.answers,
                   [action.qid]: action.answer
                }
            }
        case REMOVE_USER_QUESTION_ANSWER:
            const updatedAnswers = {...state.answers};
            delete updatedAnswers[action.qid]

            return {
                ...state,
                answers: updatedAnswers
            }
        default:
            return state;
    }
}