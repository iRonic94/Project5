import { useState, useEffect } from 'react';
import { getLocations } from '../api/api';
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import bannerHome from '../assets/home.png'

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getLocations().then(setData);
    }, [])
    return <div className="home">
        <Banner banner={bannerHome} bannerTxt="At home, everywhere, and anywhere" />
        <Cards data={data} />
    </div>
}
export default Home;