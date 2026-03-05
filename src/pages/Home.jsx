import Cards from "../components/Cards";
import Banner from "../components/Banner";
import { getLocations } from '../api/api';

function Home() {
    const data = getLocations();
    return <div className="home">
        <Banner />
        <Cards data={data} />
    </div>
}
export default Home;