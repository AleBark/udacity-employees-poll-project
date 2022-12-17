import {connect} from "react-redux";
import UserAvatar from "./UserAvatar";

const Leaderboard = (props) => {
    const userIds = Object.keys(props.users);

    const userList = userIds.map((userId) => (
        props.users[userId]
    )).sort((a, b) => ((Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)));

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
                    userList.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className="user-column">
                                    <UserAvatar
                                        style={{
                                            margin: "14px 10px 0px 20px",
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%"
                                        }}
                                        avatarUrl={props.users[user.id].avatarURL}
                                    />
                                    <p>
                                        <span>{props.users[user.id].name}</span><br/>
                                        <span>{props.users[user.id].id}</span>
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p>{Object.keys(props.users[user.id].answers).length}</p>
                            </td>
                            <td>
                                <p>{props.users[user.id].questions.length}</p>
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