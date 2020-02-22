import React from "react";
import Layout from "./Layout";

const Message: React.FC = () => (
  <>
    <div className="hero is-primary is-medium is-fullheight">
      <div className="hero-body">
        <Layout>
          <h2 className="title is-1">So, what's next future friend?</h2>
          <h3 className="subtitle">
            Right now, I'm pretty happy working towards giving people
            transparency with their money - but who knows what the future holds?
            I've been known to dabble in startups, and mentor juniors, and build
            apps on the side; so if you have something that might be
            interesting, why not set up a coffee?
          </h3>
          <button className="button">
            <span>Let's chat</span>
            <span className="icon">
              <i className="fad fa-paper-plane has-text-danger" />
            </span>
          </button>
        </Layout>
      </div>
    </div>
  </>
);

export default Message;
