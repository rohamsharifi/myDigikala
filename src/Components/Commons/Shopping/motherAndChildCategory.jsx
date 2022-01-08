import React, {useContext} from "react";
import { Context } from "../../../Context";

import "./productCategory.css";
import "./categoryAmazingOffer.css";
import "../../../images/adds/categoryAd1.css";
import "./categoryImage2.css"

import categoryImage1 from "../../../images/adds/motherAndChildCategory/categoryImage1.jpg"
import categoryImage2 from "../../../images/adds/motherAndChildCategory/categoryImage2.jpg"
import categoryImage3 from "../../../images/adds/motherAndChildCategory/categoryImage3.jpg"
import categoryImage4 from "../../../images/adds/motherAndChildCategory/categoryImage4.jpg"
import categoryImage5 from "../../../images/adds/motherAndChildCategory/categoryImage5.jpg"
import categoryImage6 from "../../../images/adds/motherAndChildCategory/categoryImage6.jpg"
import categoryImage7 from "../../../images/adds/motherAndChildCategory/categoryImage7.jpg"
import categoryImage8 from "../../../images/adds/motherAndChildCategory/categoryImage8.jpg"
import motherAndChildCategoryAd from "../../../images/adds/motherAndChildCategory/motherAndChildCategoryAd.jpg"
import CategoryProductDiv from "./CategoryProductDiv";
import Products from "../Products/Products";

const MotherAndChildCategory = () => {

    const {products, electronicCategory, vehicleCategory, apparelCategory, motherAndChildCategory, foodCategory} = useContext(Context)
  
  return (
    <div className="rtl">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 productCategory">
            <p style={{ color: "#535353", fontSize: 14 }}>
              دسته بندی &zwnj; کالا ها
            </p>
            {motherAndChildCategory.map((category) => (
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
            <img src={motherAndChildCategoryAd} className="categoryAd1" />
            <div className="categoryAmazingOffer">
              <p>پیشنهاد شگفت انگیز</p>
            </div>
            <div className="row">
              <div className="col-4">
                <img src={categoryImage1} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage2} className="categoryImage2" />
              </div>
              <div className="col-4">
                <img src={categoryImage3} className="categoryImage2" />
              </div>
            </div>
            <CategoryProductDiv title={"اسباب بازی"} />
            <CategoryProductDiv title={"پرتکرارترین محصولات"} />
            <div className="row">
              <div className="col-6">
                <img src={categoryImage4} className="categoryImage3" />
              </div>
              <div className="col-6">
                <img src={categoryImage5} className="categoryImage3" />
              </div>
            </div>
            <p style={{ color: "#555", marginTop: 15 }}>برندهای برتر</p>
            <div className="row">
              <div className="col-3">
                <img src={categoryImage6} className="categoryImage1" style={{ marginTop: -5 }} />
              </div>
              <div className="col-3">
                <img src={categoryImage7} className="categoryImage1" style={{ marginTop: -5 }}/>
              </div>
              <div className="col-3">
                <img src={categoryImage8} className="categoryImage1" style={{ marginTop: -5 }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherAndChildCategory;
