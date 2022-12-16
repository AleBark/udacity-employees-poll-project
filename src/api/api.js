import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
    return Promise.all([
        getUsers(),
        getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function getUsers (info) {
    return _getUsers(info)
}

export function getQuestions (info) {
    return _getQuestions(info)
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}
export function saveQuestion (info) {
    return _saveQuestion(info)
}