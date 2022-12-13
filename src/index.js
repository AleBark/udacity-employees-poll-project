import './index.css';

import App from './components/App';
import reducer from "./reducers";
import middleware from "./middleware";

import React from 'react';
import ReactDOM from 'react-dom/client';

import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(
    document.getElementById("root"),
);

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);