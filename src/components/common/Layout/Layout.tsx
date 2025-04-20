import NavBar from "@components/common/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "@components/common/Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
