import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <h1 className="text-center text-dark display-1 fw-semibold">
          <span className="text-primary">Organize your</span> work and <br />{" "}
          life, finally.
        </h1>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <p className="text-center my-4">
              Become focused, organized, and calm with todo app. The World's #1
              task manager app
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 text-center">
          <Link to="/todos" className="btn btn-primary rounded-pill">
            Start now{" "}
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
    </section>
  );
};

export default Hero;
