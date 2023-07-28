import Hero from './Hero';
import Popular from './Popular';
import Upcoming from './Upcoming';
import TopRated from './TopRated';

const Home = () => {
    const text=(
        <div>
            Welcome To Movies Browser
            <h3>
                Millions of movies to discover
            </h3>
        </div>
    );
    return(
        <>
            <Hero text={text} />
            <Popular />
            <Upcoming />
            <TopRated />
        </>
    )
}

export default Home;