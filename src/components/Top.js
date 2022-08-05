import React from 'react';
import '../styles/header.scss';
import Facebook from '../img/icon_facebook.png';
import twitter from '../img/icon_twitter.png';
import blog from '../img/icon_blog.png';
import instagram from '../img/icon_instgram.png';
import youtube from '../img/icon_youtube.png';
import logo from '../img/logo_baskinrobbins.png';
import search from '../img/icon_search.png';

import Gnb from '../components/Gnb';
const Top = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="nav">
                    <a href="https://www.facebook.com/baskinrobbins.kr/" target="_blank">
                        <img src={Facebook} className="icon" />
                    </a>
                    <a href="https://twitter.com/BaskinrobbinsKR" target="_blank">
                        <img src={twitter} className="icon" />
                    </a>
                    <a href="http://blog.naver.com/brgirl31" target="_blank">
                        <img src={blog} className="icon" />
                    </a>
                    <a href="https://www.instagram.com/baskinrobbinskorea/" target="_blank">
                        <img src={instagram} className="icon" />
                    </a>
                    <a href="https://www.youtube.com/user/baskinrobbinskorea" target="_blank">
                        <img src={youtube} className="icon" />
                    </a>
                </nav>
                <div>
                    <img src={logo} className="logo" />
                </div>
                <nav className="contack">
                    <span>고객센터</span>
                    <span>CONTACKTUS</span>
                    <img src={search} className="icon" />
                </nav>
            </div>
            <Gnb />
        </div>
        
    );
};

export default Top;