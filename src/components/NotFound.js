import {useNavigate} from "react-router-dom";

const NotFound = ({text}) => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    }

    return (
        <div className="not-found-page">
            {text}. If you want to go back home, click
            <span style={{color: "blue", cursor: "pointer"}} onClick={handleGoHome}> here.</span>
        </div>
    )
}

export default NotFound;