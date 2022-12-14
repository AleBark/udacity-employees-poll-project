import {connect} from "react-redux";
import {logAuthedUserOut} from "../actions/authedUser";

const Nav = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();
        props.dispatch(logAuthedUserOut());

        window.location.reload()
    }

    return (
        <ul className="nav-bar">
            <li><a className={document.location.pathname === "/" ? "active" : ""} href="/">Dashboard</a></li>
            <li><a className={document.location.pathname === "/leaderboard" ? "active" : ""} href="/">Leaderboard</a></li>
            <li><a className={document.location.pathname === "/new" ? "active" : ""} href="/">New Poll</a></li>
            <li style={{float: "right"}}>
                <a href="#" onClick={handleLogout}>
                    Logout from: <strong>{props.authedUser.name}</strong>
                    <img style={{
                        marginLeft: "10px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%"
                    }} src={props.authedUser.avatarURL} alt="avatar"/>
                </a>
            </li>
        </ul>

    )
}
const mapStateToProps = ({ authedUser }) => ({
    authedUser,
});

export default connect(mapStateToProps)(Nav);