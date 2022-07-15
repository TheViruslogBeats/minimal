import React from "react";
import Draggable from "react-draggable";
import "./MainDraggablePage.scss";

interface Props {}

const MainDraggablePage = (props: Props) => {
  return (
    <Draggable
      axis="y"
      handle="strong"
      positionOffset={{ x: "-0%", y: "-100%" }}
      bounds={{ top: 0, bottom: 340 }}
    >
      <div className="MainDraggablePage__Draggable no-cursor">
        <strong className="cursor pa-2">
          <p className="MainDraggablePage__DragStick"></p>
        </strong>
        <h1>Some Text</h1>
      </div>
    </Draggable>
  );
};

export default MainDraggablePage;
