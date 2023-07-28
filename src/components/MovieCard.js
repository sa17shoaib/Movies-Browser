import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWRek7L3RCJ0yCsrCx44ajb-eiLCB6flIGabD_ZEsMh3T_n0h5D9Qzo_aCC3iX03Las&usqp=CAU";
  const detailUrl = `/movie/${movie.id}`;
  return (
    <div className="card" style={{ height: "100%" }}>
      <img
        src={posterUrl}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title fs-6">{movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary">
          View More
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
