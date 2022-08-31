import React from 'react';
import '../styles/footer.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const Footer = () => {
    const options = [
        '배스킨 스쿨', 'SPC그룹사이트', 'SPC MAGAZINE', 'BR코리아', '해피포인트카드', '파스꾸찌', '삼립', '파리바게트', '던킨도너츠'
      ];
      const defaultOption = options[0];
    return (
        <div className="footer">
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                점포개설문의
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                채용문의
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                윤리신고센터
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                이용약관
                            </a>
                        </li>
                        <li className="import">
                            <a href="#">
                                개인정보처리방침
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                영상정보처리기기운영관리방침
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                안전보건 경영방침
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                거래희망회사 사전등록
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="brand_nav">
                <nav className="brand_icon">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="point"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="market"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="spc"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="notion"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="con"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="ksa"></span>
                            </a>
                        </li>
                        <li>
                        <Dropdown options={options} placeholder="베스킨라빈스 main" className="dropdown" />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Footer;