import React from "react";
import { NavLink } from "react-router-dom";
import MainTopBarLeft from "../Layouts/Components/MainTopBarLeft";
import "./MainLoginPage.scss";

type Props = {};

const MainLoginPage = (props: Props) => {
  return (
    <div className="MainLoginPage">
      <div className="MainLoginPage__Wrapper">
        <div className="MainLoginPage__TopFlexContainer">
          <MainTopBarLeft />
          <NavLink to="registration">Регистрация</NavLink>
        </div>
        <h1>Вход</h1>

        <label className="MainLoginPage__Label">
          <span>Введите ваш email</span>
          <input type="email" />
        </label>
        <label className="MainLoginPage__Label">
          <span>Введите ваш email</span>
          <input type="password" />
          <NavLink to="recovery">Forgot Password</NavLink>
        </label>
        
        <button>Войти</button>
      </div>
    </div>
  );
};

export default MainLoginPage;
