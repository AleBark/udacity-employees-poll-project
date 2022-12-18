import {connect} from "react-redux";
import {logAuthedUserOut} from "../actions/authedUser";
import UserAvatar from "./UserAvatar";
import {useNavigate} from "react-router-dom";

const Nav = (props) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        props.dispatch(logAuthedUserOut());

        navigate("/")
    }

    return (
        <ul className="nav-bar">
            <li><button className={document.location.pathname === "/" ? "active" : ""} onClick={() => navigate("/")}>Dashboard</button></li>
            <li><button className={document.location.pathname === "/leaderboard" ? "active" : ""} onClick={() => navigate("/leaderboard")}>Leaderboard</button></li>
            <li><button className={document.location.pathname === "/add" ? "active" : ""} onClick={() => navigate("/add")}>New Poll</button></li>
            <li style={{float: "right"}}>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </li>
            {
            props.authedUser ?
                <li className="user-info">
                    <UserAvatar
                        style={{
                            marginLeft: "10px",
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%"
                        }}
                        avatarUrl={props.authedUser.avatarURL}
                    />
                    <strong>{props.authedUser.name}</strong>
                </li>
            : <></>
            }
        </ul>

    )
}
const mapStateToProps = ({ authedUser }) => ({
    authedUser,
});

export default connect(mapStateToProps)(Nav);