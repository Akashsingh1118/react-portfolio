import React from "react";
import achievements from "./data/achievements.json";

const Achievements = () => {
  return (
    <>
      <div className="component achievement my-5" id="achievements">
        <h1>ACHIEVEMENTS</h1>
        <div className="section">
          {achievements.map((data) => {
            return (
              <div className="item" data-aos="zoom-in" data-aos-duration="1000">
                <div className="left">
                  <img src={`assets/${data.imageSrc}`} alt="org-image" />
                </div>
                <div className="right">
                  <h2>{data.description}</h2>
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-warning my-3"
                    style={{ fontWeight: "bold" }}
                  >
                    Certificate/Profile
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Achievements;
