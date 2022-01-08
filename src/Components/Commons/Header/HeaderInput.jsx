import React from "react";
import Context from "../../../Context";

const HeaderInput = () => {
  return (
    <input
      id="search-input"
      type="search"
      id="form1"
      className="form-control HeaderInputStyle"
      placeholder="جستجو در دیجی کالا ..."
      onChange={(event) => this.handleSearchInput(event.target.value)}
    />
  );
};

export default HeaderInput;
