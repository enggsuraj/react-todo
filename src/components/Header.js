import React from "react";
import "../App.css";

import Banner from "../images/dev.svg";

function Header() {
  return (
    <div className="header bg-light p-3 my-3 rounded">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 d-none d-sm-block">
            <img className="img-fluid w-100" src={Banner} alt="" />
          </div>
          <div className="col-12 col-sm-8">
            <h4 className="bg-light">React - ToDo</h4>
            <div>
              Lorem ipsum dolor sit amet consectetur adi pisicing elit.
              Voluptatem earum option.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
