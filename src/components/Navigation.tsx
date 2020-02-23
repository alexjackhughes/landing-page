import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className={`navbar-burger burger ${isActive && "is-active"}`}
                data-target="navbarMenuHeroA"
                onClick={() => setIsActive(!isActive)}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item">Work</a>
                <a className="navbar-item">Resources</a>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <span className="fa-stack">
                        <i className="fad fa-paper-plane fa-stack-1x has-text-danger" />
                      </span>
                    </span>
                    <span>Message</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isActive && (
        <aside className="menu has-text-right is-hidden-desktop">
          <ul className="menu-list">
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navigation;
