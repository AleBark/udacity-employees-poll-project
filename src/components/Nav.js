import {connect} from "react-redux";
import {logAuthedUserOut} from "../actions/authedUser";
import UserAvatar from "./UserAvatar";
import {useNavigate} from "react-router-dom";

const Nav = (props) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        props.dispatch(logAuthedUserOut());

        window.location.reload()
    }

    return (
        <ul className="nav-bar">
            <li><a className={document.location.pathname === "/" ? "active" : ""} onClick={() => navigate("/")}>Dashboard</a></li>
            <li><a className={document.location.pathname === "/leaderboard" ? "active" : ""} onClick={() => navigate("/leaderboard")}>Leaderboard</a></li>
            <li><a className={document.location.pathname === "/new" ? "active" : ""} onClick={() => navigate("/add")}>New Poll</a></li>
            <li style={{float: "right"}}>
                <a href="#" onClick={handleLogout}>
                    Logout from: <strong>{props.authedUser.name}</strong>
                    <UserAvatar
                        style={{
                            marginLeft: "10px",
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%"
                        }}
                        avatarUrl={props.authedUser.avatarURL}
                    />
                </a>
            </li>
        </ul>

    )
}
const mapStateToProps = ({ authedUser }) => ({
    authedUser,
});

export default connect(mapStateToProps)(Nav);