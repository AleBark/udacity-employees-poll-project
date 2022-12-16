import {connect} from "react-redux";
import UserAvatar from "./UserAvatar";

const Leaderboard = (props) => {
    const userIds = Object.keys(props.users);
    return (
        <div className="leaderboard-container">
            <div className="leaderboard-title">
                <h1>Leaderboard</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                {
                    userIds.map((userId) => (
                        <tr key={userId}>
                            <td>
                                <div className="user-column">
                                    <UserAvatar
                                        style={{
                                            margin: "14px 10px 0px 20px",
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%"
                                        }}
                                        avatarUrl={props.users[userId].avatarURL}
                                    />
                                    <p>
                                        <span>{props.users[userId].name}</span><br/>
                                        <span>{props.users[userId].id}</span>
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p>{Object.keys(props.users[userId].answers).length}</p>
                            </td>
                            <td>
                                <p>{props.users[userId].questions.length}</p>
                            </td>
                        </tr>
                   ))
                }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = ({questions, users}) => ({
    users,
    questions,
});

export default connect(mapStateToProps)(Leaderboard);