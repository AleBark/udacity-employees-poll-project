import {saveQuestion as saveQuestionAPI, saveQuestionAnswer as saveQuestionAnswerAPI} from "../api/api";
import {removeAuthedUserQuestionAnswer, saveAuthedUserQuestion, saveAuthedUserQuestionAnswer} from "./authedUser";
import {removeUserQuestionAnswer, saveUserQuestionAnswer} from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION_ANSWER = "REMOVE_QUESTION_ANSWER";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function saveQuestionAnswer({authedUser, qid, answer, users}) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
        users
    };
}

export function removeQuestionAnswer({authedUser, qid, answer, users}) {
    return {
        type: REMOVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
        users
    };
}

export function saveQuestion(questionObj) {
    return {
        type: ADD_QUESTION,
        questionObj,
    };
}

export function handleSaveQuestion(info) {
    return (dispatch) => {
        //show loading
        return saveQuestionAPI(info)
            .then((questionObj) => {
                dispatch(saveQuestion(questionObj))
                dispatch(saveAuthedUserQuestion(questionObj))
                //remove loading
            })
            .catch((e) => {
                //remove loading
                alert("The was an error selecting the answer. Try again." + e);
            }
        );
    }
    //navigate home
}

export function handleQuestionAnswer(info) {
    return (dispatch) => {

        dispatch(saveQuestionAnswer(info));
        dispatch(saveAuthedUserQuestionAnswer(info));
        dispatch(saveUserQuestionAnswer(info));

        return saveQuestionAnswerAPI(info).catch((e) => {
            dispatch(removeQuestionAnswer(info));
            dispatch(removeAuthedUserQuestionAnswer(info));
            dispatch(removeUserQuestionAnswer(info));
            alert("The was an error selecting the answer. Try again." + e);
        });
    };
}