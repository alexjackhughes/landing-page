import React from "react";
import Layout from "./Layout";

const Message: React.FC = () => (
  <>
    <div className="hero is-primary is-medium is-fullheight">
      <div className="hero-body">
        <Layout>
          <h2 className="title is-1">So, what's next future friend?</h2>
          <h3 className="subtitle">
            I'm always open to new ideas and opportunities to grow; from
            mentoring juniors to building new startups. If there's anything you
            want to say, here is the button.
          </h3>
          <button className="button is-medium is-rounded is-danger is-outlined">
            <span className="icon is-medium">
              <i className="fad fa-paper-plane" />
            </span>
            <span className="has-text-weight-bold	">Let's chat</span>
          </button>
        </Layout>
      </div>
    </div>
  </>
);

export default Message;
