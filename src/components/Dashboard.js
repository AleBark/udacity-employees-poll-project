import {connect} from "react-redux";
import QuestionCard from "./QuestionCard";

const Dashboard = (props) => {

    const answeredQuestions = props.questionIds.filter(
        (questionId) => Object.keys(props.authedUser.answers).includes(questionId)
    );
    const notAnsweredQuestions = props.questionIds.filter(
        (questionId) => !answeredQuestions.includes(questionId)
    );

    return (
        <>
            <fieldset>
                <legend>New</legend>
                <div className="questions-container">
                    {
                        notAnsweredQuestions.length
                            ?
                            notAnsweredQuestions.map((questionId) => (
                                <QuestionCard key={questionId} id={questionId}/>
                            ))
                            : <h3>You've answered all the polls!</h3>
                    }
                </div>
            </fieldset>

            <fieldset>
                <legend>Done</legend>
                <div className="questions-container">
                    {
                        answeredQuestions.length
                            ?
                            answeredQuestions.map((questionId) => (
                                    <QuestionCard key={questionId} id={questionId}/>
                            ))
                            : <h3>No polls answered!</h3>
                    }
                </div>
            </fieldset>
        </>
    );
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    users,
    questionIds: Object.keys(questions),
    questions,
});

export default connect(mapStateToProps)(Dashboard);