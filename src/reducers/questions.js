import {
    ADD_QUESTION,
    ADD_QUESTION_ANSWER,
    RECEIVE_QUESTIONS,
    REMOVE_QUESTION,
    REMOVE_QUESTION_ANSWER
} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case REMOVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.filter(
                            (userId) => userId !== action.authedUser
                        )
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.questionObj.id]: {
                    ...action.questionObj
                }
            }
        case REMOVE_QUESTION:
            return {}
        default:
            return state
    }
}