import {formatDate} from "../utils/formatDate";
import {connect} from "react-redux";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";

const QuestionCard = (props) => {

    const showQuestion = (question) => {
        console.log(question)
    }

    return (
        <div className="question-card">
            <h5>
                {props.question.author}
                <UserAvatar
                     style={{
                        margin: "14px 10px 0px 20px",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%"
                    }}
                    avatarUrl={props.users[props.question.author].avatarURL}
                />
            </h5>
            <span>{formatDate(props.question.timestamp)}</span> <hr/>
            <button onClick={() => showQuestion(props.question)}> Show</button>
        </div>
    )
}
const mapStateToProps = ({questions, users}, {id}) => ({
    users,
    question: questions[id],
});

QuestionCard.propTypes = {
    id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(QuestionCard)