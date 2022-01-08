import React, { useContext } from "react";

import { Context } from "../../../Context";
import add5 from "../../../images/adds/add5.png";

import "../../../images/adds/add5.css";
import "./AOProductStyle.css"

const AmazingOffer = ({ backgroundColor }) => {
  const {
    digitalProduct,
    electronicCategory,
    vehicleCategory,
    apparelCategory,
    motherAndChildCategory,
    foodCategory,
    isMain,
    setIsMain,
    offerCounter,
    setOfferCounter,
  } = useContext(Context);

  let filtered = [];
  let filtered2 = [];

  const handleFilterProducts = () => {
    filtered = digitalProduct.filter((product) => product.discount >= 0.1);
    for (let i = offerCounter * 3; i < offerCounter * 3 + 3; i++) {
      filtered2.push(filtered[i]);
    }
  };

  return (
    <div
      className="row"
      style={{
        backgroundColor: backgroundColor,
        marginTop: 15,
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <div className="col-3" style={{ marginTop: 120, height: 250 }}>
        <img src={add5} className="add5" />
      </div>
    </div>
  );
};

export default AmazingOffer;
