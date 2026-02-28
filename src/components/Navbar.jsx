import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            </div>
            <div className="navbar-menu">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/About" className="nav-link">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;