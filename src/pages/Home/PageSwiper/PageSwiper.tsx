import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import React, { Suspense, lazy, useEffect, useRef } from "react";
import Loading from "@components/common/Loading/Loading";
import "./PageSwiper.scss";

const ChartPage = lazy(() => import("@pages/Home/Chart/ChartPage"));
const WhookPage = lazy(() => import("@pages/Home/Whook/WhookPage"));
const EventPage = lazy(() => import("@pages/Home/Event/EventPage"));
const NewsPage = lazy(() => import("@pages/Home/News/NewsPage"));
const StorePage = lazy(() => import("@pages/Home/Store/StorePage"));
const ChargePage = lazy(() => import("@pages/Home/Charge/ChargePage"));

const pages = [
  { path: "/chart", component: ChartPage },
  { path: "/whook", component: WhookPage },
  { path: "/event", component: EventPage },
  { path: "/news", component: NewsPage },
  { path: "/store", component: StorePage },
  { path: "/charge", component: ChargePage },
];

const routes = pages.map((page) => page.path);

const PageSwiper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperRef>(null);
  const currentIndex = routes.indexOf(location.pathname);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper.activeIndex !== currentIndex
    ) {
      swiperRef.current.swiper.slideTo(currentIndex);
    }
  }, [location, currentIndex]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const newIndex = swiper.activeIndex;
    navigate(routes[newIndex]);

    window.scrollTo(0, 0);
  };

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        initialSlide={currentIndex}
        onSlideChange={handleSlideChange}
      >
        {pages.map((page, index) => (
          <SwiperSlide key={page.path}>
            {index === currentIndex && (
              <Suspense fallback={<Loading />}>
                {React.createElement(page.component)}
              </Suspense>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PageSwiper;
