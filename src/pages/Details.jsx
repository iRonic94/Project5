import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { getLocation } from "../api/api";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Error from "../pages/Error";
import FullStar from "../assets/full-star.svg";
import EmptyStar from "../assets/empty-star.svg";

function Details() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        getLocation(id).then(setDetail);
    }, [id])

    if (!detail) {
        return <Error />
    }
    const rating = detail.rating;
    console.log(rating)
    const stars = ['0', '1', '2', '3', '4'];
    return (
        <>
            <Carousel detail={detail} />
            <div className="main-detail">
                <div className="location-detail">
                    <h1>{detail.title}</h1>
                    <h2>{detail.location}</h2>
                    <div className="tags-detail">{detail.tags.map(Tagname => <span className="tag">{Tagname}</span>)}</div>
                </div>
                <div className="host-detail">
                    <div className="host-name-detail">
                        <span className="name">{detail.host.name}</span>
                        <span className="picture-host"><img src={detail.host.picture} alt={detail.host.name}></img></span>
                    </div>
                    <div className="rating">
                        {stars.map((star) => (
                            <img src={star < rating ? FullStar : EmptyStar} alt="star"></img>
                        ))}

                    </div>
                </div>
            </div >
            <div className="dropdown-container">
                <Dropdown title="Description" text={detail.description} />
                <Dropdown title="Amenities" text={detail.equipments.map(item => <span>{item}<br /></span>)} />
            </div>
        </>
    );

}

export default Details;