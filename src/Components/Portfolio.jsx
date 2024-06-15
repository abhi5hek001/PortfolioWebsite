import React from "react";
import "../styles.css";
import image from "../images/coder.jpg";

const imageAltText = "coder coding on desktop";
const projectList = [
  {
    title: "SafeSky: A Revolutionary Aerial Hazard Monitoring System.",
    description:
      "Our team, Vishisht, developed a full-fledged website under time constraints of 32 hours during Smart India Hackathon 2023 held in Chittoor, AP.",
    url: "https://abhi5hek001.github.io/SafeSky/",
    image: require("../images/safesky-project-dp.jpg"),
  },
  {
    title: "NewsMonkey: Your daily News App",
    description:
      "Developed a news app that aggregates daily news across various topics around the world and presents it in one convenient location.",
    url: "https://news-monkey-psi-lac.vercel.app/",
    image: require("../images/newsmonkey-project-dp.jpg"),
  },
  {
    title: "Voice Controlled Gaming Studio",
    description:
      "Developed a gaming website with Team Vishisht, featuring multiple voice-controlled games within a 48-hour time constraint during Global Game Jam 2023.",
    url: "https://abhi5hek001.github.io/Gaming-Hub/",
    image: require("../images/gaming-project-dp.jpg"),
  },
  {
    title: "Daily Motivation Quote Generator",
    description:
      "Designed and developed a website for generating random motivational quotes with a single click.",
    url: "https://abhi5hek001.github.io/Quote-Generator/",
    image: require("../images/quote-project-dp.jpg"),
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      style={{ backgroundColor: "#FAFBFD" }}
    >
      <h2 style={{ textAlign: "center", fontFamily: "garamond" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          paddingTop: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: "50%",
            alignSelf: "center",
            width: "100%",
          }}
        >
          <img
            className="portfolio-dp"
            src={image}
            style={{
              transform: "scaleX(-1)",
              height: "auto",
              width: "100%",
              objectFit: "cover",
            }}
            alt={imageAltText}
          />
        </div>

        <div className="container" >
          {projectList.map((project) => (
            <div
              style={{ maxwidth: "50%" }}
              className="box"
              key={project.title}
            >
              <img
                src={project.image}
                style={{ width: "100%" }}
                alt="project-dp"
              ></img>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3
                  style={{
                    flexBasis: "40px",
                    fontFamily: "garamond",
                    marginTop: "1em",
                  }}
                >
                  {project.title}
                </h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
