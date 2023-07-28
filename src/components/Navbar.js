import { useNavigate, Link } from "react-router-dom";
import logo from "../images/movies-browser-low-resolution-logo-color-on-transparent-background.png";

const Navbar = ({searchText,setSearchText}) => {
  const navigate=useNavigate();
  const updateSearchText = (e) => {
    navigate('/search');
    setSearchText(e.target.value);
  }

  const handleClick = (e) =>{
    alert(`Just a moment, getting all search results ready for '${searchText}'`);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img style={{ width: "15rem" }} src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <Link to="/search">
              <button className="btn btn-success" onClick={handleClick}>
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
