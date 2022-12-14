import {connect} from "react-redux";
import {formatDate} from "../utils/formatDate";
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
                    {notAnsweredQuestions.map((questionId) => (
                            <QuestionCard id={questionId}/>
                        )
                    )}
                </div>
            </fieldset>

            <fieldset>
                <legend>Done</legend>
                <div className="questions-container">
                    {answeredQuestions.map((questionId) => (
                            <QuestionCard id={questionId}/>
                        )
                    )}
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