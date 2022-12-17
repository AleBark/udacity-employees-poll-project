import {connect} from "react-redux";
import {useState} from "react";
import {handleSaveQuestion} from "../actions/questions";
import {useNavigate} from "react-router-dom";

const Poll = (props) => {

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [sendingDataToApi, setSendingDataToApi] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            optionOne === ""  ||
            optionOne === " " ||
            optionTwo === ""  ||
            optionTwo === " " ||
            optionOne === optionTwo
        ) {
            return alert("Invalid questions text detected, try again.")
        }
        setSendingDataToApi(true);
        props.dispatch(handleSaveQuestion({
            author: props.authedUser.id,
            optionOneText: optionOne,
            optionTwoText: optionTwo
            }
        ));

        navigate("/");
    }

    const handleOptionOneChange = (e) => {
        const optionOne = e.target.value;
        setOptionOne(optionOne);
    }

    const handleOptionTwoChange = (e) => {
        const optionTwo = e.target.value;
        setOptionTwo(optionTwo);
    }

    return (
        <div className="poll-container">
            <div className="poll-title">
                <h1>Would You Rather</h1>
                <h5>Create Your Own Poll</h5>
            </div>
            <form className="poll-form" onSubmit={handleSubmit}>
                <div className="poll-inputs">
                    <div className="poll-option">
                        <p>First Option</p>
                        <input type="text" placeholder="Option one" onChange={handleOptionOneChange} required />
                    </div>
                    <div className="poll-option">
                        <p>Second Option</p>
                        <input type="text" placeholder="Option two" onChange={handleOptionTwoChange} required />
                    </div>
                </div>
                <div className="poll-submit">
                    <input type="submit" value="Submit" disabled={ optionOne === "" || optionTwo === "" || sendingDataToApi}/>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({questions, authedUser}) => ({
    authedUser,
    questions,
});

export default connect(mapStateToProps)(Poll);