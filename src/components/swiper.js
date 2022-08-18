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
      <div className="flex items-start justify-start w-full h-full max-w-[100%]">
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={45}
          className="w-full h-full overflow-hidden cursor-grab"
        >
          {views.map((item, i) => (
            <SwiperSlide
              key={i}
              className="w-[75%!important] [&:nth-child(1)]:ml-12 last:mr-12"
            >
              <div className="block relative pt-[55%] bg-[#edeceb] rounded-xl overflow-hidden">
                <Image
                  quality={100}
                  loading={"eager"}
                  layout="fill"
                  objectFit="cover"
                  src={item}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
