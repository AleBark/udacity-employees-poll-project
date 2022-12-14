import PropTypes from "prop-types";

const UserAvatar = ({style, avatarUrl}) => {
    return (
        <img style={style} src={avatarUrl} alt="user-avatar"/>
    )
}

UserAvatar.propTypes = {
    style: PropTypes.object.isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default UserAvatar;