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
      <div className="hero-head">
        <h2 className="title">
          <CountUp
            start={start}
            end={end}
            duration={3}
            delay={5} // want to do on start when component is visited
            onStart={() => console.log("Started! 💨")}
          />
        </h2>
      </div>
      <div className="hero-body">
        <Layout>
          <h2 className="title is-1">{title}</h2>
          <h3 className="subtitle">{description}</h3>
        </Layout>
      </div>
      <div className="hero-foot">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Tweets</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="title">123</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="title">456K</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">789</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </>
);

export default Section;
