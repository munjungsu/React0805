import React from "react";
import "../styles/gnb.scss";
import point from "../img/img_happypoint_app.jpeg";
import best from "../img/img_monthly_fom_220729.png";
const Gnb = () => {
  return (
    <div className="gnb">
      <div className="menu">
        <div className="login">
          <ul className="login_list">
            <li>
              <a>
                <span>login</span>
              </a>
            </li>
            <li>
              <a>
                <span>join</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="menu_list">
          <span>menu</span>
        </div>
      </div>
      <div className="menu_item">
        <div className="menu_img">
          <img src={point} />
          <img className="best" src={best} />
        </div>
        <div className="gnb_sub">
          <ul>
            <li>
              <a href="/menu/list.php?top=A">
                <span>아이스크림</span>
              </a>
            </li>
            <li>
              <a href="/menu/list.php?top=B">
                <span>아이스크림케이크</span>
              </a>
            </li>
            <li>
              <a href="/menu/list.php?top=C">
                <span>음료</span>
              </a>
            </li>
            <li>
              <a href="/menu/list.php?top=D">
                <span>커피</span>
              </a>
            </li>
            <li>
              <a href="/menu/list.php?top=E">
                <span>디저트</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gnb;
