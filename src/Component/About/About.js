import React from "react";
import "./About.css";
import profile from "../images/rsz__mg_5266.jpg";
import { Button } from "bootstrap";
const About = () => {
  return (
    <div className="post-div-main">
      <div className="post-div ">
        <div className="div-set">
          <img src={profile} alt="profile" />
          <h1>Al Shadab Arnab</h1>
          <p>MERN Stack Developer</p>
          <div className="details-div">
            <p>
              <span style={{ fontWeight: "bold" }}>"</span> I am an energetic,
              hardworking, motivated, ambitious person who has developed a
              mature and responsible approach to anytask that I undertake, or
              situation that I am presented with. I always try to achieve the
              highest standard possible. I want to gofar by helping each other.
              I am excellent at working with others. Overall If a person has a
              passion for work, he can doeverything.{" "}
              <span style={{ fontWeight: "bold" }}>"</span>
            </p>
          </div>
          <a href="../Resume/Resume-Al Shadab Arnab.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
