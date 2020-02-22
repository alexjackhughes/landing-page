import React from "react";
import CountUp from "react-countup";
import Layout from "./Layout";

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
    <section className="hero is-info is-fullheight">
      <div className="hero-head has-margin-top-large">
        <div className="container">
          <h2 className="title is-1 is-pulled-right has-right-margin-on-mobile">
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
                <div className="level-item has-text-centered">
                  <div>
                    <span className="icon fad fa-acorn fa-3x is-large has-text-white" />
                    <p className="heading">Followers</p>
                    <p className="title">456K</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <span className="icon fad fa-acorn fa-3x is-large has-text-white" />
                    <p className="heading">Followers</p>
                    <p className="title">456K</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <span className="icon fad fa-acorn fa-3x is-large has-text-white" />
                    <p className="heading">Followers</p>
                    <p className="title">456K</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Section;
