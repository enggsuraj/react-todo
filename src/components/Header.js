import React from "react";
import "../App.css";

import Banner from "../images/dev.svg";

function Header() {
  return (
    <div className="header bg-light p-3 my-3 rounded">
      <div className="d-flex align-items-center">
        <div class="me-4">
          <img class="img-fluid banner" src={Banner} alt="" />
        </div>
        <div>
          <h4 class="bg-light">React - To Do Planner</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adi pisicing elit. Voluptatem
            earum option.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
