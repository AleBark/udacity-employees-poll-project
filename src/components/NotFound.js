import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    }

    return (
        <div>
            Page not found. If you want to go back home, click
            <span style={{color: "blue", cursor: "pointer"}} onClick={handleGoHome}> here.</span>
        </div>
    )
}

export default NotFound;