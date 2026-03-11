import logo from '../assets/logoFooter.png';
function Footer() {
    return (
        <div className="footer">
            <span className="logoFooter"><img src={logo} alt="logo"></img></span>
            <span className="copyrightFooter">© 2020 Kasa. All rights reserved</span>
        </div>
    );
}

export default Footer;