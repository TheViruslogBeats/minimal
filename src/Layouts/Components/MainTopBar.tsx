import React from "react";
import "./MainTopBar.scss";
import MainTopBarLeft from "./MainTopBarLeft";

type Props = {};

const MainTopBar = (props: Props) => {
  return (
    <div className="MainTopBar">
      <MainTopBarLeft/>
      <div className="MainTopBar__Center">
        <select>
          <option value="1">Россия</option>
        </select>
        <select>
          <option value="1">Москва</option>
        </select>
        <select>
          <option value="1">Поддержка</option>
        </select>
        <button>Применить</button>
      </div>
      <div className="MainTopBar__Right">
        <button>Выход</button>
      </div>
    </div>
  );
};

export default MainTopBar;
