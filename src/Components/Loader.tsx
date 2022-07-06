import React from "react";
import "./Loader.scss";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="Center CenterAbsolute">
      <div className="Blackbackround"></div>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
