import React from "react";

import "../../../view.css";

const BasedOnView = ({col, title}) => {
  return (
    <div className={col}>
      <h5>{title}</h5>
      <p style={{ fontSize: 12, marginRight: 2 }}>بر اساس بازدید های شما</p>
    </div>
  );
};

export default BasedOnView;
