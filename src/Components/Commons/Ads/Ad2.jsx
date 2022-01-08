import React from "react";

import add6 from "../../../images/adds/add6.jpg";
import add7 from "../../../images/adds/add7.jpg";
import add8 from "../../../images/adds/add8.jpg";
import add9 from "../../../images/adds/add9.jpg";
import add10 from "../../../images/adds/add10.jpg";
import add11 from "../../../images/adds/add11.jpg";

import "../../../images/adds/add5.css";
import "../../../images/adds/add6.css";
import "../../../images/adds/add10.css";

const Ad2 = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <img src={add6} className="add6-1 mt-3" />
        </div>
        <div className="col-sm-3 col-xs-6">
          <img src={add7} className="add6-1 mt-3" />
        </div>
        <div className="col-sm-3 col-xs-6">
          <img src={add8} className="add6-1 mt-3" />
        </div>
        <div className="col-sm-3 col-xs-6">
          <img src={add9} className="add6-1 mt-3" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-sm-6">
              <img src={add10} className="add6-1 mt-3" />
            </div>
            <div className="col-sm-6">
              <img src={add11} className="add6-1 mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad2;
