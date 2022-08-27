import React from 'react';
import '../styles/event.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Event = () => {
    return (
        <div className="eventWrap">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="eventWarp"
      >
        <SwiperSlide>
            <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Event;