import React from "react";
import image from "../images/abstract-shapes.avif";
import "../styles.css";

const imageAltText = "abstract background";

const description =
  "I'm a passionate full-stack web developer pursuing Computer Science at Indian Institute of Information Technology, Sricity.";

const skillsList = [
  "MERN Stack",
  "Web design",
  "Deployment of web-apps",
  "Web-apps maintenance",
  "Leadership",
  "Teamwork",
];

const detailOrQuote = `Hey there! I'm Abhishek Sahay, deeply passionate about full-stack web development and committed to personal fitness. My journey blends the thrill of coding with a dedication to staying active, as I strive to create captivating web experiences while promoting a healthy lifestyle. Let's combine technology and fitness to build something truly impactful together!`;

const About = () => {
  return (
    <section className="about-section" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ backgroundColor: "rgba(255, 163, 67, 0.75)", borderRadius: "30px"}} className="about-div">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="details">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
