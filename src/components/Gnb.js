import React from 'react';
import '../styles/gnb.scss';
import point from '../img/img_happypoint_app.jpeg';
import best from '../img/img_monthly_fom_220729.png';
const Gnb = () => {
    return (
        <div className="gnb">
            <div className="menu">
                
            </div>
            <div className="menu_list">
                <img src={point} />
                <img src={best} />
            </div>
        </div>
    );
};

export default Gnb;