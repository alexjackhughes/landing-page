import React from "react";

interface Props {
  icon: string;
  heading: string;
  title: string;
}

const Blurb: React.FC<Props> = ({ icon, heading, title }) => (
  <div className="level-item has-text-centered">
    <div>
      <span className={`icon fad ${icon} fa-3x is-large has-text-white`} />
      <p className="heading">{heading}</p>
      <p className="title">{title}</p>
    </div>
  </div>
);

export default Blurb;
