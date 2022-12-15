import {_saveQuestionAnswer} from "../api/_DATA";
import {removeUserQuestionAnswer, saveUserQuestionAnswer} from "./authedUser";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION_ANSWER = "REMOVE_QUESTION_ANSWER";
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

export function removeQuestionAnswer ({ authedUser, qid, answer, users }){
    return {
        type: REMOVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
        users
    };
}

export function handleQuestionAnswer(info) {
    return (dispatch) => {

        dispatch(saveQuestionAnswer(info));
        dispatch(saveUserQuestionAnswer(info));

        return _saveQuestionAnswer(info).catch((e) => {
            dispatch(removeQuestionAnswer(info));
            dispatch(removeUserQuestionAnswer(info));
            alert("The was an error selecting the answer. Try again.".e);
        });
    };
}