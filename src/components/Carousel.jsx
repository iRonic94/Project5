import { useState } from "react";
import backArrow from "../assets/arrow-left.svg";
import nextArrow from "../assets/arrow-right.svg";
function Carousel({ detail }) {
    const [index, setIndex] = useState(0);
    function back() {
        if (index === 0) {
            setIndex(detail.pictures.length - 1);
        } else {
            setIndex(index - 1);
        }
    }
    function next() {
        if (index === detail.pictures.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    return (
        <div className="carousel-container">
            <img src={`${detail.pictures[index]}`} className="img-places" alt="accommodation" ></img>
            <span className="counter">{index + 1}/{detail.pictures.length}</span>
            <img src={backArrow} alt="back" className="back" onClick={back}></img>
            <img src={nextArrow} alt="next" className="next" onClick={next}></img>
        </div>
    );
}

export default Carousel;