import bannerAbout from '../assets/about.png';
import Banner from '../components/Banner';

function About() {
    return <div className="about">
        <Banner banner={bannerAbout} />
    </div>
}
export default About;