import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";
import cleanshirt from "../../assets/cleanshirt.png";

const Projects = () => {
  return (
    <div className="projectsWrapper">
      {/* Skew */}
      <div id="skew0" className="cus-div">
        <div className="content">
          <h3>
            Projects <i class="fa-regular fa-folder-closed fa-xs"></i>
          </h3>
          <p>
            <strong>Lets skip the boring part</strong> and get into what I have
            actually done. Here is a selection of projects that I have been
            working on.
          </p>
        </div>
      </div>

      <div id="skew1" className="cus-div">
        <div className="projectContent">
          <div className="left">
            <img src={cleanshirt} alt="Clean Shirt" />
          </div>
          <div className="right">
            <p className="projectText">
              {" "}
              <strong className="darkFont">CLEANSHiRT</strong> - Fullstack MERN
              application. Fully functional E-Commerce site with possibility to
              place orders, see historical orders and place reviews. Here I have
              tried to showcase most of my abilities and this project has a lot
              of fun going on under the surface!
            </p>
            <Link>VISIT SITE</Link>
          </div>
        </div>
      </div>
      <div id="skew2" className="cus-div">
        <div className="content">
          <p>PROJECT 2</p>
        </div>
      </div>
      <div id="skew3" className="cus-div">
        <div className="content">
          <p>PROJECT 3</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
