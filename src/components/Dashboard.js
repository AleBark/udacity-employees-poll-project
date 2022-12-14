import {connect} from "react-redux";

const Dashboard = (props) => {

    const showQuestion = (question) => {
        console.log(question)
    }
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
                            <div className="question-card">
                                <h5>
                                    <img style={{
                                        margin: "10px 20px 0px 10px",
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%"
                                    }} src={props.users[props.questions[questionId].author].avatarURL} alt="avatar"/>
                                    {props.questions[questionId].author}
                                </h5>
                                <hr/>
                                <span>{props.questions[questionId].id}</span>
                                <hr/>
                                <button onClick={() => showQuestion(props.questions[questionId])}> Show</button>
                            </div>
                        )
                    )}
                </div>
            </fieldset>

            <fieldset>
                <legend>Done</legend>
                <div className="questions-container">
                    {answeredQuestions.map((questionId) => (
                            <div className="question-card">
                                <h5>
                                    <img style={{
                                        margin: "10px 20px 0px 10px",
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%"
                                    }} src={props.users[props.questions[questionId].author].avatarURL} alt="avatar"/>
                                    {props.questions[questionId].author}
                                </h5>
                                <hr/>
                                <span>{props.questions[questionId].id}</span>
                            </div>
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