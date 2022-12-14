import {connect} from "react-redux";

const Dashboard = (props) => {
    return (
        <div>Welcome <strong>{props.authedUser.name}</strong></div>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
});

export default connect(mapStateToProps)(Dashboard);