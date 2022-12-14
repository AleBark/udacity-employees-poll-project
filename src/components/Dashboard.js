import {connect} from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
    const answeredQuestions = props.questionIds.filter(
        (questionId) => props.authedUser.questions.includes(questionId)
    );
    const notAnsweredQuestions = props.questionIds.filter(
            (questionId) => !props.authedUser.questions.includes(questionId)
    );
    console.log(answeredQuestions, notAnsweredQuestions)

    return (
        <>
            <fieldset>
                <legend>New</legend>
                {notAnsweredQuestions.map((question) => (
                        <Question id={question}/>
                    )
                )}
            </fieldset>

            <fieldset>
                <legend>Done</legend>
                {answeredQuestions.map((question) => (
                    <Question id={question}/>
                    )
                )}
            </fieldset>
        </>
    );
}

const mapStateToProps = ({authedUser, questions}) => ({
    authedUser,
    questionIds: Object.keys(questions),
    questions,
});

export default connect(mapStateToProps)(Dashboard);