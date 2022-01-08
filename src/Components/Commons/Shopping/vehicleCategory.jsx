import React, {useContext} from "react";
import { Context } from "../../../Context";

import "./productCategory.css";
import "./categoryAmazingOffer.css";
import "../../../images/adds/categoryAd1.css";

import categoryImage1 from "../../../images/adds/vehicleCategory/categoryImage1.jpg"
import categoryImage2 from "../../../images/adds/vehicleCategory/categoryImage2.jpg"
import categoryImage3 from "../../../images/adds/vehicleCategory/categoryImage3.jpg"
import categoryImage4 from "../../../images/adds/vehicleCategory/categoryImage4.jpg"
import categoryImage5 from "../../../images/adds/vehicleCategory/categoryImage5.jpg"
import categoryImage6 from "../../../images/adds/vehicleCategory/categoryImage6.jpg"
import categoryImage7 from "../../../images/adds/vehicleCategory/categoryImage7.jpg"
import categoryImage8 from "../../../images/adds/vehicleCategory/categoryImage8.jpg"
import categoryImage9 from "../../../images/adds/vehicleCategory/categoryImage9.jpg"
import categoryImage10 from "../../../images/adds/vehicleCategory/categoryImage10.jpg"
import categoryImage11 from "../../../images/adds/vehicleCategory/categoryImage11.jpg"
import categoryImage12 from "../../../images/adds/vehicleCategory/categoryImage12.jpg"
import categoryImage13 from "../../../images/adds/vehicleCategory/categoryImage13.jpg"
import categoryImage14 from "../../../images/adds/vehicleCategory/categoryImage14.jpg"
import categoryImage15 from "../../../images/adds/vehicleCategory/categoryImage15.jpg"
import categoryImage16 from "../../../images/adds/vehicleCategory/categoryImage16.jpg"
import categoryImage17 from "../../../images/adds/vehicleCategory/categoryImage17.jpg"
import categoryImage18 from "../../../images/adds/vehicleCategory/categoryImage18.jpg"
import vehicleCategoryAd from "../../../images/adds/vehicleCategory/vehicleCategoryAd.jpg"
import CategoryProductDiv from "./CategoryProductDiv";
import Products from "../Products/Products";

const VehicleCategory = () => {

  const {products, electronicCategory, vehicleCategory, apparelCategory, motherAndChildCategory, foodCategory} = useContext(Context)

  return (
    <div className="rtl">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 productCategory">
            <p style={{ color: "#535353", fontSize: 14 }}>
              دسته بندی &zwnj; کالا ها
            </p>
            {vehicleCategory.map((category) => (
              <div>
                <p style={{ color: "#545454", fontSize: 13, marginRight: 5 }}>{category.mainCategory}</p>
                {category.subCategories.map((sub) => (
                  <div>
                    <p style={{ color: "#545454", fontSize: 11, marginRight: 15, marginBottom: -10 }}>{sub}</p>
                    <br />
                  </div>
                ))}
                <hr />
              </div>
            ))}
          </div>
          <div className="col-9">
            <img src={vehicleCategoryAd} className="categoryAd1" />
            <div className="categoryAmazingOffer">
              <p>پیشنهاد شگفت انگیز</p>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={categoryImage1} className="categoryImage1" />
              </div>
              <div className="col-3">
                <img src={categoryImage2} className="categoryImage1" />
              </div>
              <div className="col-3">
                <img src={categoryImage3} className="categoryImage1" />
              </div>
              <div className="col-3">
                <img src={categoryImage4} className="categoryImage1" />
              </div>
            </div>
            <CategoryProductDiv title={"نور و روشنایی"} />
            <CategoryProductDiv title={"لوازم خودرو و موتورسیکلت"} />
            <CategoryProductDiv title={"ابزار برقی و دستی"} />
            <CategoryProductDiv title={"پرتکرارترین محصولات"} />
            <div className="row">
              <div className="col-6">
                <img src={categoryImage5} className="categoryImage3" />
              </div>
              <div className="col-6">
                <img src={categoryImage6} className="categoryImage3" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={categoryImage7} className="categoryImage3" />
              </div>
              <div className="col-6">
                <img src={categoryImage8} className="categoryImage3" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img src={categoryImage9} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage10} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage11} className="categoryImage2" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img src={categoryImage12} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage13} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage14} className="categoryImage2" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img src={categoryImage15} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage16} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage17} className="categoryImage2" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img src={categoryImage18} className="categoryImage2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCategory;
