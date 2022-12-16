const Poll = (props) => {
    return (
        <div className="poll-container">
            <div className="poll-title">
                <h1>Would You Rather</h1>
                <h5>Create Your Own Poll</h5>
            </div>
            <form className="poll-form">
                <div className="poll-inputs">
                    <div className="poll-option">
                        <p>First Option</p>
                        <input type="text" placeholder="optionOne"/>
                    </div>
                    <div className="poll-option">
                        <p>Second Option</p>
                        <input type="text" placeholder="optionTwo"/>
                    </div>
                </div>
                <div className="poll-submit">
                    <input type="button" value="Submit" />
                </div>
            </form>
        </div>
    )
}
export default Poll;