import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Banner from "./Banner";
import { BannerItem } from "@shared-types/banner";

interface BannerSwiperProps {
  banners: BannerItem[];
}

const BannerSwiper = ({ banners }: BannerSwiperProps) => {
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
        nested={true}
      >
        {banners.map((banner) => {
          return (
            <SwiperSlide key={banner.imgSrc}>
              <Banner {...banner} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
