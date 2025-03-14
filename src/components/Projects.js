import React from "react";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container project my-3" id="project">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center p-3">
          {projects.map((data) => {
            return (
              <div
                key={data.id}
                className="item col-sm-6 col-md-4 col-lg-3 mx-4"
                style={{
                  margin: "10px",
                }}
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    height: "28rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 1px 1px rgba(236, 248, 221, 0.5)",
                    borderRadius: "2rem",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={`assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a
                      href={data.source}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
