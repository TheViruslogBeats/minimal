import React from 'react'
import * as Ai from "react-icons/ai";
import * as Bi from "react-icons/bi";
import * as Hi from "react-icons/hi";

type Props = {}

const MainModal = (props: Props) => {
  return (
    <div className="MainModal">
        <div className="MainModal__Slider">
          <img
            src="https://sun9-77.userapi.com/impg/khoROnXYg_DOMD8grXeYQfk8mh6w6Wy8j1vIEw/c2W60oL4yuc.jpg?size=700x256&quality=96&sign=d1b84e73db34c7882b0e264894712e7b&type=album"
            alt="slider"
          />
        </div>
        <div className="MainModal__Wrapper">
          <div className="MainModal__Info">
            <div className="MainModal__MainInfo">
              <div className="MainModal__Left">
                <p>Москва, район Дорогомилово</p>
                <p className="MainModal__Coordinates">
                  <Bi.BiUpload />
                  55.744935, 37.571261
                </p>
                <span>
                  <p>Тип отметки:</p>
                  <p>Ремонт</p>
                </span>
              </div>
              <div className="MainModal__Right">
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

            <div className="MainModal__Description">
              <p>Описание:</p>
              <p>Ведутся дорожные работы, переход временно закрыт.</p>
            </div>
          </div>
          <div className="MainModal__Buttons">
            <button>Отменить</button>
            <button>Одобрить</button>
          </div>
        </div>
      </div>
  )
}

export default MainModal