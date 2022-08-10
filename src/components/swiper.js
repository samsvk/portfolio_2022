import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import SwiperCore, { FreeMode } from "swiper";

SwiperCore.use([FreeMode]);

export const Swipe = ({ views }) => {
  return (
    <>
      <div className="flex items-start justify-start w-full h-full mr-[3rem]">
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={35}
          className="w-full h-full overflow-hidden cursor-grab"
        >
          {views.map((item, i) => (
            <SwiperSlide
              key={i}
              className="w-[80%!important] [&:nth-child(1)]:ml-[3rem] last:mr-[3rem]"
            >
              <div className="block relative pt-[56%]">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="https://i.imgur.com/JQ4oxAZ.png"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
