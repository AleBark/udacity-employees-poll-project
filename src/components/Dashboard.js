import {connect} from "react-redux";
import QuestionCard from "./QuestionCard";

const Dashboard = (props) => {

    let answeredQuestions = [];
    let unansweredQuestions = [];

    props.questionIds.forEach(
        (questionId) => {
            if(Object.keys(props.authedUser.answers).includes(questionId)){
                return answeredQuestions.push(props.questions[questionId]);
            }
            return unansweredQuestions.push(props.questions[questionId]);
        }
    )

    unansweredQuestions = unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp);
    answeredQuestions = answeredQuestions.sort((a, b) => b.timestamp - a.timestamp);

    return (
        <>
            <fieldset>
                <legend>Unanswered</legend>
                <div className="questions-container">
                    {
                        unansweredQuestions.length
                            ?
                            unansweredQuestions.map((question) => (
                                <QuestionCard key={question.id} id={question.id}/>
                            ))
                            : <h3>You've answered all the polls!</h3>
                    }
                </div>
            </fieldset>

            <fieldset>
                <legend>Answered</legend>
                <div className="questions-container">
                    {
                        answeredQuestions.length
                            ?
                            answeredQuestions.map((question) => (
                                    <QuestionCard key={question.id} id={question.id}/>
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