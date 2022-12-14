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
import Poll from "./Poll";
import NotFound from "./NotFound";

const App = (props) => {

    const { dispatch } = props;

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    return (
        <Fragment>
            <Nav />
            <LoadingBar/>
                {
                    props.authedUser === null
                     ?
                        <div className="login-contents">
                            <div className="login-contents">
                               <LoginForm/>
                            </div>
                        </div>
                     :
                        <div className="app-contents">
                            <Routes>
                                <Route path="/" exact element={<Dashboard/>}/>
                                <Route path="/question/:id" element={<Question />} />
                                <Route path="/leaderboard" element={<Leaderboard />} />
                                <Route path="/add" element={<Poll />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                }
        </Fragment>
    )
}

const mapStateToProps = ({authedUser, users}) => ({
    loading: authedUser === null,
    authedUser,
    users,
});

export default connect(mapStateToProps)(App);