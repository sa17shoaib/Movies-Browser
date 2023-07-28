import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsTemp = searchResults.map((obj, i) => {
    return ( 
      <div className="col-lg-3 col-md-4 col-6 my-4">
        <MovieCard movie={obj} key={i} />
      </div>
    );
  });

  const noResultsHTML = (
    <div className="d-flex justify-content-center">
      <h1 className="p-5 text-center">
        {`No results found for ${keyword} :(`}
      </h1>
    </div>
  );

  const resultsHTML = (
    <div className="container">
      <div className="row">
        {resultsTemp}
      </div>
    </div>
  );

  return (
    <>
      <Hero text={title} />
      {searchResults.length === 0 ? noResultsHTML : resultsHTML}
    </>
  );
};

export default SearchView;
