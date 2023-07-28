import Hero from './Hero';

const AboutView = () => {
    return(
        <>
            <Hero text="About Us" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                        The Movies Browser is a movies search browser built using the TMDB datbase. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.   
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutView;