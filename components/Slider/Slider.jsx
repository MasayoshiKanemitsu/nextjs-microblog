"use client";

import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";

const Slider = ({ items }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ backgroundColor: item.bg, padding: "20px 10px" }}>{item.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
