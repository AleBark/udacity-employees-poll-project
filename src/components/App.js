import '../App.css';

import {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import {LoadingBar} from "react-redux-loading-bar";
import {Route, Routes} from "react-router-dom";

import {handleInitialData} from "../actions/shared";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import Question from "./Question";
import Leaderboard from "./Leaderboard";

const App = (props) => {

    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return (
        <Fragment>
            <LoadingBar/>
                {
                    props.authedUser === null
                     ?
                        <div className="login-contents">
                            <Routes>
                               <Route path="/" exact element={<LoginForm/>}/>
                            </Routes>
                        </div>
                     :
                        <div className="app-contents">
                            <Nav />
                            <Routes>
                                <Route path="/" exact element={<Dashboard/>}/>
                                <Route path="/question/:id" element={<Question />} />
                                <Route path="/leaderboard" element={<Leaderboard />} />
                            </Routes>
                        </div>
                }
        </Fragment>
    )
}

const mapStateToProps = ({authedUser, users}) => ({
    loading: authedUser === null,
    authedUser: authedUser,
    users: users,
});

export default connect(mapStateToProps)(App);