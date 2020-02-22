import React from "react";

const Hero: React.FC = () => (
  <>
    <div className="hero is-primary is-medium is-fullheight">
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
                className="navbar-burger burger"
                data-target="navbarMenuHeroA"
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
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hi there!</h1>
          <h2 className="subtitle">
            My name is Alexander Jack Hughes, but you can call me Alex.
          </h2>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
