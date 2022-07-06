import React from "react";
import { Outlet } from "react-router-dom";
import MainTopBar from "./Components/MainTopBar";
import "./MainLayout.scss";
import { useLocation } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  const navigate = useLocation()
  console.log(navigate);
  
  return (
    <div className="App">
      {navigate.pathname === "/login" ? null : <MainTopBar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
