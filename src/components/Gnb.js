import React from "react";
import { CSSTransition } from 'react-transition-group';
import "../styles/gnb.scss";
import '../styles/style.css';
import point from "../img/img_happypoint_app.jpeg";
import best from "../img/img_monthly_fom_220729.png";

const Gnb = () => {
    
    const [showMessage, setShowMessage] = React.useState(false);

    const handleMouseOver = ()=>{
        setShowMessage(true);
      }
      const handleMouseOut = ()=>{
        setShowMessage(false);
      }
console.log(showMessage)
  return (
    <div className="gnb" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="menu">
            <div className="menu_list">
                <ul className="list">
                    <li><div className="login">login</div></li>
                    <li><span className="join">join</span></li>
                    <li>FLAVOR OF THE MONTH</li>
                    <li>MENU</li>
                    <li>영양 성분 및 알레르기</li>
                    <li>EVENT</li>
                    <li>STORE</li>
                    <li>ABOUT</li>
                </ul>
            </div>
        
        <CSSTransition in={showMessage}
      timeout={300}
      classNames="my-node"
      unmountOnExit
      
      >
        <div className="menu_wrap" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='menu_item' >
                
                <img className="point" src={point} />
                <img className="best" src={best} />
                
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
                <ul>
                    <li class="gnb_depth2">
                    <a href="/menu/nutrition_new.php?top=A">
                        <span>아이스크림</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/menu/nutrition_new.php?top=C">
                        <span>음료</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/menu/nutrition_new.php?top=D">
                        <span>커피</span>
                    </a>
                    </li>
                </ul>
                <ul>
                    <li class="gnb_depth2">
                    <a href="/event/list.php">
                        <span>진행중이벤트</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/event/winner.php">
                        <span>당첨자발표</span>
                    </a>
                    </li>
                </ul>
                <ul>
                    <li class="gnb_depth2">
                    <a href="/store/map.php">
                        <span>매장찾기</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/customer/ccm.php">
                        <span>고객센터</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/store/catering2.php">
                        <span>단체주문</span>
                    </a>
                    </li>
                </ul>
                <ul>
                    <li class="gnb_depth2">
                    <a href="/about/notice_list.php">
                        <span>공지사항</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/about/press_list.php">
                        <span>보도자료</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/about/jobs.php">
                        <span>채용정보</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/about/br_system.php">
                        <span>점포개설문의</span>
                    </a>
                    </li>
                    <li class="gnb_depth2">
                    <a href="/about/contact_us.php">
                        <span>Contact Us</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        </CSSTransition>
    </div>
    </div>
  );
};

export default Gnb;
