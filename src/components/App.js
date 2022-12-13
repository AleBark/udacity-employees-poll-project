import '../App.css';

import {useEffect, Fragment} from "react";
import {connect} from "react-redux";
import {LoadingBar} from "react-redux-loading-bar";
import {Route, Routes} from "react-router-dom";

import {handleInitialData} from "../actions/shared";
import Nav from "./Nav";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
      <Fragment>
        <LoadingBar />
        <div className="container">
          {props.loading === true && props.authedUser === null ?
              <Routes>
                <Route path="/" exact element={<LoginForm />} />
              </Routes>
              : (
              <>
              <Nav />
               <Routes>
                 <Route path="/dashboard" exact element={<Dashboard />} />
               </Routes>
              </>
          )}
        </div>
      </Fragment>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({
  loading: authedUser === null,
  authedUser: authedUser,
  users: users,
});

export default connect(mapStateToProps)(App);