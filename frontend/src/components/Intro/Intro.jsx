import React from "react";
import "./Intro.scss";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="introWrapper">
      <div className="introContent">
        <h2>Frontend Developer</h2>
        <p> <strong> Hi! I am Carl</strong>      , a 34 year old developer who has creativity inscripted in my geenes. I have been experimenting with design, art and music for as long as I can remember, and I really love what I am doing! </p>
        <Link>CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Intro;
