import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { getLocation } from "../api/api";
import Carousel from "../components/Carousel";

function Details() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    useEffect(() => {
        getLocation(id).then(setDetail);
    }, [id])
    if (!detail) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Carousel detail={detail} />
            <h1>{detail.title}</h1>
            <h2>{detail.location}</h2>
        </div>
    );

}

export default Details;