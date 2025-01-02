import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function SocialProof() {
  return (
    <div className="bg-[#fbfbfa] py-10 md:py-[60px] md:px-10 lg:px-20 overflow-x-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <div className="flex gap-6 items-center md:gap-6 md:py-2 justify-center lg:py-4 lg:gap-10">
          <SwiperSlide>
            <img src="/social proof/image 17.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/social proof/image 3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/social proof/image 6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/social proof/image 4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/social proof/image 18.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/social proof/image 7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/social proof/image 8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/social proof/image 9.png" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default SocialProof;
