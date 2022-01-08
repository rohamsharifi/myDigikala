import React, { useContext } from "react";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";

import Product from "./Product";
import freeDelivery from "../../../images/freeDelivery.png";

import "./productStyle.css";
import "./categoriesStyle.css";
import "./divSize.css";
import "./freeDelivery.css";
import "./freeDeliveryImage.css";
import "./inputStyle.css";
import "./scrollbar.css";
import "./brandSearch.css";
import "./productBorder.css";
import "./cardImageStyle.css";
import "./shadow.css";

const Products = ({ products }) => {
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

  let filtered = []
  console.log(productArray)
  
  if (isMain) {
    filtered = productArray.filter(product => product.mainCategory2 === productCategory)
  }
  else {
    filtered = productArray.filter(product => product.subCategory2 === productCategory)
  }

  return (
    <div className="container-fluid">
      {isMain === true ? (
        <div className="row bg-white p-2 mt-3 categoriesStyle">
          <p>دسته بندی ها</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-2-5 mt-4">
          <div
            className="bg-white pt-3 pl-3 freeDelivery"
            style={{ borderRadius: 8 }}
          >
            <p style={{ fontSize: 13, color: "#424750", fontWeight: "bold" }}>
              ارسال رایگان سفارش
            </p>
            <p
              style={{
                color: "#81858b",
                fontSize: 12,
                float: "right",
                marginTop: -10,
              }}
            >
              سفارش های بالای ۳۰۰۰۰۰ تومان
            </p>
            <img
              src={freeDelivery}
              alt=""
              className="freeDeliveryImage"
              style={{ marginRight: 22, marginTop: -55 }}
            />
          </div>
          <div className="freeDelivery bg-white mt-2 py-2 px-1">
            <p
              className="ml-3"
              style={{ color: "#535353", fontSize: 13, fontWeight: "bold" }}
            >
              دسته بندی نتایج
            </p>
            <hr style={{ marginTop: -10 }} />
            <p
              className="ml-4"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              کالای دیجیتال
            </p>
            <p
              className="ml-5"
              style={{
                color: "#515151",
                fontSize: 12,
                marginTop: -6,
                fontWeight: "bold",
              }}
            >
              لوازم جانبی گوشی موبایل
            </p>
            <p
              className="ml-5"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              کیف و کاور گوشی
            </p>
            <p
              className="ml-5"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              محافظ صفحه نمایش گوشی
            </p>
            <p
              className="ml-5"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              پایه نگهدارنده گوشی و تبلت
            </p>
            <p
              className="ml-5"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              کابل و مبدل
            </p>
            <p
              className="ml-5"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              قطعات جانبی موبایل و تبلت
            </p>
            <p
              className="ml-5"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              باتری گوشی
            </p>
            <p
              className="ml-5"
              style={{ color: "#545454", fontSize: 12, marginTop: -6 }}
            >
              کیت تمیز کننده
            </p>
          </div>
          <div className="freeDelivery bg-white mt-2 py-2 px-1">
            <p
              className="ml-3"
              style={{ color: "#535353", fontSize: 13, fontWeight: "bold" }}
            >
              جستجو در نتایج
            </p>
            <hr style={{ marginTop: -10 }} />
            <input
              id="search-input"
              type="search"
              id="form1"
              className="form-control inputStyle"
              placeholder="جستجو در دیجی کالا ..."
            />
          </div>
          <div className="freeDelivery bg-white mt-2 py-2 px-1">
            <p
              className="ml-3"
              style={{ color: "#535353", fontSize: 13, fontWeight: "bold" }}
            >
              برند
            </p>
            <hr style={{ marginTop: -10 }} />
            <div style={{ height: 42 }}>
              <input
                id="search-input"
                type="search"
                id="form1"
                className="form-control brandSearch"
                placeholder="جستجوی نام برند..."
              />
              <hr style={{ marginTop: 10 }} />
            </div>
            <div className="scrollbar">
              <ul>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
              </ul>
            </div>
          </div>
          <div className="freeDelivery bg-white mt-2 py-2 px-1">
            <p
              className="ml-3"
              style={{ color: "#535353", fontSize: 13, fontWeight: "bold" }}
            >
              فروشنده
            </p>
            <hr style={{ marginTop: -10 }} />
            <div>
              <ul style={{ color: "#3b3b3b", fontSize: 13 }}>
                <li>دیجی کالا</li>
                <li style={{ marginTop: 10 }}>فروشنده رسمی برند</li>
                <li style={{ marginTop: 10 }}>فروشنده برگزیده</li>
                <li style={{ marginTop: 10 }}>کسب و کار های بومی</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-8-5 bg-white mt-4" style={{ marginRight: 20 }}>
          <div className="row" style={{ paddingRight: 15, paddingLeft: 15 }}>
            {filtered.map((product) => (
              <div className="col-4  shadow1 productBorder">
                <div className="card" style={{ borderRadius: 0, borderColor: "white" }}>
                  <Link to={`/product/${product.name}`} onClick={() => {setProductName(product.name); setProductImage(product.image)}}>
                    <img
                      className="card-img-top cardImageStyle mt-4"
                      style={{ height: 170 }}
                      src={product.image}
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="card-body" style={{ padding: 0 }}>
                    <div style={{ height: 45 }}>
                      <Link to={`/product/${product.name}`} style={{ textDecoration: "none" }}>
                        <p className="card-text" style={{ color: "#535353", fontSize: 12, marginTop: 10 }} onClick={() => {setProductName(product.name); setProductImage(product.image)}}>
                          {product.name}
                        </p>
                      </Link>
                    </div>
                    <div style={{ height: 25 }}>
                      {product.number > 0 && product.number < 5 ?
                        <p
                          style={{
                            color: "#ef394e",
                            fontSize: 11,
                          }}
                        >
                          تنها &zwnj; {product.number} &zwnj; عدد &zwnj; در
                          &zwnj; انبار &zwnj; باقی &zwnj; مانده &zwnj; است
                        </p>
                        : null
                      }
                    </div>
                    {product.number !== 0 ?
                      <div>
                        {product.discount === 0 ?
                          <div>
                            <p style={{ textAlign: "left" }}>{product.price}</p>
                          </div>
                        : 
                          <div>
                            <span className="badge" style={{ backgroundColor: "#fb3449", height: 22, width: 42, color: "white", textAlign: "center", borderRadius: 20, fontSize: 16, paddingTop: 5, marginRight: 181 }}>{product.discount2}</span>
                            <p style={{ textAlign: "left", marginTop: 3 }}>{product.price - product.price * product.discount}</p>
                          </div>
                        }
                      </div>
                    :null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Products;
