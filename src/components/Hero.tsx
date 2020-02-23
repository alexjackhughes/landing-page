import React from "react";
import Navigation from "./Navigation";
import Layout from "./Layout";
import ReactRotatingText from "react-rotating-text";

const items: string[] = [
  "startup founder",
  "Node Backend Engineer",
  "TypeScript aficionado",
  "React Frontend Developer",
  "coding mentor"
];

const Hero: React.FC = () => (
  <>
    <div className="hero is-primary is-medium is-fullheight">
      <Navigation />
      <div className="hero-body">
        <Layout>
          <h1 className="title is-1" id="hero-title">
            Hi, I'm Alex!
          </h1>
          <h2 className="subtitle" id="hero-tagline">
            I'm a <ReactRotatingText items={items} />.
          </h2>
        </Layout>
      </div>
    </div>
  </>
);

export default Hero;
