import Hero from './Hero';

const Error404 = () => {
    return(
        <>
            <Hero text="Error 404 :(" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            The page you are looking for has either moved to another address or no longer available.   
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404;