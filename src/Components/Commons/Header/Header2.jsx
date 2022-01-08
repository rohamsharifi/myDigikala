import React, { useContext, useState } from "react";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";

import "./HeaderLogoStyle.css";
import "./HeaderInputStyle.css";
import "./ProductCategoryList.css";
import "./productsMenuStyle.css";
import "./categoryMenuStyle.css";

const Header2 = () => {
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
    setProductArray
  } = useContext(Context);

  const electronic1 = [];
  const electronic2 = [];
  const electronic3 = [];
  const electronic4 = [];

  const vehicle1 = [];
  const vehicle2 = [];
  const vehicle3 = [];
  const vehicle4 = [];

  const apparel1 = [];
  const apparel2 = [];
  const apparel3 = [];
  const apparel4 = [];

  const motherAndChild1 = [];
  const motherAndChild2 = [];
  const motherAndChild3 = [];
  const motherAndChild4 = [];

  const food1 = [];
  const food2 = [];
  const food3 = [];
  const food4 = [];

  for (let i = 0; i < 3; i++) {
    electronic1.push(electronicCategory[i]);
  }
  for (let i = 3; i < 8; i++) {
    electronic2.push(electronicCategory[i]);
  }
  for (let i = 8; i < 13; i++) {
    electronic3.push(electronicCategory[i]);
  }
  for (let i = 13; i < 21; i++) {
    electronic4.push(electronicCategory[i]);
  }

  for (let i = 0; i < 4; i++) {
    vehicle1.push(vehicleCategory[i]);
  }
  for (let i = 4; i < 6; i++) {
    vehicle2.push(vehicleCategory[i]);
  }
  for (let i = 6; i < 8; i++) {
    vehicle3.push(vehicleCategory[i]);
  }
  for (let i = 8; i < 12; i++) {
    vehicle4.push(vehicleCategory[i]);
  }

  for (let i = 0; i < 4; i++) {
    apparel1.push(apparelCategory[i]);
  }
  for (let i = 4; i < 8; i++) {
    apparel2.push(apparelCategory[i]);
  }
  for (let i = 8; i < 12; i++) {
    apparel3.push(apparelCategory[i]);
  }
  for (let i = 12; i < 22; i++) {
    apparel4.push(apparelCategory[i]);
  }

  for (let i = 0; i < 2; i++) {
    motherAndChild1.push(motherAndChildCategory[i]);
  }
  for (let i = 2; i < 6; i++) {
    motherAndChild2.push(motherAndChildCategory[i]);
  }
  for (let i = 6; i < 8; i++) {
    motherAndChild3.push(motherAndChildCategory[i]);
  }
  for (let i = 8; i < 11; i++) {
    motherAndChild4.push(motherAndChildCategory[i]);
  }

  for (let i = 0; i < 1; i++) {
    food1.push(foodCategory[i]);
  }
  for (let i = 1; i < 3; i++) {
    food2.push(foodCategory[i]);
  }
  for (let i = 3; i < 5; i++) {
    food3.push(foodCategory[i]);
  }
  for (let i = 5; i < 10; i++) {
    food4.push(foodCategory[i]);
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm"
        style={{ height: 30, backgroundColor: "white", marginTop: 70 }}
      >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#616161",
                  fontSize: 13,
                  marginRight: -42,
                  marginTop: 5,
                }}
              >
                دسته بندی &zwnj; کالا ها
              </a>
              <div
                className="dropdown-menu ml-3"
                style={{
                  color: "#616161",
                  fontSize: 13,
                  width: 220,
                  borderRadius: 0,
                  marginTop: -1,
                  borderTopColor: "white",
                  borderbottomColor: "white",
                }}
                aria-labelledby="navbarDropdown"
              >
                <Link
                  to={"/category/electronic"}
                  style={{ textDecoration: "none" }}
                >
                  <div className="dropdown">
                    <button
                      className="btn btn-default ProductCategoryList"
                      type="button"
                      data-toggle="dropdown"
                    >
                      کالای &zwnj; دیجیتال
                      <span className="caret"></span>
                    </button>
                    <div
                      className="dropdown-menu productsMenuStyle"
                      style={{ marginTop: -46 }}
                    >
                      <div className="row py-1 px-2">
                        <div className="col-12">
                          <Link
                            to={"/category/electronic"}
                            style={{
                              textDecoration: "none",
                              color: "#424750",
                              fontSize: 13,
                            }}
                          >
                            <p>همه ی دسته بندی های کالای دیجیتال</p>
                          </Link>
                        </div>
                        <div
                          className="col-3"
                          style={{ borderColor: "#ef394e" }}
                        >
                          {electronic1.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(digitalProduct)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(digitalProduct)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {electronic2.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(digitalProduct)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(digitalProduct)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {electronic3.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(digitalProduct)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(digitalProduct)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {electronic4.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(digitalProduct)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(digitalProduct)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  to={"/category/vehicle"}
                  style={{ textDecoration: "none" }}
                >
                  <div className="dropdown">
                    <button
                      className="btn btn-default ProductCategoryList"
                      type="button"
                      data-toggle="dropdown"
                    >
                      خودرو، &zwnj; ابزار &zwnj; و &zwnj; تجهیزات &zwnj; صنعتی
                      <span className="caret"></span>
                    </button>
                    <div
                      className="dropdown-menu productsMenuStyle"
                      style={{ marginTop: -96 }}
                    >
                      <div className="row py-1 px-2">
                        <div className="col-12">
                          <Link
                            to={"/category/electronic"}
                            style={{
                              textDecoration: "none",
                              color: "#424750",
                              fontSize: 13,
                            }}
                          >
                            <p>همه دسته‌بندی‌های وسایل نقلیه و صنعتی</p>
                          </Link>
                        </div>
                        <div
                          className="col-3"
                          style={{ borderColor: "#ef394e" }}
                        >
                          {vehicle1.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(vehicleProducts)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(vehicleProducts)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {vehicle2.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(vehicleProducts)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(vehicleProducts)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {vehicle3.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(vehicleProducts)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(vehicleProducts)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {vehicle4.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory); setProductArray(vehicleProducts)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(vehicleProducts)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  to={"/category/apparel"}
                  style={{ textDecoration: "none" }}
                >
                  <div className="dropdown">
                    <button
                      className="btn btn-default ProductCategoryList"
                      type="button"
                      data-toggle="dropdown"
                    >
                      مد &zwnj; و &zwnj; پوشاک
                      <span className="caret"></span>
                    </button>
                    <div
                      className="dropdown-menu productsMenuStyle"
                      style={{ marginTop: -148 }}
                    >
                      <div className="row py-1 px-2">
                        <div className="col-12">
                          <Link
                            to={"/category/electronic"}
                            style={{
                              textDecoration: "none",
                              color: "#424750",
                              fontSize: 13,
                            }}
                          >
                            <p>همه دسته‌بندی‌های وسایل نقلیه و صنعتی</p>
                          </Link>
                        </div>
                        <div
                          className="col-3"
                          style={{ borderColor: "#ef394e" }}
                        >
                          {apparel1.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(vehicleProducts)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {apparel2.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub); setProductArray(digitalProduct)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {apparel3.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {apparel4.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  to={"/category/mother-and-child"}
                  style={{ textDecoration: "none" }}
                >
                  <div className="dropdown">
                    <button
                      className="btn btn-default ProductCategoryList"
                      type="button"
                      data-toggle="dropdown"
                    >
                      اسباب بازی، &zwnj; کودک &zwnj; و &zwnj; نوزاد
                      <span className="caret"></span>
                    </button>
                    <div
                      className="dropdown-menu productsMenuStyle"
                      style={{ marginTop: -199 }}
                    >
                      <div className="row py-1 px-2">
                        <div className="col-12">
                          <Link
                            to={"/category/electronic"}
                            style={{
                              textDecoration: "none",
                              color: "#424750",
                              fontSize: 13,
                            }}
                          >
                            <p>همه دسته‌بندی‌های وسایل نقلیه و صنعتی</p>
                          </Link>
                        </div>
                        <div className="col-3">
                          {motherAndChild1.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {motherAndChild2.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {motherAndChild3.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {motherAndChild4.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  onClick={() => {setIsMain(true); setProductCategory(category.mainCategory)}}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2" onClick={() => {setIsMain(false); setProductCategory(sub)}}>{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to={"/category/food"} style={{ textDecoration: "none" }}>
                  <div className="dropdown">
                    <button
                      className="btn btn-default ProductCategoryList"
                      type="button"
                      data-toggle="dropdown"
                    >
                      کالاهای &zwnj; سوپرمارکتی
                      <span className="caret"></span>
                    </button>
                    <div
                      className="dropdown-menu productsMenuStyle"
                      style={{ marginTop: -255 }}
                    >
                      <div className="row py-1 px-2">
                        <div className="col-12">
                          <Link
                            to={"/category/electronic"}
                            style={{
                              textDecoration: "none",
                              color: "#424750",
                              fontSize: 13,
                            }}
                          >
                            <p>همه دسته‌بندی‌های وسایل نقلیه و صنعتی</p>
                          </Link>
                        </div>
                        <div className="col-3">
                          {food1.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  // onClick={() => digitalMainCategoryClick()}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2">{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {food2.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  // onClick={() => digitalMainCategoryClick()}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2">{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {food3.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  // onClick={() => digitalMainCategoryClick()}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2">{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="col-3">
                          {food4.map((category) => (
                            <div>
                              
                              <Link
                                to={`/category/${category.mainCategory}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p
                                  className="categoryMenuStyle1"
                                  // onClick={() => digitalMainCategoryClick()}
                                >
                                  {category.mainCategory}
                                </p>
                              </Link>
                              {category.subCategories.map((sub) => (
                                <Link
                                  to={`/category/${category.mainCategory}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p className="categoryMenuStyle2">{sub}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
            <li
              className="nav-item active"
              style={{
                color: "#616161",
                fontSize: 13,
                marginRight: 20,
                marginTop: 10,
              }}
            >
              سوپرمارکت
            </li>
            <li
              className="nav-item"
              style={{
                color: "#616161",
                fontSize: 13,
                marginRight: 20,
                marginTop: 10,
              }}
            >
              تخفیف ها &zwnj; و &zwnj; پیشنهادها
            </li>
            <li
              className="nav-item"
              style={{
                color: "#616161",
                fontSize: 13,
                marginRight: 20,
                marginTop: 10,
              }}
            >
              دیجی کالای &zwnj; من
            </li>
            <li
              className="nav-item"
              style={{
                color: "#616161",
                fontSize: 13,
                marginRight: 20,
                marginTop: 10,
              }}
            >
              دیجی کلاب
            </li>
            <li
              className="nav-item"
              style={{
                color: "#616161",
                fontSize: 13,
                marginRight: 20,
                marginTop: 10,
              }}
            >
              دیجی پی
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
