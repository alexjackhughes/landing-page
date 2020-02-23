import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              {/* <a className="navbar-item" href="/">
                <Logo />
              </a> */}
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
                <a className="navbar-item has-text-weight-bold">WORK</a>
                <a className="navbar-item has-text-weight-bold">BLOG</a>
                <span className="navbar-item">
                  <button className="button is-rounded is-link is-outlined">
                    <span className="icon is-medium">
                      <i className="fad fa-paper-plane" />
                    </span>
                    <span className="has-text-weight-bold">message me</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
          {isActive && (
            <aside className="menu has-text-right is-hidden-desktop">
              <ul className="menu-list">
                <li>
                  <a className="has-text-weight-bold is-size-2-mobile">WORK</a>
                </li>
                <li>
                  <a className="has-text-weight-bold is-size-2-mobile">BLOG</a>
                </li>
                <li>
                  <a className="has-text-weight-bold is-size-2-mobile">
                    MESSAGE
                  </a>
                </li>
              </ul>
            </aside>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
