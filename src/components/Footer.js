import React from "react";
import { Github } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer container bg-light py-3 px-4 mt-3 rounded d-flex justify-content-between">
      <div>blogtheorem.com</div>
      <div>
        <Github size={22} />
      </div>
    </div>
  );
}

export default Footer;
