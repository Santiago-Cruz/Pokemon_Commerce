import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav>
      <ul className="d-flex p-2 m-2 flex-row justify-content-evenly ">
        <ol>
          <Link to="/">
            <button className="btn btn-success rounded-pill h4">About</button>
          </Link>
          <Link to="/catalog">
            <button className="btn btn-success mx-3 rounded-pill h4">
              Catalog
            </button>
          </Link>
          <Link to="/shopping">
            <button className="btn btn-success rounded-pill h4">
              Shopping <i className="bi bi-cart4"></i>
            </button>
          </Link>
        </ol>
      </ul>
    </nav>
  );
}
