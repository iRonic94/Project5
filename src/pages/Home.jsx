import Cards from "../components/Cards";
import Banner from "../components/Banner";

function Home({ data }) {
    return <div className="home">
        <Banner />
        <Cards data={data} />
    </div>
}
export default Home;