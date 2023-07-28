import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b30300bf291c546bd371b52507aec49b"
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRated(data.results);
        console.log(data.results);
      });
  }, []);

  const content = topRated.map((movie, i) => {
    return (
      <div className="mx-3" style={{ height: "100%" }}>
        <MovieCard movie={movie} key={i} />
      </div>
    );
  });

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container my-5">
      <h2 className="border-bottom border-dark mb-3">Top Rated</h2>
      <Carousel
        responsive={responsive}
      >
        {content}
      </Carousel>
    </div>
  );
};

export default TopRated;
