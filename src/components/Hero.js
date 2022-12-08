import "./Hero.css";

export const Hero = () => {
  return (
    <div className="Title-container">
      <div className="title-left">
        <h1>Anthony Nelson</h1>
        <p className="title-info">
          A <span className="front-end">Front-End Web Developer</span>, I'm
          passionate about devloping and building applications that lead to the
          success of the overall product.
        </p>
        <button className="hire-me-btn"> Download CV</button>
      </div>
    </div>
  );
};