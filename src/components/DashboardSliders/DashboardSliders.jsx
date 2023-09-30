import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import DashbordSlider from "../DashbordSlider/DashbordSlider";

export default function DashboardSliders() {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="rtl-theme bg-second-bg-web-dark rounded-md p-5 text-main-gray-text-admin">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="py-5 text-xl w-full md:flex md:justify-between text-center px-5 border-b border-main-bg-web-dark mb-2">
            <h4>محبوب ترین آیتم ها</h4>
            <div className="hidden md:flex justify-center items-center gap-5">
              <div onClick={() => swiperRef.current.slideNext()} className="nextEl w-8 h-8 bg-main-red-admin rounded-md flex justify-center items-center text-3xl cursor-pointer">
                <i className='bx bxs-right-arrow-alt'></i>
              </div>
              <div onClick={() => swiperRef.current.slidePrev()} className="prevEl w-8 h-8 bg-main-red-admin rounded-md flex justify-center items-center text-3xl cursor-pointer">
                <i className='bx bxs-left-arrow-alt'></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            ref={swiperRef}
            // navigation={true}
            loop={true}
            navigation={{
              prevEl: ".prevEl",
              nextEl: ".nextEl",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            

            <SwiperSlide>
              <DashbordSlider></DashbordSlider>
            </SwiperSlide>
            <SwiperSlide>
              <DashbordSlider></DashbordSlider>
            </SwiperSlide>
            <SwiperSlide>
              <DashbordSlider></DashbordSlider>
            </SwiperSlide>
            <SwiperSlide>
              <DashbordSlider></DashbordSlider>
            </SwiperSlide>
            <SwiperSlide>
              <DashbordSlider></DashbordSlider>
            </SwiperSlide>
            <SwiperSlide>
              <DashbordSlider></DashbordSlider>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
