import {connect} from "react-redux";
import {useState} from "react";
import {setAuthedUser} from "../actions/authedUser";


const LoginForm = (props) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.password !== password) {
            return alert("Invalid user/password combination, try again.")
        }

        props.dispatch(setAuthedUser(user));
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleUserChange = (e) => {
        const user = e.target.value;
        setUser(props.users[user]);
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-title">
                    <p>Employees Poll App</p>
                </div>

                <div className="form-item">
                    <label htmlFor="username">
                        <span>Username</span>
                    </label>
                    <select className="form-input" data-testid='user-select' onChange={handleUserChange} required>
                        <option key="" value="none"> Available users</option>
                        {props.userIds.map((id) => (
                            <option
                                key={props.users[id].id}
                                value={props.users[id].id}
                            >
                                {props.users[id].name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="password">
                        <span>Password</span>
                    </label>
                    <input autoComplete="true" data-testid='user-password' onChange={handlePasswordChange} type="password" className="form-input"
                           required/>
                </div>

                <div className="form-item">
                    <input type="submit" data-testid='submit-button' value="Log in" className="form-submit" disabled={password === ""}/>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = ({users, authedUser}) => ({
    authedUser,
    userIds: Object.keys(users),
    users
});

export default connect(mapStateToProps)(LoginForm);