import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./Banner.scss";
import Banner from "./Banner";

const BANNERS = [1, 2, 3];

const BannerSwiper = () => {
  return (
    <div className="banner-swiper">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {BANNERS.map((banner) => {
          return (
            <SwiperSlide key={banner}>
              <Banner />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
