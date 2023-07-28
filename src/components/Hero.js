const Hero = ({text, backdrop}) =>{
    if(backdrop===undefined){
        backdrop="https://e0.pxfuel.com/wallpapers/61/466/desktop-wallpaper-avatar-movie-movies-and-background-3840-x-2160-movies.jpg";
    }
    return(
        <>
            <header className="d-flex justify-content-center align-items-center bg-dark text-white p-5 hero-container">
                <h1 className="text-center hero-text">{text}</h1>
                <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
            </header>
        </>
    )
}

export default Hero;