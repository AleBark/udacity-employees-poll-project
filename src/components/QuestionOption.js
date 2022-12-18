import {connect} from "react-redux";
import {handleQuestionAnswer} from "../actions/questions";

const QuestionOption = (props) => {

    let totalUsersVotes = 0;
    let totalVotesInCurrentQuestion = 0;
    let usersVotesPercentage = () => {};

    if (props.userHasAlreadyAnsweredThisQuestion) {
        const totalUserVotesInOptionOne = props.questions[props.questionId].optionOne.votes.length
        const totalUserVotesInOptionTwo = props.questions[props.questionId].optionTwo.votes.length

        totalUsersVotes = totalUserVotesInOptionOne + totalUserVotesInOptionTwo;
        totalVotesInCurrentQuestion = props.optionNumber === "optionOne"
            ? totalUserVotesInOptionOne
            : totalUserVotesInOptionTwo;

         usersVotesPercentage = (totalVotesInCurrentQuestion, totalUsersVotes) => {
            return ((100 * totalVotesInCurrentQuestion) / totalUsersVotes)
        }
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
        fontWeight: props.selectedUserChoice === props.optionNumber ? 'bold' : ''
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
                        <p>Number of users that voted in this option: <strong>{props.userHasAlreadyAnsweredThisQuestion && totalVotesInCurrentQuestion}</strong></p>
                        <p>Percentage of users that voted in this option: <strong>{usersVotesPercentage(totalVotesInCurrentQuestion, totalUsersVotes).toFixed(2)} %</strong></p>
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