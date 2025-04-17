import "./NavBar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const NAV_LIST = [
  "차트",
  "Whook",
  "이벤트",
  "뉴스",
  "스토어",
  "충전소",
] as const;

const NavBar = () => {
  return (
    <nav className="chart-nav">
      <ul className="nav-list">
        <Swiper slidesPerView="auto">
          {NAV_LIST.map((nav) => {
            return (
              <SwiperSlide key={nav}>
                <li className="nav-item">
                  <Link to="/chart">{nav}</Link>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ul>
    </nav>
  );
};

export default NavBar;
