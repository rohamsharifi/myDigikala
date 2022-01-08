import React from "react";

import add14 from "../../../images/adds/ad14.jpg";
import add15 from "../../../images/adds/ad15.jpg";
import add16 from "../../../images/adds/ad16.jpg";
import add17 from "../../../images/adds/ad17.jpg";

import "../../../images/adds/add6.css";

const Ad4 = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <img src={add14} className="add6-1" />
        </div>
        <div className="col-3">
          <img src={add15} className="add6-2" />
        </div>
        <div className="col-3">
          <img src={add16} className="add6-3" />
        </div>
        <div className="col-3">
          <img src={add17} className="add6-4" />
        </div>
      </div>
    </div>
  );
};

export default Ad4;