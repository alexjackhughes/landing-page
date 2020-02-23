import React from "react";
import Navigation from "./Navigation";
import Layout from "./Layout";
import ReactRotatingText from "react-rotating-text";

import { ReactComponent as TopCurve } from "../images/curve-primary-top.svg";

const items: string[] = [
  "startup founder",
  "Node back-end engineer",
  "TypeScript aficionado",
  "React front-end developer",
  "AWS-certified architect",
  "coding mentor"
];

const SVG_STYLE = { display: "block", marginBottom: "-0.5rem" };

const Hero: React.FC = () => (
  <>
    <div className="hero is-medium is-fullheight">
      <Navigation />
      <div className="hero-body">
        <Layout>
          <h1 className="title is-1" id="hero-title">
            Hi, I'm Alex!
          </h1>
          <h2 className="subtitle" id="hero-tagline">
            I'm a{" "}
            <ReactRotatingText items={items} className="has-text-primary" />.
          </h2>
        </Layout>
      </div>
      <div className="hero-bottom">
        <TopCurve style={SVG_STYLE} className="is-marginless	is-paddingless" />
      </div>
    </div>
  </>
);

export default Hero;
