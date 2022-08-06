import React from 'react';
import '../styles/gnb.scss';
import point from '../img/img_happypoint_app.jpeg';
import best from '../img/img_monthly_fom_220729.png';
const Gnb = () => {
    return (
        <div className="gnb">
            <div className="menu">
                <div className="login">
                    <ul className="login_list">
                        <li>
                            <a>
                                <span>
                                login
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>
                                join
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu_list">
                    <ul className="list">
                        <li>
                            <a>
                                <span>
                            FLAVOR OF THE MONTH
                            </span>
                            </a>
                        </li>
                        <li>
                        <a>
                            <span>MENU</span>
                        </a>
                        </li>
                        <li>
                        <a><span>영양 성분 및 알레르기</span></a>
                        </li>
                        <li>
                        <a><span>EVENT</span></a>
                        </li>
                        <li>
                        <a><span>STORE</span></a>
                        </li>
                        <li>
                        <a><span>ABOUT</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu_item">
                <img src={point} />
                <img src={best} />
            </div>
        </div>
    );
};

export default Gnb;