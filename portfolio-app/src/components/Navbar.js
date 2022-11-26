import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="profile-page sidebar-collapse">
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary">
          <div className="container">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#contact-form">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
