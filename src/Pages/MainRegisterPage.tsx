import React from "react";
import { NavLink } from "react-router-dom";
import MainTopBarLeft from "../Layouts/Components/MainTopBarLeft";
import "./MainLoginPage.scss";

type Props = {};

const MainRegisterPage = (props: Props) => {
  return (
    <div className="MainLoginPage">
      <div className="MainLoginPage__Wrapper">
        <div className="MainLoginPage__TopFlexContainer">
          <MainTopBarLeft />
          <NavLink to="registration">Регистрация</NavLink>
        </div>
        <h2>Регистрация</h2>
        <div className="MainLoginPage__labelFlexContainer">
          <label className="MainLoginPage__Label">
            <span>Фамилия</span>
            <input placeholder="Иванов" type="text" />
          </label>
          <label className="MainLoginPage__Label">
            <span>Имя</span>
            <input placeholder="Иван" type="text" />
          </label>
        </div>
        <label className="MainLoginPage__Label">
          <span>Введите ваш email</span>
          <input placeholder="example@mail.ru" type="email" />
        </label>
        <label className="MainLoginPage__Label">
          <span>Введите ваш ник</span>
          <input placeholder="nickname" type="text" />
        </label>
        <label className="MainLoginPage__Label">
          <span>Введите ваш email</span>
          <input type="date" />
        </label>
        <label className="MainLoginPage__Label">
          <span>Введите ваш пароль</span>
          <input placeholder="Пароль" type="password" />
        </label>
        <div className="MainLoginPage__labelFlexContainer">
          <label className="MainLoginPage__Label">
            <span>Страна</span>
            <input placeholder="Россия" type="text" />
          </label>
          <label className="MainLoginPage__Label">
            <span>Город</span>
            <input placeholder="Москва" type="text" />
          </label>
        </div>
        <button>Войти</button>
      </div>
    </div>
  );
};

export default MainRegisterPage;
