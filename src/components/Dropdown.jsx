import { useState } from 'react';
import arrow from '../assets/arrow-up.svg';
function Dropdown() {
    const [show, setShow] = useState(false);
    const showContent = () => {
        setShow(prev => !prev);
    }
    return (
        <div className="dropdown">
            <div className="dropdown-header" >
                <span>title</span>
                <span className={`arrow ${show ? "open" : ""}`} onClick={showContent}><img src={arrow} alt="arrow"></img></span>
            </div>
            <div className={`dropdown-content ${show ? "show" : ""}`}>
                test1
                test2
                test3
            </div>
        </div>
    );
}

export default Dropdown;