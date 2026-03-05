import { useParams } from "react-router";
import { getLocation } from "../api/api";
import Carousel from "../components/Carousel";

function Details() {
    const { id } = useParams();
    const detail = getLocation(id);
    return (
        <div>
            <Carousel detail={detail} />
            <h1>{detail.title}</h1>
            <h2>{detail.location}</h2>
        </div>
    );

}

export default Details;