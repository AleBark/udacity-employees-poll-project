import {
    _getQuestions,
    _getUsers,
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