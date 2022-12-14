import {
    ADD_USER_QUESTION,
    ADD_USER_QUESTION_ANSWER,
    RECEIVE_USERS,
    REMOVE_USER_QUESTION_ANSWER
} from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case REMOVE_USER_QUESTION_ANSWER:
            const updatedAnswers = {...state[action.authedUser].answers};
            delete updatedAnswers[action.qid]

            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: updatedAnswers
                }
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions : state[action.authedUser].questions.concat(action.questionObj.id)
                }
            }
        default:
            return state
    }
}