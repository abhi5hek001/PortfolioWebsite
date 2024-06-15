import React from "react";
import image from "../images/abstract-shapes.avif";

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
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        className="about-div"
        style={{
          backgroundColor: "rgba(255, 156, 45, 0.8)",
          width: "50%",
          borderRadius: "3em",
          padding: "4rem",
          fontFamily: "garamond",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul style={{ listStyleType: "circle" }} className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <hr />
        <p className="details" style={{ padding: "1rem 3rem 0" }}>
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
