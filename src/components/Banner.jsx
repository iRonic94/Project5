function Banner({ banner, bannerTxt }) {
    return (
        <div className="banner-main">
            <div className="banner-image"><img src={banner} alt="home" /></div>
            <span className="bannerTxt">{bannerTxt}</span>
        </div>
    )
}

export default Banner;