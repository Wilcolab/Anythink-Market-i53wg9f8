import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const onSearchChange = (e) => {
    if (e.target.value.length < 3) {
      return;
    }
    props.onSearchFilter(e.target.value, (page) => {
      agent.Items.byTitle(e.target.value);
      agent.Items.byTitle(e.target.value);
    });
  };
  const onClick = () => {
    setSearchVisible(true);
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part" onClick={onClick}>
            get
          </span>
          {searchVisible && (
            <form>
              <input
                id="search-box"
                type="text"
                placeholder="What is it that you truly desire?"
                style={{ width: "300px" }}
                onChange={onSearchChange}
              ></input>
            </form>
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
