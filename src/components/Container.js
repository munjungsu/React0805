import React from 'react';
import '../styles/container.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Container = () => {
    
    
    return (
        <div>
     <Swiper modules={[Pagination, Navigation]}
     slidesPerView={1} navigation pagination={{clickable: true}}  className="main">
        <SwiperSlide>
            <div className="img01"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img02"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img03"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img04"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img05"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img06"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img07"></div>
        </SwiperSlide>
      </Swiper>
      <h3>brmenu</h3>
        </div>
    );
};

export default Container;