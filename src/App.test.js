import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

test('will render login form on app boot', async () => {
    const store = createStore(reducer, middleware);

    render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    );

    const userSelector = screen.getByTestId('user-select')
    const passwordField = screen.getByTestId('user-password')
    const loginButton = screen.getByTestId('submit-button')

    expect(userSelector).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});

test('will not login until password is typed', async () => {
    const store = createStore(reducer, middleware);
    render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    );

    const passwordField = screen.getByTestId('user-password')
    const loginButton = screen.getByTestId('submit-button')

    expect(loginButton).toBeDisabled();
    fireEvent.change(passwordField, {target: {value: 'randomPassword'}})
    expect(passwordField).toBeEnabled();

});
