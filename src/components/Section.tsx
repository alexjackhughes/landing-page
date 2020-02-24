import React from "react";
import CountUp from "react-countup";
import Layout from "./Layout";
import Blurb from "./Blurb";
import { ReactComponent as TopCurve } from "../images/curves/light.svg";

interface Props {
  title: string;
  description: string;
  counter: {
    start: number;
    end: number;
  };
}

const Section: React.FC<Props> = ({
  title,
  description,
  counter: { start, end }
}) => (
  <>
    <section className="hero is-medium is-fullheight">
      <div className="hero-head has-margin-top-large">
        <div className="container">
          <h2
            className="title is-1 is-pulled-right has-right-margin-on-mobile transparent"
            id="hero-title"
          >
            <CountUp
              start={start}
              end={end}
              duration={3}
              delay={5} // TODO: set onStart with Tornis based on percentage of page viewed
            />
          </h2>
        </div>
      </div>
      <div className="hero-body">
        <Layout>
          <h2 className="title is-1">{title}</h2>
          <h3 className="subtitle">{description}</h3>
        </Layout>
      </div>
      <div className="hero-foot has-margin-bottom-large">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <nav className="level is-mobile">
                <Blurb icon="fa-acorn" heading="Followers" title="456K" />
                <Blurb icon="fa-acorn" heading="Followers" title="456K" />
                <Blurb icon="fa-acorn" heading="Followers" title="456K" />
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <TopCurve className="curve is-marginless is-paddingless" />
      </div>
    </section>
  </>
);

export default Section;
