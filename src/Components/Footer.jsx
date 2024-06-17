import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/email.png";
import gitHubIcon from "../images/socials/github.png";
import instagramIcon from "../images/socials/instagram.png";
import linkedInIcon from "../images/socials/linkedin.png";
import codeforcesIcon from "../images/socials/codeforces.svg";


const Footer = (props) => {
  const {
    email,
    gitHub,
    instagram,
    linkedIn,
    name,
    twitter,
    youTube,
    codeforces,
  } = props;

  return (
    <>
      <section
        id="footer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
          padding: "5rem 0 3rem",
          backgroundColor: "rgb(255,163,67)",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {email && (
            <a href={`mailto:${email}`}>
              <img src={envelopeIcon} alt="email" className="socialIcon" />
            </a>
          )}
          {gitHub && (
            <a
              href={`https://github.com/${gitHub}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          )}
          {codeforces && (
            <a
              href={`https://codeforces.com/profile/${codeforces}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={codeforcesIcon}
                alt="Codeforces"
                className="socialIcon"
              />
            </a>
          )}
          {instagram && (
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="socialIcon" />
            </a>
          )}
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
            </a>
          )}
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" className="socialIcon" />
            </a>
          )}
          {youTube && (
            <a
              href={`https://www.youtube.com/c/${youTube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
            </a>
          )}
        </div>
        <p className="small" style={{ color: "black", fontSize: "1.1em" }}>
          © Created by {name}
        </p>
      </section>
    </>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
