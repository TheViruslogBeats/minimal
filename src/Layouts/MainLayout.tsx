import React from "react";
import { Outlet } from "react-router-dom";
import MainTopBar from "./Components/MainTopBar";
import "./MainLayout.scss";
import { useLocation } from "react-router-dom";

type Props = {};

const hideTopbar: string[] = ["/login", "/register"]

const MainLayout = (props: Props) => {
  const navigate = useLocation()
  console.log(navigate);
  
  return (
    <div className="App">
      {hideTopbar.includes(navigate.pathname) ? null : <MainTopBar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
