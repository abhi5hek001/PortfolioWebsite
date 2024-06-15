import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Abhishek Sahay",
  title: "Full Stack Web Developer & Fitness Enthusiast",
  email: "sahayabhishek.edu@gmail.com",
  gitHub: "abhi5hek001",
  instagram: "___abhi5hek___/",
  linkedIn: "abhi5hek001/",
  codeforces: "abhi5hek001",
};

const primaryColor = "#526D82";
const secondaryColor = "#4f4f4f";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
