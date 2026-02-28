import { useParams } from "react-router";

function Details({ data }) {
    const value = useParams();
    const detail = data.find(places => places.id === value.id)

    return (
        <div>
            <h1>{detail.title}</h1>
            <h2>{detail.location}</h2>
        </div>
    );

}

export default Details;