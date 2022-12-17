import {connect} from "react-redux";
import {handleQuestionAnswer} from "../actions/questions";

const QuestionOption = (props) => {
    const usersIds = Object.keys(props.users);
    const totalUsers = Object.keys(props.users).length;
    let totalVotesInThisOption = 0;

    usersIds.forEach(
        (userId) => {
            if (props.users[userId] !== props.authedUser) {
                if (props.users[userId].answers[props.questionId] === props.optionNumber) {
                    totalVotesInThisOption++;
                }
            }
        }
    )

    const usersVotesPercentage = (totalUsers, totalVotesInThisOption) => {
        return (100 * totalVotesInThisOption) / totalUsers;
    }

    const handleAnswer = (qid, answer) => {
        const {dispatch, authedUser, users} = props;

        dispatch(
            handleQuestionAnswer({
                authedUser: authedUser.id,
                qid,
                answer,
                users
            }));
    };

    const style = props.userHasAlreadyAnsweredThisQuestion ? {
        color: props.selectedUserChoice === props.optionNumber ? 'green' : 'red',
        fontWeight:  props.selectedUserChoice === props.optionNumber ? 'bold' : ''
    } : null;

    return (
        <div className="option">
            <p>
                <span style={style}>
                    {props.optionText}
                </span>
            </p>
            <p>
                {
                    props.userHasAlreadyAnsweredThisQuestion
                        ? <></>
                        : <button onClick={() => handleAnswer(props.questionId, props.optionNumber)}
                                  disabled={props.userHasAlreadyAnsweredThisQuestion}>Click</button>
                }
            </p>
            {
                !props.userHasAlreadyAnsweredThisQuestion
                    ? <></>
                    : <div>
                        <p>Number of users that voted in this option: <strong>{totalVotesInThisOption}</strong></p>
                        <p>Percentage of users that voted in this option: <strong>{usersVotesPercentage(totalUsers, totalVotesInThisOption)} %</strong></p>
                    </div>
            }
        </div>
    );
}
const mapStateToProps = ({authedUser, users, questions}, {
    questionId,
    selectedUserChoice,
    userHasAlreadyAnsweredThisQuestion,
    optionText,
    optionNumber
}) => {
    return {
        authedUser,
        users,
        questions,
        questionId,
        selectedUserChoice,
        userHasAlreadyAnsweredThisQuestion,
        optionText,
        optionNumber
    };
};

export default connect(mapStateToProps)(QuestionOption);