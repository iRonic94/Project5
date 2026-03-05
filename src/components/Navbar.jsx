import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo"><img src={Logo} alt="logo" className="img-logo"></img></div>
            <div className="navbar-menu">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/About" className="nav-link">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;