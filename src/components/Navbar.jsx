import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo"><img src={Logo} alt="logo" className="img-logo"></img></div>
            <div className="navbar-menu">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/About" >About</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;