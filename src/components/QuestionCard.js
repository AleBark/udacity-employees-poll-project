import {formatDate} from "../utils/formatDate";
import {connect} from "react-redux";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const QuestionCard = (props) => {

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
            <Link to={`/question/${props.question.id}`} className="tweet">
                <button> Show </button>
            </Link>
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