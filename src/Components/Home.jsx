import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/character.jpg";
import '../styles.css'; 

const imageAltText = "A smart teenager doing development in his laptop";

const Home = ({ name, title }) => {
  return (
    <section id="home">
      <div className="home-avatar-div" style={{height: "125vh", width: "100vw"}}>
      <img className="home-avatar" style={{width: "100%", height: "100%", margin: "auto"}} src={image} alt="" />
      </div>
      <div style={{ position: "absolute", color: "white", top: "15rem", left: "2rem", width: "17rem"}}>
        <h1 className="name">{name}</h1>
        <h2 className="title">{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "18rem", right: "5%" }}>
        <img href={"#portfolio"} src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
