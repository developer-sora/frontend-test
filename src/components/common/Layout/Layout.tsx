import Swiper from "swiper";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
