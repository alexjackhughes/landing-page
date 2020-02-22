import React from "react";
import moment from "moment";

const Footer: React.FC = () => (
  <>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Built with <i className="fad fa-heart-circle has-text-danger" /> by
          Alex
        </p>
        <p>© {moment().format("YYYY")}</p>
      </div>
    </footer>
  </>
);

export default Footer;
