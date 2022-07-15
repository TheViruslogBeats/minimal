import React from "react";
import "./MainChatPage.scss";

type Props = {};

const MainChatPage = (props: Props) => {
  return (
    <div className="MainChatPage">
      <div className="MainChatPage__AllChats">
        <label>Чаты</label>
        <ul className="MainChatPage_Chats">
          <li>
            
          </li>
        </ul>
      </div>
      <div className="MainChatPage__MainChat"></div>
    </div>
  );
};

export default MainChatPage;
