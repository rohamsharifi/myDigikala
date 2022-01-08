import React from "react";

import ad1 from "../../../images/adds/ad1.jpg";
import ad2 from "../../../images/adds/ad2.jpg";
import ad3 from "../../../images/adds/ad3.jpg";
import ad3_1 from "../../../images/adds/ad3_1.gif";
import ad3_2 from "../../../images/adds/ad3_2.jpg";
import ad3_3 from "../../../images/adds/ad3_3.jpg";
import ad3_4 from "../../../images/adds/ad3_4.jpg";
import add4 from "../../../images/adds/add4.jpg";

import "../../../images/adds/add3.css";
import "../../../images/adds/add1.css";
import "../../../images/adds/add4.css";
import "./divStyle.css";

const Ad1 = () => {
  return (
    <div className="row">
      <div className="col-sm-8 px-sm-0 pl-sm-3">
        <img src={ad3} className="divStyle mt-3" />
      </div>
      <div className="col-sm-4">
        <img src={ad1} className="divStyle1 mt-3" />
        <img src={ad2} className="divStyle1 mt-3"/>
      </div>
    </div>
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-12">
    //       <img src={add4} className="add4" />
    //     </div>
    //   </div>
    //   <div className="row g-5">
    //     <div className="col-8 bg-danger">
    //       hi
          
    //     </div>
    //     <div className="col-4 bg-primary">
    //       hi
    //       <img src={ad1} className="add1" />
    //       <img src={ad2} className="add1" />
    //     </div>
    //   </div>
    //</div>
  );
};

export default Ad1;
