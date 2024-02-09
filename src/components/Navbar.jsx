import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const navToggle = () => setShow(!show);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container shadow-lg rounded-5 py-2 backdrop-blur-md">
        <Link
          className="fw-bold navbar-brand fw-bold navbar-brand d-flex align-items-center"
          to="/"
        >
          <img
            src="/favico.svg"
            alt="todulo logo"
            className="align-text-top d-inline-block"
          />
          <h5 className="fw-bold mb-0">
            <span className="ms-2">
              Todu<span className="text-primary">lo</span>
            </span>
          </h5>
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={navToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname.endsWith("/") ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.endsWith("/todos") ? "active" : ""
                }`}
                to="/todos"
              >
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              type="button"
              className="btn btn-primary rounded-pill"
              to="/todos"
            >
              Start Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
