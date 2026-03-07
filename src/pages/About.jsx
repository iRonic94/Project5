import bannerAbout from '../assets/about.png';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

function About() {
    return <div className="about">
        <Banner banner={bannerAbout} />
        <Dropdown />
    </div>
}
export default About;