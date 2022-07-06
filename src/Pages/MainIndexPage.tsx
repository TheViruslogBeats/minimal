import React from "react";
import "./MainIndexPage.scss";
import * as Ai from "react-icons/ai";
import * as Bi from "react-icons/bi";
import * as Hi from "react-icons/hi";

type Props = {};

const MainIndexPage = (props: Props) => {
  return (
    <div className="MainIndexPage">
      <div className="MainIndexPage__Slider">
        <img
          src="https://sun9-77.userapi.com/impg/khoROnXYg_DOMD8grXeYQfk8mh6w6Wy8j1vIEw/c2W60oL4yuc.jpg?size=700x256&quality=96&sign=d1b84e73db34c7882b0e264894712e7b&type=album"
          alt="slider"
        />
      </div>
      <div className="MainIndexPage__Wrapper">
        <div className="MainIndexPage__Info">
          <div className="MainIndexPage__MainInfo">
            <div className="MainIndexPage__Left">
              <p>Москва, район Дорогомилово</p>
              <p className="MainIndexPage__Coordinates">
                <Bi.BiUpload />
                55.744935, 37.571261
              </p>
              <span>
                <p>Тип отметки:</p>
                <p>Ремонт</p>
              </span>
            </div>
            <div className="MainIndexPage__Right">
              <span>
                <Hi.HiOutlineExclamation />
              </span>
              <p>her0ku</p>
              <span>
                <Ai.AiFillStar />
                <Ai.AiFillStar />
                <Ai.AiFillStar />
                <Ai.AiFillStar />
                <Ai.AiFillStar />
                <p>5.0</p>
              </span>
              {/* <Ai.AiOutlineStar/> Эта звезда другая */}
            </div>
          </div>

          <div className="MainIndexPage__Description">
            <p>Описание:</p>
            <p>Ведутся дорожные работы, переход временно закрыт.</p>
          </div>
        </div>
        <div className="MainIndexPage__Buttons">
          <button>Отменить</button>
          <button>Одобрить</button>
        </div>
      </div>
    </div>
  );
};

export default MainIndexPage;
