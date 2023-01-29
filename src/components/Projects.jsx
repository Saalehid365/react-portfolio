import "./Projects.css";
import homeEdTrippers from "../assets/homeEdTrippers.jpg";
import traditionalWellness from "../assets/traditionalwellness.jpg";

export const Projects = () => {
  return (
    <div>
      <div className="project-title">
        <h3>Projects</h3>
      </div>
      <div>
        <div className="pro-container">
          <div className="pro-con-title">
            <div className="pro-title">
              <p className="p-title">Home-Ed Tifaal</p>
              <p className="p-type">Application</p>
            </div>
            <div className="pro-buttons">
              <button className="pro-button1 pro-btn">
                <a
                  href="https://github.com/Saalehid365/homeschoolTrippy"
                  target="_blank"
                >
                  Code
                </a>
              </button>
              <button className="pro-button2 pro-btn">
                <a
                  href="https://github.com/Saalehid365/homeschoolTrippy"
                  target="_blank"
                >
                  Live
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img src={homeEdTrippers}></img>
          </div>
        </div>
      </div>
      <div>
        <div className="pro-container">
          <div className="pro-con-title">
            <div className="pro-title">
              <p className="p-title">Traditional Wellness</p>
              <p className="p-type">Website</p>
            </div>
            <div className="pro-buttons">
              <button className="pro-button1 pro-btn">
                <a
                  href="https://github.com/Saalehid365/homeschoolTrippy"
                  target="_blank"
                >
                  Code
                </a>
              </button>
              <button className="pro-button2 pro-btn">
                <a
                  href="https://github.com/Saalehid365/homeschoolTrippy"
                  target="_blank"
                >
                  Live
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img src={traditionalWellness}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
