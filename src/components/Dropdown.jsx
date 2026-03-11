import { useState } from 'react';
import arrow from '../assets/arrow-up.svg';
function Dropdown({ title, text }) {
    const [show, setShow] = useState(false);
    const showContent = () => {
        setShow(prev => !prev);
    }
    return (
        <div className="dropdown">
            <div className="dropdown-header" >
                <span>{title}</span>
                <span className={`arrow ${show ? "open" : ""}`} onClick={showContent}><img src={arrow} alt="arrow"></img></span>
            </div>
            <div className={`dropdown-content ${show ? "show" : ""}`}>
                {text}
            </div>
        </div>
    );
}

export default Dropdown;