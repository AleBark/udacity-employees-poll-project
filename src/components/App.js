import '../App.css';

import {useEffect, Fragment} from "react";
import {connect} from "react-redux";
import {LoadingBar} from "react-redux-loading-bar";
import {Route, Routes} from "react-router-dom";

import {handleInitialData} from "../actions/shared";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
      <Fragment>
        <LoadingBar />

        <div className="container">
          {
              props.loading !== true ?
               <Routes>
                 <Route path="/" exact element={<Dashboard />} />
               </Routes>
              :
              <LoginForm />
          }
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