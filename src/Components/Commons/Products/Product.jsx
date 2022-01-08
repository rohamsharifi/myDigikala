import React, { useContext } from "react";
import { Context } from "../../../Context";

import "../../../images/products/productImage.css";
import "./productStyle.css";
import "./productImagStyle.css"
import "./sellerStyle.css"
import "./prductProperties.css"

const Product = () => {

  const {
    digitalProduct,
    vehicleProducts,
    electronicCategory,
    vehicleCategory,
    apparelCategory,
    motherAndChildCategory,
    foodCategory,
    isMain,
    setIsMain,
    productCategory,
    setProductCategory,
    productArray,
    setProductArray,
    productName,
    setProductName,
    productImage,
    setProductImage
  } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row bg-white" style={{ marginRight: -40, width: 1300, height: "auto" }}>
        <div className="col-3 mt-5">

        </div>
        <div className="col-9 mt-5">
          <div>
            <p>
              {productName}
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-white" style={{ marginRight: -40, width: 1300, height: "auto" }}>
        <div className="col-3" style={{ marginTop: 1 }}>
          <img src={productImage} className="productImagStyle"/>
        </div>
        <div className="col-4" style={{ marginTop: -15 }}>
          <div className="prductProperties">
            <hr />
          </div>
        </div>
        <div className="col-3">
          <div className="sellerStyle px-3 pt-3 pb-1">
           <p style={{ color: "#515151", fontSize: 14 }}>فروشنده</p>
           <div>
             <p style={{ marginTop: 10, color: "#424750", fontSize: 13 }}>اسم فروشگاه</p>
             <p style={{ marginTop: -14, color: "gray", fontSize: 11 }}>عملکرد خوب</p>
             <hr />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
