import {_saveQuestionAnswer} from "../api/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function saveQuestionAnswer({ authedUser, qid, answer, users }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
        users
    };
}

export function handleQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(saveQuestionAnswer(info));

        return _saveQuestionAnswer(info).catch((e) => {
            dispatch(saveQuestionAnswer(info));
            alert("The was an error selecting the answer. Try again.".e);
        });
    };
}