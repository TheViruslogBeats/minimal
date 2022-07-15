import React from "react";
import Draggable from "react-draggable";
import "./MainDraggablePage.scss";

interface Props {}

const MainDraggablePage = (props: Props) => {
  return (
    <Draggable
      axis="y"
      handle="a"
      positionOffset={{ x: "-0%", y: "-100%" }}
      bounds={{ top: 0, bottom: 340 }}
    >
      <div className="MainDraggablePage__Draggable">
        <div className="MainDraggablePage__Draggable2">
          <a className="MainDraggablePage__DragStick"></a>
        </div>
        <h1>Some</h1>
      </div>
    </Draggable>
  );
};

export default MainDraggablePage;
