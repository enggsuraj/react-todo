import React from "react";
import { Github } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer container bg-light py-3 px-4 mt-3 rounded d-flex justify-content-between">
      <div>
        <a href="https://blogtheorem.com" target="_blank" rel="noreferrer">
          blogtheorem.com
        </a>
      </div>
      <div>
        <a href="https://github.com/enggsuraj" target="_blank" rel="noreferrer">
          {" "}
          <Github size={22} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
