import React from 'react';
import '../styles/event.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';
import smart from '../img/stit_store.gif';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Event = () => {
    return (
        <div className="eventWrap">
            <h3>brmenu</h3>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination, Navigation]}
        className="eventWarp"
      >
        <SwiperSlide>
            <div className="event1"></div>
            <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event1"></div>
        <div className="smart">
                <a href="#"><img src={smart}></img></a>
                <p>해피오더 딜리버리로 간편하게 주문하세요!</p>
                <p><small>상시주문</small></p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Event;