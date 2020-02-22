import React from "react";
import Navigation from "./Navigation";
import Layout from "./Layout";

const Hero: React.FC = () => (
  <>
    <div className="hero is-primary is-medium is-fullheight">
      <Navigation />
      <div className="hero-body">
        <Layout>
          <h1 className="title is-1">Hi, I'm Alex!</h1>
          <h2 className="subtitle">
            My name is Alexander Jack Hughes, but you can call me Alex.
          </h2>
        </Layout>
      </div>
    </div>
  </>
);

export default Hero;
