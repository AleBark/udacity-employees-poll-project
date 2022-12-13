import {receiveUsers} from "./users";
import {getInitialData} from "../api/api";
import {showLoading, hideLoading} from "react-redux-loading-bar";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({ users }) => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        });
    };
}