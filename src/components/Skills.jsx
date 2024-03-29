import "./Skills.css";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

export const Skills = () => {
  return (
    <div className="skcon">
      <h3> Tools I use</h3>
      <div className="container">
        <div className="skills-list">
          <div className="icon-frame">
            <FaHtml5 className="icons html" />
          </div>
          <h3>HTML</h3>
        </div>
        <div className="skills-list">
          <div className="icon-frame">
            <FaCss3 className="icons css" />
          </div>
          <h3>CSS</h3>
        </div>
        <div className="skills-list">
          <div className="icon-frame">
            <FaJsSquare className="icons js" />
          </div>
          <h3>Javascript</h3>
        </div>
        <div className="skills-list">
          <div className="icon-frame">
            <FaReact className="icons react" />
          </div>
          <h3>React</h3>
        </div>
        <div className="skills-list">
          <div className="icon-frame">
            <FaNodeJs className="icons node" />
          </div>
          <h3>NodeJs</h3>
        </div>
        <div className="skills-list">
          <div className="icon-frame">
            <FaGithub className="icons github" />
          </div>
          <h3>Github</h3>
        </div>
      </div>
    </div>
  );
};
