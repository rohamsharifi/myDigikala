import React from "react";

import ad18 from "../../../images/adds/ad18.jpg";
import ad19 from "../../../images/adds/ad19.jpg";

import "../../../images/adds/add10.css";

const Ad5 = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src={ad18} className="add10" />
        </div>
        <div className="col-6">
          <img src={ad19} className="add10-1" />
        </div>
      </div>
    </div>
  );
};

export default Ad5;