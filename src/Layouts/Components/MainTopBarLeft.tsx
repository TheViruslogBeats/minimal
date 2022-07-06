import React from "react";
import "./MainTopBar.scss";
import StarSVG from "./StarSVG";

type Props = {};

const MainTopBarLeft = (props: Props) => {
  return (
    <div className="MainTopBar__Left">
      <StarSVG />
      <p>miniMal</p>
    </div>
  );
};

export default MainTopBarLeft;
