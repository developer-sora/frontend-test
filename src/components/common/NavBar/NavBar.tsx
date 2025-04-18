import "./NavBar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "차트", path: "chart" },
  { label: "Whook", path: "whook" },
  { label: "이벤트", path: "event" },
  { label: "뉴스", path: "news" },
  { label: "스토어", path: "store" },
  { label: "충전소", path: "charge" },
] as const;

const NavBar = () => {
  return (
    <nav className="chart-nav">
      <ul className="nav-list">
        <Swiper slidesPerView="auto">
          {NAV_ITEMS.map(({ label, path }) => {
            return (
              <SwiperSlide key={path}>
                <li className="nav-item">
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {label}
                  </NavLink>
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
