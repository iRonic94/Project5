import { Link } from "react-router-dom";

function Cards({ data }) {
    return (
        <div className="cards-main">
            {data.map((places) => (
                <Link to={`/Details/${places.id}`} className="cards-item" key={places.id}>{places.title}</Link>
            ))}
        </div>
    )
}

export default Cards;