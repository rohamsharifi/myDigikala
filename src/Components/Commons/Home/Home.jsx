import React from "react";

import Ad1 from "../Ads/Ad1"
import Ad2 from "../Ads/Ad2";
import Ad3 from "../Ads/Ad3";
import Ad4 from "../Ads/Ad4";
import Ad5 from "../Ads/Ad5";
import AmazingOffer from "../AmazingOffers/AmazingOffer";
import BasedOnView from "../BasedOnView/BasedOnView";
import InstantSuggestions from "../InstantSuggenstions/InstantSuggestions";

const Home = () => {
  return (
    <div>
      <Ad1 />
      <AmazingOffer backgroundColor={"#EF394E"} />
      <Ad2 />
      <AmazingOffer backgroundColor={"#6BB927"} />
      <Ad3 />
      <div className="row">
        <BasedOnView col={"col-8-4 view"} title={"کفش روزمره مردانه"} />
        <InstantSuggestions />
      </div>
      <div className="row">
        <BasedOnView col={"col-11-5 view"} title={"گوشی موبایل"} />
      </div>
      <Ad4 />
      <div className="row">
        <BasedOnView col={"col-11-5 view"} title={"هدفون، هدست و هندزفری"} />
      </div>
      <div className="row">
        <BasedOnView col={"col-11-5 view"} title={"لپ تاپ و الترابوک"} />
      </div>
      <Ad5 />
      <div className="row">
        <BasedOnView col={"col-11-5 view"} title={"ساعت هوشمند"} />
      </div>
      <div className="row">
        <BasedOnView col={"col-11-5 view"} title={"کفش ورزشی مردانه"} />
      </div>
    </div>
  );
};

export default Home;
