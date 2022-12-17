import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import UserAvatar from "./UserAvatar";
import QuestionOption from "./QuestionOption";

const withRouter = (Component) => {
    return (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>;
    };
};

const Question = (props) => {
    const question = props.questions[props.id];
    const author = props.users[question.author];
    const userHasAlreadyAnsweredThisQuestion = Object.keys(props.authedUser.answers).includes(question.id);

    let selectedUserChoice = null;
    if (userHasAlreadyAnsweredThisQuestion){
        selectedUserChoice = props.authedUser.answers[question.id];
    }

    return (
        <div>
            <div className="question-container">
                <div>
                    <h2>Poll by {author.name}</h2>
                </div>

                <div className="question-title">
                    <UserAvatar
                        style={{
                            margin: "14px 10px 0px 20px",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%"
                        }}
                        avatarUrl={author.avatarURL}
                    />
                </div>
            </div>

            <div className="question-subtitle">
                <h4>Would You Rather</h4>
            </div>

            <div className="question-options">
                <QuestionOption
                    questionId={props.id}
                    selectedUserChoice={selectedUserChoice}
                    optionText={question.optionOne.text}
                    optionNumber={"optionOne"}
                    userHasAlreadyAnsweredThisQuestion={userHasAlreadyAnsweredThisQuestion}
                />

                <QuestionOption
                    questionId={props.id}
                    selectedUserChoice={selectedUserChoice}
                    optionText={question.optionTwo.text}
                    optionNumber={"optionTwo"}
                    userHasAlreadyAnsweredThisQuestion={userHasAlreadyAnsweredThisQuestion}
                />

            </div>
        </div>
    )

}

const mapStateToProps = ({authedUser, users, questions}, props) => {
    const {id} = props.router.params;

    return {
        id,
        authedUser,
        users,
        questions
    };
};

export default withRouter(connect(mapStateToProps)(Question));