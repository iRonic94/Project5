import { NavLink } from "react-router-dom";
function Error() {
    return (
        <div class="error-container">
            <span className="error-number">404</span>
            <span className="error-message">Oops! The page you’re looking for doesn’t exist.</span>
            <span className="redirect-home"><NavLink to="/">Return to home page</NavLink></span>
        </div>
    );
}


export default Error;