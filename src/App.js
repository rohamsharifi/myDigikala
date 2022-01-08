import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "./Context";

import Home from "./Components/Commons/Home/Home";
import Header from "./Components/Commons/Header/Header";
import Header2 from "./Components/Commons/Header/Header2";
import ElectronicCategory from "./Components/Commons/Shopping/electronicCategory";
import VehicleCategory from "./Components/Commons/Shopping/vehicleCategory";
import ApparelCategory from "./Components/Commons/Shopping/apparelCategory";
import MotherAndChildCategory from "./Components/Commons/Shopping/motherAndChildCategory";
import FoodCategory from "./Components/Commons/Shopping/foodCategory";
import Products from './Components/Commons/Products/Products';
import Product from "./Components/Commons/Products/Product";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="rtl">
            <Header />
            <Header2 />
            <div className="container-fluid">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/category/electronic" component={ElectronicCategory} />
                <Route path="/category/vehicle" component={VehicleCategory} />
                <Route path="/category/apparel" component={ApparelCategory} />
                <Route path="/category/mother-and-child" component={MotherAndChildCategory} />
                <Route path="/category/food" component={FoodCategory} />
                <Route path="/category/:id" component={Products} />
                <Route path="/product/:id" component={Product}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
